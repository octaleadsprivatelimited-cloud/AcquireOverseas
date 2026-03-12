import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  GraduationCap, 
  CheckCircle, 
  Shield, 
  Users,
  ArrowRight,
  BookOpen,
  FileText,
  Star
} from 'lucide-react';

const StudyVisa: React.FC = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mwpaproy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: 'Study Abroad Programs Inquiry',
          _source: 'Study Abroad Programs Page',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: BookOpen,
      title: 'University Selection',
      description: 'We help you choose the right university and program based on your academic background and career goals.'
    },
    {
      icon: FileText,
      title: 'Application Support',
      description: 'Complete assistance with university applications, including essay writing and document preparation.'
    },
    {
      icon: Shield,
      title: 'Visa Processing',
      description: 'Expert guidance through the entire visa application process with high success rates.'
    },
    {
      icon: Users,
      title: 'Interview Preparation',
      description: 'Comprehensive interview preparation sessions to boost your confidence and chances of success.'
    }
  ];

  const requirements = [
    'Valid passport with at least 6 months validity',
    'Letter of acceptance from a recognized educational institution',
    'Proof of financial support (bank statements, sponsorship letters)',
    'Academic transcripts and certificates',
    'English language proficiency test results (IELTS/TOEFL)',
    'Medical examination report',
    'Statement of purpose',
    'Passport-sized photographs',
    'Visa application form',
    'Proof of accommodation arrangements'
  ];

  const countries = [
    { name: 'Canada', image: '/country/canada.jpg', universities: '100+', duration: '2-4 weeks' },
    { name: 'United States', image: '/country/usa.jpg', universities: '500+', duration: '3-5 weeks' },
    { name: 'United Kingdom', image: '/country/uk.jpg', universities: '150+', duration: '2-4 weeks' },
    { name: 'Australia', image: '/country/australia.jpg', universities: '80+', duration: '2-4 weeks' },
    { name: 'Germany', image: '/country/Germany.jpg', universities: '200+', duration: '3-6 weeks' },
    { name: 'France', image: '/country/Europe.jpeg', universities: '120+', duration: '3-5 weeks' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Study Abroad Programs - Best Universities in USA, UK, Canada, Australia"
        description="Study abroad programs at top universities in USA, UK, Canada, Australia, Germany. Expert guidance for admissions, scholarships, visa applications. 98% success rate. Free consultation in Hyderabad."
        keywords="study abroad programs, study in USA, study in UK, study in Canada, study in Australia, study in Germany, international study programs, overseas education programs, study abroad universities, student visa programs"
        canonicalUrl="https://acquireoverseas.in/study-abroad-programs"
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/study_visa.jpg"
            alt="Study Visa"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center top' }}
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <GraduationCap size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Study Abroad Programs</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Unlock your potential with world-class education abroad. We help you get admitted to 
              top universities worldwide with our expert guidance, university selection, and comprehensive support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Study Abroad Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From university selection to admission and visa approval, we provide end-to-end support for your study abroad journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Required Documents</h2>
              <p className="text-lg text-gray-600 mb-8">
                To ensure a smooth university application and visa process, you'll need to prepare the following documents. 
                We'll help you gather and organize everything properly.
              </p>
              
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">98% Success Rate</h3>
                <p className="text-gray-600">Our university admissions and study visa applications have an outstanding success rate</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Processing Time</span>
                  <span className="font-semibold text-gray-900">2-4 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Countries Covered</span>
                  <span className="font-semibold text-gray-900">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Universities</span>
                  <span className="font-semibold text-gray-900">1000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Support</span>
                  <span className="font-semibold text-gray-900">24/7</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Popular Study Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help students get admitted to top universities in these popular destinations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img 
                    src={country.image} 
                    alt={country.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{country.name}</h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Universities</span>
                      <span className="font-semibold text-gray-900">{country.universities}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Processing Time</span>
                      <span className="font-semibold text-gray-900">{country.duration}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center text-yellow-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 text-center">Highly recommended destination</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Introduction to Study Abroad Programs</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Studying abroad is a transformative experience that opens doors to world-class education, diverse cultures, and exceptional career opportunities. At Acquire Overseas Education, we specialize in helping students from India realize their dreams of studying at top universities in the USA, UK, Canada, Australia, Germany, and other premier destinations.
                </p>
                <p>
                  Our comprehensive study abroad programs are designed to provide end-to-end support, from initial consultation and university selection to application submission and visa processing. With over 15 years of experience and a 98% success rate, we have helped more than 5,000 students secure admissions to prestigious universities worldwide.
                </p>
                <p>
                  Whether you're interested in undergraduate programs, postgraduate studies, research opportunities, or professional certifications, our expert team guides you through every step of the process. We understand that each student has unique academic goals, financial considerations, and career aspirations, which is why we provide personalized guidance tailored to your specific needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Comprehensive Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic, proven approach to ensure your university application and study visa process is successful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { step: '01', title: 'Initial Consultation', description: 'Free assessment of your profile and study goals' },
              { step: '02', title: 'University Selection', description: 'Help you choose the right university and program' },
              { step: '03', title: 'Application Support', description: 'Complete assistance with university applications' },
              { step: '04', title: 'Visa Processing', description: 'Expert guidance through the student visa application process' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Detailed Process Breakdown</h3>
            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Step 1: Initial Consultation & Profile Assessment</h4>
                <p>We begin with a comprehensive free consultation where we assess your academic background, career goals, financial situation, and personal preferences. Our experienced counselors analyze your profile to identify the best study destinations and programs that align with your aspirations.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Step 2: University & Course Selection</h4>
                <p>Based on your profile assessment, we help you shortlist universities and courses that match your academic qualifications and career objectives. We provide detailed information about university rankings, program curriculum, faculty expertise, campus facilities, and career outcomes. Learn more about our <Link to="/university-selection" className="text-primary-600 hover:text-primary-700 font-semibold underline">university selection services</Link> and <Link to="/course-selection" className="text-primary-600 hover:text-primary-700 font-semibold underline">course selection guidance</Link>.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Step 3: Application Preparation & Submission</h4>
                <p>Our team assists you with every aspect of the application process, including personal statement writing, essay preparation, recommendation letters, transcript verification, and portfolio development. We ensure all applications are submitted before deadlines and meet the highest standards. For comprehensive support, explore our <Link to="/application-support" className="text-primary-600 hover:text-primary-700 font-semibold underline">application support services</Link>.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Step 4: Visa Application & Interview Preparation</h4>
                <p>Once you receive admission offers, we guide you through the student visa application process, including document preparation, financial proof organization, and interview preparation. Our visa experts ensure your application is complete and increases your chances of approval.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Eligibility Requirements</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Eligibility requirements for study abroad programs vary by country, university, and program level. However, there are common criteria that most institutions look for:
                </p>
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Requirements</h4>
                    <p>Most universities require a minimum GPA of 3.0 (or equivalent) for undergraduate programs and 3.5+ for postgraduate programs. Specific subject prerequisites may apply for certain courses like engineering, medicine, or law.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">English Language Proficiency</h4>
                    <p>International students must demonstrate English proficiency through standardized tests such as IELTS (typically 6.0-7.5), TOEFL (80-100), or PTE Academic (58-70). Requirements vary by university and program.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Financial Requirements</h4>
                    <p>Students must provide proof of sufficient funds to cover tuition fees and living expenses for at least the first year of study. This typically ranges from $20,000 to $50,000 depending on the destination and program.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Age Requirements</h4>
                    <p>Most universities accept students who are at least 17-18 years old for undergraduate programs. There's usually no upper age limit for postgraduate programs, though some professional programs may have specific requirements.</p>
                  </div>
                </div>
                <p>
                  Our team helps you understand and meet all eligibility requirements for your chosen destination and program. We provide guidance on improving your profile if needed and help you identify alternative options if you don't meet certain criteria. For detailed information about specific programs, explore our <Link to="/university-selection" className="text-primary-600 hover:text-primary-700 font-semibold underline">university selection services</Link> and <Link to="/course-selection" className="text-primary-600 hover:text-primary-700 font-semibold underline">course selection guidance</Link>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Application Timeline</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">12-18 Months Before Intake</h4>
                    <p className="text-gray-700">Research universities and programs, prepare for standardized tests (IELTS/TOEFL, SAT/GRE/GMAT), and begin gathering academic documents.</p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">9-12 Months Before Intake</h4>
                    <p className="text-gray-700">Take standardized tests, finalize university shortlist, start preparing application documents (personal statements, essays, recommendation letters).</p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">6-9 Months Before Intake</h4>
                    <p className="text-gray-700">Submit university applications before deadlines (varies by country: January for UK, December-March for USA, varies for others), prepare financial documents.</p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">3-6 Months Before Intake</h4>
                    <p className="text-gray-700">Receive admission offers, accept offer and pay deposit, apply for student visa, complete medical examinations, arrange accommodation.</p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">1-3 Months Before Intake</h4>
                    <p className="text-gray-700">Receive visa approval, book flights, attend pre-departure orientation, finalize travel arrangements, prepare for departure.</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-600 italic">
                  Note: Timelines vary by country and university. Our team provides specific timelines based on your chosen destination and intake period.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our study abroad programs and services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'How much does it cost to study abroad?',
                answer: 'Costs vary significantly by country and program. On average, annual tuition ranges from $10,000-$50,000, with living expenses adding $12,000-$25,000 per year. We help you identify affordable options and scholarship opportunities to reduce costs.'
              },
              {
                question: 'Can I work while studying abroad?',
                answer: 'Yes, most countries allow international students to work part-time (typically 20 hours per week during term time) and full-time during holidays. This helps offset living costs and provides valuable work experience.'
              },
              {
                question: 'What if I don\'t meet the English language requirements?',
                answer: 'Many universities offer English language preparation courses or conditional admission programs. We can help you find programs that allow you to improve your English skills while preparing for your degree program.'
              },
              {
                question: 'How long does the entire process take?',
                answer: 'The complete process from initial consultation to visa approval typically takes 12-18 months. This includes university research, test preparation, application submission, admission processing, and visa application.'
              },
              {
                question: 'Do you help with scholarships?',
                answer: (
                  <>
                    Yes, we provide comprehensive scholarship guidance, including identifying available scholarships, preparing scholarship applications, and maximizing your chances of receiving financial aid. Learn more about{' '}
                    <Link to="/scholarships-to-study-abroad" className="text-primary-600 hover:text-primary-700 font-semibold underline">
                      scholarship opportunities
                    </Link>{' '}
                    and how we can help you secure funding for your studies.
                  </>
                )
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/frequently-asked-questions"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All FAQs
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 bg-white rounded-xl shadow-lg p-6 md:p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Start Your Study Abroad Journey</h2>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Country / Course</label>
                    <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" placeholder="Tell us about your study plans and preferred country..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full ${isSubmitted ? 'bg-green-500' : 'bg-yellow-400'} text-gray-900 py-3.5 rounded-lg font-semibold text-base hover:bg-yellow-300 transition-all duration-300 hover:scale-[1.02] shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2" size={18} />
                        <span>Submitted Successfully!</span>
                      </>
                    ) : (
                      <>
                        <span>Get Free Consultation</span>
                        <ArrowRight className="ml-2" size={18} />
                      </>
                    )}
                  </button>
                </form>

              </motion.div>

              <div className="order-1 md:order-2">
                <img src={`${import.meta.env.BASE_URL}services/study_visa.jpg`} alt="Study Visa" className="w-full h-56 md:h-full rounded-xl object-cover shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyVisa;
