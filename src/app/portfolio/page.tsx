import type { Metadata } from 'next';
import Link from 'next/link';
import PortfolioGrid from '@/components/PortfolioGrid';
import ClientPageHeader from '@/components/ClientPageHeader';
import { projects } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Selected Work & Product Experiments',
  description: 'Selected internal products, concept projects, and technical showcases by TechTrekker Labs.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Selected Work & Product Experiments | TechTrekker Labs',
    description: 'A selection of products, platforms, and technical concepts built by TechTrekker Labs.',
    url: '/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/60 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.18em] mb-3">Portfolio</p>
            <ClientPageHeader titleKey="portfolio_title" descKey="portfolio_desc" />
          </div>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="py-8 md:py-10 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-7 max-w-2xl">
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Each entry is clearly identified as an internal product, concept project, or technical showcase. These case studies focus on product thinking and engineering approaches, not unverified business outcomes.
            </p>
          </div>
          <PortfolioGrid projects={projects} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 dark:from-blue-900/40 dark:via-indigo-900/20 dark:to-slate-900/60 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Have a product challenge to solve?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-5">Let&apos;s discuss a practical path from idea to reliable software.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20 text-sm"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
