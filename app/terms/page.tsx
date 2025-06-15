'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaFileContract, FaGavel, FaExclamationTriangle, FaHandshake } from 'react-icons/fa';

const TermsOfUse = () => {
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
            <h1 className="text-4xl font-bold mb-4 gradient-text">תנאי שימוש</h1>
            <p className="text-gray-300 text-lg">
              כללים והנחיות לשימוש באתר
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              ברוכים הבאים לאתר של רוני דניאל, סוכן ביטוח פנסיוני ואלמנטרי. השימוש באתר זה כפוף לתנאי השימוש המפורטים להלן. אנא קראו אותם בעיון לפני השימוש באתר.
            </p>

            {/* Key Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-400/20">
                <FaFileContract className="text-2xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">הסכמה לתנאים</h3>
                <p className="text-gray-300">השימוש באתר מהווה הסכמה מצדכם לתנאי השימוש. אם אינכם מסכימים לתנאים, אנא הימנעו משימוש באתר.</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-400/20">
                <FaGavel className="text-2xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">שימוש מותר</h3>
                <p className="text-gray-300">השימוש באתר מיועד למטרות חוקיות בלבד, בהתאם לתנאי השימוש ולחוקים החלים בישראל.</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-400/20">
                <FaExclamationTriangle className="text-2xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">הגבלות שימוש</h3>
                <p className="text-gray-300">אסור להשתמש באתר באופן שעלול לפגוע בתפקודו, לחדור למערכותיו או להפר את זכויות הקניין הרוחני.</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-400/20">
                <FaHandshake className="text-2xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">אחריות</h3>
                <p className="text-gray-300">המידע באתר מוגש כשירות לציבור ואינו מהווה תחליף לייעוץ מקצועי. האחריות על השימוש במידע היא על המשתמש בלבד.</p>
              </div>
            </div>

            {/* Detailed Sections */}
            <div className="space-y-8">
              <div className="bg-gray-800/30 p-6 rounded-lg border border-blue-400/20">
                <h2 className="text-2xl font-semibold mb-4">קניין רוחני</h2>
                <p className="text-gray-300 mb-4">
                  כל הזכויות בקניין הרוחני באתר, לרבות תוכן, עיצוב, לוגו ותמונות, שייכות לחברה או לבעליהן החוקיים. אין להעתיק, לשכפל, להפיץ או לעשות שימוש כלשהו בקניין הרוחני ללא אישור מראש בכתב.
                </p>
              </div>

              <div className="bg-gray-800/30 p-6 rounded-lg border border-blue-400/20">
                <h2 className="text-2xl font-semibold mb-4">הגבלת אחריות</h2>
                <p className="text-gray-300 mb-4">
                  החברה אינה אחראית לכל נזק ישיר או עקיף שייגרם למשתמש כתוצאה משימוש באתר או מאי-יכולת להשתמש בו. המידע באתר מוגש "כפי שהוא" וללא כל אחריות.
                </p>
              </div>

              <div className="bg-gray-800/30 p-6 rounded-lg border border-blue-400/20">
                <h2 className="text-2xl font-semibold mb-4">שינויים בתנאים</h2>
                <p className="text-gray-300 mb-4">
                  החברה שומרת לעצמה את הזכות לשנות את תנאי השימוש מעת לעת. השינויים ייכנסו לתוקף עם פרסומם באתר. המשך השימוש באתר לאחר השינויים מהווה הסכמה לתנאים החדשים.
                </p>
              </div>

              <div className="bg-gray-800/30 p-6 rounded-lg border border-blue-400/20">
                <h2 className="text-2xl font-semibold mb-4">דין שולט</h2>
                <p className="text-gray-300 mb-4">
                  תנאי שימוש אלו כפופים לדיני מדינת ישראל בלבד. כל מחלוקת בקשר לתנאים אלו תהיה בסמכותו הבלעדית של בית המשפט המוסמך.
                </p>
              </div>

              <div className="bg-gray-800/30 p-6 rounded-lg border border-blue-400/20">
                <h2 className="text-2xl font-semibold mb-4">יצירת קשר</h2>
                <div className="space-y-2">
                  <p className="text-gray-300">לשאלות או הבהרות בנוגע לתנאי השימוש, אנא צרו קשר:</p>
                  <p><span className="font-semibold">טלפון:</span> 050-521-4902</p>
                  <p><span className="font-semibold">דוא"ל:</span> Elaydaniel1802@gmail.com</p>
                  <p><span className="font-semibold">כתובת:</span> התמר 6 יקנעם עילית</p>
                </div>
              </div>
            </div>

            {/* Update Date */}
            <div className="text-center mt-8 text-gray-400">
              <p>תאריך עדכון התנאים: {new Date().toLocaleDateString('he-IL')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfUse; 