'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserShield, FaLock, FaDatabase } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text">מדיניות פרטיות</h1>
            <p className="text-gray-300 text-lg">
              מחויבותנו לשמירה על פרטיותכם
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              רוני דניאל, סוכן ביטוח פנסיוני ואלמנטרי ("אנחנו", "שלנו" או "החברה"), מכבד את פרטיותכם ומחויב להגן על המידע האישי שאתם מספקים לנו. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים, חושפים ומגנים על המידע האישי שלכם.
            </p>

            {/* Key Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-400/20">
                <FaShieldAlt className="text-2xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">איסוף מידע</h3>
                <p className="text-gray-300">אנו אוספים מידע אישי כגון שם, מספר טלפון, כתובת דוא"ל ופרטים נוספים הנדרשים לספק לכם את השירותים המבוקשים.</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-400/20">
                <FaUserShield className="text-2xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">שימוש במידע</h3>
                <p className="text-gray-300">המידע משמש אותנו לספק שירותים, לתקשר איתכם, ולשפר את חווית המשתמש באתר.</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-400/20">
                <FaLock className="text-2xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">אבטחת מידע</h3>
                <p className="text-gray-300">אנו נוקטים באמצעי אבטחה מתקדמים להגנה על המידע שלכם מפני גישה, שימוש או חשיפה לא מורשית.</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-400/20">
                <FaDatabase className="text-2xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">שמירת מידע</h3>
                <p className="text-gray-300">המידע נשמר במערכות מאובטחות ומוגנות, ומוחזק בהתאם לדרישות החוק והתקנים המקצועיים.</p>
              </div>
            </div>

            {/* Detailed Sections */}
            <div className="space-y-8">
              <div className="bg-gray-800/30 p-6 rounded-lg border border-blue-400/20">
                <h2 className="text-2xl font-semibold mb-4">זכויותיכם</h2>
                <p className="text-gray-300 mb-4">
                  בהתאם לחוק הגנת הפרטיות, יש לכם זכות לבקש גישה למידע האישי שלכם, לתקן אותו, למחוק אותו או להגביל את השימוש בו. כמו כן, יש לכם זכות להתנגד לעיבוד המידע שלכם ולבקש העברת המידע לגורם אחר.
                </p>
              </div>

              <div className="bg-gray-800/30 p-6 rounded-lg border border-blue-400/20">
                <h2 className="text-2xl font-semibold mb-4">עדכוני מדיניות</h2>
                <p className="text-gray-300 mb-4">
                  אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. כל שינוי יפורסם באתר זה, ואנו ממליצים לכם לבדוק מעת לעת את המדיניות המעודכנת.
                </p>
              </div>

              <div className="bg-gray-800/30 p-6 rounded-lg border border-blue-400/20">
                <h2 className="text-2xl font-semibold mb-4">יצירת קשר</h2>
                <div className="space-y-2">
                  <p className="text-gray-300">לשאלות או בקשות בנוגע למדיניות הפרטיות שלנו, אנא צרו קשר:</p>
                  <p><span className="font-semibold">טלפון:</span> 050-521-4902</p>
                  <p><span className="font-semibold">דוא"ל:</span> Elaydaniel1802@gmail.com</p>
                  <p><span className="font-semibold">כתובת:</span> התמר 6 יקנעם עילית</p>
                </div>
              </div>
            </div>

            {/* Update Date */}
            <div className="text-center mt-8 text-gray-400">
              <p>תאריך עדכון המדיניות: {new Date().toLocaleDateString('he-IL')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 