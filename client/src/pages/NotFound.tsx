import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Home, Phone, Info, GraduationCap } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <SEO
        title="404 Page Not Found"
        description="The page you are looking for does not exist on Acquire Overseas Education. Navigate back to discover study abroad opportunities, student visas, and university guidance."
        keywords="404 page not found, acquire overseas education, study abroad consultants Hyderabad"
        noindex={true}
      />

      <div className="max-w-xl text-center relative z-10">
        {/* Animated Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-flex p-6 bg-indigo-600/20 border border-indigo-500/30 rounded-3xl mb-8"
        >
          <Compass size={64} className="text-indigo-400" />
        </motion.div>

        {/* 404 Title */}
        <h1 className="text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4">
          404
        </h1>
        
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Lost in Destination Selection?
        </h2>
        
        {/* Description */}
        <p className="text-slate-400 font-medium mb-8 leading-relaxed">
          The page you are looking for has migrated or does not exist. Let us help you navigate back to your study abroad pathway.
        </p>

        {/* Help Links */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link
            to="/about-us"
            className="flex items-center p-3 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-indigo-500/50 hover:bg-slate-900 transition group"
          >
            <Info className="text-indigo-400 mr-2 group-hover:scale-110 transition" size={20} />
            <span className="text-sm font-semibold text-slate-300">About Us</span>
          </Link>
          <Link
            to="/services"
            className="flex items-center p-3 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-indigo-500/50 hover:bg-slate-900 transition group"
          >
            <GraduationCap className="text-indigo-400 mr-2 group-hover:scale-110 transition" size={20} />
            <span className="text-sm font-semibold text-slate-300">Our Services</span>
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-indigo-500/20 transition hover:-translate-y-0.5"
          >
            <Home size={20} className="mr-2" />
            Go to Homepage
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold px-6 py-3.5 rounded-xl transition hover:-translate-y-0.5"
          >
            <Phone size={20} className="mr-2" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
