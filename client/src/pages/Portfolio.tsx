import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {

  const projects = [
    { title: 'University Admissions', description: 'Successful admissions to top universities in Canada, UK, and Australia.', image: '/services/study_visa.jpg', stats: '1200+ admissions' },
    { title: 'Scholarship Success', description: 'Students secured scholarships and financial aid for their studies abroad.', image: '/services/word_visa.jpg', stats: '900+ scholarships' },
    { title: 'Course Selection', description: 'Expert guidance helping students choose the right courses and programs.', image: '/services/tourist_visa.jpeg', stats: '2000+ students' },
    { title: 'Student Visa Success', description: 'Helping students secure study visas for their education journey.', image: '/services/family_visa.jpg', stats: '800+ visas' },
    { title: 'Career Counseling', description: 'Guiding students to choose courses aligned with their career goals.', image: '/services/businessvisa.jpg', stats: '600+ students' },
    { title: 'Education Consultation', description: 'Expert guidance for study abroad pathways and university selection.', image: '/services/immigration.jpg', stats: '1500+ consultations' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">Our Portfolio</h1>
            <p className="text-lg text-gray-600">A snapshot of our recent successes in helping students achieve their study abroad dreams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="h-44 bg-gray-100">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-600 mb-3">{p.description}</p>
                  <div className="flex items-center text-sm text-green-600"><CheckCircle size={16} className="mr-2" />{p.stats}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/lets-start-your-journey" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">Start Your Case <ArrowRight size={16} className="ml-1" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;


