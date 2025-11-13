import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Users, Target, ArrowRight, Award, TrendingUp, Briefcase } from 'lucide-react';

const CourseSelection: React.FC = () => {

  const features = [
    { icon: Target, title: 'Career Assessment', description: 'Comprehensive evaluation of your interests, skills, and career aspirations to identify the best course match' },
    { icon: BookOpen, title: 'Course Matching', description: 'Expert matching of courses with your academic background and career goals' },
    { icon: TrendingUp, title: 'Industry Trends', description: 'Analysis of current industry trends and future job market prospects' },
    { icon: Briefcase, title: 'Future Prospects', description: 'Guidance on career opportunities and growth potential for different courses' }
  ];

  const services = [
    'Career interest and aptitude assessment',
    'Course and program matching based on academic profile',
    'Industry trend analysis and job market research',
    'University and course ranking comparison',
    'Prerequisite and eligibility verification',
    'Course duration and structure analysis',
    'Career pathway planning and guidance',
    'Salary and employment prospects research',
    'Multiple course option comparison',
    'Post-graduation career support planning'
  ];

  const processSteps = [
    { step: '01', title: 'Career Assessment', description: 'Evaluate your interests, skills, and career goals' },
    { step: '02', title: 'Course Research', description: 'Research and identify suitable courses matching your profile' },
    { step: '03', title: 'Comparison & Analysis', description: 'Compare courses, universities, and career prospects' },
    { step: '04', title: 'Final Selection', description: 'Make an informed decision on the best course for you' }
  ];

  const popularFields = [
    { field: 'Engineering & Technology', courses: ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering'] },
    { field: 'Business & Management', courses: ['MBA', 'Business Administration', 'Finance', 'Marketing'] },
    { field: 'Healthcare & Medicine', courses: ['Medicine', 'Nursing', 'Public Health', 'Pharmacy'] },
    { field: 'Arts & Humanities', courses: ['Literature', 'History', 'Philosophy', 'Fine Arts'] }
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
                <BookOpen size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Course Selection</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Get expert guidance on choosing the right course that aligns with your career goals. 
              We help you make informed decisions for a successful future.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Expert Course Selection Guidance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive course selection services to help you choose the perfect program that matches your academic background and career aspirations.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Course Selection Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer comprehensive course selection services to help you make the right choice for your academic and career future.
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
                <p className="text-gray-600">Our course selection guidance has helped thousands of students choose the right path</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Career Assessment</span>
                  <span className="font-semibold text-gray-900">Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Course Matching</span>
                  <span className="font-semibold text-gray-900">Complete</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Industry Analysis</span>
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
              We follow a systematic approach to help you choose the perfect course for your future.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Popular Course Fields</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore popular course fields and programs we help students select.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularFields.map((field, index) => (
              <motion.div
                key={field.field}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{field.field}</h3>
                <ul className="space-y-2">
                  {field.courses.map((course, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{course}</span>
                    </li>
                  ))}
                </ul>
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
              Ready to Choose Your Course?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get expert guidance on selecting the perfect course that aligns with your career goals and academic background.
            </p>
            
            <div className="flex flex-row gap-4 justify-center">
              <a
                href="/lets-start-your-journey"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Course Guidance
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

export default CourseSelection;

