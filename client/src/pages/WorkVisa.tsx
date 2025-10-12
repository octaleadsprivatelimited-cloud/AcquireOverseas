import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Users, 
  Award,
  ArrowRight,
  Building,
  FileText,
  TrendingUp,
  Phone,
  MessageCircle,
  ClipboardCheck,
  Globe,
  Plane,
  ShieldCheck,
  Mail,
} from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const WorkVisa: React.FC = () => {
  useEffect(() => {
    updatePageSEO(
      'Work Visa Consultants Hyderabad - Work Permit Services',
      'Expert work visa consultants in Hyderabad for UK, Canada, Australia, USA, Germany, and other countries. Job placement assistance, work permit processing, and skilled migration services.',
      [
        'work visa consultants Hyderabad',
        'work permit consultants',
        'overseas job consultants',
        'work visa services',
        'employment visa consultants',
        'UK work visa Hyderabad',
        'Canada work permit',
        'Australia work visa',
        'USA work visa consultants',
        'Germany work permit',
        'skilled worker visa',
        'work visa processing',
        'job placement visa',
        'overseas employment visa',
        'international work visa',
        'work permit services India',
        'foreign employment visa',
        'work visa documentation',
        'overseas jobs Hyderabad'
      ]
    );
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm interested in International Work Visas. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    window.open(`https://wa.me/919533974711?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleScrollToAssessment = () => {
    const node = document.getElementById('assessment');
    if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const features = [
    {
      icon: Building,
      title: 'Job Placement',
      description: 'We connect you with top employers worldwide and help you find the right job opportunity.'
    },
    {
      icon: FileText,
      title: 'Visa Processing',
      description: 'Expert guidance through the entire work visa application process with high success rates.'
    },
    {
      icon: Award,
      title: 'Skill Assessment',
      description: 'Professional evaluation of your skills and qualifications for international opportunities.'
    },
    {
      icon: Users,
      title: 'Relocation Support',
      description: 'Comprehensive support for your relocation, including housing, banking, and settlement services.'
    }
  ];

  const requirements = [
    'Valid passport with at least 6 months validity',
    'Job offer letter from a recognized employer',
    'Educational certificates and transcripts',
    'Professional experience certificates',
    'Skill assessment report (if required)',
    'Medical examination report',
    'Police clearance certificate',
    'Proof of financial stability',
    'Visa application form',
    'Passport-sized photographs'
  ];

  const industries = [
    { name: 'Information Technology', jobs: '5000+', demand: 'High', icon: '💻' },
    { name: 'Healthcare', jobs: '3000+', demand: 'Very High', icon: '🏥' },
    { name: 'Engineering', jobs: '4000+', demand: 'High', icon: '⚙️' },
    { name: 'Finance', jobs: '2500+', demand: 'Medium', icon: '💰' },
    { name: 'Education', jobs: '2000+', demand: 'Medium', icon: '📚' },
    { name: 'Construction', jobs: '3500+', demand: 'High', icon: '🏗️' }
  ];

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
              <span className="text-white">International Work Visas</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  International Work Visas
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  Advance your career with global opportunities. End-to-end recruitment and visa support.
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
                    {[{label: 'Success Rate', value: '98%'}, {label: 'Countries', value: '50+'}, {label: 'Years Experience', value: '15+'}, {label: 'Placements', value: '2k+'}].map((s, idx) => (
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
              {[{icon: Globe, label: 'Global Employers'}, {icon: Award, label: 'Skill Assessment'}, {icon: TrendingUp, label: 'Career Growth'}, {icon: Plane, label: 'Relocation Support'}].map((it, idx) => (
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">International Work Visa Services</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  From job placement to visa processing, we provide end-to-end support for your international career journey. Our team connects you with employers and manages the entire visa process for a seamless move abroad.
            </p>
          </motion.div>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-lifted p-6 hover:shadow-neon transition"
                  >
                    <feature.icon size={40} className="text-indigo-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

              {/* Requirements */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
                <p className="text-lg text-gray-600 mb-6">We'll help you gather and organize everything properly.</p>
                <div className="grid md:grid-cols-2 gap-4">
                {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </motion.div>

              {/* Industries */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">High-Demand Industries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {industries.map((industry) => (
                    <div key={industry.name} className="bg-gray-50 rounded-xl p-6">
                      <div className="text-center mb-4">
                        <div className="text-5xl mb-2">{industry.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900">{industry.name}</h3>
                </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Available Jobs</span>
                    <span className="font-semibold text-gray-900">{industry.jobs}</span>
                  </div>
                        <div className="flex justify-between text-sm items-center">
                    <span className="text-gray-600">Demand Level</span>
                          <span className={`font-semibold px-2 py-0.5 rounded-full text-xs ${
                      industry.demand === 'Very High' ? 'bg-red-100 text-red-800' :
                      industry.demand === 'High' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {industry.demand}
                    </span>
                  </div>
                </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process Timeline */}
          <motion.div
                initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
                <div className="relative border-l-2 border-indigo-100 pl-6">
                  {[
                    { icon: ClipboardCheck, title: 'Profile Assessment', desc: 'Free evaluation of your skills and career goals' },
                    { icon: Users, title: 'Job Matching', desc: 'Connect you with suitable job opportunities' },
                    { icon: Building, title: 'Employer Coordination', desc: 'Facilitate interviews and job offers' },
                    { icon: ShieldCheck, title: 'Visa Processing', desc: 'Expert guidance through the visa application process' },
                    { icon: Plane, title: 'Relocation Support', desc: 'Pre-departure orientation and settlement assistance' }
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

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="divide-y divide-gray-200">
                  {[
                    { q: 'Do I need a job offer for a work visa?', a: 'Many countries require a valid job offer; we help with job matching and employer coordination.' },
                    { q: 'How long does visa processing take?', a: 'Typically 3-6 weeks after submission; varies by country and case specifics.' },
                    { q: 'Can you help with relocation?', a: 'Yes, we provide pre-departure orientation and post-landing settlement support.' },
                    { q: 'What are the top industries in demand?', a: 'IT, healthcare, engineering, and construction currently show high demand globally.' }
                  ].map((item, idx) => (
                    <div key={idx} className="py-4">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full flex items-center justify-between text-left"
                      >
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
                  <div className="relative mb-4">
                    <img
                      src="/services/word_visa.jpg"
                      alt="Migration Expert"
                      className="w-full h-40 rounded-xl object-cover ring-4 ring-indigo-50"
                    />
                    <div className="absolute top-2 right-2 bg-white rounded-full p-3 shadow-lg">
                      <img
                        src="/logo.png"
                        alt="GREAT Visa Network"
                        className="w-20 h-auto"
                      />
                    </div>
                  </div>
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

      {/* Assessment Form Section */}
      <section id="assessment" className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              className="bg-white rounded-xl shadow-2xl p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 text-center">Start Your International Work Journey</h2>
              <p className="text-sm text-gray-600 text-center mb-6">Fill out the form below for a free assessment</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Message / Preferred Country</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm"
                    placeholder="Tell us about your profession, experience, and preferred destination..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold text-base hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <span>Get Free Assessment</span>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkVisa;
