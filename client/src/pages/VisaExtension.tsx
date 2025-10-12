import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, Users, Shield, ArrowRight } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const VisaExtension: React.FC = () => {
  useEffect(() => {
    updatePageSEO(
      'Visa Extension Services - Visa Renewal Consultants',
      'Professional visa extension and renewal services. Expert assistance for extending your visa stay, status change, and visa renewal applications for all countries.',
      [
        'visa extension services',
        'visa renewal consultants',
        'visa extension Hyderabad',
        'tourist visa extension',
        'work visa extension',
        'student visa extension',
        'visa status change',
        'visa renewal services',
        'extend visa stay',
        'visa reapplication services',
        'visa extension consultants',
        'UK visa extension',
        'USA visa extension',
        'Australia visa extension',
        'Canada visa extension',
        'visa extension assistance',
        'visa renewal help',
        'immigration status change',
        'visa extension application'
      ]
    );
  }, []);

  const features = [
    { icon: Clock, title: 'Visa Extension', description: 'Extend your stay legally with our visa extension services' },
    { icon: Users, title: 'Status Change', description: 'Change your visa status to a different category' },
    { icon: Shield, title: 'Renewal Support', description: 'Complete assistance with visa renewal and reapplication' },
    { icon: CheckCircle, title: 'Compliance Guidance', description: 'Expert guidance on immigration compliance and legal requirements' }
  ];

  const services = [
    'Visa extension applications',
    'Status change assistance',
    'Renewal and reapplication support',
    'Compliance and legal guidance',
    'Emergency processing options',
    'Document preparation and submission'
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
                <Clock size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Visa Extension Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Extend your stay legally with our visa extension and renewal services. 
              We help you maintain your legal status and continue your journey abroad.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Visa Extension Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive visa extension and renewal services to help you maintain your legal status abroad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Extension Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer comprehensive visa extension and renewal services to help you maintain your legal status abroad.
              </p>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">98% Success Rate</h3>
                <p className="text-gray-600">Our visa extension applications have an excellent success rate</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Processing Time</span>
                  <span className="font-semibold text-gray-900">1-3 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Emergency Processing</span>
                  <span className="font-semibold text-gray-900">Available</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Support</span>
                  <span className="font-semibold text-gray-900">24/7</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Extend Your Visa?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get professional assistance with your visa extension and maintain your legal status abroad.
            </p>
            
            <div className="flex flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Start Extension Process
                <ArrowRight size={20} className="ml-2" />
              </a>
              
              <a
                href="/services"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VisaExtension;
