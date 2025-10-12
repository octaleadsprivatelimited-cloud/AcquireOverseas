import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Award,
  Users,
  MessageCircle,
} from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const Contact: React.FC = () => {
  useEffect(() => {
    updatePageSEO(
      'Contact Us - GREAT Visa Network Hyderabad',
      'Get in touch with GREAT Visa Network for visa consultation and immigration services in Hyderabad. Contact our expert visa consultants for UK, Canada, Australia, USA, and Europe visa assistance.',
      [
        'contact visa consultants Hyderabad',
        'visa consultation booking',
        'immigration consultants contact',
        'GREAT Visa Network contact',
        'visa services Hyderabad contact',
        'free visa consultation',
        'visa consultation appointment',
        'immigration office Hyderabad',
        'visa consultant phone number',
        'visa enquiry',
        'immigration services contact',
        'visa assistance Hyderabad',
        'overseas consultancy contact',
        'study visa consultation',
        'work visa enquiry',
        'visa application help'
      ]
    );
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/myznnzyo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['Hyderabad, Telangana, India'],
      color: 'text-red-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 9533974711', '+91 7036295334', 'Available 24/7'],
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@greatvisanetwork.com'],
      color: 'text-blue-500'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
      color: 'text-purple-500'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure & Confidential',
      description: 'Your personal information is protected with bank-level security.',
      color: 'text-green-500'
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Get advice from certified immigration consultants.',
      color: 'text-amber-500'
    },
    {
      icon: Sparkles,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 24 hours.',
      color: 'text-purple-500'
    }
  ];

  const faqItems = [
    {
      question: 'How long does the visa process take?',
      answer: 'Processing times vary by visa type and country. Our consultants will provide you with accurate timelines based on your specific case.'
    },
    {
      question: 'What documents do I need?',
      answer: 'Document requirements depend on the type of visa and destination country. We provide a comprehensive checklist during consultation.'
    },
    {
      question: 'Do you guarantee visa approval?',
      answer: 'While we cannot guarantee approval, our 98% success rate reflects our expertise in preparing strong applications.'
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our fees vary based on the type of service. Contact us for a free consultation and personalized quote.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="/home/slider-1.jpg"
            alt="Contact Background"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/30">
              <MessageCircle className="w-5 h-5 mr-2" />
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let's Start Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Ready to take the first step towards your dream destination? Contact our expert team for a free consultation.
            </p>
            <div className="flex flex-row gap-2 md:gap-4 justify-center">
              <a
                href="tel:+919533974711"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-3 py-2.5 md:px-5 md:py-3 rounded-lg md:rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                <span className="whitespace-nowrap">Call Now: +91 9533974711</span>
              </a>
              <a
                href="https://wa.me/919533974711"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-3 py-2.5 md:px-5 md:py-3 rounded-lg md:rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Why Contact Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
              Get Expert <span className="text-blue-600">Guidance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified consultants are here to help you navigate the complex world of immigration with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 hover:bg-white/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        title="Select Service"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="study-visa">Study Visa</option>
                        <option value="work-visa">Work Visa</option>
                        <option value="tourist-visa">Tourist Visa</option>
                        <option value="family-visa">Family Visa</option>
                        <option value="business-visa">Business Visa</option>
                        <option value="immigration-consultation">Immigration Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">Get In Touch</h3>
                <p className="text-white/90 text-lg">We're here to help you every step of the way.</p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-white/80">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <a
                  href="https://wa.me/919533974711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                  <ArrowRight size={20} className="ml-2" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
              Got <span className="text-blue-600">Questions?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and the immigration process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Don't Wait, <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Start Today</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Every day you wait is a day lost. Contact us now and take the first step towards your dream destination.
            </p>
            
            <div className="flex flex-row gap-2 md:gap-6 justify-center items-center">
              <a
                href="tel:+919533974711"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-3 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                <span className="whitespace-nowrap">Call Now: +91 9533974711</span>
                <ArrowRight size={16} className="ml-1 md:ml-2 md:w-5 md:h-5" />
              </a>
              
              <a
                href="https://wa.me/919533974711"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-3 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                WhatsApp Us
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">SSL Secured</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">98% Success Rate</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">5000+ Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;