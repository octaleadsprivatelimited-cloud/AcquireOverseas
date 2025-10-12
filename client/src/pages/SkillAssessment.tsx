import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Users, Clock, Shield, ArrowRight } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const SkillAssessment: React.FC = () => {
  useEffect(() => {
    updatePageSEO(
      'Skill Assessment Services for PR - Migration Skills Evaluation',
      'Professional skill assessment services for Australia, Canada PR applications. Expert assistance with qualification recognition, competency assessment, and skills evaluation for immigration.',
      [
        'skill assessment services',
        'skills assessment for PR',
        'Australia skill assessment',
        'Canada skill assessment',
        'migration skills evaluation',
        'professional skill assessment',
        'qualification recognition services',
        'competency assessment services',
        'skills assessment Hyderabad',
        'PR skill assessment',
        'immigration skill assessment',
        'qualification evaluation',
        'professional skills evaluation',
        'trade assessment services',
        'skills recognition services',
        'CDR writing services',
        'RPL assessment',
        'skill assessment consultants',
        'points test assessment'
      ]
    );
  }, []);

  const features = [
    { icon: Award, title: 'Professional Evaluation', description: 'Comprehensive assessment of your skills and qualifications' },
    { icon: Users, title: 'Qualification Recognition', description: 'Get your qualifications recognized internationally' },
    { icon: Shield, title: 'Competency Assessment', description: 'Professional competency evaluation and certification' },
    { icon: Clock, title: 'Career Guidance', description: 'Expert advice on career pathways and opportunities' }
  ];

  const services = [
    'Professional skill evaluation',
    'Qualification recognition services',
    'Competency assessment preparation',
    'Certification and licensing support',
    'Career pathway guidance',
    'Document verification and attestation'
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
                <Award size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Skill Assessment Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Get your professional skills recognized and assessed for international opportunities. 
              We help you showcase your expertise to potential employers worldwide.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Skill Assessment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive skill assessment services to help you validate your qualifications for international opportunities.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Assessment Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer comprehensive skill assessment services to help you validate your qualifications and advance your career.
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
                <p className="text-gray-600">Our skill assessments have an excellent success rate</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Assessment Duration</span>
                  <span className="font-semibold text-gray-900">2-3 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Success Rate</span>
                  <span className="font-semibold text-gray-900">96%</span>
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
              Ready to Validate Your Skills?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get your professional skills assessed and recognized for international opportunities.
            </p>
            
            <div className="flex flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Start Assessment
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

export default SkillAssessment;
