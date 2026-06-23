'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TranslationKey } from '@/lib/translations';
import { InstagramIcon, LinkedInIcon } from '@/lib/icons';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/techtrekker_labs/',
    icon: InstagramIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/132944038/',
    icon: LinkedInIcon,
  },
];

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
              <Image src="/logo.png" alt="TechTrekker Labs" width={42} height={42} className="rounded-full" />
              <span className="font-bold text-slate-900 dark:text-slate-100 text-lg tracking-tight">TechTrekker Labs</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed max-w-xs">{t('footer_tagline')}</p>
            <div className="mt-4 space-y-2">
              <a href="mailto:contact@techtrekkerlabs.com" className="block text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                contact@techtrekkerlabs.com
              </a>
              <div className="flex items-center gap-3 pt-1">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/50 transition-all duration-150"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
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
