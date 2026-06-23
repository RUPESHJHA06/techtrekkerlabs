'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TranslationKey } from '@/lib/translations';

const companyLinkKeys: { key: TranslationKey; href: string }[] = [
  { key: 'nav_about', href: '/about' },
  { key: 'nav_portfolio', href: '/portfolio' },
  { key: 'nav_careers', href: '/careers' },
  { key: 'nav_blog', href: '/blog' },
  { key: 'footer_privacy', href: '/privacy' },
];

const serviceLinkKeys: TranslationKey[] = ['footer_svc1', 'footer_svc2', 'footer_svc3', 'footer_svc4'];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footer-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b82f6"/>
                    <stop offset="100%" stopColor="#8b5cf6"/>
                  </linearGradient>
                </defs>
                <rect width="32" height="32" rx="8" fill="url(#footer-bg)"/>
                <line x1="7" y1="10" x2="25" y2="10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="16" y1="10" x2="16" y2="25" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="7" cy="10" r="2" fill="white"/>
                <circle cx="25" cy="10" r="2" fill="white"/>
                <circle cx="16" cy="25" r="2" stroke="white" strokeWidth="1.5" fill="none"/>
                <line x1="10" y1="10" x2="10" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
                <line x1="22" y1="10" x2="22" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
                <circle cx="10" cy="15" r="1.2" stroke="white" strokeWidth="1.2" fill="none" strokeOpacity="0.6"/>
                <circle cx="22" cy="15" r="1.2" stroke="white" strokeWidth="1.2" fill="none" strokeOpacity="0.6"/>
              </svg>
              <span className="font-bold text-slate-900 dark:text-slate-100 text-lg tracking-tight">TechTrekker Labs</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed max-w-xs">{t('footer_tagline')}</p>
            <div className="mt-4">
              <a href="mailto:contact@techtrekkerlabs.com" className="text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                contact@techtrekkerlabs.com
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-slate-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-widest mb-4">{t('footer_company')}</h3>
            <ul className="space-y-2.5">
              {companyLinkKeys.map(({ key, href }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 text-sm transition-colors">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-widest mb-4">{t('footer_services_label')}</h3>
            <ul className="space-y-2.5">
              {serviceLinkKeys.map((key) => (
                <li key={key}>
                  <Link href="/services" className="text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 text-sm transition-colors">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 dark:text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} TechTrekker Labs. {t('footer_rights')}
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 text-xs transition-colors">{t('footer_privacy')}</Link>
            <Link href="/contact" className="text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 text-xs transition-colors">{t('footer_contact')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
