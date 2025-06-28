'use server';

import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

export async function sendEmail(formData: ContactFormData) {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      return { error: 'שם, אימייל וטלפון הם שדות חובה' };
    }

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    // Email template for company notification
    const emailHTML = `
    <!DOCTYPE html>
    <html lang="he" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>הודעה חדשה מהאתר</title>
      <style>
        body {
          font-family: 'Heebo', Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          background-color: #f8f9fa;
          direction: rtl;
          text-align: right;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          direction: rtl;
        }
        .header {
          background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%);
          padding: 30px 20px;
          text-align: center;
          direction: rtl;
        }
        .logo {
          color: #ffffff;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .header-subtitle {
          color: #ffffff;
          font-size: 16px;
          opacity: 0.9;
        }
        .content {
          padding: 30px 20px;
          direction: rtl;
          text-align: right;
        }
        .section {
          margin-bottom: 25px;
          direction: rtl;
          text-align: right;
        }
        .label {
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 5px;
          display: block;
          text-align: right;
        }
        .value {
          color: #4a5568;
          padding: 12px;
          background-color: #f7fafc;
          border-radius: 8px;
          border-right: 4px solid #D4AF37;
          text-align: right;
          direction: rtl;
        }
        .message-box {
          background-color: #f7fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 20px;
          margin-top: 10px;
          text-align: right;
          direction: rtl;
        }
        .footer {
          background-color: #2d3748;
          color: #ffffff;
          padding: 20px;
          text-align: center;
          font-size: 14px;
          direction: rtl;
        }
        .gold-line {
          height: 3px;
          background: linear-gradient(90deg, #D4AF37 0%, #B8941F 100%);
          margin: 20px 0;
        }
        h2, h3, p, ul, li {
          text-align: right;
          direction: rtl;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">רוני דניאל</div>
          <div class="header-subtitle">סוכן ביטוח פנסיוני ואלמנטרי</div>
        </div>
        
        <div class="content">
          <h2 style="color: #2d3748; margin-bottom: 20px;">הודעה חדשה מהאתר</h2>
          
          <div class="section">
            <span class="label">שם מלא:</span>
            <div class="value">${formData.name}</div>
          </div>
          
          <div class="section">
            <span class="label">כתובת אימייל:</span>
            <div class="value">${formData.email}</div>
          </div>
          
          <div class="section">
            <span class="label">מספר טלפון:</span>
            <div class="value">${formData.phone}</div>
          </div>
          
          ${formData.service ? `
          <div class="section">
            <span class="label">סוג השירות:</span>
            <div class="value">${formData.service}</div>
          </div>
          ` : ''}
          
          ${formData.message ? `
          <div class="section">
            <span class="label">הודעה:</span>
            <div class="message-box">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          ` : ''}
          
          <div class="gold-line"></div>
          
          <p style="color: #4a5568; font-style: italic;">
            הודעה זו נשלחה דרך טופס יצירת קשר באתר רוני דניאל ביטוח ב-${new Date().toLocaleString('he-IL')}.
          </p>
        </div>
        
        <div class="footer">
          <p>רוני דניאל - סוכן ביטוח</p>
          <p>התמר 6 יקנעם עילית</p>
          <p>מקצועיות, ניסיון ואמינות</p>
        </div>
      </div>
    </body>
    </html>
    `;

    // Email to company (you)
    await transporter.sendMail({
      from: process.env.GOOGLE_EMAIL,
      to: process.env.COMPANY_EMAIL || process.env.GOOGLE_EMAIL,
      subject: `הודעה חדשה מהאתר - ${formData.name}`,
      html: emailHTML,
      replyTo: formData.email,
    });

    // Confirmation email to client
    const confirmationHTML = `
    <!DOCTYPE html>
    <html lang="he" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>תודה על פנייתך לרוני דניאל ביטוח</title>
      <style>
        body {
          font-family: 'Heebo', Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          background-color: #f8f9fa;
          direction: rtl;
          text-align: right;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          direction: rtl;
        }
        .header {
          background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%);
          padding: 30px 20px;
          text-align: center;
          direction: rtl;
        }
        .logo {
          color: #ffffff;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .header-subtitle {
          color: #ffffff;
          font-size: 16px;
          opacity: 0.9;
        }
        .content {
          padding: 30px 20px;
          direction: rtl;
          text-align: right;
        }
        .highlight-box {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(184, 148, 31, 0.1) 100%);
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
          border-right: 4px solid #D4AF37;
          direction: rtl;
          text-align: right;
        }
        .footer {
          background-color: #2d3748;
          color: #ffffff;
          padding: 20px;
          text-align: center;
          font-size: 14px;
          direction: rtl;
        }
        .gold-line {
          height: 3px;
          background: linear-gradient(90deg, #D4AF37 0%, #B8941F 100%);
          margin: 20px 0;
        }
        h2, h3, p, ul, li {
          text-align: right;
          direction: rtl;
        }
        ul {
          padding-right: 20px;
          padding-left: 0;
        }
        li {
          margin-bottom: 8px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">רוני דניאל</div>
          <div class="header-subtitle">סוכן ביטוח פנסיוני ואלמנטרי</div>
        </div>
        
        <div class="content">
          <h2 style="color: #2d3748;">תודה על פנייתך</h2>
          
          <p style="color: #4a5568;">
            תודה שפנית לרוני דניאל ביטוח. קיבלנו את הודעתך ואנו מעריכים את העניין שלך בשירותי הביטוח שלנו.
          </p>
          
          <div class="highlight-box">
            <h3 style="color: #2d3748; margin-top: 0;">מה קורה עכשיו?</h3>
            <ul style="color: #4a5568; margin: 0;">
              <li>הצוות שלנו יבדוק את פנייתך תוך 24 שעות</li>
              <li>נציג יצור איתך קשר כדי לדון בצרכים הספציפיים שלך</li>
              <li>נספק לך הצעת מחיר מותאמת אישית לדרישות הביטוח שלך</li>
            </ul>
          </div>
          
          <p style="color: #4a5568;">
            המומחים שלנו מוכנים לעזור לך לנווט בעולם המורכב של ביטוחים. עם למעלה מ-40 שנות ניסיון, אנו מחויבים להגן על הנכסים והעתיד שלך.
          </p>
          
          <div class="gold-line"></div>
          
          <p style="color: #4a5568;">
            <strong>זקוק לעזרה מיידית?</strong><br>
            טלפון משרד: 04-989-3314<br>
            נייד: 050-521-4902<br>
            ווצאפ: 052-299-8893<br>
            אימייל: Elaydaniel1802@gmail.com
          </p>
          
          <p style="color: #4a5568;">
            בברכה,<br>
            <strong>רוני דניאל</strong><br>
            סוכן ביטוח פנסיוני ואלמנטרי
          </p>
        </div>
        
        <div class="footer">
          <p>רוני דניאל - סוכן ביטוח</p>
          <p>התמר 6 יקנעם עילית</p>
          <p>מקצועיות, ניסיון ואמינות</p>
        </div>
      </div>
    </body>
    </html>
    `;

    await transporter.sendMail({
      from: process.env.GOOGLE_EMAIL,
      to: formData.email,
      subject: 'תודה על פנייתך לרוני דניאל ביטוח',
      html: confirmationHTML,
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { error: 'שגיאה בשליחת ההודעה. אנא נסה שוב מאוחר יותר.' };
  }
} 