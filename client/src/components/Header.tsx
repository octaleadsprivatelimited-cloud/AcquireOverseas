import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const servicesCategories = {
    educationServices: [
      { name: 'Study Abroad Programs', path: '/study-abroad-programs', desc: 'Pursue education at top universities worldwide', icon: '🎓' },
      { name: 'University Selection', path: '/university-selection', desc: 'Expert guidance on choosing the right university', icon: '🏫' },
      { name: 'Course Selection', path: '/course-selection', desc: 'Find the perfect course for your career goals', icon: '📚' },
      { name: 'Application Support', path: '/application-support', desc: 'Complete application process guidance', icon: '📝' },
      { name: 'Student Visa Services', path: '/study-abroad-programs', desc: 'Expert student visa application assistance', icon: '🛂' }
    ],
    consultationServices: [
      { name: 'Education Consultation', path: '/education-consultation', desc: 'Expert guidance from certified education consultants', icon: '📋' },
      { name: 'Career Counseling', path: '/career-counseling-services', desc: 'Career guidance and pathway planning', icon: '🎯' },
      { name: 'Document Preparation', path: '/document-preparation-services', desc: 'Official document verification and preparation', icon: '📄' },
      { name: 'Pre-Departure Support', path: '/comprehensive-education-solutions', desc: 'Comprehensive support before you leave', icon: '✈️' }
    ],
    studyAbroad: [
      { name: 'Guide to Study Abroad', path: '/guide-to-study-abroad' },
      { name: 'Study Abroad Benefits', path: '/study-abroad-benefits' },
      { name: 'Guide for Parents', path: '/guide-for-parents' },
      { name: 'Cost to Study Abroad', path: '/cost-to-study-abroad' },
      { name: 'Scholarships to Study Abroad', path: '/scholarships-to-study-abroad' },
      { name: 'Studying Abroad FAQs', path: '/studying-abroad-faqs' }
    ]
  };


  const mainNavigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/your-trusted-education-partner' },
    { name: 'Study Abroad', path: '/guide-to-study-abroad', hasDropdown: true, dropdownType: 'studyAbroad' },
    { name: 'Services', path: '/comprehensive-education-solutions', hasDropdown: true, dropdownType: 'services' },
    { name: 'Portfolio', path: '/our-portfolio' },
    { name: 'Blog', path: '/blog-resources' },
    { name: 'Testimonials', path: '/success-stories' },
    { name: 'FAQ', path: '/frequently-asked-questions' },
    { name: 'Careers', path: '/build-your-career-with-us' },
    { name: 'Contact', path: '/lets-start-your-journey' }
  ];

  return (
    <>
      {/* Main Header - Compact */}
      <motion.header 
        className={`sticky top-0 z-50 transition-all duration-300 relative ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-sm shadow-xl' 
            : 'bg-black shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="relative h-10 md:h-12 lg:h-16 flex items-center">
                <img 
                  src="/favicon.png" 
                  alt="Acquire Overseas Education" 
                  className="h-8 md:h-10 lg:h-12 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {mainNavigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onMouseEnter={() => setActiveDropdown(item.dropdownType || 'services')}
                        onClick={() => setActiveDropdown(activeDropdown === (item.dropdownType || 'services') ? null : (item.dropdownType || 'services'))}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center space-x-1 ${
                          ((item.dropdownType === 'services' && (location.pathname.includes('/services') || location.pathname.includes('visa') || location.pathname.includes('education') || location.pathname.includes('study') || location.pathname.includes('university'))) ||
                           (item.dropdownType === 'studyAbroad' && (location.pathname.includes('/guide-to-study-abroad') || location.pathname.includes('/study-abroad-benefits') || location.pathname.includes('/guide-for-parents') || location.pathname.includes('/cost-to-study-abroad') || location.pathname.includes('/scholarships-to-study-abroad') || location.pathname.includes('/studying-abroad-faqs'))))
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                            : 'text-white hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === (item.dropdownType || 'services') || activeDropdown === 'studyAbroad' ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onMouseEnter={() => setActiveDropdown(null)}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                          : 'text-white hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-1.5 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Study Abroad Dropdown - Desktop */}
      <AnimatePresence>
        {activeDropdown === 'studyAbroad' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block fixed top-14 md:top-16 lg:top-20 left-0 right-0 bottom-0 z-40 bg-black/60 backdrop-blur-md"
              onClick={() => setActiveDropdown(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="hidden lg:block fixed top-14 md:top-16 lg:top-20 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="mb-2 text-center">
                  <h3 className="text-base font-bold text-white mb-0.5">
                    Study Abroad Resources
                  </h3>
                  <p className="text-[10px] text-gray-300">Comprehensive guides and information</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
                  {servicesCategories.studyAbroad.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        className="group relative overflow-hidden p-2 rounded-md bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-md block h-full"
                      >
                        <h5 className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
                          {item.name}
                        </h5>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Full-Page Services Dropdown - Professional Mega Menu */}
        <AnimatePresence>
        {activeDropdown === 'services' && (
          <>
            {/* Overlay below header only - Desktop Only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block fixed top-14 md:top-16 lg:top-20 left-0 right-0 bottom-0 z-40 bg-black/60 backdrop-blur-md"
              onClick={() => setActiveDropdown(null)}
            />
            
            {/* Dropdown content - Desktop Only */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="hidden lg:block fixed top-14 md:top-16 lg:top-20 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                {/* Header */}
                <div className="mb-2 text-center">
                  <h3 className="text-base font-bold text-white mb-0.5">
                    Our Services
                  </h3>
                  <p className="text-[10px] text-gray-300">Choose the service that fits your needs</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                  {/* Education Services */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <div className="w-1 h-3 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-2"></div>
                      <h4 className="text-[10px] font-bold text-white">Education Services</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {servicesCategories.educationServices.map((service, index) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Link
                            to={service.path}
                            onClick={() => setActiveDropdown(null)}
                            className="group relative overflow-hidden p-2 rounded-md bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-md block h-full"
                          >
                            <div className="relative">
                              <h5 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
                                {service.name}
                              </h5>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Consultation Services */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <div className="w-1 h-3 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full mr-2"></div>
                      <h4 className="text-[10px] font-bold text-white">Consultation Services</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {servicesCategories.consultationServices.map((service, index) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: (servicesCategories.educationServices.length + index) * 0.05 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Link
                            to={service.path}
                            onClick={() => setActiveDropdown(null)}
                            className="group relative overflow-hidden p-2 rounded-md bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-md block h-full"
                          >
                            <div className="relative">
                              <h5 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors leading-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
                                {service.name}
                              </h5>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Information - Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2 pt-2 border-t border-gray-700">
                  <div className="space-y-2">
                    <div className="flex items-center text-white">
                      <Phone size={14} className="mr-2 text-green-400" />
                      <a href="tel:+919515612909" className="text-sm hover:text-green-400 transition-colors">+91 95156 12909</a>
                    </div>
                    <div className="flex items-center text-white">
                      <Mail size={14} className="mr-2 text-blue-400" />
                      <a href="mailto:info@acquireoverseas.in" className="text-sm hover:text-blue-400 transition-colors">info@acquireoverseas.in</a>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start text-white">
                      <MapPin size={14} className="mr-2 mt-0.5 text-red-400 flex-shrink-0" />
                      <span className="text-sm">Hyderabad, Telangana, India</span>
                    </div>
                    <div className="flex items-start text-white">
                      <Clock size={14} className="mr-2 mt-0.5 text-purple-400 flex-shrink-0" />
                      <div className="text-sm">
                        <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                        <div>Sat: 9:00 AM - 4:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Banner */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-md p-2 text-center text-white">
                  <h4 className="text-[10px] font-bold mb-0.5">Not Sure Which Service You Need?</h4>
                  <p className="text-white/90 mb-1 text-[9px]">Get a free consultation with our experts</p>
                  <Link
                    to="/lets-start-your-journey"
                    onClick={() => setActiveDropdown(null)}
                    className="inline-flex items-center px-3 py-1.5 bg-white text-indigo-600 hover:bg-yellow-300 hover:text-purple-900 rounded-md font-semibold text-[10px] transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <span>Get Free Consultation</span>
                    <ArrowRight size={14} className="ml-1.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


      {/* Mobile Menu - Simple Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-14 md:top-16 bottom-0 bg-black border-t border-gray-800 shadow-lg z-40 overflow-y-auto overscroll-contain"
          >
            <div className="px-2 py-1 pb-4">
              <nav className="space-y-0">
                {mainNavigation.map((item, index) => (
              <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {item.hasDropdown ? (
                        <div>
                        <motion.button
                          onClick={() => toggleDropdown(item.dropdownType || 'services')}
                          className="w-full flex items-center justify-between px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-gray-800 rounded-md transition-all duration-200"
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>{item.name}</span>
                          <motion.div
                            animate={{ rotate: activeDropdown === (item.dropdownType || 'services') ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown size={12} strokeWidth={2.5} />
                          </motion.div>
                        </motion.button>
                          
                          <AnimatePresence>
                          {activeDropdown === 'studyAbroad' && item.dropdownType === 'studyAbroad' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-0.5 space-y-0 bg-gray-900 rounded-md p-1"
                            >
                              {servicesCategories.studyAbroad.map((item, idx) => (
                                <motion.div
                                  key={item.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                                >
                                  <Link
                                    to={item.path}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className="block px-1.5 py-1 text-[10px] text-gray-300 hover:bg-gray-800 hover:text-indigo-400 rounded transition-all duration-200 font-medium"
                                  >
                                    {item.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                          {activeDropdown === 'services' && item.dropdownType === 'services' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-0.5 space-y-0 bg-gray-900 rounded-md p-1"
                            >
                              <div className="text-[9px] font-bold text-indigo-400 px-1.5 py-0.5 uppercase tracking-wider">Education Services</div>
                              {servicesCategories.educationServices.map((service, idx) => (
                              <motion.div
                                  key={service.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                                >
                                  <Link
                                    to={service.path}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className="block px-1.5 py-1 text-[10px] text-gray-300 hover:bg-gray-800 hover:text-indigo-400 rounded transition-all duration-200 font-medium"
                                  >
                                    {service.name}
                                  </Link>
                                </motion.div>
                              ))}
                              <div className="text-[9px] font-bold text-purple-400 px-1.5 py-0.5 mt-0.5 uppercase tracking-wider">Consultation Services</div>
                              {servicesCategories.consultationServices.map((service, idx) => (
                                <motion.div
                                  key={service.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: (servicesCategories.educationServices.length + idx) * 0.03 }}
                                >
                                    <Link
                                    to={service.path}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className="block px-1.5 py-1 text-[10px] text-gray-300 hover:bg-gray-800 hover:text-purple-400 rounded transition-all duration-200 font-medium"
                                  >
                                    {service.name}
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                      <motion.div whileTap={{ scale: 0.95 }}>
                          <Link
                            to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-2.5 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
                            location.pathname === item.path
                              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                              : 'text-white hover:bg-gray-800'
                          }`}
                        >
                          {item.name}
                          </Link>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Information Section - Mobile */}
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="text-[9px] font-bold text-white px-2.5 py-1.5 uppercase tracking-wider mb-2">Contact Us</div>
                  <div className="space-y-1.5">
                    <motion.a
                      href="tel:+919515612909"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: mainNavigation.length * 0.05 }}
                      className="flex items-center px-2.5 py-1.5 text-[10px] text-gray-300 hover:bg-gray-800 hover:text-green-400 rounded transition-all duration-200"
                    >
                      <Phone size={12} className="mr-2 flex-shrink-0" />
                      <span>+91 95156 12909</span>
                    </motion.a>
                    <motion.a
                      href="mailto:info@acquireoverseas.in"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: mainNavigation.length * 0.05 + 0.05 }}
                      className="flex items-center px-2.5 py-1.5 text-[10px] text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded transition-all duration-200"
                    >
                      <Mail size={12} className="mr-2 flex-shrink-0" />
                      <span className="truncate">info@acquireoverseas.in</span>
                    </motion.a>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: mainNavigation.length * 0.05 + 0.1 }}
                      className="flex items-start px-2.5 py-1.5 text-[10px] text-gray-300 rounded"
                    >
                      <MapPin size={12} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span>Hyderabad, Telangana, India</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: mainNavigation.length * 0.05 + 0.15 }}
                      className="flex items-start px-2.5 py-1.5 text-[10px] text-gray-300 rounded"
                    >
                      <Clock size={12} className="mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                        <div>Sat: 9:00 AM - 4:00 PM</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  );
};

export default Header;