import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Commitments from './components/Commitments';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Commitments />
      <Process />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
