import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, ArrowRight, BookOpen, PenTool, Upload, Award } from 'lucide-react';

const ApplicationSupport: React.FC = () => {

  const features = [
    { icon: FileText, title: 'Application Review', description: 'Comprehensive review of your university applications to ensure accuracy and completeness' },
    { icon: PenTool, title: 'Essay Writing', description: 'Expert guidance and assistance with personal statements, essays, and letters of motivation' },
    { icon: BookOpen, title: 'Documentation', description: 'Complete support in preparing and organizing all required academic documents' },
    { icon: Upload, title: 'Submission Support', description: 'Assistance with application submission and tracking to ensure timely delivery' }
  ];

  const services = [
    'Personal statement and essay writing assistance',
    'Application form review and completion',
    'Academic transcript preparation and verification',
    'Letter of recommendation guidance',
    'Portfolio preparation (for creative programs)',
    'Application deadline tracking and reminders',
    'Multiple university application coordination',
    'Application fee payment assistance',
    'Follow-up and status monitoring',
    'Appeal and reapplication support'
  ];

  const processSteps = [
    { step: '01', title: 'Initial Consultation', description: 'Free assessment of your profile and application requirements' },
    { step: '02', title: 'Document Preparation', description: 'Help gather and prepare all necessary academic documents' },
    { step: '03', title: 'Application Writing', description: 'Expert assistance with essays, personal statements, and forms' },
    { step: '04', title: 'Review & Submission', description: 'Final review and submission of your completed applications' }
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
                <FileText size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Application Support</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Complete end-to-end support for your university application process. 
              We help you create compelling applications that stand out to admission committees.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Application Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide complete support throughout your university application journey, from document preparation to final submission.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Application Support Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer comprehensive application support services to help you create strong, compelling applications that maximize your chances of admission.
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
                  <Award size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">98% Success Rate</h3>
                <p className="text-gray-600">Our application support services have helped thousands of students get admitted to top universities</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Application Review</span>
                  <span className="font-semibold text-gray-900">Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Essay Assistance</span>
                  <span className="font-semibold text-gray-900">Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Document Support</span>
                  <span className="font-semibold text-gray-900">Complete</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Submission Tracking</span>
                  <span className="font-semibold text-gray-900">24/7</span>
                </div>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your applications are complete, compelling, and submitted on time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
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
              Ready to Start Your Application?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get professional assistance with your university applications and maximize your chances of admission.
            </p>
            
            <div className="flex flex-row gap-4 justify-center">
              <a
                href="/lets-start-your-journey"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Application Support
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

export default ApplicationSupport;

