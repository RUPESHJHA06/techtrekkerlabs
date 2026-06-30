import type { Metadata } from 'next';
import Link from 'next/link';
import ClientPageHeader from '@/components/ClientPageHeader';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join TechTrekker Labs — we are always looking for talented developers and cybersecurity professionals.',
  alternates: {
    canonical: '/careers',
  },
};

const perks = [
  { emoji: '🏡', title: 'Remote First', body: 'Work from anywhere — we believe great work happens with flexibility.' },
  { emoji: '📚', title: 'Skill Growth', body: 'Work on real, varied projects that sharpen your skills faster than any course.' },
  { emoji: '🌍', title: 'Global Projects', body: 'Work on products used by thousands of users across the globe.' },
  { emoji: '⚡', title: 'Ownership Culture', body: 'Ship features end-to-end — no rigid hierarchies or hand-offs.' },
  { emoji: '🩺', title: 'Health Benefits', body: 'Comprehensive health insurance coverage for full-time employees.' },
  { emoji: '🎉', title: 'Team Offsites', body: 'Annual company offsites to connect, celebrate, and recharge.' },
];

export default function CareersPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/60 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <ClientPageHeader titleKey="careers_title" descKey="careers_desc" />
        </div>
      </section>

      {/* Perks */}
      <section className="py-14 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-7">Why Work at TechTrekker Labs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((perk) => (
              <div key={perk.title} className="flex gap-4 bg-white dark:bg-slate-800/40 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700/50 rounded-xl p-5 hover:border-blue-500/40 transition-colors duration-300">
                <span className="text-2xl leading-none">{perk.emoji}</span>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1 text-sm">{perk.title}</h3>
                  <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">{perk.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions — empty state */}
      <section className="py-14 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-7">Open Positions</h2>
          <div className="bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 border-dashed rounded-2xl py-16 px-8 text-center">
            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600/50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-slate-400 dark:text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="12" />
              </svg>
            </div>
            <h3 className="text-slate-700 dark:text-slate-200 font-semibold text-lg mb-2">No Open Positions Right Now</h3>
            <p className="text-slate-500 dark:text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
              We don&apos;t have any active job postings at the moment. Check back soon — we&apos;re growing and new roles will be listed here.
            </p>
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 dark:from-blue-900/40 dark:via-indigo-900/20 dark:to-slate-900/60 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Interested in Working With Us?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 max-w-md mx-auto">
              Send us your CV and a note about what you&apos;re great at. We&apos;ll reach out when a fitting role opens up.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 text-sm">
              Send a General Application
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
