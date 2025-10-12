import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Users, Mail, Phone, ArrowRight, MessageCircle, Award, TrendingUp, Clock, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updatePageSEO } from '../utils/seo';

const NetherlandsSkilledWorkerVisa = () => {
  useEffect(() => {
    updatePageSEO(
      'Netherlands Skilled Worker Visa Consultants Hyderabad',
      'Expert Netherlands skilled worker visa consultants in Hyderabad. Professional assistance for Dutch work permits, highly skilled migrant visa, and Netherlands immigration.',
      [
        'Netherlands visa consultants Hyderabad',
        'Netherlands skilled worker visa',
        'Dutch work visa consultants',
        'Netherlands work permit',
        'Netherlands highly skilled migrant visa',
        'Netherlands immigration consultants',
        'Dutch skilled visa Hyderabad',
        'Netherlands work visa services',
        'Netherlands job visa',
        'Dutch work permit consultants',
        'Netherlands skilled migration',
        'Netherlands visa application',
        'Dutch immigration services',
        'Netherlands work visa Hyderabad',
        'best Netherlands visa consultants'
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
    const whatsappMessage = `Hi, I'm interested in Netherlands Skilled Worker Visa services. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    window.open(`https://wa.me/919533974711?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in Netherlands Skilled Worker Visa consultancy. Could you please provide more information?";
    window.open(`https://wa.me/919533974711?text=${encodeURIComponent(message)}`, '_blank');
  };

  const faqs = [
    {
      question: "What is the minimum salary requirement for Netherlands HSM visa?",
      answer: "The minimum monthly salary is €5,008 for applicants aged 30 and above, and €3,672 for those under 30 years old. These amounts are subject to annual updates."
    },
    {
      question: "How long does the Netherlands work visa process take?",
      answer: "The processing time typically ranges from 2-4 weeks for the work permit and an additional 2-4 weeks for the MVV/residence permit, depending on your nationality and application completeness."
    },
    {
      question: "Can I bring my family to the Netherlands?",
      answer: "Yes, as a highly skilled migrant, you can bring your spouse/partner and dependent children to the Netherlands. They can apply for dependent residence permits."
    },
    {
      question: "Do I need to speak Dutch to work in the Netherlands?",
      answer: "For most skilled positions, especially in international companies, English is sufficient. However, learning Dutch can enhance your integration and career opportunities."
    },
    {
      question: "What is the 30% tax ruling benefit?",
      answer: "The 30% ruling allows your employer to give you 30% of your gross salary tax-free, significantly increasing your net income. It's available for highly skilled migrants for up to 5 years."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/services/word_visa.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-red-900/80 to-orange-900/90"></div>

        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-white/80 mb-6">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Netherlands Skilled Worker Visa</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  Netherlands Skilled Worker Visa
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  Build your career in the Netherlands with the Highly Skilled Migrant program and enjoy excellent work-life balance.
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
                  { icon: TrendingUp, label: "High Salaries", value: "€5,000+" },
                  { icon: Clock, label: "Processing", value: "4-8 Weeks" },
                  { icon: Users, label: "Success Rate", value: "95%" },
                  { icon: Award, label: "Tax Benefit", value: "30% Ruling" }
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Netherlands Highly Skilled Migrant Visa</h2>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    The Netherlands offers excellent opportunities for skilled professionals through its Highly Skilled Migrant (HSM) program. Our expert consultants help you navigate the Dutch work permit system and secure employment with recognized sponsors in the Netherlands.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We provide comprehensive support including employer verification, salary requirement assessment, documentation preparation, MVV/residence permit application, and relocation assistance.
                  </p>
                </motion.div>

                {/* Eligibility Requirements */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl shadow-lg p-8 text-white"
                >
                  <h2 className="text-3xl font-bold mb-6">Eligibility Requirements</h2>
                  <ul className="space-y-3">
                    {[
                      "Job offer from IND-recognized sponsor in Netherlands",
                      "Minimum monthly salary (€5,008 for 30+ years, €3,672 for under 30)",
                      "Relevant educational qualifications or work experience",
                      "Valid passport and clean criminal record",
                      "Employer must have sponsorship license",
                      "Employment contract meeting Dutch labor conditions",
                      "Health insurance coverage in Netherlands",
                      "Proof of accommodation in Netherlands"
                    ].map((requirement, index) => (
                      <li key={index} className="flex items-start text-base">
                        <CheckCircle className="mr-3 flex-shrink-0 mt-0.5" size={20} />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* In-Demand Professions */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">In-Demand Professions in Netherlands</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "IT Professionals & Software Engineers",
                      "Data Scientists & Analysts",
                      "Engineers (Mechanical, Electrical, Civil)",
                      "Healthcare Professionals",
                      "Financial Analysts & Accountants",
                      "Marketing & Sales Managers",
                      "Logistics & Supply Chain Specialists",
                      "Architects & Urban Planners",
                      "Scientists & Researchers",
                      "Teachers & Lecturers"
                    ].map((profession, index) => (
                      <div key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-base">{profession}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Why Netherlands */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Work in the Netherlands?</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "High quality of life and work-life balance",
                      "Competitive salaries and 30% tax ruling for expats",
                      "English widely spoken in business environment",
                      "Access to entire EU for travel and work",
                      "Excellent healthcare and education system",
                      "Progressive and multicultural society",
                      "Path to permanent residence in 5 years",
                      "Strong economy with global companies"
                    ].map((reason, index) => (
                      <div key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={18} />
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
                      <p className="text-gray-600 text-sm mb-4">Get personalized guidance for your Netherlands visa application</p>
                    </div>

                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center mb-3"
                    >
                      <MessageCircle className="mr-2" size={20} />
                      WhatsApp Us
                    </button>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Phone className="mr-2 text-orange-600" size={18} />
                        <span>+91 9533974711</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail className="mr-2 text-orange-600" size={18} />
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
                    className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg p-6"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {[
                        { icon: Briefcase, text: "Job Placement Support" },
                        { icon: Award, text: "Eligibility Assessment" },
                        { icon: CheckCircle, text: "Permit Processing" },
                        { icon: Users, text: "Family Reunification" }
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <benefit.icon className="text-orange-600 mr-3 flex-shrink-0" size={20} />
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
                { step: "1", title: "Initial Consultation", desc: "Discuss your qualifications and career goals" },
                { step: "2", title: "Eligibility Assessment", desc: "Verify salary requirements and qualifications" },
                { step: "3", title: "Employer Matching", desc: "Connect with IND-recognized sponsors" },
                { step: "4", title: "Document Preparation", desc: "Compile all required documents and certificates" },
                { step: "5", title: "Work Permit Application", desc: "Submit application to IND" },
                { step: "6", title: "MVV/Residence Permit", desc: "Apply for entry visa and residence permit" },
                { step: "7", title: "Relocation Support", desc: "Assistance with moving to the Netherlands" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
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
                      className={`flex-shrink-0 text-orange-600 transition-transform duration-300 ${
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
      <section id="contact-form" className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-orange-900 to-red-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 bg-white rounded-xl shadow-lg p-6 md:p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Start Your Netherlands Career</h2>
                <p className="text-gray-600 mb-6">Fill out the form below for a free eligibility assessment</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition text-sm" placeholder="Enter your full name" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition text-sm" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition text-sm" placeholder="Your phone number" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message / Profession</label>
                    <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={3} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition text-sm" placeholder="Tell us about your profession, qualifications, and work experience..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold text-base hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:scale-[1.02] shadow-md flex items-center justify-center">
                    <span>Get Free Consultation</span>
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </form>

                <div className="mt-5 pt-5 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <Phone className="mr-2 text-orange-600" size={18} />
                      <span>+91 9533974711</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-2 text-orange-600" size={18} />
                      <span className="text-xs">info@greatvisanetwork.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="order-1 md:order-2">
                <img src={`${import.meta.env.BASE_URL}services/immigration.jpg`} alt="Netherlands Migration" className="w-full h-56 md:h-full rounded-xl object-cover shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetherlandsSkilledWorkerVisa;

