'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TranslationKey } from '@/lib/translations';

const stepKeys: TranslationKey[] = ['hero_step1', 'hero_step2', 'hero_step3', 'hero_step4'];

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/70 to-indigo-50/50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 overflow-hidden">
      {/* Glow orbs — vivid in light mode, subtle in dark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-400/25 dark:bg-blue-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-32 w-[380px] h-[380px] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>
      <div className="absolute inset-0 grid-bg" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/10 dark:bg-blue-500/10 border border-blue-300/70 dark:border-blue-500/20 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            <span className="text-blue-700 dark:text-blue-400 text-xs font-semibold tracking-wide">{t('hero_badge')}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-950 dark:text-slate-50 leading-tight mb-5">
            {t('hero_h1a')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
              {t('hero_h1b')}
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 max-w-xl">
            {t('hero_desc')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/25 text-sm"
            >
              {t('hero_cta_primary')}
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-lg bg-white/80 dark:bg-transparent hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500/60 dark:hover:text-blue-400 transition-all duration-200 text-sm shadow-sm dark:shadow-none"
            >
              {t('hero_cta_secondary')}
            </Link>
          </div>

          {/* How it works pills */}
          <div className="mt-7">
            <p className="text-slate-400 dark:text-slate-600 text-[10px] uppercase tracking-widest mb-2.5">
              {t('hero_how')}
            </p>
            <div className="flex flex-wrap gap-2">
              {stepKeys.map((key, i) => (
                <span
                  key={key}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 text-xs rounded-md"
                >
                  <span className="text-blue-600 dark:text-blue-500 font-bold">{i + 1}.</span> {t(key)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
