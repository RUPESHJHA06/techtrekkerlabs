import type { Metadata } from 'next';
import { Geist, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { Providers } from '@/components/Providers';

const siteUrl = 'https://techtrekkerlabs.com';
const siteTitle = 'Custom Software Development Company | TechTrekker Labs';
const siteDescription =
  'TechTrekker Labs is a software development company offering web development, mobile app development, AI solutions, SaaS development, cybersecurity, and cloud services for startups and enterprises.';

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
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | TechTrekker Labs',
  },
  description: siteDescription,
  keywords: [
    'software development company',
    'custom software development company',
    'web development company',
    'mobile app development company',
    'AI solutions company',
    'SaaS development company',
    'cybersecurity consulting',
    'cloud solutions company',
    'startup software development',
    'enterprise software development',
    'Next.js development company',
    'React development services',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
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
    url: '/',
    siteName: 'TechTrekker Labs',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TechTrekker Labs custom software development company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TechTrekker Labs',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  email: 'contact@techtrekkerlabs.com',
  description: siteDescription,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@techtrekkerlabs.com',
    areaServed: ['US', 'IN', 'GB', 'CA', 'AU'],
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://www.instagram.com/techtrekker_labs/',
    'https://www.linkedin.com/company/132944038/',
  ],
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'Australia' },
  ],
  knowsAbout: [
    'Custom software development',
    'Web development',
    'Mobile app development',
    'AI solutions',
    'SaaS development',
    'Cybersecurity consulting',
    'Cloud solutions',
    'Startup software development',
    'Enterprise software engineering',
  ],
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
