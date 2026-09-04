import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PortfolioCard from '@/components/PortfolioCard';
import { projects } from '@/data/portfolio';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} | TechTrekker Labs`,
      description: project.description,
      url: `/portfolio/${project.slug}`,
      type: 'article',
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const related = projects.filter((item) => item.slug !== slug).slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `https://techtrekkerlabs.com/portfolio/${project.slug}`,
    creator: { '@type': 'Organization', name: 'TechTrekker Labs', url: 'https://techtrekkerlabs.com' },
    keywords: [project.category, project.projectType, ...project.tech],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero — always has a gradient so works in both modes */}
      <section className={`relative bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-slate-300 text-xs font-medium hover:text-white transition-colors mb-7"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Portfolio
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="rounded-full border border-blue-300/30 bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-100">
              {project.projectType}
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/85">
              {project.category}
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">{project.title}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-200">{project.description}</p>
        </div>
      </section>

      {/* Case study body */}
      <section className="border-b border-slate-200 bg-white py-12 dark:border-slate-800/60 dark:bg-slate-950 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(18rem,0.85fr)] lg:px-8">
          <div className="space-y-12">
            <CaseSection title="Overview" tone="blue">
              <p>{project.overview}</p>
            </CaseSection>

            <CaseSection title="Problem" tone="red">
              <p>{project.problem}</p>
            </CaseSection>

            <CaseSection title="Solution / Approach" tone="blue">
              <p>{project.solution}</p>
            </CaseSection>

            <CaseSection title="Key Features" tone="green">
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm leading-relaxed text-slate-600 dark:border-slate-700/60 dark:bg-slate-800/40 dark:text-slate-400"
                  >
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection title="Technical Architecture / Highlights" tone="violet">
              <ul className="space-y-3">
                {project.architecture.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-violet-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CaseSection>
          </div>

          {/* Sidebar */}
          <aside className="self-start rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700/60 dark:bg-slate-800/30 lg:sticky lg:top-24">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-500">Project type</p>
            <p className="mb-5 text-lg font-semibold text-slate-900 dark:text-slate-100">{project.projectType}</p>

            {!project.isReal && (
              <p className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-3 text-xs leading-relaxed text-blue-800 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200">
                This {project.projectType.toLowerCase()} is designed to demonstrate an engineering and product approach. It is not presented as client work or a live commercial service.
              </p>
            )}

            <div className="border-t border-slate-200 pt-5 dark:border-slate-700/60">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-500">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related projects */}
      <section className="border-b border-slate-200 bg-slate-50 py-12 dark:border-slate-800/60 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-slate-100">More selected work</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                aria-label={`View ${item.title} case study`}
                className="block h-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              >
                <PortfolioCard {...item} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 dark:from-blue-900/40 dark:via-indigo-900/20 dark:to-slate-900/60 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Building something similar?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-5">Let&apos;s talk through the product and engineering decisions that matter for your project.</p>
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

function CaseSection({ title, tone, children }: { title: string; tone: 'blue' | 'red' | 'green' | 'violet'; children: React.ReactNode }) {
  const tones = {
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400',
    red: 'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400',
    green: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
    violet: 'bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400',
  };

  return (
    <section>
      <div className="mb-4 flex items-center gap-3">
        <span className={`flex h-8 w-8 items-center justify-center rounded-lg border ${tones[tone]}`}>
          <span className="h-2 w-2 rounded-full bg-current" />
        </span>
        <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-800 dark:text-slate-200">{title}</h2>
      </div>
      <div className="pl-0 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:pl-11">{children}</div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 flex-none text-emerald-500 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
