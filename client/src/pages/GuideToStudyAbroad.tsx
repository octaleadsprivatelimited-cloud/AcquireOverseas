import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  BookOpen, 
  CheckCircle, 
  Globe,
  Users,
  ArrowRight,
  GraduationCap,
  FileText,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GuideToStudyAbroad: React.FC = () => {
  const steps = [
    {
      icon: Target,
      title: 'Define Your Goals',
      description: 'Identify your academic and career objectives to choose the right destination and program.',
      details: ['Research career prospects', 'Set academic goals', 'Consider long-term plans']
    },
    {
      icon: GraduationCap,
      title: 'Research Universities',
      description: 'Explore universities that match your academic profile and career aspirations.',
      details: ['Check university rankings', 'Review program curriculum', 'Evaluate admission requirements']
    },
    {
      icon: FileText,
      title: 'Prepare Application',
      description: 'Gather all required documents and submit a compelling application.',
      details: ['Academic transcripts', 'Language proficiency tests', 'Letters of recommendation', 'Personal statement']
    },
    {
      icon: Globe,
      title: 'Apply for Visa',
      description: 'Navigate the visa application process with expert guidance.',
      details: ['Complete visa application', 'Attend visa interview', 'Prepare financial documents']
    },
    {
      icon: Users,
      title: 'Pre-Departure',
      description: 'Prepare for your journey abroad with comprehensive support.',
      details: ['Accommodation arrangements', 'Travel documentation', 'Health insurance', 'Cultural orientation']
    }
  ];

  const countries = [
    { name: 'USA', benefits: ['Top-ranked universities', 'Diverse programs', 'Strong job market'] },
    { name: 'UK', benefits: ['Prestigious institutions', '1-year Master\'s programs', 'Rich cultural heritage'] },
    { name: 'Canada', benefits: ['Post-graduation work permit', 'Pathway to PR', 'Quality education'] },
    { name: 'Australia', benefits: ['Work while studying', 'Post-study work rights', 'Beautiful locations'] },
    { name: 'Germany', benefits: ['Tuition-free education', 'Strong engineering programs', 'Growing economy'] },
    { name: 'Europe', benefits: ['Affordable education', 'Rich culture', 'Travel opportunities'] }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Complete Guide to Study Abroad - Step by Step Guide"
        description="Comprehensive guide to studying abroad. Learn about study abroad process, requirements, visa application, university selection, and everything you need to know. Expert guidance from Acquire Overseas Education in Hyderabad."
        keywords="study abroad guide, how to study abroad, study abroad process, study abroad steps, complete guide study abroad, study abroad requirements, study abroad preparation, study abroad tips"
        canonicalUrl="https://acquireoverseas.in/guide-to-study-abroad"
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Complete Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Guide to Study Abroad
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Your comprehensive roadmap to studying abroad and achieving your academic dreams
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Studying abroad is a life-changing experience that opens doors to global opportunities. 
              This comprehensive guide will help you navigate every step of the process, from choosing 
              the right destination to successfully completing your application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Step-by-Step Journey
            </h2>
            <p className="text-lg text-gray-600">
              Follow these steps to make your study abroad dream a reality
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
                className={`mb-8 md:mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:flex items-center gap-8`}
              >
                <div className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mr-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-indigo-600">Step {index + 1}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Study Destinations
            </h2>
            <p className="text-lg text-gray-600">
              Explore top destinations for international students
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-indigo-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">{country.name}</h3>
                </div>
                <ul className="space-y-2">
                  {country.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get expert guidance from our certified education consultants
            </p>
            <Link
              to="/lets-start-your-journey"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-purple-900 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GuideToStudyAbroad;

