'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  const handleWhatsappClick = () => {
    const phoneNumber = '+972522998893';
    const message = 'שלום, אני מעוניין לקבל פרטים נוספים על שירותי הביטוח';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsappClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-20 left-[18px] lg:bottom-[106px] lg:left-[18px] z-50 w-12 h-12 lg:w-16 lg:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      title="פנה אלינו בוואטסאפ"
      aria-label="פנה אלינו בוואטסאפ"
    >
      <FaWhatsapp className="text-xl lg:text-3xl" />
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        פנה אלינו בוואטסאפ
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </motion.button>
  );
};

export default WhatsappButton; 