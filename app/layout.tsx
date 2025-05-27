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
  title: "RD ביטוח - פתרונות ביטוח מקצועיים",
  description: "RD ביטוח - החברה המובילה בתחום פתרונות הביטוח המקצועיים בישראל. שירות אמין, מקצועי ומותאם אישית.",
  keywords: "ביטוח, RD, פתרונות ביטוח, ביטוח מקצועי, ישראל",
  authors: [{ name: "RD Insurance" }],
  viewport: "width=device-width, initial-scale=1",
  robots: 'index, follow',
  openGraph: {
    title: 'רוני דניאל - סוכן ביטוח פנסיוני ואלמנטרי',
    description: 'מקצועיות, ניסיון ואמינות - פתרונות ביטוח מותאמים אישית',
    type: 'website',
    locale: 'he_IL',
  }
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
