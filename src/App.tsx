import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { auth } from './firebase/firebaseConfig.js';
import { auth } from './firebase/firebaseConfig';
import { onAuthStateChanged, User } from 'firebase/auth';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Commitments from './components/Commitments';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './admin/Login'
import BlogDashboard from './admin/blogDashboard';
import CreateBlog from './admin/CreateBlog';
import EditBlog from './admin/EditBlog';
import ReadBlogs from './components/ReadBlogs';
import BlogDetail from './components/BlogDetail';

function AdminRedirect() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
  }

  return user ? <Navigate to="/admin/dashboard" replace /> : <Navigate to="/admin/login" replace />;
}


function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Commitments />
      <Process />
      <Gallery />
      <Contact />
      <Footer />
      {/* <ReadBlogs /> */}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminRedirect />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/dashboard" element={<BlogDashboard />} />
      <Route path="/admin/dashboard/create-blog" element={<CreateBlog />} />
      <Route path="/admin/dashboard/edit-blog/:id" element={<EditBlog />} />
      <Route path="/blogs" element={<ReadBlogs />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />

    </Routes>
  );
}

export default App;
