import type { Metadata } from 'next';
import { Geist, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { Providers } from '@/components/Providers';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: '--font-devanagari',
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'TechTrekker Labs — IT Services Agency',
    template: '%s | TechTrekker Labs',
  },
  description:
    'TechTrekker Labs builds secure mobile apps, websites, AI-powered systems, and cybersecurity solutions for modern businesses.',
  keywords: ['IT agency', 'mobile app development', 'web development', 'cybersecurity', 'AI integration'],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.png', sizes: '192x192' },
      { url: '/icon-512.png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techtrekkerlabs.com',
    siteName: 'TechTrekker Labs',
    title: 'TechTrekker Labs — IT Services Agency',
    description: 'TechTrekker Labs builds secure mobile apps, websites, AI-powered systems, and cybersecurity solutions for modern businesses.',
    images: [
      {
        url: 'https://techtrekkerlabs.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TechTrekker Labs — IT Services Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechTrekker Labs — IT Services Agency',
    description: 'TechTrekker Labs builds secure mobile apps, websites, AI-powered systems, and cybersecurity solutions for modern businesses.',
    images: ['https://techtrekkerlabs.com/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TechTrekker Labs',
  url: 'https://techtrekkerlabs.com',
  description: 'IT services agency specialising in mobile apps, web development, cybersecurity, and AI integration.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@techtrekkerlabs.com',
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${notoSansDevanagari.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased font-sans bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <Providers>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <FloatingCTA />
        </Providers>
      </body>
    </html>
  );
}
