'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCar, FaHome, FaHeartbeat, FaBriefcase, FaPlane, FaShieldAlt, FaChevronLeft, FaChevronDown, FaCheck, FaCircle } from 'react-icons/fa';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  // Listen for custom event from footer
  useEffect(() => {
    const handleSetActiveService = (event: CustomEvent) => {
      const { serviceIndex } = event.detail;
      setActiveService(serviceIndex);
    };

    window.addEventListener('setActiveService', handleSetActiveService as EventListener);

    return () => {
      window.removeEventListener('setActiveService', handleSetActiveService as EventListener);
    };
  }, []);

  const services = [
    {
      icon: FaHeartbeat,
      title: 'ביטוחי חיים בריאות ועוד',
      subtitle: 'הגנה מקיפה על הבריאות והחיים',
      description: 'מגוון רחב של ביטוחי חיים ובריאות המותאמים לצרכים האישיים שלכם.',
      features: [
        'ביטוח חיים',
        'ביטוח אובדן כושר עבודה',
        'ביטוח בריאות',
        'ביטוח מנהלים',
        'ביטוח תאונות אישיות',
        'ביטוח נכות מתאונה',
        'ביטוח מחלות קשות'
      ],
      image: '/images/life-insurance.jpeg',
      color: 'from-red-500 to-red-700'
    },
    {
      icon: FaBriefcase,
      title: 'פיננסים',
      subtitle: 'פתרונות חיסכון והשקעה',
      description: 'ייעוץ מקצועי ופתרונות פיננסיים מותאמים לעצמאיים ושכירים.',
      features: [
        'קרן פנסיה',
        'גמל לעצמאיים',
        'גמל להשקעה',
        'קרן השתלמות',
        'חיסכון לעצמאיים'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: FaShieldAlt,
      title: 'ביטוח אלמנטרי',
      subtitle: 'הגנה על הרכוש והעסק',
      description: 'ביטוחים אלמנטריים מקיפים לעסקים, דירות, רכבים וציוד.',
      features: [
        'ביטוחי עסקים',
        'ביטוחי דירות',
        'ביטוחי רכב כולל משאיות ואופנועים',
        'ביטוח ציוד כבד וציוד מכני הנדסי',
        'ביטוח אחריות מקצועית',
        'ביטוח עבודות קבלניות'
      ],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      color: 'from-yellow-500 to-yellow-700'
    }
  ];

  // Mobile layout component for service details
  const ServiceDetails = ({ serviceIndex }: { serviceIndex: number }) => (
    <motion.div
      initial={{ opacity: 0, height: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        height: 'auto', 
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          height: { duration: 0.5 },
          opacity: { duration: 0.4, delay: 0.1 }
        }
      }}
      exit={{ 
        opacity: 0, 
        height: 0, 
        y: -10,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          opacity: { duration: 0.3 },
          height: { duration: 0.4, delay: 0.1 }
        }
      }}
      className="lg:hidden neomorphism p-6 mt-4 overflow-hidden"
    >
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { duration: 0.4, delay: 0.2 }
        }}
        exit={{ 
          opacity: 0,
          transition: { duration: 0.3 }
        }}
      >
        {/* Content */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${services[serviceIndex].color}`}>
              {services[serviceIndex].icon && 
                React.createElement(services[serviceIndex].icon, { className: "text-xl text-white" })
              }
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {services[serviceIndex].title}
              </h3>
              <p className="text-blue-400 text-sm">
                {services[serviceIndex].subtitle}
              </p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {services[serviceIndex].description}
          </p>
        </div>

        {/* Image */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.4, delay: 0.3 }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.95,
            transition: { duration: 0.2 }
          }}
        >
          <div className="glassmorphism-card p-4">
            <img
              src={services[serviceIndex].image}
              alt={services[serviceIndex].title}
              className="w-full h-48 object-cover rounded-xl"
            />
          </div>
        </motion.div>

        {/* Features */}
        <div>
          <h4 className="text-lg font-bold text-white mb-3">
            מה כלול בשירות:
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {services[serviceIndex].features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.4, delay: 0.4 + (index * 0.05) }
                }}
                exit={{ 
                  opacity: 0, 
                  x: -10,
                  transition: { duration: 0.2, delay: index * 0.02 }
                }}
                className="flex items-center gap-3"
              >
                <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-xs text-gray-900" />
                </div>
                <span className="text-gray-300 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.4, delay: 0.6 }
          }}
          exit={{ 
            opacity: 0, 
            y: 10,
            transition: { duration: 0.2 }
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            const element = document.querySelector('#contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="btn-primary w-full"
        >
          קבל הצעת מחיר
        </motion.button>
      </motion.div>
    </motion.div>
  );

  return (
    <section 
      id="services" 
      className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">השירותים שלנו</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            מגוון רחב של פתרונות ביטוח מקצועיים המותאמים לכל צורך ולכל תקציב
          </motion.p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {/* Services List */}
          <div className="lg:col-span-1 space-y-4" data-aos="fade-right">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveService(index)}
                className={`glassmorphism-card p-6 cursor-pointer transition-all duration-300 hover-lift ${
                  activeService === index 
                    ? 'border-blue-400 bg-blue-400/10' 
                    : 'hover:border-blue-400/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color}`}>
                    <service.icon className="text-xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {service.subtitle}
                    </p>
                  </div>
                  {activeService === index ? (
                    <FaChevronLeft className="text-blue-400 transition-all duration-300" />
                  ) : (
                    <FaCircle className="text-blue-400/50 transition-all duration-300 text-sm" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="lg:col-span-2" data-aos="fade-left">
            {activeService >= 0 && activeService < services.length && (
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="neomorphism p-8 h-full"
              >
                <div className="grid md:grid-cols-2 gap-8 h-full">
                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${services[activeService].color} neomorphism-button`}>
                          {services[activeService].icon && 
                            React.createElement(services[activeService].icon, { className: "text-2xl text-white" })
                          }
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white">
                            {services[activeService].title}
                          </h3>
                          <p className="text-blue-400 text-lg">
                            {services[activeService].subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {services[activeService].description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">
                        מה כלול בשירות:
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {services[activeService].features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <FaCheck className="text-xs text-gray-900" />
                            </div>
                            <span className="text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const element = document.querySelector('#contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="btn-primary w-full md:w-auto"
                    >
                      קבל הצעת מחיר
                    </motion.button>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="glassmorphism-card p-4 h-full"
                    >
                      <img
                        src={services[activeService].image}
                        alt={services[activeService].title}
                        className="w-full h-full object-cover rounded-xl min-h-[300px]"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4">
          {services.map((service, index) => (
            <div key={index}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveService(activeService === index ? -1 : index)}
                className={`glassmorphism-card p-6 cursor-pointer transition-all duration-300 hover-lift ${
                  activeService === index 
                    ? 'border-blue-400 bg-blue-400/10' 
                    : 'hover:border-blue-400/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color}`}>
                    <service.icon className="text-xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {service.subtitle}
                    </p>
                  </div>
                  {activeService === index ? (
                    <FaChevronDown className="text-blue-400 transition-transform duration-300" />
                  ) : (
                    <FaChevronLeft className="text-blue-400 transition-transform duration-300" />
                  )}
                </div>
              </motion.div>
              
              {/* Service Details - appears right under the selected service */}
              <AnimatePresence>
                {activeService === index && (
                  <ServiceDetails key={`service-${index}`} serviceIndex={index} />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
          data-aos="fade-up"
        >
          <div className="glassmorphism-card p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              לא מצאתם את מה שחיפשתם?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              הצוות שלנו יועץ לכם בחינם ויגבש עבורכם את הפתרון הביטוחי המושלם
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              צור קשר עכשיו
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 