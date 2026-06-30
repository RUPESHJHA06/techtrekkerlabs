import type { Metadata } from 'next';
import Link from 'next/link';
import PortfolioCard from '@/components/PortfolioCard';
import { projects } from '@/data/portfolio';
import ClientPageHeader from '@/components/ClientPageHeader';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore mobile apps, web applications, cybersecurity tools, and AI solutions we have built.',
  alternates: {
    canonical: '/portfolio',
  },
};

const categories = ['All', 'Mobile App', 'Web App', 'Cybersecurity', 'AI Integration'];

export default function PortfolioPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/60 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <ClientPageHeader titleKey="portfolio_title" descKey="portfolio_desc" />
        </div>
      </section>

      {/* Filter pills */}
      <section className="py-5 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                  i === 0
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-transparent text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-700 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Honest note */}
      <section className="py-6 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            We are a new agency. More client work will be added here as projects ship.{' '}
            <span className="text-blue-600 dark:text-blue-400 font-medium">Real &gt; impressive but fake.</span>
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <PortfolioCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 dark:from-blue-900/40 dark:via-indigo-900/20 dark:to-slate-900/60 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Have a Project in Mind?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-5">We&apos;d love to add your product to this portfolio. Let&apos;s talk.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 text-sm">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
