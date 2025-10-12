import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Users, Clock, Shield, ArrowRight } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const JobPlacement: React.FC = () => {
  useEffect(() => {
    updatePageSEO(
      'Job Placement Services Abroad - Overseas Employment',
      'Professional job placement services for international employment. Find jobs abroad with our expert assistance for UK, Canada, Australia, USA, Europe, and Middle East.',
      [
        'job placement services abroad',
        'overseas job placement Hyderabad',
        'international job consultants',
        'foreign job placement',
        'overseas employment services',
        'job placement consultants',
        'abroad job opportunities',
        'international recruitment services',
        'overseas job consultancy',
        'job placement for UK',
        'Canada job placement',
        'Australia job placement',
        'Middle East job placement',
        'Europe job consultants',
        'overseas career services',
        'international job assistance',
        'work abroad job placement',
        'global job opportunities',
        'job placement Hyderabad'
      ]
    );
  }, []);

  const features = [
    { icon: Briefcase, title: 'Job Matching', description: 'Connect with top employers worldwide' },
    { icon: Users, title: 'Career Guidance', description: 'Professional career counseling and advice' },
    { icon: Shield, title: 'Interview Preparation', description: 'Comprehensive interview training and support' },
    { icon: Clock, title: 'Relocation Support', description: 'Complete assistance for your move abroad' }
  ];

  const services = [
    'Job search and placement assistance',
    'Resume and cover letter optimization',
    'Interview preparation and coaching',
    'Salary negotiation support',
    'Relocation planning and assistance',
    'Post-placement follow-up and support'
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
                <Briefcase size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Job Placement Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Find your dream job abroad with our comprehensive recruitment and job placement services. 
              We connect talented professionals with top employers worldwide.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Job Placement Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end job placement services to help you secure your ideal position abroad.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Job Placement Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer comprehensive job placement services to help you find the right opportunity abroad.
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
                  <Briefcase size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2000+ Placements</h3>
                <p className="text-gray-600">Successfully placed professionals in top companies</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Placement Time</span>
                  <span className="font-semibold text-gray-900">4-8 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Success Rate</span>
                  <span className="font-semibold text-gray-900">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Partner Companies</span>
                  <span className="font-semibold text-gray-900">500+</span>
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
              Ready to Find Your Dream Job Abroad?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get started with our job placement services and take the first step towards your international career.
            </p>
            
            <div className="flex flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Started
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

export default JobPlacement;
