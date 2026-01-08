import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Award, 
  Globe, 
  Users,
  ArrowRight,
  Briefcase,
  Sparkles,
  Heart,
  Brain,
  Languages
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StudyAbroadBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Access world-class education from top-ranked universities globally.',
      points: ['Recognized degrees worldwide', 'Cutting-edge research opportunities', 'Expert faculty members', 'State-of-the-art facilities']
    },
    {
      icon: Briefcase,
      title: 'Career Advancement',
      description: 'Enhance your career prospects with international experience and qualifications.',
      points: ['Global job opportunities', 'Higher earning potential', 'Professional networks', 'Industry exposure']
    },
    {
      icon: Globe,
      title: 'Cultural Immersion',
      description: 'Experience diverse cultures and broaden your worldview.',
      points: ['Cultural understanding', 'Language skills', 'Global perspective', 'Personal growth']
    },
    {
      icon: Users,
      title: 'Personal Development',
      description: 'Develop independence, confidence, and resilience.',
      points: ['Self-reliance', 'Problem-solving skills', 'Adaptability', 'Confidence building']
    },
    {
      icon: Brain,
      title: 'Intellectual Growth',
      description: 'Challenge yourself academically and intellectually.',
      points: ['Critical thinking', 'Research skills', 'Innovation mindset', 'Academic excellence']
    },
    {
      icon: Languages,
      title: 'Language Skills',
      description: 'Master new languages and improve communication abilities.',
      points: ['Multilingual advantage', 'Better communication', 'Career opportunities', 'Cultural integration']
    }
  ];

  const stats = [
    { number: '98%', label: 'Success Rate' },
    { number: '50+', label: 'Countries' },
    { number: '10K+', label: 'Students Helped' },
    { number: '100+', label: 'Universities' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Study Abroad Benefits - Advantages of Studying Overseas"
        description="Discover the amazing benefits of studying abroad including career opportunities, cultural exposure, personal growth, language skills, global network, and academic excellence. Learn why studying abroad is worth it from Acquire Overseas Education."
        keywords="study abroad benefits, advantages of studying abroad, benefits of international education, why study abroad, study abroad advantages, career benefits study abroad, study abroad experience"
        canonicalUrl="https://acquireoverseas.in/study-abroad-benefits"
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Benefits
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Study Abroad Benefits
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Discover the life-changing advantages of studying abroad
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Study Abroad?
            </h2>
            <p className="text-lg text-gray-600">
              Explore the transformative benefits of international education
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {benefit.description}
                </p>
                <ul className="space-y-2">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-sm md:text-base text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <Heart className="w-3 h-3 text-green-600" />
                      </div>
                      <span>{point}</span>
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
              Ready to Experience These Benefits?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Start your study abroad journey with expert guidance
            </p>
            <Link
              to="/lets-start-your-journey"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-purple-900 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Get Started Today</span>
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroadBenefits;

