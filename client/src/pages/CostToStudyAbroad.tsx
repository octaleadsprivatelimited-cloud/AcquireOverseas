import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Calculator, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Home,
  Utensils,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CostToStudyAbroad: React.FC = () => {
  const countries = [
    {
      name: 'USA',
      tuition: '$20,000 - $50,000',
      living: '$12,000 - $18,000',
      total: '$32,000 - $68,000',
      currency: 'USD per year'
    },
    {
      name: 'UK',
      tuition: '£10,000 - £30,000',
      living: '£10,000 - £15,000',
      total: '£20,000 - £45,000',
      currency: 'GBP per year'
    },
    {
      name: 'Canada',
      tuition: 'C$15,000 - C$30,000',
      living: 'C$12,000 - C$15,000',
      total: 'C$27,000 - C$45,000',
      currency: 'CAD per year'
    },
    {
      name: 'Australia',
      tuition: 'A$20,000 - A$45,000',
      living: 'A$15,000 - A$20,000',
      total: 'A$35,000 - A$65,000',
      currency: 'AUD per year'
    },
    {
      name: 'Germany',
      tuition: '€0 - €20,000',
      living: '€8,000 - €12,000',
      total: '€8,000 - €32,000',
      currency: 'EUR per year'
    },
    {
      name: 'Europe (Other)',
      tuition: '€5,000 - €25,000',
      living: '€8,000 - €15,000',
      total: '€13,000 - €40,000',
      currency: 'EUR per year'
    }
  ];

  const expenses = [
    {
      icon: BookOpen,
      title: 'Tuition Fees',
      description: 'University fees vary by program and institution.',
      items: ['Tuition per semester/year', 'Registration fees', 'Laboratory fees', 'Library fees']
    },
    {
      icon: Home,
      title: 'Accommodation',
      description: 'Housing costs depend on location and type.',
      items: ['On-campus housing', 'Off-campus apartments', 'Homestay options', 'Utilities and internet']
    },
    {
      icon: Utensils,
      title: 'Living Expenses',
      description: 'Daily living costs including food and transportation.',
      items: ['Food and groceries', 'Transportation', 'Personal expenses', 'Entertainment']
    },
    {
      icon: TrendingUp,
      title: 'Additional Costs',
      description: 'Other expenses to consider.',
      items: ['Health insurance', 'Visa fees', 'Travel costs', 'Books and supplies']
    }
  ];

  const tips = [
    'Research scholarship opportunities',
    'Consider part-time work options',
    'Plan for currency exchange rates',
    'Create a realistic budget',
    'Explore affordable accommodation',
    'Take advantage of student discounts'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              <Calculator className="w-4 h-4 mr-2" />
              Cost Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cost to Study Abroad
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Understanding the costs and planning your budget for studying abroad
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cost Breakdown by Country */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Estimated Costs by Country
            </h2>
            <p className="text-lg text-gray-600">
              Approximate annual costs for international students
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
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{country.name}</h3>
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Tuition:</span>
                    <span className="font-semibold text-gray-900">{country.tuition}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Living:</span>
                    <span className="font-semibold text-gray-900">{country.living}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-green-50 rounded-lg px-3">
                    <span className="font-bold text-gray-900">Total:</span>
                    <span className="font-bold text-green-700 text-lg">{country.total}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center">{country.currency}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expense Categories */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cost Breakdown
            </h2>
            <p className="text-lg text-gray-600">
              Understanding what expenses to plan for
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {expenses.map((expense, index) => (
              <motion.div
                key={expense.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mb-4">
                  <expense.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {expense.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {expense.description}
                </p>
                <ul className="space-y-2">
                  {expense.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Money-Saving Tips */}
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
                Money-Saving Tips
              </h2>
              <p className="text-lg text-gray-600">
                Practical advice to manage your study abroad expenses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <motion.div
                  key={tip}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-4 border border-gray-200 flex items-start"
                >
                  <TrendingUp className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{tip}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Planning Your Budget?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our experts can help you create a realistic budget and explore funding options
            </p>
            <Link
              to="/lets-start-your-journey"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-green-900 transition-all duration-300 hover:scale-105 shadow-lg"
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

export default CostToStudyAbroad;

