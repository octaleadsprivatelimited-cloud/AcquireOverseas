import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Shield } from 'lucide-react';
const PrivacyPolicy: React.FC = () => {

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy - Data Protection and Privacy"
        description="Privacy policy of Acquire Overseas Education. Learn how we collect, use, and protect your personal information in compliance with data protection regulations."
        keywords="privacy policy, data protection, privacy policy study abroad consultancy"
        canonicalUrl="https://acquireoverseas.in/privacy-policy"
        noindex={true}
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
                <Shield size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 prose prose-lg">
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including personal information such as your name, email address, phone number, and other contact details when you use our services or contact us.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, process university applications, communicate with you, and comply with legal obligations.</p>

            <h2>3. Information Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information with third parties only as described in this policy or with your consent.</p>

            <h2>4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2>5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data.</p>

            <h2>6. Cookies</h2>
            <p>We use cookies and similar technologies to enhance your experience on our website and analyze usage patterns.</p>

            <h2>7. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about this privacy policy, please contact us at <a href="mailto:info@acquireoverseas.in" className="text-blue-600 hover:underline">info@acquireoverseas.in</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
