'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaShieldAlt, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '@/components/ThemeProvider';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { href: '#hero', label: 'בית' },
    { href: '#about', label: 'קצת עלינו' },
    { href: '#services', label: 'השירותים שלנו' },
    { href: '#contact', label: 'צור קשר' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glassmorphism backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20 w-full">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl overflow-hidden">
              <img 
                src="/images/RD-logo.png" 
                alt="רוני דניאל לוגו" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-right">
              <h1 className="text-xl lg:text-2xl font-bold gradient-text">
                רוני דניאל
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block">
                פתרונות ביטוח מקצועיים
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative px-6 py-3 text-white hover:text-blue-400 transition-colors duration-300 font-medium text-lg whitespace-nowrap"
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 right-0 h-0.5 bg-gradient-to-l from-blue-400 to-blue-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Right Side - Theme Toggle + CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="hidden p-3 rounded-lg glassmorphism-card hover:bg-blue-400/10 transition-colors duration-300"
              title={isDarkMode ? 'מעבר למצב בהיר' : 'מעבר למצב כהה'}
            >
              {isDarkMode ? (
                <FaSun className="text-blue-400 text-lg" />
              ) : (
                <FaMoon className="text-blue-400 text-lg" />
              )}
            </motion.button>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-gray-900 px-6 py-2.5 rounded-lg font-semibold hover:from-blue-300 hover:to-blue-500 transition-all duration-300 shadow-md"
              onClick={() => scrollToSection('#contact')}
            >
              קבל הצעת מחיר
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg glassmorphism-card"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-xl text-blue-400" />
            ) : (
              <FaBars className="text-xl text-blue-400" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden glassmorphism backdrop-blur-md"
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full text-right py-3 px-4 rounded-lg hover:bg-blue-400/10 transition-colors duration-300 text-white hover:text-blue-400 font-medium"
            >
              {item.label}
            </motion.button>
          ))}
          
          {/* Mobile Theme Toggle */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
            onClick={toggleTheme}
            className="hidden w-full text-right py-3 px-4 rounded-lg hover:bg-blue-400/10 transition-colors duration-300 text-white hover:text-blue-400 font-medium flex items-center justify-between"
          >
            <span>{isDarkMode ? 'מצב בהיר' : 'מצב כהה'}</span>
            {isDarkMode ? (
              <FaSun className="text-blue-400 text-lg" />
            ) : (
              <FaMoon className="text-blue-400 text-lg" />
            )}
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (navItems.length + 1) * 0.1 }}
            onClick={() => scrollToSection('#contact')}
            className="w-full btn-primary mt-4"
          >
            קבל הצעת מחיר
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 