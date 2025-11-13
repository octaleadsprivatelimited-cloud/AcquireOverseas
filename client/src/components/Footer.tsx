import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight,
  ChevronDown,
  Globe,
  Award,
  Shield,
  Mail,
  Phone
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Quick Links - Most important pages for easy access
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/your-trusted-education-partner' },
    { name: 'Our Services', path: '/comprehensive-education-solutions' },
    { name: 'Contact Us', path: '/lets-start-your-journey' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'FAQ', path: '/frequently-asked-questions' }
  ];

  // Study Destinations - Popular countries
  const studyDestinations = [
    { name: 'Study in USA', path: '/study-abroad-programs' },
    { name: 'Study in Canada', path: '/study-abroad-programs' },
    { name: 'Study in UK', path: '/study-abroad-programs' },
    { name: 'Study in Australia', path: '/study-abroad-programs' },
    { name: 'Study in Germany', path: '/study-abroad-programs' },
    { name: 'Study in Europe', path: '/study-abroad-programs' }
  ];

  // Our Services - All education services
  const ourServices = [
    { name: 'Study Abroad Programs', path: '/study-abroad-programs' },
    { name: 'University Selection', path: '/university-selection' },
    { name: 'Course Selection', path: '/course-selection' },
    { name: 'Application Support', path: '/application-support' },
    { name: 'Education Consultation', path: '/education-consultation' },
    { name: 'Career Counseling', path: '/career-counseling-services' },
    { name: 'Academic Profile Assessment', path: '/academic-profile-assessment' },
    { name: 'Document Preparation', path: '/document-preparation-services' },
    { name: 'Student Visa Extension', path: '/student-visa-extension-services' }
  ];

  // Resources & Support
  const resources = [
    { name: 'Blog & Resources', path: '/blog-resources' },
    { name: 'Our Portfolio', path: '/our-portfolio' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Careers', path: '/build-your-career-with-us' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Sitemap', path: '/sitemap' }
  ];

  const socialLinks: any[] = [];

  const trustBadges = [
    { icon: Award, text: '98% Success Rate' },
    { icon: Shield, text: 'Secure & Trusted' },
    { icon: Globe, text: '50+ Countries' }
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/footer-background.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-slate-900/75"></div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
            {/* Company Info - 2 cols on large screens */}
            <div className="lg:col-span-2">
              <h3 className="text-white text-lg md:text-2xl font-bold mb-4 md:mb-6">Acquire Overseas Education</h3>
              <p className="text-slate-400 mb-4 md:mb-6 leading-relaxed text-xs md:text-sm">
                Your trusted partner for overseas education consultancy. 
                We help students achieve their dreams of studying abroad 
                with expert guidance, university selection, and comprehensive support.
              </p>
              
              {/* Contact Information */}
              <div className="mb-4 md:mb-6 space-y-2">
                <a 
                  href="tel:+919515612909" 
                  className="inline-flex items-center text-slate-300 hover:text-white transition-colors text-xs md:text-sm"
                >
                  <Phone size={16} className="mr-2 text-green-400" />
                  <span>+91 95156 12909</span>
                </a>
                <div>
                  <a 
                    href="mailto:info@acquireoverseas.in" 
                    className="inline-flex items-center text-slate-300 hover:text-white transition-colors text-xs md:text-sm"
                  >
                    <Mail size={16} className="mr-2 text-blue-400" />
                    <span>info@acquireoverseas.in</span>
                  </a>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-1 md:space-x-2 bg-slate-800/50 px-2 py-1 md:px-3 md:py-2 rounded-lg">
                    <badge.icon size={14} className="md:w-4 md:h-4 text-blue-400" />
                    <span className="text-[10px] md:text-xs font-medium text-slate-300">{badge.text}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Quick Links - 1 col */}
            <div className="lg:col-span-1">
              {/* Mobile Accordion */}
              <button
                onClick={() => toggleSection('quick')}
                className="lg:hidden w-full flex items-center justify-between text-white text-base font-bold mb-3 border-t border-slate-800 pt-3"
              >
                <span>Quick Links</span>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-300 ${openSections.quick ? 'rotate-180' : ''}`}
                />
              </button>
              {/* Desktop Title */}
              <h3 className="hidden lg:block text-white text-lg font-bold mb-6">Quick Links</h3>
              
              <ul className={`space-y-2 md:space-y-3 ${openSections.quick || window.innerWidth >= 1024 ? 'block' : 'hidden'} lg:block`}>
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center text-slate-400 hover:text-white transition-colors text-xs md:text-sm"
                    >
                      <ChevronRight size={14} className="mr-1 group-hover:translate-x-1 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Study Destinations - 1 col */}
            <div className="lg:col-span-1">
              {/* Mobile Accordion */}
              <button
                onClick={() => toggleSection('destinations')}
                className="lg:hidden w-full flex items-center justify-between text-white text-base font-bold mb-3 border-t border-slate-800 pt-3"
              >
                <span>Study Destinations</span>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-300 ${openSections.destinations ? 'rotate-180' : ''}`}
                />
              </button>
              {/* Desktop Title */}
              <h3 className="hidden lg:block text-white text-lg font-bold mb-6">Study Destinations</h3>
              
              <ul className={`space-y-2 md:space-y-3 ${openSections.destinations || window.innerWidth >= 1024 ? 'block' : 'hidden'} lg:block`}>
                {studyDestinations.map((link) => (
                  <li key={link.path + link.name}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center text-slate-400 hover:text-white transition-colors text-xs md:text-sm"
                    >
                      <ChevronRight size={14} className="mr-1 group-hover:translate-x-1 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services - 1 col */}
            <div className="lg:col-span-1">
              {/* Mobile Accordion */}
              <button
                onClick={() => toggleSection('services')}
                className="lg:hidden w-full flex items-center justify-between text-white text-base font-bold mb-3 border-t border-slate-800 pt-3"
              >
                <span>Our Services</span>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-300 ${openSections.services ? 'rotate-180' : ''}`}
                />
              </button>
              {/* Desktop Title */}
              <h3 className="hidden lg:block text-white text-lg font-bold mb-6">Our Services</h3>
              
              <ul className={`space-y-2 md:space-y-3 ${openSections.services || window.innerWidth >= 1024 ? 'block' : 'hidden'} lg:block`}>
                {ourServices.map((link) => (
                  <li key={link.path + link.name}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center text-slate-400 hover:text-white transition-colors text-xs md:text-sm"
                    >
                      <ChevronRight size={14} className="mr-1 group-hover:translate-x-1 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-xs md:text-sm">
            <div className="flex flex-col items-center md:items-start space-y-1 md:space-y-2">
              <p className="text-slate-500 text-[10px] md:text-sm">
                © {currentYear} <span className="text-white font-semibold">Acquire Overseas Education</span>. All rights reserved.
              </p>
              <p className="text-slate-600 text-[9px] md:text-xs">
                Developed by{' '}
                <a 
                  href="https://www.octaleads.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors font-semibold"
                >
                  Octaleads Pvt Ltd.
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-4 md:space-x-6 text-[10px] md:text-sm">
              <Link to="/privacy-policy" className="text-slate-500 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms-of-service" className="text-slate-500 hover:text-white transition-colors">
                Terms
              </Link>
              <Link to="/sitemap" className="text-slate-500 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;