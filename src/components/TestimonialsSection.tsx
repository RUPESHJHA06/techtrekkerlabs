'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Compact transparency banner shown while we have no real client testimonials yet.
 * Intentionally lightweight so it doesn't compete visually with sections that
 * carry real content. Swap this markup for real testimonial cards once available.
 */
export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-10 md:py-12 bg-blue-50/40 dark:bg-slate-950 border-y border-blue-100/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="hidden sm:inline-flex w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
            <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed max-w-xl">
              {t('trust_banner_text')}
            </p>
          </div>
          <Link
            href="https://wa.me/918287666656?text=Hi%20TechTrekker%20Labs%2C%20I%27d%20like%20to%20discuss%20a%20project"
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors duration-200 shadow-sm shadow-blue-500/20 text-xs whitespace-nowrap flex-shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('trust_banner_cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}
