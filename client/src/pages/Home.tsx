import React from 'react';
import Hero from '../components/Hero';
import { 
  Users, 
  Award, 
  ArrowRight,
  Star,
  Sparkles,
  Zap,
  Shield
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  const handleCountryClick = (countryName: string) => {
    const phoneNumber = '919515612909'; // WhatsApp number without + or spaces
    const message = encodeURIComponent(`Hello! I am interested in studying in ${countryName}. Can you please provide more information about study abroad programs and university admissions for ${countryName}?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    { 
      title: 'Study Abroad Programs', 
      desc: 'Top universities worldwide', 
      link: '/study-abroad-programs', 
      gradient: 'from-blue-500 to-cyan-500', 
      size: 'large',
      image: '/services/study_visa.jpg'
    },
    { 
      title: 'University Selection', 
      desc: 'Find the perfect fit', 
      link: '/university-selection', 
      gradient: 'from-emerald-500 to-teal-500', 
      size: 'small',
      image: '/services/immigration.jpg'
    },
    { 
      title: 'Course Selection', 
      desc: 'Career-focused guidance', 
      link: '/course-selection', 
      gradient: 'from-pink-500 to-rose-500', 
      size: 'medium',
      image: '/services/benfits.jpeg'
    },
    { 
      title: 'Application Support', 
      desc: 'Complete application help', 
      link: '/application-support', 
      gradient: 'from-purple-500 to-indigo-500', 
      size: 'medium',
      image: '/services/word_visa.jpg'
    },
    { 
      title: 'Student Visa Services', 
      desc: 'Expert visa guidance', 
      link: '/study-abroad-programs', 
      gradient: 'from-amber-500 to-yellow-500', 
      size: 'medium',
      image: '/services/tourist_visa.jpeg'
    }
  ];

  const features = [
    { icon: Shield, title: 'Trusted', desc: 'Certified education consultants', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, title: 'Fast', desc: 'Quick application processing', color: 'from-yellow-500 to-orange-500' },
    { icon: Award, title: '98% Success', desc: 'Proven admission success', color: 'from-purple-500 to-pink-500' },
    { icon: Users, title: '5K+ Students', desc: 'Successful placements', color: 'from-blue-500 to-cyan-500' }
  ];

  const testimonials = [
    { name: 'Priya S.', role: 'Student', country: 'Canada', text: 'Amazing service! Got admission to my dream university in Canada.', rating: 5 },
    { name: 'Rahul K.', role: 'Student', country: 'Australia', text: 'Professional team helped me secure scholarship and admission.', rating: 5 },
    { name: 'Sunita P.', role: 'Student', country: 'United Kingdom', text: 'Got into top UK university thanks to Acquire Overseas Education!', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Features Section - Creative Grid */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image with Fade Effect */}
        <div className="absolute inset-0">
          <img
            src="/services/immigration.jpg"
            alt="Consulting Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for Fade Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/90 to-purple-50/85"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full font-bold mb-6">
              <Sparkles size={20} />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-sky-500 mb-6">
              Your Success is{' '}
              <span className="text-sky-600">Our Mission</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass-card p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Bento Box Layout */}
      <section className="py-8 md:py-10 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Our Services
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-xl ${
                  service.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                  service.size === 'medium' ? 'md:col-span-1 md:row-span-2' : 
                  'md:col-span-1'
                }`}
              >
                <Link
                  to={service.link}
                  className={`block h-full min-h-[140px] relative overflow-hidden hover:scale-[1.02] transition-all duration-500`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 group-hover:from-black/70 transition-all duration-500"></div>
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between p-3 md:p-4">
                    <div>
                      <div className="inline-block bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-lg mb-1.5 border border-white/20">
                        <h3 className="text-base md:text-lg font-bold text-white">{service.title}</h3>
                      </div>
                      <p className="text-white font-semibold text-xs md:text-sm drop-shadow-xl">{service.desc}</p>
                    </div>
                    <div className="flex items-center text-white font-semibold text-xs md:text-sm group-hover:translate-x-2 transition-transform duration-300">
                      <span>Learn More</span>
                      <ArrowRight size={14} className="ml-1.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <Link
              to="/comprehensive-education-solutions"
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg font-semibold text-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Countries We Serve Section */}
      <section className="py-4 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
              Countries We Serve
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Study Abroad Opportunities in Top Universities Worldwide
            </p>
          </div>

          <div className="flex flex-nowrap gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center md:justify-center">
            {[
              {
                country: 'USA',
                title: 'USA',
                image: '/country/usa.jpg',
                gradient: 'from-blue-600 to-blue-800'
              },
              {
                country: 'Canada',
                title: 'Canada',
                image: '/country/canada.jpg',
                gradient: 'from-red-600 to-red-800'
              },
              {
                country: 'Australia',
                title: 'Australia',
                image: '/country/australia.jpg',
                gradient: 'from-green-600 to-green-800'
              },
              {
                country: 'UK',
                title: 'UK',
                image: '/country/uk.jpg',
                gradient: 'from-indigo-600 to-indigo-800'
              },
              {
                country: 'Germany',
                title: 'Germany',
                image: '/country/Germany.jpg',
                gradient: 'from-gray-700 to-gray-900'
              },
              {
                country: 'Europe',
                title: 'Europe',
                image: '/country/Europe.jpeg',
                gradient: 'from-purple-600 to-purple-800'
              }
            ].map((country) => (
              <div
                key={country.country}
                onClick={() => handleCountryClick(country.title)}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer flex-shrink-0 w-32 md:w-40"
              >
                <div className="relative h-24 md:h-32 overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80';
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${country.gradient} opacity-30`}></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm px-2 py-1.5">
                    <h3 className="text-xs md:text-sm font-bold text-white text-center">{country.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Bold & Modern */}
      <section className="py-6 md:py-10 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://t4.ftcdn.net/jpg/04/89/68/23/360_F_489682374_ckc0OVyT6Av0NGcuYbwBSCxy62blF4CQ.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* LinkedIn Blue Overlay with Fade */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-900/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4 md:mb-8"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">
              Trusted by Thousands
            </h2>
            <p className="text-base md:text-xl text-white/90 font-semibold">
              Join the success stories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {[
              { icon: Users, value: '5,000+', label: 'Happy Clients' },
              { icon: Award, value: '98%', label: 'Success Rate' },
              { icon: Shield, value: '50+', label: 'Countries' },
              { icon: Zap, value: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center glass-effect p-3 md:p-4 rounded-xl md:rounded-2xl hover:scale-110 transition-all duration-300"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-1 md:mb-2">
                  <stat.icon size={16} className="md:w-5 md:h-5 text-white" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-0.5 md:mb-1">{stat.value}</div>
                <div className="text-xs md:text-base text-white/90 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Creative Timeline */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-10"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full font-bold mb-3 md:mb-4 text-xs md:text-sm">
              <Zap size={14} className="md:w-4 md:h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
              Simple, Fast,{' '}
              <span className="text-gradient-neon">Effective</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { step: '01', title: 'Free Consult', desc: 'Book your free consultation' },
              { step: '02', title: 'Documents', desc: 'We prepare everything' },
              { step: '03', title: 'Submit', desc: 'Application submitted' },
              { step: '04', title: 'Success!', desc: 'Visa approved!' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-card p-3 md:p-5 rounded-xl md:rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 to-purple-300 mb-2 md:mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">{process.title}</h3>
                  <p className="text-xs text-gray-600 font-semibold">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Cards */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/home/slider-1.jpg"
            alt="Professional background"
            className="w-full h-full object-cover"
          />
          {/* White Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-white/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full font-bold mb-4 md:mb-6 text-sm md:text-base">
              <Star size={16} className="md:w-5 md:h-5 fill-current" />
              <span>Success Stories</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              What Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-5 md:p-8 rounded-2xl md:rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="md:w-5 md:h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 font-semibold text-sm md:text-lg mb-4 md:mb-6 italic">
                  "{testimonial.text}"
                </p>
                  <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-gray-200">
                    <div>
                      <div className="font-black text-gray-900 text-base md:text-lg">{testimonial.name}</div>
                      <div className="text-gray-600 font-semibold text-xs md:text-base">{testimonial.role}</div>
                    </div>
                    <div className="text-xs md:text-sm font-bold text-gray-500">{testimonial.country}</div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold & Impactful */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Ready to Start Your
              <br />
              <span className="text-blue-400">Dream Journey?</span>
            </h2>
            <p className="text-base md:text-2xl text-white/90 mb-8 md:mb-12 font-semibold">
              Don't wait! Your future starts today
            </p>
            
            <div className="flex flex-row gap-2 md:gap-4 justify-center">
              <Link
                to="/lets-start-your-journey"
                className="group inline-flex items-center justify-center bg-yellow-400 text-gray-900 hover:bg-yellow-500 hover:text-black px-3 py-2.5 md:px-8 md:py-4 rounded-lg md:rounded-xl font-bold text-xs md:text-base transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Sparkles size={14} className="md:w-5 md:h-5 mr-1 md:mr-2 group-hover:rotate-12 transition-transform" />
                <span>Get Free Consultation</span>
                <ArrowRight size={14} className="md:w-5 md:h-5 ml-1 md:ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
              
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;