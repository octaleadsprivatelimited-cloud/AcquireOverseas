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
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Careers', path: '/careers' }
      ]
    },
    {
      category: 'Visa Services',
      links: [
        { name: 'Study Visa', path: '/study-visa' },
        { name: 'Work Visa', path: '/work-visa' },
        { name: 'Tourist Visa', path: '/tourist-visa' },
        { name: 'Family Visa', path: '/family-visa' },
        { name: 'Business Visa', path: '/business-visa' }
      ]
    },
    {
      category: 'Immigration Services',
      links: [
        { name: 'Immigration Consultation', path: '/immigration-consultation' },
        { name: 'Job Placement', path: '/job-placement' },
        { name: 'Skill Assessment', path: '/skill-assessment' },
        { name: 'Document Attestation', path: '/document-attestation' },
        { name: 'Visa Extension', path: '/visa-extension' },
        { name: 'Skilled Migration', path: '/skilled-migration' }
      ]
    },
    {
      category: 'UK Visa Services',
      links: [
        { name: 'UK Visitor Visa Consultants', path: '/uk-visitor-visa-consultants' },
        { name: 'UK Healthcare Professionals Work Visa', path: '/uk-health-care-professionals-work-visa' },
        { name: 'UK IT Professionals Visa Consultancy', path: '/uk-it-professionals-visa-consultancy' },
        { name: 'UK Skilled Worker Visa Consultants in Hyderabad', path: '/uk-skilled-worker-visa-consultants-in-hyderabad' },
        { name: 'Tier 2 Work Visa for UK', path: '/tier-2-work-visa-for-uk' },
        { name: 'UK Healthcare Worker Visa Consultants', path: '/uk-healthcare-worker-visa-consultants' },
        { name: 'UK Tier 2 Visa Consultants in Hyderabad', path: '/uk-tier-2-visa-consultants-in-hyderabad' },
        { name: 'UK Skilled Work Visa Consultancy', path: '/uk-skilled-work-visa-consultancy' }
      ]
    },
    {
      category: 'Other Countries',
      links: [
        { name: 'Student Visa Consultants in Hyderabad', path: '/student-visa-consultants-in-hyderabad' },
        { name: 'Ireland IT Professional Work Visa Consultancy', path: '/best-ireland-it-professional-work-visa-consultancy' },
        { name: 'Ireland Healthcare Work Visa Consultancy', path: '/best-ireland-health-care-work-visa-consultancy' },
        { name: 'Netherlands Skilled Worker Visa', path: '/netherlands-skilled-worker-visa' },
        { name: 'Albania Work Visa', path: '/albania-work-visa' }
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
              Navigate through all pages of GREAT Visa Network website
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
