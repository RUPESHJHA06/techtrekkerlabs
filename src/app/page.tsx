'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import BlogCard from '@/components/BlogCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import ScrollReveal from '@/components/ScrollReveal';
import { InstagramIcon, LinkedInIcon } from '@/lib/icons';
import { services } from '@/data/services';
import { projects } from '@/data/portfolio';
import { blogPosts } from '@/data/blog';
import { useLanguage } from '@/contexts/LanguageContext';

const serviceLinks = [
  { href: '/services/web-development', label: 'web development' },
  { href: '/services/mobile-app-development', label: 'mobile app development' },
  { href: '/services/ai-solutions', label: 'AI solutions' },
  { href: '/services/saas-development', label: 'SaaS development' },
  { href: '/services/cybersecurity', label: 'cybersecurity consulting' },
  { href: '/services/cloud-solutions', label: 'cloud solutions' },
];

const homepageFaqs = [
  {
    question: 'What custom software development services does TechTrekker Labs offer?',
    answer:
      'We build custom websites, mobile apps, AI-powered products, SaaS platforms, cybersecurity programs, and cloud-native systems for startups and enterprises.',
  },
  {
    question: 'Do you work with startups that only have an idea or MVP plan?',
    answer:
      'Yes. We help startup teams validate product scope, design an MVP roadmap, build the first release, and prepare the architecture for future scale.',
  },
  {
    question: 'Why hire a custom software development company instead of freelancers?',
    answer:
      'A software development company gives you product strategy, UI/UX, engineering, QA, security, deployment, and ongoing support under one accountable team.',
  },
];

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
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-3xl mt-4 leading-relaxed">
                Explore our focused services for{' '}
                {serviceLinks.map((link, index) => (
                  <span key={link.href}>
                    <Link href={link.href} className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                      {link.label}
                    </Link>
                    {index < serviceLinks.length - 2 ? ', ' : index === serviceLinks.length - 2 ? ', and ' : '.'}
                  </span>
                ))}
              </p>
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

      {/* ── FAQ ── */}
      <section className="py-14 md:py-20 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Custom Software Development FAQs</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
                Straight answers for teams comparing software development companies, planning a startup MVP, or scaling a custom product.
              </p>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {homepageFaqs.map((faq, i) => (
              <ScrollReveal key={faq.question} delay={i * 70}>
                <article className="bg-white dark:bg-slate-800/40 shadow-[0_1px_3px_rgba(0,0,0,0.07)] dark:shadow-none border border-slate-200/80 dark:border-slate-700/50 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2 text-sm">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                </article>
              </ScrollReveal>
            ))}
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
              <div className="mt-7 pt-6 border-t border-blue-200/60 dark:border-blue-500/10 flex items-center justify-center gap-4">
                <span className="text-slate-500 dark:text-slate-500 text-xs font-medium">Follow us</span>
                <a href="https://www.instagram.com/techtrekker_labs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700/50 transition-all duration-150">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/company/132944038/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700/50 transition-all duration-150">
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
