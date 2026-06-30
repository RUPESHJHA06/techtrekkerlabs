import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/portfolio';
import PortfolioCard from '@/components/PortfolioCard';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | TechTrekker Labs`,
      description: project.description,
      url: `/portfolio/${project.slug}`,
      type: 'article',
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main>
      {/* Hero — always has a gradient so works in both modes */}
      <section className={`relative bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Link href="/portfolio" className="inline-flex items-center gap-1.5 text-slate-400 text-xs hover:text-slate-200 transition-colors mb-6">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Portfolio
          </Link>
          <span className="inline-block px-2 py-0.5 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-medium rounded mb-4">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-slate-300 text-base max-w-xl leading-relaxed">{project.description}</p>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 dark:divide-slate-800/60">
            {project.metrics.map((m) => (
              <div key={m.label} className="px-6 py-6 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{m.value}</div>
                <div className="text-slate-500 dark:text-slate-500 text-xs">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study body */}
      <section className="py-14 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {/* Problem */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-red-500 dark:text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h2 className="text-base font-bold text-slate-700 dark:text-slate-100 uppercase tracking-widest text-xs">The Problem</h2>
              </div>
              <div className="pl-10">
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.problem}</p>
              </div>
            </div>

            <div className="h-px bg-slate-200 dark:bg-slate-800" />

            {/* Solution */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h2 className="text-base font-bold text-slate-700 dark:text-slate-100 uppercase tracking-widest text-xs">Our Solution</h2>
              </div>
              <div className="pl-10">
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <div className="h-px bg-slate-200 dark:bg-slate-800" />

            {/* Result */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="text-base font-bold text-slate-700 dark:text-slate-100 uppercase tracking-widest text-xs">The Result</h2>
              </div>
              <div className="pl-10">
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.result}</p>
              </div>
            </div>
          </div>

          {/* Tech stack */}
          <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 text-xs rounded-md font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6">More Case Studies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="block">
                <PortfolioCard {...p} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 dark:from-blue-900/40 dark:via-indigo-900/20 dark:to-slate-900/60 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Want a result like this?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-5">Let&apos;s talk about your project.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 text-sm">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
