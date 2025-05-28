'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'ביטוח רכב',
    'ביטוח דירה ונכסים',
    'ביטוח בריאות',
    'ביטוח עסקי',
    'ביטוח נסיעות לחול',
    'ביטוח חיים',
    'חסכונות ופנסיונים',
    'אובדן כושר עבודה',
    'אחר'
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'משרד',
      details: '04-989-3314',
      action: 'tel:+97249893314',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: FaPhone,
      title: 'נייד',
      details: '050-521-4902',
      action: 'tel:+972505214902',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: FaWhatsapp,
      title: 'ווצאפ משרד',
      details: '052-299-8893',
      action: 'https://wa.me/972522998893',
      color: 'from-green-600 to-green-800'
    },
    {
      icon: FaEnvelope,
      title: 'אימייל',
      details: 'Elaydaniel1802@gmail.com',
      action: 'mailto:Elaydaniel1802@gmail.com',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'כתובת',
      details: 'התמר 6 יקנעם עילית',
      action: null,
      color: 'from-red-500 to-red-700'
    },
    {
      icon: FaClock,
      title: 'שעות פעילות',
      details: 'ראשון-חמישי 09:00-16:00',
      action: null,
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          });
        }, 3000);
      } else {
        // Handle error
        alert(result.error || 'שגיאה בשליחת ההודעה');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('שגיאה בשליחת ההודעה. אנא נסה שוב מאוחר יותר.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
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
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">צור קשר</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            צוות המומחים שלנו כאן כדי לעזור לכם למצוא את הפתרון הביטוחי המושלם. 
            פנו אלינו עכשיו וקבלו יעוץ מקצועי וחינם!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-aos="fade-right"
          >
            <div className="neomorphism p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                שלחו לנו הודעה
              </h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        שם מלא *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                        placeholder="הכנס את שמך המלא"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        אימייל *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        טלפון *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                        placeholder="050-123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        סוג השירות
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      >
                        <option value="">בחר סוג שירות</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      הודעה
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                      placeholder="ספר לנו על הצרכים שלך..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'btn-primary hover-lift'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                        <span>שולח...</span>
                      </div>
                    ) : (
                      'שלח הודעה'
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <FaCheckCircle className="text-6xl text-green-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">
                    תודה רבה!
                  </h4>
                  <p className="text-gray-300">
                    הודעתך נשלחה בהצלחה. ניצור איתך קשר בהקדם האפשרי.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
            data-aos="fade-left"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Component = info.action ? motion.a : motion.div;
                const componentProps = info.action ? {
                  href: info.action,
                  target: info.action.startsWith('http') ? '_blank' : '_self',
                  rel: info.action.startsWith('http') ? 'noopener noreferrer' : ''
                } : {};

                return (
                  <Component
                    key={index}
                    {...componentProps}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: info.action ? 1.02 : 1 }}
                    className={`glassmorphism-card p-6 flex items-center gap-4 ${info.action ? 'hover-lift cursor-pointer' : 'cursor-default'} block`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${info.color}`}>
                      <info.icon className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-300">
                        {info.details}
                      </p>
                    </div>
                  </Component>
                );
              })}
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 