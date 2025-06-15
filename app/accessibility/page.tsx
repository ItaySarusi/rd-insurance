'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversalAccess, FaKeyboard, FaMobileAlt, FaEye, FaHeadphones } from 'react-icons/fa';

const AccessibilityStatement = () => {
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
            <h1 className="text-4xl font-bold mb-4 gradient-text">הצהרת נגישות</h1>
            <p className="text-gray-300 text-lg">
              מחויבותנו לנגישות ולשוויון הזדמנויות
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              אנו רואים חשיבות רבה בהנגשת אתר האינטרנט שלנו עבור כלל האוכלוסייה, ובפרט עבור אנשים עם מוגבלות, במטרה לאפשר חוויית גלישה שוויונית, מכבדת, נגישה ונעימה.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              האתר תוכנן ונבנה בהתאם להנחיות הנגישות בתקן הישראלי ת"י 5568, אשר מבוסס על תקן הנגישות הבינלאומי WCAG 2.1 ברמה AA.
            </p>

            {/* Accessibility Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-400/20">
                <FaUniversalAccess className="text-2xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">תמיכה בקוראי מסך</h3>
                <p className="text-gray-300">כולל טקסטים חלופיים לתמונות וניווט מלא באמצעות מקלדת</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-400/20">
                <FaEye className="text-2xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">ניגודיות צבעים</h3>
                <p className="text-gray-300">מותאמת לצרכים שונים ותמיכה בהגדלת טקסטים</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-400/20">
                <FaKeyboard className="text-2xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">ניווט מלא</h3>
                <p className="text-gray-300">תמיכה בניווט מלא באמצעות מקלדת בלבד</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-400/20">
                <FaMobileAlt className="text-2xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">תמיכה במובייל</h3>
                <p className="text-gray-300">התאמה מלאה לתצוגה במכשירים ניידים</p>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-gray-800/30 p-6 rounded-lg border border-blue-400/20 mb-8">
              <h2 className="text-2xl font-semibold mb-4">הבהרות חשובות</h2>
              <p className="text-gray-300 mb-4">
                אנו ממשיכים לפעול באופן שוטף לשיפור הנגישות באתר. ייתכן שעדיין קיימים עמודים, קבצים (כגון PDF) או רכיבי צד שלישי שטרם הונגשו במלואם. נשמח לקבל כל הערה או הצעה לשיפור.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-800/30 p-6 rounded-lg border border-blue-400/20">
              <h2 className="text-2xl font-semibold mb-4">פרטי יצירת קשר בנושא נגישות</h2>
              <div className="space-y-2">
                <p><span className="font-semibold">אחראי נגישות:</span> איליי דניאל</p>
                <p><span className="font-semibold">טלפון:</span> 058-588-3882</p>
                <p><span className="font-semibold">דוא"ל:</span> Elaydaniel1802@gmail.com</p>
                <p><span className="font-semibold">שעות מענה:</span> ימים א'-ה' בין השעות 09:00–17:00</p>
              </div>
            </div>

            {/* Update Date */}
            <div className="text-center mt-8 text-gray-400">
              <p>תאריך עדכון ההצהרה: {new Date().toLocaleDateString('he-IL')}</p>
              <p className="mt-2">
                אנו מתחייבים לעדכן הצהרה זו באופן שוטף לפי הצורך ובהתאם לשינויים באתר או בדרישות החוק.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AccessibilityStatement; 