import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Heart,
  Zap,
  Globe,
  Award
} from 'lucide-react';
const Careers: React.FC = () => {

  const jobOpenings = [
    {
      title: 'Senior Education Consultant',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Lead education consultancy cases and provide expert guidance to students.',
      requirements: ['Education degree preferred', '3+ years education consultancy experience', 'Strong communication skills'],
      benefits: ['Competitive salary', 'Health insurance', 'Professional development']
    },
    {
      title: 'University Application Specialist',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Handle university applications and documentation for various countries.',
      requirements: ['Bachelor\'s degree', 'Attention to detail', 'Multilingual preferred'],
      benefits: ['Flexible hours', 'Performance bonus', 'Career growth']
    },
    {
      title: 'Client Relations Manager',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Manage client relationships and ensure customer satisfaction.',
      requirements: ['Customer service experience', 'Problem-solving skills', 'Team player'],
      benefits: ['Commission structure', 'Team building events', 'Remote work options']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options to maintain a healthy work-life balance.'
    },
    {
      icon: Zap,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear career progression paths.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Help students achieve their dreams of studying at top universities abroad.'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance-based rewards and recognition for outstanding contributions.'
    }
  ];

  const values = [
    'Integrity and transparency in all our dealings',
    'Commitment to client success and satisfaction',
    'Continuous learning and professional development',
    'Teamwork and collaborative work environment',
    'Innovation in education consultancy solutions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <SEO
        title="Careers - Join Our Team at Acquire Overseas Education"
        description="Join Acquire Overseas Education team. We're looking for passionate professionals to help students achieve their study abroad dreams. Career opportunities in education consultancy, counseling, and support roles."
        keywords="careers education consultancy, jobs study abroad consultancy, education consultancy jobs Hyderabad, study abroad career opportunities, join education consultancy"
        canonicalUrl="https://acquireoverseas.in/build-your-career-with-us"
      />
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/home/slider-1.jpg"
            alt="Careers Background"
            className="w-full h-full object-cover object-top"
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build Your Career <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">With Us</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join our dynamic team and help students achieve their study abroad dreams while building your own successful career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform for growth, learning, and making a real difference in people's lives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and find the perfect role that matches your skills and aspirations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star size={16} className="text-amber-400 fill-current mr-1" />
                      <span>Featured</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>{job.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock size={16} className="mr-2" />
                    <span>{job.type} • {job.experience}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle size={14} className="text-blue-500 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    <span>Apply Now</span>
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating a workplace that reflects our core values and fosters growth for both our team and our clients.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://media.istockphoto.com/id/949182974/photo/male-manager-shaking-hands-with-female-applicant.jpg?s=612x612&w=0&k=20&c=QCjfJPKUckGpX9FdZU-8bw2szQuxa2_CPATyCBAazWM=)'
          }}
        >
          {/* Blue overlay for brand consistency */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-purple-900/90"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Team?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Don't see a position that fits? We're always looking for talented individuals. Send us your resume and let's start a conversation.
            </p>
            
            <div className="flex flex-row gap-2 md:gap-4 justify-center">
              <a
                href="/lets-start-your-journey"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-4 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Send Your Resume</span>
                <ArrowRight size={16} className="ml-1 md:ml-2 md:w-[18px] md:h-[18px]" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;