import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, ArrowRight } from 'lucide-react';
const Sitemap: React.FC = () => {

  const sitemapLinks = [
    {
      category: 'Main Pages',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Your Trusted Education Partner', path: '/your-trusted-education-partner' },
        { name: 'Comprehensive Education Solutions', path: '/comprehensive-education-solutions' },
        { name: "Let's Start Your Journey", path: '/lets-start-your-journey' },
        { name: 'Our Portfolio', path: '/our-portfolio' },
        { name: 'Blog & Resources', path: '/blog-resources' },
        { name: 'Success Stories', path: '/success-stories' },
        { name: 'Frequently Asked Questions', path: '/frequently-asked-questions' },
        { name: 'Build Your Career With Us', path: '/build-your-career-with-us' }
      ]
    },
    {
      category: 'Study Abroad',
      links: [
        { name: 'Guide to Study Abroad', path: '/guide-to-study-abroad' },
        { name: 'Study Abroad Benefits', path: '/study-abroad-benefits' },
        { name: 'Guide for Parents', path: '/guide-for-parents' },
        { name: 'Cost to Study Abroad', path: '/cost-to-study-abroad' },
        { name: 'Scholarships to Study Abroad', path: '/scholarships-to-study-abroad' },
        { name: 'Studying Abroad FAQs', path: '/studying-abroad-faqs' }
      ]
    },
    {
      category: 'Education Services',
      links: [
        { name: 'Study Abroad Programs', path: '/study-abroad-programs' },
        { name: 'University Selection', path: '/university-selection' },
        { name: 'Course Selection', path: '/course-selection' },
        { name: 'Application Support', path: '/application-support' },
        { name: 'Student Visa Services', path: '/study-abroad-programs' },
        { name: 'Student Visa Extension Services', path: '/student-visa-extension-services' }
      ]
    },
    {
      category: 'Consultation Services',
      links: [
        { name: 'Education Consultation', path: '/education-consultation' },
        { name: 'Career Counseling Services', path: '/career-counseling-services' },
        { name: 'Academic Profile Assessment', path: '/academic-profile-assessment' },
        { name: 'Document Preparation Services', path: '/document-preparation-services' },
        { name: 'Pre-Departure Support', path: '/comprehensive-education-solutions' }
      ]
    },
    {
      category: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
        { name: 'Sitemap', path: '/sitemap' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://s15489.pcdn.co/wp-content/uploads/2016/12/What-is-an-Immigrant-Visa.jpg')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Globe size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sitemap</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Navigate through all pages of Acquire Overseas Education website
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapLinks.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">{section.category}</h2>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="flex items-center text-gray-600 hover:text-primary-600 transition-colors group"
                      >
                        <ArrowRight size={16} className="mr-2 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
