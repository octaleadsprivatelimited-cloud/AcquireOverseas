import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    updatePageSEO(
      'Terms of Service - GREAT Visa Network',
      'Read the terms of service for using GREAT Visa Network visa and immigration consultancy services. Understand our policies, responsibilities, and client agreements.',
      [
        'GREAT Visa Network terms of service',
        'visa consultants terms',
        'immigration services terms',
        'visa consultancy agreement',
        'service terms and conditions',
        'visa services policy',
        'client agreement terms'
      ]
    );
  }, []);

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
                <FileText size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 prose prose-lg">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using GREAT Visa Network's services, you accept and agree to be bound by these Terms of Service.</p>

            <h2>2. Services</h2>
            <p>We provide visa and immigration consultation services. Our services include visa application support, document preparation, and immigration advice.</p>

            <h2>3. User Responsibilities</h2>
            <p>You agree to provide accurate and complete information and to comply with all applicable laws and regulations.</p>

            <h2>4. Fees and Payment</h2>
            <p>You agree to pay all fees for services as outlined in our service agreements. All fees are non-refundable unless otherwise stated.</p>

            <h2>5. Intellectual Property</h2>
            <p>All content on our website is the property of GREAT Visa Network and is protected by copyright and other intellectual property laws.</p>

            <h2>6. Limitation of Liability</h2>
            <p>We are not liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</p>

            <h2>7. Disclaimer</h2>
            <p>While we strive for success, we cannot guarantee visa approval as final decisions are made by immigration authorities.</p>

            <h2>8. Termination</h2>
            <p>We reserve the right to terminate or suspend access to our services at our discretion.</p>

            <h2>9. Changes to Terms</h2>
            <p>We may modify these terms at any time. Continued use of our services constitutes acceptance of modified terms.</p>

            <h2>10. Contact</h2>
            <p>For questions about these terms, contact us at info@greatvisanetwork.com.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
