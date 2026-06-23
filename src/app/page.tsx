'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import BlogCard from '@/components/BlogCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import ScrollReveal from '@/components/ScrollReveal';
import { services } from '@/data/services';
import { projects } from '@/data/portfolio';
import { blogPosts } from '@/data/blog';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  const whyUs = [
    { title: t('sec_why_s1_title'), body: t('sec_why_s1_body') },
    { title: t('sec_why_s2_title'), body: t('sec_why_s2_body') },
    { title: t('sec_why_s3_title'), body: t('sec_why_s3_body') },
    { title: t('sec_why_s4_title'), body: t('sec_why_s4_body') },
  ];

  const stats = [
    { value: 4,   suffix: '',  label: t('stat_core_services') },
    { value: 8,   suffix: '+', label: t('stat_technologies') },
    { value: 100, suffix: '%', label: t('stat_transparency') },
    { value: 24,  suffix: 'h', label: t('stat_response') },
  ];

  return (
    <main>
      <HeroSection />

      {/* ── Services ── */}
      <section className="py-14 md:py-20 bg-slate-50/80 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">{t('sec_services_title')}</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-lg">{t('sec_services_desc')}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 70}>
                <Link href={`/services/${s.id}`} className="block h-full">
                  <ServiceCard {...s} />
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/services" className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
              {t('view_all_services')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-14 md:py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">{t('sec_why_title')}</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-7">{t('sec_why_desc')}</p>
                <div className="space-y-5">
                  {whyUs.map((p) => (
                    <div key={p.title} className="flex gap-4">
                      <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-blue-500/20">
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-0.5 text-sm">{p.title}</h3>
                        <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">{p.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <ScrollReveal key={s.label} delay={i * 80}>
                  <div className="bg-white dark:bg-slate-800/50 shadow-[0_1px_4px_rgba(0,0,0,0.08)] dark:shadow-none border border-slate-200/80 dark:border-slate-700/50 rounded-xl p-6 hover:border-blue-400/60 hover:shadow-[0_4px_16px_rgba(59,130,246,0.10)] dark:hover:border-blue-500/40 transition-all duration-300">
                    <AnimatedCounter
                      target={s.value}
                      suffix={s.suffix}
                      className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1"
                    />
                    <div className="text-slate-600 dark:text-slate-400 text-sm">{s.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section className="py-14 md:py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">{t('sec_portfolio_title')}</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-lg">{t('sec_portfolio_desc')}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(0, 3).map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 70}>
                <Link href={`/portfolio/${p.slug}`} className="block h-full">
                  <PortfolioCard {...p} />
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/portfolio" className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
              {t('view_all_projects')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialsSection />

      {/* ── Blog ── */}
      <section className="py-14 md:py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">{t('sec_blog_title')}</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-lg">{t('sec_blog_desc')}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {blogPosts.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 60}>
                <Link href={`/blog/${p.slug}`} className="block h-full">
                  <BlogCard {...p} />
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
              {t('view_all_articles')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 md:py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 dark:from-blue-900/40 dark:via-indigo-900/20 dark:to-slate-900/60 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-10 md:p-14 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">{t('sec_cta_title')}</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-7 max-w-lg mx-auto">{t('sec_cta_desc')}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 text-sm">
                  {t('sec_cta_primary')}
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-sm">
                  {t('sec_cta_secondary')}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
