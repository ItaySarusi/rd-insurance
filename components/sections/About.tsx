'use client';

import { motion } from 'framer-motion';
import { FaAward, FaHandshake, FaUserTie, FaChartLine, FaClock, FaHeart } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaAward,
      title: 'מצוינות מקצועית',
      description: 'אנו שואפים למצוינות בכל שירות שאנו מעניקים ומתמחים בפתרונות מותאמים אישית.',
    },
    {
      icon: FaHandshake,
      title: 'אמינות מוחלטת',
      description: 'אמון הלקוחות הוא בסיס העבודה שלנו. אנו פועלים בשקיפות מלאה ובכנות.',
    },
    {
      icon: FaHeart,
      title: 'דאגה אמיתית',
      description: 'כל לקוח הוא בשבילנו משפחה. אנו דואגים לכל פרט ומספקים שירות אישי וחם.',
    },
  ];



  return (
    <section 
      id="about" 
      className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">קצת עלינו</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            המשרד הוקם על ידי רוני דניאל לפני למעלה מ-40 שנה, מתוך חזון פשוט:  לתת לאנשים פתרונות ביטוח מותאמים אישית – בגובה העיניים, מתוך ניסיון, מקצועיות ואכפתיות.
          </motion.p>
        </div>

                <div className="max-w-4xl mx-auto mb-24">
          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300 text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              המחויבות שלנו
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              לאורך השנים אנו מלווים אלפי לקוחות – משפחות, עצמאיים ועסקים – בבחירת הפתרונות הביטוחיים הנכונים עבורם וטיפול אישי בתביעות, הן בתחום הביטוח הפנסיוני והן בתחום הביטוח האלמנטרי.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              אנחנו מאמינים בשירות אישי, שקיפות מלאה, וליווי לאורך כל הדרך!
            </p>
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <FaHandshake className="text-2xl text-gray-900" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">הערכים שלנו</span>
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 text-center hover:border-blue-400/40 hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon className="text-3xl text-gray-900" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 text-right">
                  {value.title}
                </h4>
                <p className="text-gray-300 leading-relaxed text-right">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default About; 