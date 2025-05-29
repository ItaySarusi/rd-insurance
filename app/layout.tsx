import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "רוני דניאל - סוכן ביטוח פנסיוני ואלמנטרי | יקנעם עילית",
  description: "רוני דניאל - סוכן ביטוח מקצועי עם למעלה מ-40 שנות ניסיון ביקנעם עילית. מתמחה בביטוח פנסיוני, ביטוח אלמנטרי, ביטוח רכב, ביטוח בריאות ועוד. ייעוץ מקצועי וחינם.",
  keywords: [
    "רוני דניאל",
    "סוכן ביטוח",
    "ביטוח פנסיוני", 
    "ביטוח אלמנטרי",
    "ביטוח רכב",
    "ביטוח בריאות",
    "ביטוח דירה",
    "ביטוח נסיעות",
    "יקנעם עילית",
    "חסכונות פנסיונים",
    "קופות גמל",
    "ייעוץ ביטוח",
    "ביטוח עסקי",
    "ביטוח חיים",
    "אובדן כושר עבודה"
  ].join(", "),
  authors: [{ name: "רוני דניאל", url: "https://rd-insurance.vercel.app" }],
  creator: "רוני דניאל",
  publisher: "רוני דניאל - סוכן ביטוח",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '', // Add your Google Search Console verification code here when you get it
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/RD-logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/RD-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'רוני דניאל - סוכן ביטוח פנסיוני ואלמנטרי | יקנעם עילית',
    description: 'סוכן ביטוח מקצועי עם 40+ שנות ניסיון. מתמחה בביטוח פנסיוני, אלמנטרי ועוד. ייעוץ חינם ושירות אישי ביקנעם עילית.',
    type: 'website',
    locale: 'he_IL',
    url: 'https://rd-insurance.vercel.app',
    siteName: 'רוני דניאל - סוכן ביטוח',
    images: [
      {
        url: '/images/RD-logo.png',
        width: 1200,
        height: 630,
        alt: 'רוני דניאל - סוכן ביטוח פנסיוני ואלמנטרי',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'רוני דניאל - סוכן ביטוח פנסיוני ואלמנטרי',
    description: 'סוכן ביטוח מקצועי עם 40+ שנות ניסיון. ייעוץ חינם ושירות אישי ביקנעם עילית.',
    images: ['/images/RD-logo.png'],
  },
  alternates: {
    canonical: 'https://rd-insurance.vercel.app',
  },
  category: 'ביטוח ופיננסים',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

// Structured Data (JSON-LD) for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "רוני דניאל - סוכן ביטוח",
  "description": "סוכן ביטוח מקצועי עם למעלה מ-40 שנות ניסיון, מתמחה בביטוח פנסיוני ואלמנטרי",
  "url": "https://rd-insurance.vercel.app",
  "logo": "https://rd-insurance.vercel.app/images/RD-logo.png",
  "image": "https://rd-insurance.vercel.app/images/RD-logo.png",
  "telephone": "+972-50-521-4902",
  "email": "Elaydaniel1802@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "התמר 6",
    "addressLocality": "יקנעם עילית",
    "addressCountry": "IL"
  },
  "openingHours": "Mo-Th 09:00-16:00",
  "founder": {
    "@type": "Person",
    "name": "רוני דניאל",
    "jobTitle": "סוכן ביטוח פנסיוני ואלמנטרי"
  },
  "sameAs": [
    "https://wa.me/972522998893"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Israel"
  },
  "serviceType": [
    "ביטוח פנסיוני",
    "ביטוח אלמנטרי", 
    "ביטוח רכב",
    "ביטוח בריאות",
    "ביטוח דירה",
    "ביטוח נסיעות",
    "חסכונות פנסיונים",
    "קופות גמל"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#87CEEB" />
        <meta name="geo.region" content="IL" />
        <meta name="geo.placename" content="יקנעם עילית" />
        <meta name="geo.position" content="32.6906;35.1087" />
        <meta name="ICBM" content="32.6906, 35.1087" />
        <meta name="google-site-verification" content="sxuh9WDfRh8PJ2gV_HUBbDqyUakBF0sjZxlA1wJcVV0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased font-heebo`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <script src="https://website-widgets.pages.dev/dist/sienna.min.js" defer></script>
      </body>
    </html>
  );
}
