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
  title: "רוני דניאל - סוכן ביטוח פנסיוני ואלמנטרי",
  description: "רוני דניאל - סוכן ביטוח מקצועי עם למעלה מ-25 שנות ניסיון. מקצועיות, ניסיון ואמינות - פתרונות ביטוח מותאמים אישית.",
  keywords: "ביטוח, רוני דניאל, סוכן ביטוח, ביטוח פנסיוני, ביטוח אלמנטרי, יקנעם עילית",
  authors: [{ name: "רוני דניאל" }],
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo-rd.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo-rd.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'רוני דניאל - סוכן ביטוח פנסיוני ואלמנטרי',
    description: 'מקצועיות, ניסיון ואמינות - פתרונות ביטוח מותאמים אישית',
    type: 'website',
    locale: 'he_IL',
    images: [
      {
        url: '/images/logo-rd.png',
        width: 1200,
        height: 630,
        alt: 'רוני דניאל - סוכן ביטוח',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'רוני דניאל - סוכן ביטוח פנסיוני ואלמנטרי',
    description: 'מקצועיות, ניסיון ואמינות - פתרונות ביטוח מותאמים אישית',
    images: ['/images/logo-rd.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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
        <meta name="theme-color" content="#D4AF37" />
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
