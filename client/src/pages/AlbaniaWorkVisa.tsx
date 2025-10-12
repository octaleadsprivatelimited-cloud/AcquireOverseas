import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  CheckCircle, 
  Users, 
  Mail, 
  Phone, 
  ArrowRight, 
  MessageCircle, 
  ClipboardCheck,
  FileText,
  ShieldCheck,
  Home,
  Utensils,
  Clock,
  Euro,
  MapPin,
  Globe,
  TrendingUp
} from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const AlbaniaWorkVisa = () => {
  useEffect(() => {
    updatePageSEO(
      'Albania Work Visa Consultants Hyderabad',
      'Albania work visa consultants in Hyderabad. Expert assistance for Albania work permits, employment visa, and job opportunities in Albania for various positions.',
      [
        'Albania work visa consultants',
        'Albania work permit Hyderabad',
        'Albania job visa',
        'Albania employment visa',
        'Albania work visa services',
        'Albania immigration consultants',
        'Albania visa Hyderabad',
        'work visa Albania',
        'Albania work opportunities',
        'Albania visa application',
        'Albania work permit services',
        'Albania job consultants',
        'Albania employment opportunities',
        'Albania visa processing',
        'best Albania visa consultants'
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
    const whatsappMessage = `Hi, I'm interested in Albania Work Visa. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    window.open(`https://wa.me/919533974711?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleScrollToAssessment = () => {
    const node = document.getElementById('assessment');
    if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openPositions = [
    { category: "GNM", positions: ["General Nursing Staff", "Ward Nurses", "ICU Nurses", "Emergency Nurses", "Operation Theatre Nurses"] },
    { category: "ANM", positions: ["Auxiliary Nursing Midwife", "Community Health Workers", "Primary Health Care Nurses", "Maternity Nurses"] },
    { category: "IT", positions: ["Software Developers", "Web Developers", "Database Administrators", "Network Engineers", "System Administrators", "IT Support Specialists"] },
    { category: "NON IT", positions: [
      "Forklift Operator",
      "Shovel Operator",
      "Food Delivery",
      "Courier Delivery",
      "Construction Helper",
      "Agriculture Helpers",
      "Waiter",
      "Dishwasher Cleaners",
      "Factory Helper",
      "Kitchen Helpers",
      "Welder (Arc & TIG & MIG)",
      "Furniture Carpenter",
      "Auto Denter",
      "Auto Electrician",
      "Car Mechanics",
      "Mason",
      "Spray Painter"
    ]}
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/services/word_visa.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-800/80 to-red-900/90"></div>

        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-white/80 mb-6">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white">Albania Work Visa</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  Albania Work Visa
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  Start your European career journey in Albania with competitive salaries and excellent benefits.
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleScrollToAssessment}
                    className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
                  >
                    <ClipboardCheck className="mr-2" size={20} />
                    Apply Now
                  </button>
                  <a
                    href="tel:+919533974711"
                    className="glass-effect px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="mr-2" size={20} />
                    Call Expert
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="glass-effect rounded-2xl p-6 shadow-neon-lg">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {label: 'Salary Range', value: '€500-900'},
                      {label: 'Processing Time', value: '60 Days'},
                      {label: 'Age Limit', value: '20-45'},
                      {label: 'Open Positions', value: '17+'}
                    ].map((s, idx) => (
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
              {[
                {icon: Home, label: 'Accommodation'},
                {icon: Utensils, label: 'Food Provided'},
                {icon: Clock, label: '8 Hours/Day'},
                {icon: Euro, label: 'Euro Salary'}
              ].map((it, idx) => (
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
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Work in Albania - Gateway to Europe</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Albania offers excellent opportunities for skilled and semi-skilled workers looking to build their careers in Europe. With competitive salaries, provided accommodation and food, and a clear path to European work experience, Albania is becoming a popular destination for international workers.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We provide complete support for your Albania work visa application, from job placement to visa processing and pre-departure orientation.
                </p>
              </motion.div>

              {/* Open Positions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl shadow-xl p-8 md:p-12 text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Open Positions</h2>
                <div className="space-y-8">
                  {openPositions.map((category, catIndex) => (
                    <div key={catIndex} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold mb-4 text-yellow-300">{category.category}</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {category.positions.map((position, posIndex) => (
                          <div key={posIndex} className="flex items-center text-base">
                            <CheckCircle className="mr-2 flex-shrink-0" size={18} />
                            <span>{position}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Terms & Conditions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Users, title: "Age Requirement", desc: "20-45 years" },
                    { icon: FileText, title: "Passport", desc: "ECR & ECNR passport accepted" },
                    { icon: Home, title: "Accommodation", desc: "Provided by employer" },
                    { icon: Utensils, title: "Food", desc: "Meals provided" },
                    { icon: Clock, title: "Working Hours", desc: "8 hours/day, 6 days/week with OT" },
                    { icon: Euro, title: "Salary", desc: "€500 to €900 per month" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <item.icon className="text-red-600 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-xl border-l-4 border-red-600">
                  <p className="text-gray-700">
                    <strong>Processing Time:</strong> 60 Days
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Note:</strong> Other rules and regulations as per Albania labor laws apply.
                  </p>
                </div>
              </motion.div>

              {/* Application Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Process</h2>
                <div className="relative border-l-2 border-red-100 pl-6">
                  {[
                    { icon: ClipboardCheck, title: 'Initial Assessment', desc: 'Submit your profile and choose your preferred job position' },
                    { icon: Briefcase, title: 'Job Matching', desc: 'We match you with suitable employers in Albania' },
                    { icon: FileText, title: 'Documentation', desc: 'Prepare and verify all required documents' },
                    { icon: ShieldCheck, title: 'Visa Processing', desc: 'Submit work permit and visa application' },
                    { icon: Globe, title: 'Pre-Departure', desc: 'Orientation and travel arrangements' }
                  ].map((step, idx) => (
                    <div key={idx} className="mb-8 group">
                      <div className="absolute -left-[11px] mt-2 w-5 h-5 rounded-full bg-red-600 ring-4 ring-red-100 group-hover:scale-110 transition" />
                      <div className="flex items-start gap-3">
                        <step.icon className="text-red-600 mt-0.5" size={22} />
                        <div>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                          <p className="text-gray-600">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Albania?</h2>
                <ul className="space-y-4">
                  {[
                    "Gateway to Europe with growing economy",
                    "Competitive salaries in Euros",
                    "Free accommodation and meals provided",
                    "Overtime opportunities for extra income",
                    "Safe and welcoming environment",
                    "Beautiful Mediterranean country",
                    "Gain European work experience",
                    "Clear employment contracts and worker rights"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-1" size={24} />
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
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
                    { q: 'What is the salary range for these positions?', a: 'Salaries range from €500 to €900 per month depending on the position and experience. Accommodation and food are provided free of cost.' },
                    { q: 'How long does the visa processing take?', a: 'The complete processing time is approximately 60 days from document submission to visa approval.' },
                    { q: 'Are accommodation and food really provided?', a: 'Yes, employers provide free accommodation and meals as part of the employment package.' },
                    { q: 'Can I apply with an ECR passport?', a: 'Yes, both ECR and ECNR passport holders can apply for Albania work visa.' }
                  ].map((item, idx) => (
                    <div key={idx} className="py-4">
                      <button 
                        type="button" 
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)} 
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-gray-900">{item.q}</span>
                        <span className="text-red-600">{openFaqIndex === idx ? '-' : '+'}</span>
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
                      src={`${import.meta.env.BASE_URL}services/word_visa.jpg`}
                      alt="Albania Work Visa"
                      className="w-full h-40 rounded-xl object-cover ring-4 ring-red-50"
                    />
                    <div className="absolute top-2 right-2 bg-white rounded-full p-3 shadow-lg">
                      <img
                        src="/logo.png"
                        alt="GREAT Visa Network"
                        className="w-20 h-auto"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Talk to Our Expert</h3>
                  <p className="text-gray-600 mb-4">Get free consultation and start your Albania work journey.</p>
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={handleScrollToAssessment} 
                      className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-500 transition flex items-center justify-center"
                    >
                      <ClipboardCheck size={18} className="mr-2" />
                      Apply Now
                    </button>
                    <a 
                      href="https://wa.me/919533974711" 
                      target="_blank" 
                      rel="noreferrer noopener" 
                      className="bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-400 transition flex items-center justify-center"
                    >
                      <MessageCircle size={18} className="mr-2" />
                      Chat on WhatsApp
                    </a>
                    <a 
                      href="tel:+919533974711" 
                      className="bg-white border border-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:border-gray-300 transition flex items-center justify-center"
                    >
                      <Phone size={18} className="mr-2" />
                      +91 9533974711
                    </a>
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    {[
                      { icon: MapPin, label: "Location", value: "Albania, Europe" },
                      { icon: Euro, label: "Currency", value: "Euro (€)" },
                      { icon: Clock, label: "Work Week", value: "6 days" },
                      { icon: TrendingUp, label: "Career Growth", value: "Excellent" }
                    ].map((fact, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <fact.icon className="text-red-600" size={20} />
                        <div className="flex-1">
                          <div className="text-sm text-gray-600">{fact.label}</div>
                          <div className="font-semibold text-gray-900">{fact.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="assessment" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-red-900 to-red-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 bg-white rounded-xl shadow-lg p-6 md:p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Apply for Albania Work Visa</h2>
                <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition" 
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition" 
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition" 
                      placeholder="Your phone number" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Position / Message</label>
                    <textarea 
                      required 
                      value={formData.message} 
                      onChange={(e) => setFormData({...formData, message: e.target.value})} 
                      rows={4} 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition" 
                      placeholder="Tell us about your preferred job position, experience, and qualifications..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-yellow-400 text-gray-900 py-3.5 rounded-lg font-semibold text-base hover:bg-yellow-300 transition-all duration-300 hover:scale-[1.02] shadow-md flex items-center justify-center"
                  >
                    <span>Submit Application</span>
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-600">
                    <div className="flex items-center">
                      <Phone className="mr-2 text-red-600" size={20} />
                      <span>+91 9533974711</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-2 text-red-600" size={20} />
                      <span>info@greatvisanetwork.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="order-1 md:order-2">
                <img 
                  src={`${import.meta.env.BASE_URL}services/word_visa.jpg`} 
                  alt="Albania Work Visa" 
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

export default AlbaniaWorkVisa;

