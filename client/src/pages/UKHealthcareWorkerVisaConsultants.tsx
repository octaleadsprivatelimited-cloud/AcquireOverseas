import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Mail, Phone, ArrowRight, MessageCircle, Stethoscope, Activity, Award, TrendingUp, ClipboardCheck, FileText, ShieldCheck, Building, Heart } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const UKHealthcareWorkerVisaConsultants = () => {
  useEffect(() => {
    updatePageSEO(
      'UK Healthcare Worker Visa Consultants Hyderabad',
      'Expert UK Healthcare Worker Visa consultants in Hyderabad. Assistance for nurses, doctors, healthcare professionals seeking UK health and care worker visa.',
      [
        'UK healthcare worker visa consultants',
        'UK health visa consultants Hyderabad',
        'UK nurse visa consultants',
        'UK medical visa consultants',
        'UK healthcare visa Hyderabad',
        'UK health and care visa',
        'UK nurse recruitment consultants',
        'UK doctor visa consultants',
        'healthcare visa UK',
        'UK medical professionals visa',
        'UK healthcare worker sponsorship',
        'UK nursing visa Hyderabad',
        'UK healthcare immigration',
        'health care visa UK consultants',
        'UK medical visa services'
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
    const whatsappMessage = `Hi, I'm interested in UK Healthcare Worker Visa consultancy. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
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
        <div className="absolute inset-0 bg-[url('/services/immigration.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-white/80 mb-6">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white">UK Healthcare Worker Visa</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  UK Healthcare Worker Visa Consultants
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  Join the UK's world-class healthcare system.
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
                    {[{label: 'Success Rate', value: '96%'}, {label: 'Placements', value: '600+'}, {label: 'NHS Trusts', value: '60+'}, {label: 'Processing', value: '2-4 wks'}].map((s, idx) => (
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
              {[{icon: Stethoscope, label: 'NHS Jobs'}, {icon: Award, label: 'Registration'}, {icon: TrendingUp, label: 'Fast-Track'}, {icon: Heart, label: 'Care Visa'}].map((it, idx) => (
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">UK Health and Care Worker Visa</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The UK Health and Care Worker visa is designed for medical professionals taking up eligible jobs in the NHS, an NHS supplier, or adult social care sector. As leading healthcare visa consultants, we provide specialized support to help you secure your position in the UK's healthcare system.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We offer comprehensive services including credential verification, NHS/NMC/GMC registration support, visa application processing, and family dependent visa assistance.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Stethoscope, title: "Credential Assessment", desc: "Verify your medical qualifications for UK" },
                  { icon: Activity, title: "Professional Registration", desc: "GMC, NMC, HCPC registration support" },
                  { icon: CheckCircle, title: "Fast-Track Visa", desc: "Faster processing for healthcare workers" },
                  { icon: Users, title: "Family Sponsorship", desc: "Bring your family to the UK" }
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
                className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Eligible Healthcare Roles</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "Doctors (All Specializations)",
                    "Registered Nurses (General & Specialist)",
                    "Midwives",
                    "Nursing Associates",
                    "Paramedics",
                    "Pharmacists",
                    "Dentists & Dental Hygienists",
                    "Physiotherapists",
                    "Occupational Therapists",
                    "Radiographers (Diagnostic & Therapeutic)",
                    "Social Workers",
                    "Care Workers & Home Care Workers",
                    "Senior Care Workers"
                  ].map((role, index) => (
                    <li key={index} className="flex items-center text-lg">
                      <CheckCircle className="mr-3 flex-shrink-0" size={22} />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
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
                    { icon: ClipboardCheck, title: 'Qualification Assessment', desc: 'Evaluate your medical credentials and eligibility' },
                    { icon: Building, title: 'Professional Registration', desc: 'Support with GMC/NMC/HCPC registration' },
                    { icon: FileText, title: 'Job Placement', desc: 'Connect with NHS and care sector employers' },
                    { icon: ShieldCheck, title: 'Visa Application', desc: 'Complete Health & Care Worker visa processing' },
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Visa Benefits</h2>
                <ul className="space-y-3">
                  {[
                    "Reduced visa application fee",
                    "Exempt from Immigration Health Surcharge",
                    "Faster visa processing (2-4 weeks)",
                    "Lower salary threshold (£23,200)",
                    "Bring spouse/partner and children",
                    "Pathway to settlement after 5 years"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <CheckCircle className="text-indigo-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
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
                    { q: 'What is the Health and Care Worker visa?', a: 'It\'s a special visa route for healthcare professionals with reduced fees, no health surcharge, and faster processing.' },
                    { q: 'Do I need professional registration?', a: 'Yes, you need registration with the appropriate UK professional body (GMC, NMC, HCPC, etc.) before starting work.' },
                    { q: 'Can you help with NHS job placement?', a: 'Yes, we connect healthcare professionals with NHS trusts and care providers across the UK.' },
                    { q: 'How long does the visa process take?', a: 'Typically 2-4 weeks, faster than standard Skilled Worker visa.' }
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
                  <div className="relative mb-4">
                    <img
                      src={`${import.meta.env.BASE_URL}services/immigration.jpg`}
                      alt="Healthcare Expert"
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
                  <h3 className="text-xl font-bold mb-2">Talk to Healthcare Visa Expert</h3>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Start Your UK Healthcare Career
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll guide you through the process
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Healthcare Role</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="Tell us about your healthcare qualifications and role..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-gray-900 py-3.5 rounded-lg font-semibold text-base hover:bg-yellow-300 transition-all duration-300 hover:scale-[1.02] shadow-md flex items-center justify-center"
                  >
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
                <img
                  src={`${import.meta.env.BASE_URL}services/immigration.jpg`}
                  alt="Professional migration consultation"
                  className="w-full h-56 md:h-full rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKHealthcareWorkerVisaConsultants;
