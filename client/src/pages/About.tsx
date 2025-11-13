import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Heart, 
  Target, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Award,
  Star,
  UserCircle,
  Lightbulb,
  Rocket
} from 'lucide-react';

const About: React.FC = () => {

  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our interactions and services.',
      gradient: 'from-red-500 to-pink-500',
      iconBg: 'bg-gradient-to-br from-red-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, ensuring the best outcomes for our clients.',
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Our clients\' success is our success. We put their needs at the center of everything we do.',
      gradient: 'from-green-500 to-emerald-500',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We continuously adapt and innovate to provide cutting-edge education consultancy solutions.',
      gradient: 'from-purple-500 to-indigo-500',
      iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-500'
    }
  ];

  const achievements = [
    {
      number: '5000+',
      label: 'Successful Applications',
      description: 'We have successfully helped thousands of students get admitted to top universities',
      icon: CheckCircle,
      color: 'text-emerald-500'
    },
    {
      number: '98%',
      label: 'Success Rate',
      description: 'Our high success rate reflects our expertise and dedication',
      icon: Award,
      color: 'text-amber-500'
    },
    {
      number: '50+',
      label: 'Countries Covered',
      description: 'We provide study abroad services for universities in over 50 countries worldwide',
      icon: Globe,
      color: 'text-blue-500'
    },
    {
      number: '15+',
      label: 'Years Experience',
      description: 'Over a decade of experience in overseas education consultancy and student services',
      icon: Star,
      color: 'text-purple-500'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Certified Experts',
      description: 'Our team consists of certified education consultants with years of experience.',
      color: 'text-green-500'
    },
    {
      icon: Sparkles,
      title: 'Personalized Service',
      description: 'Every student receives personalized attention and tailored education solutions.',
      color: 'text-purple-500'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Our 98% success rate speaks to our commitment to excellence.',
      color: 'text-amber-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="/home/slider-1.jpg"
            alt="About Background"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Sparkles className="w-5 h-5 mr-2" />
              About Acquire Overseas Education
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Your Trusted <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Education Partner</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              We are a leading overseas education consultancy dedicated to helping students achieve their dreams of studying at top universities worldwide.
            </p>
            <div className="flex flex-row gap-2 md:gap-4 justify-center">
              <a
                href="/lets-start-your-journey"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-4 py-3 md:px-8 md:py-4 rounded-lg md:rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>Get Started Today</span>
                <ArrowRight size={16} className="ml-1 md:ml-2 md:w-5 md:h-5" />
              </a>
              <a
                href="/comprehensive-education-solutions"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-4 py-3 md:px-8 md:py-4 rounded-lg md:rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105"
              >
                <span>Our Services</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
              Excellence in Every <span className="text-blue-600">Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, technology, and personalized service to make your study abroad journey smooth and successful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 hover:bg-white/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Heart className="w-5 h-5 mr-2" />
              Our Core Values
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              What Drives <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Us Forward</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our values are the foundation of everything we do. They guide our decisions and shape our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/20 overflow-hidden p-8">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl`}></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-6 ${value.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon size={32} className="text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our track record speaks for itself. These numbers represent our commitment to excellence and student success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <achievement.icon className={`w-10 h-10 ${achievement.color}`} />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {achievement.number}
                </div>
                <div className="text-lg text-blue-200 font-medium mb-2">{achievement.label}</div>
                <div className="text-sm text-blue-300">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Founder Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About the <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Founder</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8 md:p-12"
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-full mb-6 shadow-xl">
                  <UserCircle className="w-14 h-14 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Mettumedi Sandeep
                </h3>
                <p className="text-xl text-cyan-300 font-semibold mb-8">
                  Founder & CEO
                </p>
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
              </div>

              <div className="space-y-6 text-white/90 leading-relaxed">
                <p className="text-lg md:text-xl">
                  With a deep-rooted passion for education and a vision to transform lives through global learning opportunities, <strong className="text-white">Mettumedi Sandeep</strong> founded Acquire Overseas Education to bridge the gap between ambitious students and their dream universities worldwide.
                </p>

                <p className="text-lg md:text-xl">
                  Driven by the belief that quality education should be accessible to all, Sandeep envisioned a consultancy that goes beyond traditional services. Our mission is to empower students with the knowledge, resources, and support they need to navigate the complex journey of studying abroad successfully.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Lightbulb className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-3">Vision</h4>
                      <p className="text-white/80 leading-relaxed">
                        To be the most trusted and innovative education consultancy, helping thousands of students achieve their academic and career aspirations through quality education abroad.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-3">Mission</h4>
                      <p className="text-white/80 leading-relaxed">
                        To provide comprehensive, transparent, and personalized education consultancy services that empower students to make informed decisions and succeed in their global education journey.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Rocket className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-xl mb-4">Our Goals</h4>
                      <ul className="space-y-3 text-white/80">
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-lg">Expand our reach to serve more students across India and beyond</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-lg">Maintain our 98% success rate while continuously improving our services</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-lg">Build partnerships with top universities and institutions worldwide</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-lg">Provide innovative solutions that simplify the study abroad process</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-lg">Create a supportive community of successful international students</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-lg md:text-xl mt-10 pt-8 border-t border-white/20 text-white/90">
                  Under Sandeep's leadership, Acquire Overseas Education has grown from a vision into a trusted brand that has successfully guided over 5,000 students to top universities worldwide. Our commitment to excellence, integrity, and student success continues to drive us forward as we help shape the future of global education.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Make Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Dreams Reality</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join thousands of successful students who have achieved their study abroad goals with our expert guidance and personalized service.
            </p>
            
            <div className="flex flex-row gap-6 justify-center items-center">
              <a
                href="/lets-start-your-journey"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Get Free Consultation
                <ArrowRight size={16} className="ml-2" />
              </a>
              
              <a
                href="/comprehensive-education-solutions"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                <span>Explore Services</span>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-row items-center justify-center gap-3 md:gap-8 text-white/80">
              <div className="flex items-center">
                <Shield className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm font-medium">Certified Experts</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm font-medium">98% Success Rate</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm font-medium">5000+ Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;