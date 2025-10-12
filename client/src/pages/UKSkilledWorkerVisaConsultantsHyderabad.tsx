import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Users, Mail, Phone, MapPin, ArrowRight, MessageCircle, Award, Globe, TrendingUp, ClipboardCheck, FileText, ShieldCheck, Building } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const UKSkilledWorkerVisaConsultantsHyderabad = () => {
  useEffect(() => {
    updatePageSEO(
      'UK Skilled Worker Visa Consultants in Hyderabad',
      'Expert UK Skilled Worker Visa consultants in Hyderabad. Get professional assistance for UK work visa, skilled worker visa application, job sponsorship, and immigration services.',
      [
        'UK skilled worker visa consultants Hyderabad',
        'UK work visa consultants Hyderabad',
        'UK skilled visa Hyderabad',
        'UK work permit consultants',
        'UK immigration consultants Hyderabad',
        'UK skilled worker visa processing',
        'UK job visa Hyderabad',
        'UK skilled migration consultants',
        'UK work visa services Hyderabad',
        'UK visa consultants',
        'skilled worker visa UK',
        'UK employment visa Hyderabad',
        'UK sponsored work visa',
        'UK tier 2 skilled worker visa',
        'UK work visa application Hyderabad',
        'best UK visa consultants Hyderabad'
      ]
    );
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm interested in UK Skilled Worker Visa consultancy in Hyderabad. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    window.open(`https://wa.me/919533974711?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleScrollToAssessment = () => {
    const node = document.getElementById('assessment');
    if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/services/word_visa.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/80 to-blue-900/80"></div>

        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-white/80 mb-6">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white">UK Skilled Worker Visa - Hyderabad</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  UK Skilled Worker Visa Consultants in Hyderabad
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  Your trusted partner for UK work visa from Hyderabad.
                </motion.p>
                <div className="flex flex-row gap-2 md:gap-3">
                  <button
                    onClick={handleScrollToAssessment}
                    className="bg-yellow-400 text-gray-900 px-4 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
                  >
                    <ClipboardCheck className="mr-1 md:mr-2" size={18} />
                    Free Assessment
                  </button>
                  <a
                    href="tel:+919533974711"
                    className="glass-effect px-4 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="mr-1 md:mr-2" size={18} />
                    Call Expert
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="glass-effect rounded-2xl p-6 shadow-neon-lg">
                  <div className="grid grid-cols-2 gap-4">
                    {[{label: 'Success Rate', value: '94%'}, {label: 'Cases Approved', value: '800+'}, {label: 'Years Experience', value: '15+'}, {label: 'Industries', value: '20+'}].map((s, idx) => (
                      <div key={idx} className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-extrabold">{s.value}</div>
                        <div className="text-sm text-white/80">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              {[{icon: Globe, label: 'UK Employers'}, {icon: Award, label: 'Skills Assessment'}, {icon: TrendingUp, label: 'Career Growth'}, {icon: Briefcase, label: 'Job Placement'}].map((it, idx) => (
                <div key={idx} className="glass-effect rounded-xl py-3 px-4 text-white/90 flex items-center gap-2 hover:bg-white/15 transition">
                  <it.icon size={18} />
                  <span className="text-sm">{it.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">UK Skilled Worker Visa Consultancy in Hyderabad</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Based in Hyderabad, we are the premier UK Skilled Worker Visa consultants helping professionals from Telangana and Andhra Pradesh secure employment and work visas in the United Kingdom. Our expert team has successfully assisted hundreds of skilled workers in various industries to migrate to the UK.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We provide end-to-end support including job search assistance, CV optimization, employer sponsorship guidance, visa application processing, and relocation support.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Briefcase, title: "Job Placement Support", desc: "Connect with UK sponsors and employers" },
                  { icon: Award, title: "Skills Assessment", desc: "Evaluate eligibility for skilled worker visa" },
                  { icon: CheckCircle, title: "Visa Processing", desc: "Complete documentation and application support" },
                  { icon: Users, title: "Family Visa Support", desc: "Bring your family to the UK" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-lifted p-6 hover:shadow-neon transition"
                  >
                    <benefit.icon className="text-indigo-600 mb-4" size={40} />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">Skilled Occupations We Support</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "IT Professionals & Software Engineers",
                    "Healthcare Workers (Doctors, Nurses)",
                    "Engineers (All Disciplines)",
                    "Accountants & Financial Analysts",
                    "Marketing & Sales Professionals",
                    "Project Managers",
                    "Teachers & Lecturers",
                    "Architects & Designers",
                    "Scientists & Researchers",
                    "Skilled Tradespeople"
                  ].map((occupation, index) => (
                    <li key={index} className="flex items-center text-lg">
                      <CheckCircle className="mr-3 flex-shrink-0" size={22} />
                      <span>{occupation}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
                <div className="relative border-l-2 border-indigo-100 pl-6">
                  {[
                    { icon: ClipboardCheck, title: 'Profile Assessment', desc: 'Evaluate your skills and eligibility' },
                    { icon: Building, title: 'Job Matching', desc: 'Connect with UK licensed sponsors' },
                    { icon: FileText, title: 'Documentation', desc: 'Prepare complete visa documentation' },
                    { icon: ShieldCheck, title: 'Visa Filing', desc: 'Submit application and track status' },
                    { icon: Users, title: 'Relocation Support', desc: 'Pre-departure and settlement assistance' }
                  ].map((step, idx) => (
                    <div key={idx} className="mb-8 group">
                      <div className="absolute -left-[11px] mt-2 w-5 h-5 rounded-full bg-indigo-600 ring-4 ring-indigo-100 group-hover:scale-110 transition" />
                      <div className="flex items-start gap-3">
                        <step.icon className="text-indigo-600 mt-0.5" size={22} />
                        <div>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                          <p className="text-gray-600">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Hyderabad Office</h2>
                <div className="flex items-start">
                  <MapPin className="text-indigo-600 mr-4 flex-shrink-0" size={32} />
                  <div>
                    <p className="text-lg text-gray-700 mb-2">
                      <strong>GREAT Visa Network - Hyderabad Office</strong>
                    </p>
                    <p className="text-gray-600">
                      Hyderabad, Telangana 500034
                    </p>
                    <p className="text-gray-600 mt-2">
                      Office Hours: Mon-Sat, 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="divide-y divide-gray-200">
                  {[
                    { q: 'Do I need a job offer for UK Skilled Worker Visa?', a: 'Yes, you need a valid job offer from a UK licensed sponsor with a Certificate of Sponsorship.' },
                    { q: 'Can you help with job placement?', a: 'Yes, we connect professionals with UK employers and licensed sponsors across various industries.' },
                    { q: 'How long does the visa process take?', a: 'Typically 3-8 weeks after submission. We provide realistic timelines after your assessment.' },
                    { q: 'Can I bring my family?', a: 'Yes, we assist with dependent visa applications for your spouse and children.' }
                  ].map((item, idx) => (
                    <div key={idx} className="py-4">
                      <button type="button" onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)} className="w-full flex items-center justify-between text-left">
                        <span className="font-semibold text-gray-900">{item.q}</span>
                        <span className="text-indigo-600">{openFaqIndex === idx ? '-' : '+'}</span>
                      </button>
                      {openFaqIndex === idx && (
                        <p className="mt-2 text-gray-600">{item.a}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <img
                    src={`${import.meta.env.BASE_URL}services/word_visa.jpg`}
                    alt="Migration Expert"
                    className="w-full h-40 rounded-xl object-cover mb-4 ring-4 ring-indigo-50"
                  />
                  <h3 className="text-xl font-bold mb-2">Talk to a Migration Expert</h3>
                  <p className="text-gray-600 mb-4">Get a free profile evaluation within 24 hours.</p>
                  <div className="flex flex-col gap-3">
                    <button onClick={handleScrollToAssessment} className="bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-500 transition flex items-center justify-center">
                      <ClipboardCheck size={18} className="mr-2" />
                      Free Assessment
                    </button>
                    <a href="https://wa.me/919533974711" target="_blank" rel="noreferrer noopener" className="bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-400 transition flex items-center justify-center">
                      <MessageCircle size={18} className="mr-2" />
                      Chat on WhatsApp
                    </a>
                    <a href="tel:+919533974711" className="bg-white border border-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:border-gray-300 transition flex items-center justify-center">
                      <Phone size={18} className="mr-2" />
                      +91 9533974711
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="assessment" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 bg-white rounded-xl shadow-lg p-6 md:p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Start Your UK Career Journey</h2>
                <p className="text-gray-600 mb-6">Fill out the form below for a free consultation</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" placeholder="Enter your full name" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" placeholder="Your phone number" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Profession / Skills</label>
                    <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" placeholder="Tell us about your profession, skills, and work experience..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-yellow-400 text-gray-900 py-3.5 rounded-lg font-semibold text-base hover:bg-yellow-300 transition-all duration-300 hover:scale-[1.02] shadow-md flex items-center justify-center">
                    <span>Get Free Consultation</span>
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-600">
                    <div className="flex items-center">
                      <Phone className="mr-2 text-indigo-600" size={20} />
                      <span>+91 9533974711</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-2 text-indigo-600" size={20} />
                      <span>info@greatvisanetwork.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="order-1 md:order-2">
                <img src={`${import.meta.env.BASE_URL}services/businessvisa.jpg`} alt="UK Skilled Worker - Hyderabad" className="w-full h-56 md:h-full rounded-xl object-cover shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKSkilledWorkerVisaConsultantsHyderabad;

