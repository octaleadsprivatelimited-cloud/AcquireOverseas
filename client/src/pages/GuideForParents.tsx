import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Users,
  BookOpen,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GuideForParents: React.FC = () => {
  const concerns = [
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Your child\'s safety is our top priority.',
      points: [
        'Campus security measures',
        'Health insurance coverage',
        'Emergency support services',
        '24/7 assistance available'
      ]
    },
    {
      icon: BookOpen,
      title: 'Academic Support',
      description: 'Comprehensive support for academic success.',
      points: [
        'Tutoring and study assistance',
        'Career counseling services',
        'Academic advisors',
        'Library and research resources'
      ]
    },
    {
      icon: Users,
      title: 'Financial Planning',
      description: 'Transparent information about costs and funding.',
      points: [
        'Tuition fee breakdown',
        'Scholarship opportunities',
        'Financial aid guidance',
        'Budget planning assistance'
      ]
    },
    {
      icon: Heart,
      title: 'Emotional Support',
      description: 'Support systems for your child\'s wellbeing.',
      points: [
        'Counseling services',
        'Cultural integration support',
        'Student communities',
        'Family communication channels'
      ]
    }
  ];

  const steps = [
    {
      title: 'Research & Planning',
      description: 'Help your child research universities and programs together.',
      tips: ['Visit university websites', 'Attend education fairs', 'Compare programs and costs']
    },
    {
      title: 'Application Process',
      description: 'Guide them through the application requirements.',
      tips: ['Gather required documents', 'Prepare application essays', 'Meet application deadlines']
    },
    {
      title: 'Financial Preparation',
      description: 'Plan for tuition, living expenses, and other costs.',
      tips: ['Explore scholarship options', 'Consider education loans', 'Plan for currency exchange']
    },
    {
      title: 'Pre-Departure',
      description: 'Prepare for the journey ahead.',
      tips: ['Arrange accommodation', 'Purchase health insurance', 'Attend orientation sessions']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              <Heart className="w-4 h-4 mr-2" />
              For Parents
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Guide for Parents
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Supporting your child's study abroad journey with confidence and peace of mind
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Support Makes All The Difference
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              As a parent, you play a crucial role in your child's study abroad journey. 
              This guide will help you understand the process, address your concerns, and 
              support your child through every step of their educational adventure.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're here to help both you and your child navigate this exciting journey with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Parent Concerns */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Parent Concerns
            </h2>
            <p className="text-lg text-gray-600">
              We address the most important questions parents have
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {concerns.map((concern, index) => (
              <motion.div
                key={concern.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center mb-4">
                  <concern.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {concern.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {concern.description}
                </p>
                <ul className="space-y-2">
                  {concern.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How You Can Help
            </h2>
            <p className="text-lg text-gray-600">
              Practical steps to support your child's journey
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:flex items-center gap-8`}
              >
                <div className="flex-1 bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-lg">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="text-indigo-600 font-semibold text-sm">{idx + 1}</span>
                        </div>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have Questions? We're Here to Help
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our team is ready to address all your concerns and provide guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/lets-start-your-journey"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-purple-900 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="tel:+919515612909"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                <Phone className="mr-2" size={20} />
                <span>Call Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GuideForParents;

