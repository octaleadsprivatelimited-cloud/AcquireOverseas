import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Users, Mail, Phone, ArrowRight, MessageCircle, FileText, TrendingUp, Clock, Award, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updatePageSEO } from '../utils/seo';

const Tier2WorkVisaUK = () => {
  useEffect(() => {
    updatePageSEO(
      'Tier 2 Work Visa for UK - Expert Consultancy Services',
      'Comprehensive Tier 2 work visa services for UK. Expert guidance on UK work permits, sponsorship, and skilled worker visa applications from Hyderabad.',
      [
        'tier 2 work visa UK',
        'UK tier 2 visa',
        'tier 2 work permit UK',
        'UK work visa tier 2',
        'tier 2 visa UK consultants',
        'UK tier 2 sponsorship',
        'tier 2 visa application',
        'UK work visa consultants',
        'tier 2 general visa',
        'UK tier 2 skilled worker',
        'tier 2 visa requirements',
        'UK tier 2 work visa process',
        'tier 2 visa Hyderabad',
        'UK tier 2 immigration',
        'tier 2 work visa services'
      ]
    );
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm interested in UK Tier 2 Work Visa services. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    window.open(`https://wa.me/919533974711?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in UK Tier 2 Work Visa consultancy. Could you please provide more information?";
    window.open(`https://wa.me/919533974711?text=${encodeURIComponent(message)}`, '_blank');
  };

  const faqs = [
    {
      question: "What is the difference between Tier 2 and Skilled Worker visa?",
      answer: "Tier 2 (General) visa has been replaced by the Skilled Worker visa. The requirements and process are similar, but the new system offers more flexibility and lower salary thresholds for some occupations."
    },
    {
      question: "How many points do I need for a Skilled Worker visa?",
      answer: "You need 70 points total. This includes 20 points for a job offer from an approved sponsor, 20 points for a job at the appropriate skill level, 10 points for English language, and 20 points for meeting the salary threshold."
    },
    {
      question: "Can I bring my family on a Tier 2 visa?",
      answer: "Yes, your spouse/partner and children under 18 can apply as your dependents. They can work and study in the UK without restrictions."
    },
    {
      question: "How long does the Tier 2 visa process take?",
      answer: "Standard processing takes 3 weeks from outside the UK and 8 weeks from inside the UK. Priority and super priority services are available for faster processing."
    },
    {
      question: "Can I apply for permanent residence with a Tier 2 visa?",
      answer: "Yes, you can apply for Indefinite Leave to Remain (ILR) after 5 years of continuous residence in the UK on a Skilled Worker visa, subject to meeting other requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/services/word_visa.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-white/80 mb-6">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Tier 2 Work Visa for UK</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  Tier 2 Work Visa for UK
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  Your gateway to UK employment with the Skilled Worker visa (formerly Tier 2).
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg flex items-center"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Free Consultation
                  </button>
                  <a
                    href="#contact-form"
                    className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30"
                  >
                    Apply Now
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 }}
                className="hidden md:grid grid-cols-2 gap-4"
              >
                {[
                  { icon: TrendingUp, label: "Min. Salary", value: "£25,600" },
                  { icon: Clock, label: "Processing", value: "3-8 Weeks" },
                  { icon: Users, label: "Success Rate", value: "96%" },
                  { icon: Award, label: "ILR Pathway", value: "5 Years" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <stat.icon className="text-yellow-400 mb-2" size={28} />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">UK Tier 2 (General) Work Visa - Now Skilled Worker Visa</h2>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    The UK Tier 2 visa (now rebranded as Skilled Worker visa) allows skilled professionals with a job offer from a UK employer to live and work in the United Kingdom. Our expert consultants provide comprehensive guidance to help you navigate the application process successfully.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We assist with employer sponsorship verification, points-based assessment, document preparation, visa application filing, and family dependent visa support.
                  </p>
                </motion.div>

                {/* Eligibility Requirements */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white"
                >
                  <h2 className="text-3xl font-bold mb-6">Tier 2 Visa Requirements</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Valid job offer from a UK licensed sponsor",
                      "Certificate of Sponsorship (CoS) from employer",
                      "Job must be at required skill level (RQF Level 3 or above)",
                      "Minimum salary threshold (usually £25,600 or going rate)",
                      "Score 70 points under points-based system",
                      "English language proficiency (IELTS or equivalent)",
                      "Proof of maintenance funds (£1,270 for 28 days)",
                      "Clean criminal record certificate (if applicable)"
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start text-base">
                        <CheckCircle className="mr-2 flex-shrink-0 mt-0.5" size={18} />
                        <span>{requirement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Points Breakdown */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Points-Based System (70 Points Required)</h2>
                  <div className="space-y-3">
                    {[
                      { criteria: "Job offer from approved sponsor", points: "20 points" },
                      { criteria: "Job at appropriate skill level", points: "20 points" },
                      { criteria: "English language proficiency", points: "10 points" },
                      { criteria: "Salary £20,480 - £23,039", points: "0 points" },
                      { criteria: "Salary £23,040 - £25,599", points: "10 points" },
                      { criteria: "Salary £25,600 or above", points: "20 points" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg text-sm">
                        <span className="text-gray-700 font-medium">{item.criteria}</span>
                        <span className="text-indigo-600 font-bold">{item.points}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Tier 2 Visa</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Work in the UK for up to 5 years (extendable)",
                      "Bring your spouse/partner and children",
                      "Access to NHS healthcare",
                      "Path to Indefinite Leave to Remain (ILR) after 5 years",
                      "Pathway to British citizenship",
                      "Change jobs with another licensed sponsor",
                      "Travel in and out of the UK freely"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="text-indigo-600 mr-2 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-base">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Expert Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg p-6"
                  >
                    <div className="text-center mb-6">
                      <div className="relative mb-4">
                        <img
                          src={`${import.meta.env.BASE_URL}services/immigration.jpg`}
                          alt="Migration Expert"
                          className="w-full h-48 object-cover rounded-xl"
                        />
                        <div className="absolute top-2 right-2 bg-white rounded-full p-3 shadow-lg">
                          <img
                            src="/logo.png"
                            alt="GREAT Visa Network"
                            className="w-20 h-auto"
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Talk to a Migration Expert</h3>
                      <p className="text-gray-600 text-sm mb-4">Get personalized guidance for your UK Tier 2 visa application</p>
                    </div>

                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mb-3"
                    >
                      <MessageCircle className="mr-2" size={20} />
                      WhatsApp Us
                    </button>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Phone className="mr-2 text-indigo-600" size={18} />
                        <span>+91 9533974711</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail className="mr-2 text-indigo-600" size={18} />
                        <span className="text-xs">info@greatvisanetwork.com</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Key Benefits */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-6"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {[
                        { icon: Briefcase, text: "Employer Sponsorship" },
                        { icon: FileText, text: "Points Assessment" },
                        { icon: CheckCircle, text: "Application Support" },
                        { icon: Users, text: "Dependent Visa" }
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <benefit.icon className="text-indigo-600 mr-3 flex-shrink-0" size={20} />
                          <span className="text-sm font-medium">{benefit.text}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Application Process</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Eligibility Assessment", desc: "Evaluate your qualifications and points" },
                { step: "2", title: "Job Offer & Sponsorship", desc: "Secure job offer from licensed UK sponsor" },
                { step: "3", title: "Certificate of Sponsorship", desc: "Employer issues CoS with reference number" },
                { step: "4", title: "Document Preparation", desc: "Compile all required documents and evidence" },
                { step: "5", title: "Visa Application", desc: "Submit online application and biometrics" },
                { step: "6", title: "Decision & Approval", desc: "Receive visa decision (3-8 weeks)" },
                { step: "7", title: "Travel to UK", desc: "Collect BRP card and start your UK career" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`flex-shrink-0 text-indigo-600 transition-transform duration-300 ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                      size={24}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 bg-white rounded-xl shadow-lg p-6 md:p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Apply for UK Tier 2 Work Visa</h2>
                <p className="text-gray-600 mb-6">Fill out the form below and we'll assess your eligibility</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm" placeholder="Enter your full name" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm" placeholder="Your phone number" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message / Job Details</label>
                    <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={3} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm" placeholder="Tell us about your job offer, profession, and qualifications..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold text-base hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02] shadow-md flex items-center justify-center">
                    <span>Get Free Consultation</span>
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </form>

                <div className="mt-5 pt-5 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <Phone className="mr-2 text-indigo-600" size={18} />
                      <span>+91 9533974711</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-2 text-indigo-600" size={18} />
                      <span className="text-xs">info@greatvisanetwork.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="order-1 md:order-2">
                <img src={`${import.meta.env.BASE_URL}services/immigration.jpg`} alt="UK Tier 2 Migration" className="w-full h-56 md:h-full rounded-xl object-cover shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tier2WorkVisaUK;

