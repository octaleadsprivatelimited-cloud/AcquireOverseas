import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { getBlogPostBySlug, getRelatedPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    if (post) {
      // Scroll to top
      window.scrollTo(0, 0);
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id);
  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={post.title}
        description={post.excerpt || post.content.substring(0, 160)}
        keywords={post.tags.join(', ')}
        canonicalUrl={`https://acquireoverseas.in/blog/${post.slug}`}
      />
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-semibold mb-4">
                {post.category}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-64 md:h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                >
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </motion.article>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-gray-200"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag size={18} className="text-gray-600" />
                    {post.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Share */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-8 p-6 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-700 font-semibold">
                      <Share2 size={20} />
                      <span>Share this article</span>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleShare('facebook')}
                        className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition shadow-sm"
                        aria-label="Share on Facebook"
                      >
                        <Facebook size={18} />
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-sky-500 hover:bg-sky-500 hover:text-white transition shadow-sm"
                        aria-label="Share on Twitter"
                      >
                        <Twitter size={18} />
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition shadow-sm"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-24 space-y-6">
                  {/* CTA Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white"
                  >
                    <h3 className="text-xl font-bold mb-3">Need Expert Guidance?</h3>
                    <p className="text-white/90 mb-4 text-sm">
                      Get personalized consultation for your study abroad journey.
                    </p>
                    <Link
                      to="/lets-start-your-journey"
                      className="block w-full bg-white text-indigo-600 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition text-center"
                    >
                      Contact Us
                    </Link>
                  </motion.div>

                  {/* Categories */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-gray-50 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                    <div className="space-y-2">
                      {['Study Abroad', 'Study Visa', 'University Selection', 'Application Tips'].map((cat, idx) => (
                        <Link
                          key={idx}
                          to="/blog"
                          className="block text-gray-700 hover:text-indigo-600 transition text-sm"
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </aside>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 pt-16 border-t border-gray-200"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                          />
                        </div>
                        <div className="p-5">
                          <div className="text-xs text-indigo-600 font-semibold mb-2">{relatedPost.category}</div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3">{relatedPost.excerpt}</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock size={14} className="mr-1" />
                            {relatedPost.readTime}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;

