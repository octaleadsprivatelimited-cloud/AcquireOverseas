import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles,
  Globe,
  Users,
  Award
} from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sliderImages = [
    '/home/slider-1.jpg',
    '/services/study_visa.jpg'
  ] as const;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Form submission disabled - contact form functionality removed
      // You can implement your own form handling here
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Study Abroad Programs',
    'University Selection',
    'Course Selection',
    'Application Support',
    'Education Consultation'
  ];

  const stats = [
    { icon: Users, value: '5K+', label: 'Students', color: 'from-blue-500 to-cyan-500' },
    { icon: Award, value: '98%', label: 'Success', color: 'from-purple-500 to-pink-500' },
    { icon: Globe, value: '50+', label: 'Countries', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-14 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20">
      {/* Background Image Slider */}
      <div className="absolute inset-0 bg-black">
        {sliderImages.map((image, index) => {
          // Slider 1 (index 0): 70% right, Slider 2 (index 1): center top
          const getMobilePosition = () => {
            if (index === 0) return '70% center'; // slider-1.jpg - right
            return 'center top'; // study_visa.jpg - student image at top
          };

          return (
            <motion.div
              key={`${image}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div 
                key={image}
                className="w-full h-full bg-cover"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: isMobile ? getMobilePosition() : 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:gap-12 items-center pt-[50%] md:pt-32 lg:pt-40">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
            >
              <span className="text-white drop-shadow-2xl">
                Your Dream Destination
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-white/95 mb-6 md:mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-lg"
            >
              Transform your education dreams into reality with{' '}
              <span className="font-bold text-yellow-300">
                expert education guidance
              </span>{' '}
              & study abroad services
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-row gap-2 md:gap-4 justify-center mb-8 md:mb-10 lg:mb-12"
            >
              <Link
                to="/lets-start-your-journey"
                className="group inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg md:rounded-xl font-semibold text-xs md:text-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>Get Started</span>
                <ArrowRight size={14} className="ml-1 md:ml-2 group-hover:translate-x-2 transition-transform md:w-4 md:h-4" />
              </Link>
              <Link
                to="/comprehensive-education-solutions"
                className="inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 bg-white text-gray-900 rounded-lg md:rounded-xl font-semibold text-xs md:text-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-200"
              >
                <span>Explore Services</span>
              </Link>
            </motion.div>

            {/* Stats - Horizontal Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-2 md:gap-3"
            >
              {stats.map((stat, index) => (
                <div key={index} className="glass-effect backdrop-blur-md p-2 md:p-3 rounded-lg md:rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white/20">
                  <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-2 mx-auto`}>
                    <stat.icon size={16} className="text-white md:w-5 md:h-5" />
                  </div>
                  <div className="text-base md:text-xl font-bold text-white mb-0.5 drop-shadow-lg">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-white/90 font-medium drop-shadow-md">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Quick Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="quick-form"
            className="hidden relative max-w-md mx-auto lg:ml-auto lg:mr-0"
          >
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl blur-2xl opacity-60"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-60"
            />

            <div className="relative glass-card rounded-2xl shadow-xl p-5 lg:p-6 border-2 border-white/50">
              {/* Form Header */}
              <div className="text-center mb-5">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Start Your Journey
                </h3>
                <p className="text-gray-600 text-sm">
                  Get expert consultation within 24 hours
                </p>
              </div>

              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Success!</h4>
                  <p className="text-gray-600 text-sm">
                    We'll contact you within 24 hours
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all duration-200 text-sm"
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all duration-200 text-sm"
                      placeholder="Email"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all duration-200 text-sm"
                      placeholder="Phone"
                    />
                  </div>

                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      aria-label="Select Service"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all duration-200 text-sm"
                    >
                      <option value="">Select Service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm group"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                        <span>Get Free Consultation</span>
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </button>

                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-center text-xs">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <p className="text-center text-[10px] text-gray-500 pt-2">
                    Your information is secure & confidential
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;