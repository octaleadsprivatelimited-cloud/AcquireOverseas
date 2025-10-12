import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, CheckCircle, Users, Mail, Phone, ArrowRight, MessageCircle, Laptop, Zap, TrendingUp, Clock, Award, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updatePageSEO } from '../utils/seo';

const IrelandITProfessionalWorkVisaConsultancy = () => {
  useEffect(() => {
    updatePageSEO(
      'Ireland IT Professional Work Visa Consultancy Hyderabad',
      'Best Ireland IT professional work visa consultancy in Hyderabad. Expert assistance for Ireland tech visa, software engineer visa, and IT work permits.',
      [
        'Ireland IT visa consultants Hyderabad',
        'Ireland IT professional visa',
        'Ireland tech visa consultants',
        'Ireland software engineer visa',
        'Ireland IT work visa',
        'Ireland tech work permit',
        'Ireland IT job visa',
        'Ireland technology visa',
        'Ireland developer visa',
        'Ireland IT immigration',
        'Ireland tech professional visa',
        'Ireland IT visa services',
        'Ireland work visa IT sector',
        'Ireland tech migration',
        'best Ireland IT visa consultants'
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
    const whatsappMessage = `Hi, I'm interested in Ireland IT Professional Work Visa consultancy. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    window.open(`https://wa.me/919533974711?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in Ireland IT Professional Work Visa consultancy. Could you please provide more information?";
    window.open(`https://wa.me/919533974711?text=${encodeURIComponent(message)}`, '_blank');
  };

  const faqs = [
    {
      question: "What is the Critical Skills Employment Permit?",
      answer: "The Critical Skills Employment Permit is for highly skilled workers in strategic sectors. It offers faster processing (2-3 weeks), immediate family reunification, and a path to permanent residence after 2 years."
    },
    {
      question: "What are the salary requirements for IT professionals?",
      answer: "For Critical Skills permits, the minimum salary is €32,000 per year for most IT roles, or €64,000 for roles not on the Critical Skills list. General Employment Permits require €30,000 minimum."
    },
    {
      question: "Can I bring my family to Ireland?",
      answer: "Yes, Critical Skills permit holders can bring their spouse/partner and dependent children immediately. They can apply for Dependent/Partner/Join Family permits."
    },
    {
      question: "How long does the visa process take?",
      answer: "Critical Skills permits typically take 2-3 weeks to process. General Employment Permits take 8-12 weeks. Additional time is needed for visa stamping and relocation."
    },
    {
      question: "Which tech companies are hiring in Ireland?",
      answer: "Major tech employers include Google, Facebook, Microsoft, Apple, Amazon, LinkedIn, Twitter, Salesforce, and hundreds of startups and scale-ups in Dublin's Silicon Docks."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/services/word_visa.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-emerald-900/80 to-green-900/90"></div>

        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-white/80 mb-6">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Ireland IT Professional Work Visa</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  Ireland IT Professional Work Visa
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  Launch your tech career in Ireland's Silicon Docks with Europe's leading tech companies.
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
                  { icon: TrendingUp, label: "Salary Range", value: "€40K-100K+" },
                  { icon: Clock, label: "Processing", value: "2-3 Weeks" },
                  { icon: Users, label: "Success Rate", value: "98%" },
                  { icon: Award, label: "PR Pathway", value: "2 Years" }
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Ireland IT Professional Work Visa</h2>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Ireland has emerged as Europe's tech hub, home to Google, Facebook, Microsoft, Apple, and hundreds of thriving tech startups. Our specialized consultancy helps IT professionals secure work permits and build successful careers in Ireland's booming technology sector.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We provide comprehensive support including job search assistance, Critical Skills Employment Permit application, General Employment Permit processing, and relocation guidance.
                  </p>
                </motion.div>

                {/* IT Roles */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl shadow-lg p-8 text-white overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200')] bg-cover bg-center opacity-20"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-6">IT Roles We Support</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Software Engineers / Developers",
                      "Full Stack Developers",
                      "Data Scientists / Data Engineers",
                      "DevOps Engineers",
                      "Cloud Architects (AWS, Azure, GCP)",
                      "Cybersecurity Specialists",
                      "IT Project Managers",
                      "Product Managers",
                      "UI/UX Designers",
                      "QA / Test Engineers",
                      "Database Administrators",
                      "Network Engineers"
                    ].map((role, index) => (
                      <div key={index} className="flex items-start text-base">
                        <CheckCircle className="mr-2 flex-shrink-0 mt-0.5" size={18} />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                  </div>
                </motion.div>

                {/* Why Ireland */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Ireland?</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Home to European HQs of Google, Facebook, Microsoft, Apple",
                      "English-speaking country with vibrant tech ecosystem",
                      "Competitive salaries (€40,000 - €100,000+)",
                      "Path to permanent residence in 5 years",
                      "EU access and opportunities",
                      "High quality of life and safety"
                    ].map((reason, index) => (
                      <div key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-base">{reason}</span>
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
                      <p className="text-gray-600 text-sm mb-4">Get personalized guidance for your Ireland IT visa application</p>
                    </div>

                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center mb-3"
                    >
                      <MessageCircle className="mr-2" size={20} />
                      WhatsApp Us
                    </button>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Phone className="mr-2 text-green-600" size={18} />
                        <span>+91 9533974711</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail className="mr-2 text-green-600" size={18} />
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
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-6"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {[
                        { icon: Code, text: "Tech Skills Assessment" },
                        { icon: Laptop, text: "Job Placement Support" },
                        { icon: Zap, text: "Fast-Track Processing" },
                        { icon: Users, text: "Family Permit Support" }
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <benefit.icon className="text-green-600 mr-3 flex-shrink-0" size={20} />
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
                { step: "1", title: "Tech Profile Assessment", desc: "Evaluate your skills and experience for Irish market" },
                { step: "2", title: "Job Search Support", desc: "Connect with tech companies and recruiters" },
                { step: "3", title: "Employment Offer", desc: "Secure job offer from Irish employer" },
                { step: "4", title: "Permit Application", desc: "Apply for Critical Skills or General Employment Permit" },
                { step: "5", title: "Visa Processing", desc: "Complete visa application and documentation" },
                { step: "6", title: "Relocation Support", desc: "Assistance with moving to Ireland" },
                { step: "7", title: "Stamp 1 Registration", desc: "Register with immigration authorities in Ireland" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
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
                      className={`flex-shrink-0 text-green-600 transition-transform duration-300 ${
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
      <section id="contact-form" className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 bg-white rounded-xl shadow-lg p-6 md:p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Start Your Ireland Tech Journey</h2>
                <p className="text-gray-600 mb-6">Fill out the form below and we'll guide you through the process</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition text-sm" placeholder="Enter your full name" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition text-sm" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition text-sm" placeholder="Your phone number" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message / Tech Skills</label>
                    <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={3} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition text-sm" placeholder="Tell us about your tech skills and experience..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold text-base hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-[1.02] shadow-md flex items-center justify-center">
                    <span>Get Free Consultation</span>
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </form>

                <div className="mt-5 pt-5 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <Phone className="mr-2 text-green-600" size={18} />
                      <span>+91 9533974711</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-2 text-green-600" size={18} />
                      <span className="text-xs">info@greatvisanetwork.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="order-1 md:order-2">
                <img src={`${import.meta.env.BASE_URL}services/immigration.jpg`} alt="Ireland IT Migration" className="w-full h-56 md:h-full rounded-xl object-cover shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IrelandITProfessionalWorkVisaConsultancy;

