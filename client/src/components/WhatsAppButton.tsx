import React from 'react';
import { useLocation } from 'react-router-dom';

const WhatsAppButton: React.FC = () => {
  const location = useLocation();

  const getPageMessage = () => {
    const path = location.pathname;
    const pageMessages: { [key: string]: string } = {
      '/': 'Hello! I would like to know more about your visa services.',
      '/about': 'Hello! I would like to know more about Acquire Overseas Education.',
      '/services': 'Hello! I would like to know more about your visa services.',
      '/contact': 'Hello! I would like to get in touch with your team.',
      
      // Study & Education
      '/study-visa': 'Hello! I am interested in Study Visa services.',
      
      
      // Other Services
      '/blog': 'Hello! I have a question about your blog content.',
      '/testimonials': 'Hello! I would like to know more about your success stories.',
      '/faq': 'Hello! I have some questions about your services.',
      '/careers': 'Hello! I am interested in career opportunities at Acquire Overseas Education.',
    };

    return pageMessages[path] || 'Hello! I would like to know more about your visa services.';
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '919515612909'; // WhatsApp number without + or spaces
    const message = encodeURIComponent(getPageMessage());
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Official WhatsApp Logo SVG - Smaller size
  const WhatsAppLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl p-3 shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Background animation */}
        <div className="absolute inset-0 bg-white/10 rounded-xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        
        {/* Official WhatsApp Logo with animation */}
        <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
          <WhatsAppLogo />
        </div>
        
        {/* Pulse ring effect */}
        <div className="absolute inset-0 rounded-xl border-2 border-green-400 animate-ping opacity-0 group-hover:opacity-100"></div>
        
        {/* Tooltip with modern design */}
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-4 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
          <span className="font-medium">Chat with us on WhatsApp</span>
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
