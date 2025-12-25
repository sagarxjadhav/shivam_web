import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogById } from '../firebase/firebaseCURD';
import { ArrowLeft, FileText, Loader2, Calendar } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError('');
      const blogData = await getBlogById(id);
      if (blogData) {
        setBlog(blogData);
      } else {
        setError('Blog not found');
      }
    } catch (error) {
      console.error('Error fetching blog: ', error);
      setError('Error loading blog. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/blogs');
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <section className="min-h-screen bg-white dark:bg-gray-900 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <Loader2 className="w-12 h-12 text-blue-600 dark:text-blue-400 animate-spin mx-auto mb-4" />
                <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">Loading blog...</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  if (error || !blog) {
    return (
      <>
        <Navigation />
        <section className="min-h-screen bg-white dark:bg-gray-900 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blogs</span>
            </button>
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-2xl p-12 text-center">
              <h2 className="text-2xl font-bold text-red-900 dark:text-red-400 mb-2">
                {error || 'Blog not found'}
              </h2>
              <p className="text-red-700 dark:text-red-300 mb-6">
                The blog you're looking for doesn't exist or has been removed.
              </p>
              <button
                onClick={handleBack}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Go Back to Blogs
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <section className="min-h-screen bg-white dark:bg-gray-900 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blogs</span>
          </button>

          {/* Blog Content */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {blog.title || 'Untitled'}
                  </h1>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {blog.createdAt
                          ? new Date(blog.createdAt.seconds * 1000).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })
                          : 'Published'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>Blog Post</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600"></div>
            </div>

            {/* Images Section - Show after title */}
            {blog.images && blog.images.length > 0 && (
              <div className="px-6 sm:px-8 lg:px-10 py-6 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {blog.images.map((imageUrl: string, index: number) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={`${blog.title || 'Blog'} - Image ${index + 1}`}
                        className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap text-base sm:text-lg">
                  {blog.content || 'No content available'}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 lg:px-10 py-6 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-600">
              <button
                onClick={handleBack}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to All Blogs</span>
              </button>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BlogDetail;

