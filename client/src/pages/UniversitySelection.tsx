import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle, Users, Target, ArrowRight, Award, Globe, TrendingUp, MapPin, Star } from 'lucide-react';

const UniversitySelection: React.FC = () => {

  const features = [
    { icon: Target, title: 'Course Matching', description: 'Match universities with courses that align with your academic background and career goals' },
    { icon: TrendingUp, title: 'Ranking Analysis', description: 'Comprehensive analysis of university rankings, reputation, and academic excellence' },
    { icon: CheckCircle, title: 'Admission Requirements', description: 'Detailed review of admission criteria, prerequisites, and eligibility requirements' },
    { icon: Users, title: 'Career Guidance', description: 'Expert guidance on how university choice impacts your future career opportunities' }
  ];

  const services = [
    'Academic profile evaluation and matching',
    'University ranking and reputation analysis',
    'Course and program availability research',
    'Admission requirements and eligibility assessment',
    'Tuition fees and scholarship opportunities analysis',
    'Campus facilities and student life information',
    'Location and living cost considerations',
    'Graduate employment and career prospects research',
    'Multiple university comparison and shortlisting',
    'Personalized university recommendations'
  ];

  const processSteps = [
    { step: '01', title: 'Profile Assessment', description: 'Evaluate your academic background and preferences' },
    { step: '02', title: 'University Research', description: 'Research and identify suitable universities worldwide' },
    { step: '03', title: 'Comparison & Analysis', description: 'Compare universities, programs, and opportunities' },
    { step: '04', title: 'Final Selection', description: 'Make an informed decision on the best university for you' }
  ];

  const popularDestinations = [
    { country: 'Canada', universities: '100+', topRanked: ['University of Toronto', 'McGill University', 'University of British Columbia'], flag: '🇨🇦' },
    { country: 'United States', universities: '500+', topRanked: ['Harvard University', 'MIT', 'Stanford University'], flag: '🇺🇸' },
    { country: 'United Kingdom', universities: '150+', topRanked: ['Oxford University', 'Cambridge University', 'Imperial College'], flag: '🇬🇧' },
    { country: 'Australia', universities: '80+', topRanked: ['University of Melbourne', 'ANU', 'University of Sydney'], flag: '🇦🇺' }
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
                <Building2 size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">University Selection</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Find the perfect university that matches your academic goals and career aspirations. 
              We help you make informed decisions for your educational journey.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Expert University Selection Guidance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive university selection services to help you choose the perfect institution that aligns with your academic profile and career goals.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our University Selection Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer comprehensive university selection services to help you find the perfect institution for your academic and career goals.
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
                <p className="text-gray-600">Our university selection guidance has helped thousands of students find their perfect match</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Profile Matching</span>
                  <span className="font-semibold text-gray-900">Accurate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">University Research</span>
                  <span className="font-semibold text-gray-900">Comprehensive</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Comparison Analysis</span>
                  <span className="font-semibold text-gray-900">Detailed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Ongoing Support</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Selection Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to help you choose the perfect university for your future.
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Popular Study Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore top universities in popular study destinations we help students select.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map((destination, index) => (
              <motion.div
                key={destination.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{destination.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{destination.country}</h3>
                    <p className="text-sm text-gray-600">{destination.universities} Universities</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Top Ranked:</p>
                  {destination.topRanked.map((university, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Star size={14} className="text-amber-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{university}</span>
                    </div>
                  ))}
                </div>
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
              Ready to Find Your Perfect University?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get expert guidance on selecting the perfect university that matches your academic profile and career aspirations.
            </p>
            
            <div className="flex flex-row gap-4 justify-center">
              <a
                href="/lets-start-your-journey"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get University Guidance
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

export default UniversitySelection;

