'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaUsers, FaCertificate, FaPhone } from 'react-icons/fa';

const Hero = () => {
  const stats = [
    { icon: FaShieldAlt, number: '40+', label: 'שנות ניסיון' },
    { icon: FaUsers, number: 'אלפי', label: 'לקוחות מרוצים' },
    { icon: FaCertificate, number: '100%', label: 'אמינות' },
  ];

  // Insurance company logos
  const insuranceLogos = [
    { name: 'Ayalon', src: '/insurance-logos/ayalon-logo.png' },
    { name: 'Hachshara', src: '/insurance-logos/Hachshara-logo.png' },
    { name: 'Shomra', src: '/insurance-logos/shomra-logo.png' },
    { name: 'Shlomo', src: '/insurance-logos/shlomo-logo.png' },
    { name: 'PassportCard', src: '/insurance-logos/passportcard-logo.png' },
    { name: 'Clal', src: '/insurance-logos/clal-logo.svg' },
    { name: 'Harel', src: '/insurance-logos/harel-logo.png' },
    { name: 'Manora', src: '/insurance-logos/manora-logo.svg' },
    { name: 'Phoenix', src: '/insurance-logos/phoenix-logo.png' },
    { name: 'Migdal', src: '/insurance-logos/migdal-logo.svg' }
  ];

  console.log(`Total logos: ${insuranceLogos.length}`, insuranceLogos.map(l => l.name));

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 10, 11, 0.7) 0%, rgba(26, 26, 29, 0.6) 100%), 
                          url('/images/hero-img-shake.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        minHeight: '100vh',
      }}
    >


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">רוני דניאל</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4"
            >
              סוכן ביטוח פנסיוני ואלמנטרי
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-400 mb-16 font-medium"
            >
              אמינות, ליווי אישי, ניסיון ומקצועיות
            </motion.p>

            

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-24"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-400 to-blue-600 text-gray-900 text-lg px-12 py-5 rounded-lg font-bold hover:from-blue-300 hover:to-blue-500 transition-all duration-300 shadow-lg"
              >
                קבל הצעת מחיר חינם
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+972-50-521-4902"
                className="border-2 border-blue-400 text-blue-400 text-lg px-12 py-5 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
              >
                <FaPhone className="text-lg" />
                התקשר עכשיו
              </motion.a>
            </motion.div>

            {/* Trust Indicators - Rebuilt */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  className="bg-black/30 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 sm:p-6 hover:border-blue-400/40 hover:bg-black/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between text-right">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="text-sm sm:text-lg text-gray-900" />
                    </div>
                    <div className="flex-1 mr-3 sm:mr-4">
                      <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 font-medium text-xs sm:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Insurance Companies Logo Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-8 sm:mt-16 mb-8"
            >
              <div className="text-center mb-6 sm:mb-8">
                <p className="text-gray-400 text-base sm:text-lg font-medium px-4">
                  אנו עובדים עם חברות הביטוח המובילות בארץ:
                </p>
              </div>
              
              <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl py-4 sm:py-6">
                <div 
                  className="flex animate-scroll-rtl" 
                  style={{ 
                    width: '200%',
                    minWidth: 'max-content'
                  }}
                >
                  {/* Two sets of logos for seamless infinite scroll */}
                  {[...Array(2)].map((_, setIndex) => 
                    insuranceLogos.map((logo, index) => (
                      <div
                        key={`set-${setIndex}-${index}`}
                        className="flex-shrink-0 mx-2 sm:mx-4 w-24 h-16 sm:w-32 sm:h-20 flex items-center justify-center"
                      >
                        <img
                          src={logo.src}
                          alt={logo.name}
                          className="max-w-full max-h-full object-contain opacity-75 hover:opacity-95 transition-opacity duration-300"
                          style={{ 
                            filter: logo.name === 'Harel' 
                              ? 'grayscale(100%) brightness(0.4) contrast(2) saturate(0)' 
                              : logo.name === 'Shlomo'
                              ? 'grayscale(100%) brightness(0.4) contrast(1.8) saturate(0)'
                              : 'grayscale(100%) brightness(0.6) contrast(1.5) saturate(0)',
                            width: 'auto',
                            height: 'auto',
                            maxWidth: logo.name === 'Harel' 
                              ? '140px' 
                              : logo.name === 'PassportCard' 
                              ? '120px' 
                              : '100px',
                            maxHeight: logo.name === 'Harel' 
                              ? '70px' 
                              : logo.name === 'PassportCard' 
                              ? '60px' 
                              : '50px'
                          }}
                          onError={() => console.log(`Failed to load: ${logo.name}`)}
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>


        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 