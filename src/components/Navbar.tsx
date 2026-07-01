'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { MenuIcon, XIcon, SunIcon, MoonIcon, InstagramIcon, LinkedInIcon } from '@/lib/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TranslationKey } from '@/lib/translations';

const navLinkKeys: { key: TranslationKey; href: string }[] = [
  { key: 'nav_home', href: '/' },
  { key: 'nav_about', href: '/about' },
  { key: 'nav_services', href: '/services' },
  { key: 'nav_portfolio', href: '/portfolio' },
  { key: 'nav_careers', href: '/careers' },
  { key: 'nav_blog', href: '/blog' },
  { key: 'nav_contact', href: '/contact' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/techtrekker_labs/', icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/132944038/', icon: LinkedInIcon },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => setMounted(true), []);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <nav className="sticky top-0 z-50 bg-white/96 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800/60 shadow-[0_1px_10px_rgba(0,0,0,0.08)] dark:shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image src="/logo.png" alt="TechTrekker Labs" width={42} height={42} className="rounded-full" priority />
            <span className="font-bold text-slate-900 dark:text-slate-100 text-lg tracking-tight">TechTrekker Labs</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinkKeys.map(({ key, href }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                  isActive(href)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-500/10'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {t(key)}
              </Link>
            ))}
          </div>

          {/* Desktop controls */}
          <div className="hidden md:flex items-center gap-2">
            {/* Social links */}
            <div className="flex items-center gap-1">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-150"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Language switcher */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-lg p-0.5">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all duration-150 ${
                  lang === 'en' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all duration-150 ${
                  lang === 'hi' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
                aria-label="हिंदी में बदलें"
              >
                हिं
              </button>
            </div>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-150"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
              </button>
            )}

            <Link
              href="/contact"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-500 transition-all duration-150 shadow-md shadow-blue-500/20"
            >
              {t('nav_get_started')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800/60 bg-white dark:bg-slate-950">
          <div className="px-4 pt-2 pb-4 space-y-0.5">
            {navLinkKeys.map(({ key, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive(href)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-500/10'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {t(key)}
              </Link>
            ))}

            {/* Mobile controls */}
            <div className="pt-3 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-150"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <div className="flex items-center bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-lg p-0.5">
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-500 dark:text-slate-400'}`}
                >EN</button>
                <button
                  onClick={() => setLang('hi')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${lang === 'hi' ? 'bg-blue-600 text-white' : 'text-slate-500 dark:text-slate-400'}`}
                >हिं</button>
              </div>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-150"
                >
                  {theme === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
                </button>
              )}
            </div>

            <div className="pt-1">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-500 transition-colors"
              >
                {t('nav_get_started')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
