'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { href: '#hero', label: 'בית' },
    { href: '#about', label: 'אודותינו' },
    { href: '#services', label: 'שירותים' },
    { href: '#contact', label: 'צור קשר' },
  ];

  const services = [
    { name: 'ביטוחי חיים בריאות ועוד', index: 0 },
    { name: 'פיננסים', index: 1 },
    { name: 'ביטוח אלמנטרי', index: 2 }
  ];

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToService = (serviceIndex: number) => {
    // First scroll to services section
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Dispatch custom event to set active service
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('setActiveService', { 
          detail: { serviceIndex } 
        }));
      }, 500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Footer Content */}
          <div className="pt-16 pb-8">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">רוני דניאל</h3>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <FaPhone className="text-blue-400 flex-shrink-0" />
                    <a href="tel:+97249893314" className="text-gray-300 hover:text-blue-400 transition-colors">
                      משרד: 04-989-3314
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FaPhone className="text-blue-400 flex-shrink-0" />
                    <a href="tel:+972505214902" className="text-gray-300 hover:text-blue-400 transition-colors">
                      נייד: 050-521-4902
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FaEnvelope className="text-blue-400 flex-shrink-0" />
                    <a href="mailto:Elaydaniel1802@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                      Elaydaniel1802@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">התמר 6 יקנעם עילית</span>
                  </div>
                </div>


              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-white mb-6">ניווט מהיר</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 hover:translate-x-2"
                      >
                        <span>◄</span>
                        <span>{link.label}</span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-white mb-6">השירותים שלנו</h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => scrollToService(service.index)}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 hover:translate-x-2"
                      >
                        <span>◄</span>
                        <span>{service.name}</span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 py-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm text-center md:text-right">
                <p>
                  © 2025 רוני דניאל. כל הזכויות שמורות.
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex gap-6 text-sm">
                <a 
                  href="/terms" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  תנאי שימוש
                </a>
                <a 
                  href="/privacy-policy" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  מדיניות פרטיות
                </a>
                <a 
                  href="/accessibility" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  הצהרת נגישות
                </a>
              </div>
            </div>
          </motion.div>

          {/* Made with Love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center py-4 border-t border-gray-800"
          >
            <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
              <span>נוצר עם</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaHeart className="text-red-500" />
              </motion.span>
              <span>על ידי צוות הפיתוח שלנו</span>
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Sticky Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ 
              opacity: 0, 
              scale: 0,
              y: 20
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: 0
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8,
              y: 20
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.3
            }}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              boxShadow: "0 10px 25px rgba(96, 165, 250, 0.3)"
            }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-gray-900 font-bold hover:shadow-lg transition-all duration-300 z-50 shadow-lg"
            style={{ zIndex: 1000 }}
          >
            ▲
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer; 