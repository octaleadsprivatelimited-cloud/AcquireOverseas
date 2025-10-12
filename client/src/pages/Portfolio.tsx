import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const Portfolio: React.FC = () => {
  useEffect(() => {
    updatePageSEO(
      'Portfolio - GREAT Visa Network Success Stories',
      'View our portfolio of successful visa cases and immigration services. Thousands of satisfied clients across study visas, work permits, PR applications, and tourist visas.',
      [
        'visa consultants portfolio',
        'immigration success stories',
        'visa approval cases',
        'GREAT Visa Network portfolio',
        'successful visa applications',
        'visa services portfolio',
        'immigration consultants work',
        'visa success cases',
        'client success stories',
        'visa approval portfolio',
        'immigration services portfolio',
        'visa consultancy projects',
        'successful immigration cases',
        'visa consultants achievements'
      ]
    );
  }, []);

  const projects = [
    { title: 'Study Visa Approvals', description: 'Admissions and visas for top universities in Canada, UK, and Australia.', image: '/services/study_visa.jpg', stats: '1200+ approvals' },
    { title: 'Work Visa Placements', description: 'Skilled professionals placed in reputed companies across multiple countries.', image: '/services/word_visa.jpg', stats: '900+ placements' },
    { title: 'Tourist Visa Success', description: 'Quick turnaround for family trips and solo travellers worldwide.', image: '/services/tourist_visa.jpeg', stats: '2000+ trips' },
    { title: 'Family Reunification', description: 'Helping families reunite across borders with successful visa applications.', image: '/services/family_visa.jpg', stats: '800+ families' },
    { title: 'Business Visa Solutions', description: 'Enabling entrepreneurs and businesses to expand globally.', image: '/services/businessvisa.jpg', stats: '600+ businesses' },
    { title: 'Immigration Consultation', description: 'Expert guidance for permanent residency and citizenship pathways.', image: '/services/immigration.jpg', stats: '1500+ consultations' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">Our Portfolio</h1>
            <p className="text-lg text-gray-600">A snapshot of our recent successes across visas and immigration services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="h-44 bg-gray-100">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-600 mb-3">{p.description}</p>
                  <div className="flex items-center text-sm text-green-600"><CheckCircle size={16} className="mr-2" />{p.stats}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/contact" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">Start Your Case <ArrowRight size={16} className="ml-1" /></a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-sky-500 mb-4">
              Our Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Moments of success and happy clients
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { image: '/services/study_visa.jpg', title: 'Study Visa Success' },
              { image: '/services/word_visa.jpg', title: 'Work Visa Approval' },
              { image: '/services/tourist_visa.jpeg', title: 'Tourist Visa' },
              { image: '/services/family_visa.jpg', title: 'Family Reunion' },
              { image: '/services/businessvisa.jpg', title: 'Business Visa' },
              { image: '/services/immigration.jpg', title: 'Immigration Services' },
              { image: '/home/slider-1.jpg', title: 'Client Success' },
              { image: '/home/Silder-2.jpg', title: 'Visa Approval' },
              { image: '/home/slider-3.jpg', title: 'Happy Clients' },
              { image: '/services/benfits.jpeg', title: 'Our Benefits' },
              { image: '/services/study_visa.jpg', title: 'Education Journey' },
              { image: '/services/tourist_visa.jpeg', title: 'Travel Dreams' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;


