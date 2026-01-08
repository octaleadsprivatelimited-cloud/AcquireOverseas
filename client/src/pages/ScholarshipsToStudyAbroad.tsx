import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Award, 
  Star, 
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Globe,
  Target,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ScholarshipsToStudyAbroad: React.FC = () => {
  const scholarshipTypes = [
    {
      icon: Star,
      title: 'Merit-Based Scholarships',
      description: 'Awarded based on academic excellence and achievements.',
      eligibility: ['High GPA requirements', 'Academic achievements', 'Test scores', 'Research publications']
    },
    {
      icon: Target,
      title: 'Need-Based Scholarships',
      description: 'Financial aid for students with demonstrated financial need.',
      eligibility: ['Financial documentation', 'Income statements', 'Family circumstances', 'Application forms']
    },
    {
      icon: GraduationCap,
      title: 'University Scholarships',
      description: 'Scholarships offered directly by universities.',
      eligibility: ['Admission requirements', 'Specific programs', 'Departmental awards', 'Full or partial tuition']
    },
    {
      icon: Globe,
      title: 'Government Scholarships',
      description: 'Funded by government agencies and embassies.',
      eligibility: ['Country-specific programs', 'Bilateral agreements', 'Cultural exchange', 'Full coverage']
    },
    {
      icon: TrendingUp,
      title: 'Sports & Arts Scholarships',
      description: 'For students with exceptional talents.',
      eligibility: ['Athletic achievements', 'Portfolio submissions', 'Auditions', 'Competitions']
    },
    {
      icon: Award,
      title: 'Country-Specific Scholarships',
      description: 'Scholarships specific to study destinations.',
      eligibility: ['Destination requirements', 'National programs', 'Regional awards', 'Special agreements']
    }
  ];

  const countries = [
    {
      name: 'USA',
      scholarships: ['Fulbright Scholarships', 'Merit-based university awards', 'Private foundation grants', 'Athletic scholarships']
    },
    {
      name: 'UK',
      scholarships: ['Chevening Scholarships', 'Commonwealth Scholarships', 'University-specific awards', 'GREAT Scholarships']
    },
    {
      name: 'Canada',
      scholarships: ['Vanier Canada Graduate Scholarships', 'University entrance scholarships', 'Provincial awards', 'Private scholarships']
    },
    {
      name: 'Australia',
      scholarships: ['Australia Awards', 'Endeavour Scholarships', 'University scholarships', 'Government funding']
    },
    {
      name: 'Germany',
      scholarships: ['DAAD Scholarships', 'Heinrich Böll Foundation', 'Friedrich Ebert Foundation', 'University scholarships']
    }
  ];

  const applicationTips = [
    'Start researching early (6-12 months before)',
    'Meet all eligibility requirements',
    'Prepare strong recommendation letters',
    'Write compelling personal statements',
    'Submit applications before deadlines',
    'Follow up on application status',
    'Prepare for interviews if required',
    'Maintain excellent academic records'
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Scholarships to Study Abroad - Scholarship Opportunities for International Students"
        description="Find scholarships to study abroad in USA, UK, Canada, Australia, Germany. Learn about merit scholarships, need-based scholarships, government scholarships, and how to apply. Get expert scholarship guidance from Acquire Overseas Education."
        keywords="study abroad scholarships, scholarships for international students, study abroad scholarship India, merit scholarships abroad, need based scholarships, government scholarships study abroad, how to get scholarship abroad"
        canonicalUrl="https://acquireoverseas.in/scholarships-to-study-abroad"
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-yellow-900 via-amber-900 to-orange-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4 mr-2" />
              Funding Opportunities
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Scholarships to Study Abroad
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Discover funding opportunities to make your study abroad dream affordable
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Scholarships
            </h2>
            <p className="text-lg text-gray-600">
              Explore different scholarship opportunities available
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {scholarshipTypes.map((scholarship, index) => (
              <motion.div
                key={scholarship.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center mb-4">
                  <scholarship.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {scholarship.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {scholarship.description}
                </p>
                <ul className="space-y-2">
                  {scholarship.eligibility.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm md:text-base text-gray-700">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Country-Specific Scholarships */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Scholarships by Country
            </h2>
            <p className="text-lg text-gray-600">
              Popular scholarship programs by study destination
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-lg p-6 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-amber-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">{country.name}</h3>
                </div>
                <ul className="space-y-2">
                  {country.scholarships.map((scholarship, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <Award className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">{scholarship}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Tips */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Application Tips
              </h2>
              <p className="text-lg text-gray-600">
                Best practices for successful scholarship applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applicationTips.map((tip, index) => (
                <motion.div
                  key={tip}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-4 border border-gray-200 flex items-start"
                >
                  <Star className="w-6 h-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{tip}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Finding Scholarships?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our experts can help you identify and apply for the right scholarships
            </p>
            <Link
              to="/lets-start-your-journey"
              className="inline-flex items-center px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-orange-900 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Get Scholarship Assistance</span>
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ScholarshipsToStudyAbroad;

