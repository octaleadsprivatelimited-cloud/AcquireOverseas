import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  HelpCircle, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StudyingAbroadFAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          q: 'What are the benefits of studying abroad?',
          a: 'Studying abroad offers numerous benefits including world-class education, cultural immersion, career advancement opportunities, personal growth, language skills development, and exposure to diverse perspectives that enhance your global outlook and employability.'
        },
        {
          q: 'Which countries are best for international students?',
          a: 'Popular destinations include USA, UK, Canada, Australia, Germany, and other European countries. The best choice depends on your academic goals, budget, preferred language, and career aspirations. We can help you choose the right destination.'
        },
        {
          q: 'How long does it take to apply and get accepted?',
          a: 'The application process typically takes 6-12 months. This includes research, preparing documents, taking required tests (IELTS, TOEFL, GRE, GMAT), submitting applications, waiting for decisions, and visa processing. Early planning is essential.'
        },
        {
          q: 'Do I need to know the local language?',
          a: 'It depends on the country and program. Many universities offer programs in English. However, learning the local language can enhance your experience and employment opportunities. Language requirements vary by institution.'
        }
      ]
    },
    {
      category: 'Application Process',
      questions: [
        {
          q: 'What documents do I need for application?',
          a: 'Common documents include academic transcripts, diplomas/degrees, proof of English proficiency (IELTS/TOEFL), standardized test scores (GRE/GMAT if required), letters of recommendation, statement of purpose, resume/CV, passport copy, and financial documents.'
        },
        {
          q: 'When should I start applying?',
          a: 'Start 12-18 months before your intended start date. This gives you time to research, prepare for tests, gather documents, and meet application deadlines. Some programs have early deadlines, so plan accordingly.'
        },
        {
          q: 'What is a Statement of Purpose (SOP)?',
          a: 'A Statement of Purpose is a crucial essay explaining your academic background, career goals, why you chose the specific program and university, and how it aligns with your future plans. It should be well-written, authentic, and compelling.'
        },
        {
          q: 'How many universities should I apply to?',
          a: 'Typically, apply to 5-8 universities with a mix of reach schools (ambitious), target schools (good fit), and safety schools (backup options). This increases your chances of acceptance while being realistic about your profile.'
        }
      ]
    },
    {
      category: 'Visa & Travel',
      questions: [
        {
          q: 'How do I apply for a student visa?',
          a: 'Visa processes vary by country. Generally, you need an acceptance letter, proof of funds, health insurance, medical exams (some countries), and complete the visa application form. Visa interviews may be required. We provide comprehensive visa assistance.'
        },
        {
          q: 'How much money do I need to show for visa?',
          a: 'Financial requirements vary by country and program duration. You typically need to show funds covering tuition fees and living expenses for at least one year (sometimes the entire program). Requirements range from $15,000 to $50,000+ depending on the destination.'
        },
        {
          q: 'Can I work while studying abroad?',
          a: 'Most countries allow international students to work part-time (usually 20 hours per week) during studies and full-time during breaks. Work rights vary by country. Check specific regulations for your destination country.'
        },
        {
          q: 'What happens after graduation?',
          a: 'Many countries offer post-graduation work permits (PGWP) allowing you to work after completing your studies. This provides valuable work experience and can lead to permanent residency pathways in countries like Canada and Australia.'
        }
      ]
    },
    {
      category: 'Costs & Finances',
      questions: [
        {
          q: 'How much does it cost to study abroad?',
          a: 'Costs vary significantly by country and program. Annual expenses range from $15,000-$70,000+ including tuition and living expenses. Germany offers lower-cost options, while USA/UK/Australia are generally more expensive. We can provide detailed cost breakdowns.'
        },
        {
          q: 'Are there scholarships available?',
          a: 'Yes! Many universities and governments offer scholarships for international students including merit-based, need-based, and country-specific scholarships. We help identify and apply for relevant scholarship opportunities.'
        },
        {
          q: 'Can I get a student loan?',
          a: 'Yes, education loans are available from banks and financial institutions. Loan amounts, interest rates, and eligibility criteria vary. Some loans require collateral or co-signers. We can guide you through loan options.'
        },
        {
          q: 'What are the hidden costs?',
          a: 'Beyond tuition and accommodation, consider visa fees, health insurance, travel costs, books and supplies, food, transportation, personal expenses, currency exchange fees, and initial setup costs. Plan for 10-15% buffer above estimated costs.'
        }
      ]
    },
    {
      category: 'Accommodation & Living',
      questions: [
        {
          q: 'Where will I live?',
          a: 'Options include on-campus dormitories, off-campus apartments, homestays with families, or shared accommodations. University housing is often limited, so apply early. We help find suitable accommodation options.'
        },
        {
          q: 'What should I pack?',
          a: 'Pack essentials including important documents, appropriate clothing for the climate, electronics, personal items, and some items from home for comfort. Check airline baggage limits. Some items may be cheaper to buy locally.'
        },
        {
          q: 'How do I manage culture shock?',
          a: 'Culture shock is normal. Stay open-minded, connect with other international students, participate in orientation programs, maintain contact with family, explore the new culture gradually, and seek support from university counseling services if needed.'
        },
        {
          q: 'Is it safe to study abroad?',
          a: 'Most study destinations are safe with good security measures. Research your destination, follow safety guidelines, stay aware of your surroundings, register with your embassy, maintain emergency contacts, and use common sense. Universities typically have campus security.'
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Studying Abroad FAQs - Frequently Asked Questions About Study Abroad"
        description="Get answers to frequently asked questions about studying abroad including admission process, visa requirements, costs, scholarships, accommodation, and more. Expert answers from Acquire Overseas Education in Hyderabad."
        keywords="study abroad FAQ, studying abroad questions, study abroad frequently asked questions, study abroad queries, overseas education FAQ, study abroad answers"
        canonicalUrl="https://acquireoverseas.in/studying-abroad-faqs"
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
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQs
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Studying Abroad FAQs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Find answers to commonly asked questions about studying abroad
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-600">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const currentIndex = questionIndex++;
                    return (
                      <div
                        key={qIndex}
                        className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(currentIndex)}
                          className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="font-semibold text-gray-900 text-base md:text-lg pr-4">
                            {faq.q}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 md:w-6 md:h-6 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${
                              openIndex === currentIndex ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openIndex === currentIndex && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
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
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our education consultants are here to answer all your questions and guide you through every step
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/lets-start-your-journey"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-purple-900 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Contact Us</span>
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/frequently-asked-questions"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                <HelpCircle className="mr-2" size={20} />
                <span>View All FAQs</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StudyingAbroadFAQs;

