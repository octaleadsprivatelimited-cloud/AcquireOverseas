import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, ArrowRight } from 'lucide-react';
const Testimonials: React.FC = () => {

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'University of Toronto, Canada',
      text: 'Acquire Overseas Education transformed my dream of studying in Canada into reality. From university selection to visa processing, their team provided exceptional guidance. I\'m now pursuing my Master\'s in Computer Science at one of Canada\'s top universities. Their personalized approach and attention to detail made all the difference.',
      rating: 5,
      country: '🇨🇦',
      service: 'Study Abroad Programs'
    },
    {
      name: 'Rahul Kumar',
      location: 'University of Melbourne, Australia',
      text: 'I was overwhelmed by the application process, but Acquire Overseas Education made everything seamless. They helped me choose the perfect course, prepared my application documents, and guided me through the entire process. Within 3 months, I received admission to my dream university in Australia with a partial scholarship!',
      rating: 5,
      country: '🇦🇺',
      service: 'University Selection'
    },
    {
      name: 'Sunita Patel',
      location: 'Imperial College London, UK',
      text: 'The team at Acquire Overseas Education is truly exceptional. They helped me navigate the complex UK university application system, wrote compelling personal statements, and ensured all my documents were perfect. I\'m now studying Engineering at Imperial College London, and I couldn\'t be happier with my decision.',
      rating: 5,
      country: '🇬🇧',
      service: 'Application Support'
    },
    {
      name: 'Amit Singh',
      location: 'MIT, USA',
      text: 'Getting into MIT seemed impossible, but Acquire Overseas Education believed in me and helped me achieve it. Their expert guidance on course selection, application strategy, and essay writing was invaluable. I received a full scholarship and am now pursuing my PhD in Engineering at MIT. Thank you for making my dreams come true!',
      rating: 5,
      country: '🇺🇸',
      service: 'Course Selection'
    },
    {
      name: 'Deepika Reddy',
      location: 'Technical University of Munich, Germany',
      text: 'The education consultation service was incredibly helpful. They helped me understand my options, choose the right program in Germany, and navigate the application process. Their knowledge of European universities and their admission requirements is outstanding. I\'m now studying at TUM, one of Europe\'s top technical universities.',
      rating: 5,
      country: '🇩🇪',
      service: 'Education Consultation'
    },
    {
      name: 'Vikram Joshi',
      location: 'University of Auckland, New Zealand',
      text: 'Career counseling service exceeded my expectations. They not only helped me select the right university and course but also provided valuable insights into career prospects. Their guidance helped me choose a program that aligns perfectly with my career goals. I\'m now studying Business at the University of Auckland and loving every moment.',
      rating: 5,
      country: '🇳🇿',
      service: 'Career Counseling'
    },
    {
      name: 'Anjali Mehta',
      location: 'McGill University, Canada',
      text: 'I was confused about which course to choose for my Master\'s. The team at Acquire Overseas Education provided excellent career counseling and helped me understand which program would best suit my background and aspirations. Their course selection guidance was spot-on, and I\'m now thriving in my chosen field at McGill.',
      rating: 5,
      country: '🇨🇦',
      service: 'Course Selection'
    },
    {
      name: 'Rohan Desai',
      location: 'Stanford University, USA',
      text: 'The application support I received was outstanding. From essay writing to document preparation, every step was handled with professionalism. The team helped me present my profile in the best possible way, and I got accepted to Stanford with a scholarship. Their expertise in university applications is truly remarkable.',
      rating: 5,
      country: '🇺🇸',
      service: 'Application Support'
    },
    {
      name: 'Kavya Nair',
      location: 'University of Sydney, Australia',
      text: 'Acquire Overseas Education made my study abroad journey smooth and stress-free. They helped me with everything from university selection to visa processing. Their team was always available to answer my questions and provided constant support throughout. I\'m now studying at the University of Sydney and couldn\'t be happier!',
      rating: 5,
      country: '🇦🇺',
      service: 'Study Abroad Programs'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Students Placed', icon: CheckCircle },
    { number: '98%', label: 'Admission Success Rate', icon: Star },
    { number: '50+', label: 'Partner Universities', icon: CheckCircle },
    { number: '24/7', label: 'Student Support', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/home/slider-1.jpg"
            alt="Success Stories Background"
            className="w-full h-full object-cover object-top"
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Client Testimonials
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Real success stories from students who achieved their study abroad dreams with our expert guidance. From university selection to admission success, discover how we've helped thousands of students reach their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto pb-2 scrollbar-hide md:overflow-x-visible">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex-shrink-0 w-[85vw] md:w-auto"
              >
                <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                  {/* Quote Icon */}
                  <div className="absolute -top-3 md:-top-4 left-6 md:left-8 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Quote size={12} className="md:w-4 md:h-4 text-white" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="md:w-5 md:h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-600 mb-4 md:mb-6 italic leading-relaxed text-sm md:text-base">"{testimonial.text}"</p>
                  
                  {/* Service Badge */}
                  <div className="inline-block bg-blue-100 text-blue-700 text-[10px] md:text-xs font-semibold px-2 py-0.5 md:px-3 md:py-1 rounded-full mb-3 md:mb-4">
                    {testimonial.service}
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <div className="text-xl md:text-2xl mr-2 md:mr-3">{testimonial.country}</div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                        <div className="text-xs md:text-sm text-gray-600">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 bg-pattern-grid"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Write Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Success Story?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join thousands of successful students who achieved their study abroad dreams with our expert guidance. From top universities worldwide to scholarship success, let us help you create your own success story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/lets-start-your-journey"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={18} className="ml-2" />
              </a>
              
              <a
                href="/comprehensive-education-solutions"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <span>Explore Services</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;