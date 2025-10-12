import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, CheckCircle, Mail, Phone, ArrowRight, MessageCircle, Award, TrendingUp, Plane, FileText, ClipboardCheck, ShieldCheck, Target } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const SkilledMigration = () => {
  useEffect(() => {
    updatePageSEO(
      'Skilled Migration Consultants Hyderabad - PR Visa Services',
      'Expert skilled migration consultants in Hyderabad for Australia, Canada, UK PR visas. Professional assistance for skilled worker migration, points-based immigration, and permanent residency.',
      [
        'skilled migration consultants Hyderabad',
        'PR visa consultants',
        'permanent residency consultants',
        'skilled worker migration',
        'Australia PR consultants Hyderabad',
        'Canada PR consultants',
        'UK PR visa services',
        'skilled migration services',
        'points-based immigration',
        'permanent residency visa',
        'skilled immigration consultants',
        'PR application services',
        'skilled migration Hyderabad',
        'immigration PR services',
        'best PR consultants Hyderabad'
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

  const handleScrollToAssessment = () => {
    const node = document.getElementById('assessment');
    if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm interested in Skilled Migration services. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    window.open(`https://wa.me/919533974711?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const countries = [
    {
      name: "Australia",
      programs: ["Skilled Independent (189)", "Skilled Nominated (190)", "Skilled Work Regional (491)", "Employer Nomination (186)"],
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      name: "Canada",
      programs: ["Express Entry", "Provincial Nominee Program", "Federal Skilled Worker", "Canadian Experience Class"],
      gradient: "from-red-600 to-red-800"
    },
    {
      name: "United Kingdom",
      programs: ["Skilled Worker Visa", "Health & Care Worker", "Global Talent Visa", "High Potential Individual"],
      gradient: "from-blue-600 to-indigo-800"
    },
    {
      name: "Germany",
      programs: ["EU Blue Card", "Skilled Workers Immigration", "Job Seeker Visa", "ICT Permit"],
      gradient: "from-gray-700 to-gray-900"
    },
    {
      name: "New Zealand",
      programs: ["Skilled Migrant Category", "Skilled Migrant (Residence)", "Work to Residence", "Essential Skills Work"],
      gradient: "from-slate-600 to-blue-900"
    },
    {
      name: "Ireland",
      programs: ["Critical Skills Permit", "General Employment Permit", "ICT Permit", "Intra-Company Transfer"],
      gradient: "from-green-600 to-emerald-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/home/slider-3.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/80 to-blue-900/80"></div>

        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-white/80 mb-6">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white">Skilled Migration</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  Skilled Migration Services
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  Migrate to your dream country with expert guidance and end-to-end support.
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
                    {[{label: 'Success Rate', value: '92%'}, {label: 'Countries', value: '10+'}, {label: 'Years Experience', value: '15+'}, {label: 'Cases Approved', value: '5k+'}].map((s, idx) => (
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
              {[{icon: Globe, label: 'Global Programs'}, {icon: Award, label: 'Skills Assessment'}, {icon: TrendingUp, label: 'Points Boost'}, {icon: Plane, label: 'End-to-End Support'}].map((it, idx) => (
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Global Skilled Migration Consultancy
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  As leading skilled migration consultants, we help professionals migrate to top countries through various skilled migration programs. Our expert team provides end-to-end support for permanent residence applications, ensuring you make informed decisions about your international migration journey.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We offer comprehensive services including eligibility assessment, skill assessment, documentation support, points calculation, EOI submission, visa lodgment, and post-migration settlement assistance.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Globe, title: "Multiple Countries", desc: "Access skilled migration programs worldwide" },
                  { icon: Award, title: "Skills Assessment", desc: "Professional evaluation and guidance" },
                  { icon: TrendingUp, title: "Points Optimization", desc: "Maximize your migration points" },
                  { icon: Plane, title: "End-to-End Support", desc: "Complete migration assistance" }
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

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Skilled Migration Programs by Country</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {countries.map((country, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`relative overflow-hidden bg-gradient-to-br ${country.gradient} rounded-2xl shadow-xl p-8 text-white`}
                  >
                    <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                    <h3 className="relative text-2xl font-bold mb-4">{country.name}</h3>
                    <ul className="relative space-y-3">
                      {country.programs.map((program, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="mr-2 flex-shrink-0" size={20} />
                          <span>{program}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Skilled Migration Services</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "Free eligibility assessment for multiple countries",
                    "Skills assessment and qualification evaluation",
                    "Points calculation and optimization strategies",
                    "Document verification and preparation",
                    "Expression of Interest (EOI) preparation",
                    "Profile enhancement and improvement guidance",
                    "Visa application lodgment and tracking",
                    "English language test preparation (IELTS/PTE)",
                    "Medical and police clearance assistance",
                    "State nomination and sponsorship support",
                    "Job search assistance in destination country",
                    "Pre-departure orientation and guidance",
                    "Post-landing settlement support",
                    "Family migration applications"
                  ].map((service, index) => (
                    <li key={index} className="flex items-center text-lg">
                      <CheckCircle className="mr-3 flex-shrink-0" size={22} />
                      <span>{service}</span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How the Process Works</h2>
                <div className="relative border-l-2 border-indigo-100 pl-6">
                  {[
                    { icon: ClipboardCheck, title: 'Eligibility Assessment', desc: 'Profile evaluation and points calculation' },
                    { icon: FileText, title: 'Skills Assessment', desc: 'Documentation review and authority submission' },
                    { icon: Target, title: 'EOI & Nomination', desc: 'Expression of Interest and state nomination' },
                    { icon: ShieldCheck, title: 'Visa Lodgment', desc: 'Application submission and case management' },
                    { icon: Plane, title: 'Pre-Departure & Settlement', desc: 'Orientation and post-landing support' }
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">High-Demand Professions</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "IT & Software Engineers",
                    "Healthcare Professionals",
                    "Engineers (All Disciplines)",
                    "Accountants",
                    "Teachers",
                    "Nurses & Midwives",
                    "Project Managers",
                    "Architects",
                    "Scientists & Researchers",
                    "Tradespeople",
                    "Business Analysts",
                    "Marketing Professionals",
                    "Chefs & Hospitality",
                    "Construction Managers",
                    "Legal Professionals"
                  ].map((profession, index) => (
                    <div key={index} className="flex items-start text-gray-700">
                      <CheckCircle className="text-indigo-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span>{profession}</span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Migration Services?</h2>
                <ul className="space-y-4">
                  {[
                    "15+ years of experience in skilled migration",
                    "Thousands of successful migration cases",
                    "Registered migration agents and consultants",
                    "Expert knowledge of global immigration laws",
                    "Personalized migration strategy for each client",
                    "Transparent pricing with no hidden costs",
                    "Regular updates throughout the process",
                    "High success rate in visa approvals",
                    "Post-migration support and guidance",
                    "Multi-country expertise"
                  ].map((reason, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <CheckCircle className="text-indigo-600 mr-3 flex-shrink-0 mt-1" size={24} />
                      <span className="text-lg">{reason}</span>
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
                    { q: 'How do I know if I am eligible for skilled migration?', a: 'We conduct a comprehensive eligibility assessment based on your age, education, work experience, language proficiency, and more.' },
                    { q: 'Which country should I choose?', a: 'It depends on your profile and goals. We advise on the best-fit destinations considering your profession and prospects.' },
                    { q: 'How long does the process take?', a: 'Timelines vary by country and program. Typically 6-12 months; we provide realistic timelines after your assessment.' },
                    { q: 'Do you help with job search and settlement?', a: 'Yes, we support pre-departure orientation, job search guidance, and post-landing settlement assistance.' }
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

            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <img
                    src="/images.webp"
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

                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h4 className="font-semibold mb-3">Quick Eligibility Highlights</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    {[
                      'Age between 18-45 years',
                      'Recognized qualifications',
                      'Relevant skilled work experience',
                      'English proficiency (IELTS/PTE)',
                      'Sufficient funds (where required)'
                    ].map((pt, i) => (
                      <li key={i} className="flex items-start"><CheckCircle size={16} className="text-indigo-600 mr-2 mt-0.5" />{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="assessment" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Medium-weight form card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 bg-white rounded-xl shadow-lg p-6 md:p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Start Your Migration Journey
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below for a free migration assessment
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Preferred Country</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="Tell us about your profession, qualifications, and preferred migration destination..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-gray-900 py-3.5 rounded-lg font-semibold text-base hover:bg-yellow-300 transition-all duration-300 hover:scale-[1.02] shadow-md flex items-center justify-center"
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

              {/* Professional migration image */}
              <div className="order-1 md:order-2">
                <img
                  src="/services/immigration.jpg"
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

export default SkilledMigration;

