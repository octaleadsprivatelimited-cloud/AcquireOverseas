import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail,
  Clock, 
  Send,
  CheckCircle,
  Sparkles,
  Shield,
  Award,
  Users,
  MessageCircle,
} from 'lucide-react';
const Contact: React.FC = () => {

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
      // Form submission disabled - contact form functionality removed
      // You can implement your own form handling here
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
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
      details: ['+91 95156 12909'],
      color: 'text-green-500',
      link: 'tel:+919515612909'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@acquireoverseas.in'],
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
      description: 'Get advice from certified education consultants.',
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
      question: 'How long does the university application process take?',
      answer: 'Processing times vary by university and country. Our consultants will provide you with accurate timelines based on your academic profile and chosen program.'
    },
    {
      question: 'What documents do I need?',
      answer: 'Document requirements depend on the university and destination country. We provide a comprehensive checklist during consultation.'
    },
    {
      question: 'Do you guarantee university admission?',
      answer: 'While we cannot guarantee admission, our 98% success rate reflects our expertise in preparing strong applications and matching students with suitable universities.'
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our fees vary based on the type of service. Contact us for a free consultation and personalized quote.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
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
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium mb-4 border border-white/30">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
              Get in touch with our expert team for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-10 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-xs font-medium mb-2">
              <Sparkles className="w-3 h-3 mr-1.5" />
              Why Contact Us
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Get Expert Guidance
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Our certified education consultants are here to help you navigate the complex world of study abroad with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
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
                        <option value="study-abroad">Study Abroad Programs</option>
                        <option value="university-selection">University Selection</option>
                        <option value="course-selection">Course Selection</option>
                        <option value="application-support">Application Support</option>
                        <option value="education-consultation">Education Consultation</option>
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
                <h3 className="text-2xl font-bold text-white mb-3">Contact Information</h3>
                <p className="text-white/90 text-base">We're here to help you every step of the way.</p>
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
                        info.link ? (
                          <a key={idx} href={info.link} className="text-white/80 hover:text-white transition-colors">
                            {detail}
                          </a>
                        ) : (
                          <p key={idx} className="text-white/80">{detail}</p>
                        )
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

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
              Find answers to common questions about our services and the study abroad process.
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
      <section className="py-10 md:py-12 relative overflow-hidden">
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
            <div className="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium mb-3 border border-white/30">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1.5" />
              Ready to Get Started?
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Don't Wait, <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Start Today</span>
            </h2>
            <p className="text-base md:text-lg text-blue-100 mb-5 max-w-2xl mx-auto">
              Contact us now and take the first step towards your dream destination.
            </p>
            
            
            {/* Trust Indicators */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1.5" />
                <span className="text-xs md:text-sm font-medium">SSL Secured</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1.5" />
                <span className="text-xs md:text-sm font-medium">98% Success Rate</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1.5" />
                <span className="text-xs md:text-sm font-medium">5000+ Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;