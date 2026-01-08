import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { FileText, CheckCircle, Users, Clock, Shield, ArrowRight } from 'lucide-react';
const DocumentAttestation: React.FC = () => {

  const features = [
    { icon: FileText, title: 'Document Verification', description: 'Professional verification and attestation of academic documents' },
    { icon: Shield, title: 'Embassy Services', description: 'Complete embassy and consulate attestation services' },
    { icon: Clock, title: 'Translation Services', description: 'Professional translation of academic documents' },
    { icon: Users, title: 'Express Processing', description: 'Fast-track processing for urgent application deadlines' }
  ];

  const services = [
    'Academic document verification and attestation',
    'Embassy and consulate services for study visas',
    'Translation and notarization of transcripts',
    'Apostille and legalization for university applications',
    'Express processing for application deadlines',
    'Document collection and delivery services'
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Document Attestation Services - Document Verification for Study Abroad"
        description="Professional document attestation services for study abroad including academic document verification, embassy attestation, translation services, and express processing. Expert document attestation from Acquire Overseas Education."
        keywords="document attestation study abroad, document verification abroad, embassy attestation, document attestation services Hyderabad, academic document attestation, study abroad document attestation"
        canonicalUrl="https://acquireoverseas.in/document-preparation-services"
      />
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
                <FileText size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Document Preparation Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Ensure your academic documents are properly prepared and authenticated for university applications. 
              We provide comprehensive document preparation and attestation services.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Document Preparation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive document preparation and attestation services to ensure your academic documents are ready for university applications.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Document Preparation Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer comprehensive document preparation and attestation services to help you prepare your academic documents for university applications.
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
                  <FileText size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">100% Success Rate</h3>
                <p className="text-gray-600">Our document attestation services have a perfect success rate</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Processing Time</span>
                  <span className="font-semibold text-gray-900">1-2 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Express Processing</span>
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
              Ready to Attest Your Documents?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get your documents properly attested and legalized for international use.
            </p>
            
            <div className="flex flex-row gap-4 justify-center">
              <a
                href="/lets-start-your-journey"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Start Attestation
                <ArrowRight size={20} className="ml-2" />
              </a>
              
              <a
                href="/comprehensive-education-solutions"
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

export default DocumentAttestation;
