import type { Metadata } from 'next';
import Link from 'next/link';
import ClientPageHeader from '@/components/ClientPageHeader';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about TechTrekker Labs — our story, mission, vision, and why businesses trust us.',
};

const values = [
  { title: 'Security First', body: 'We treat security as a fundamental design requirement, not an optional feature.' },
  { title: 'Client Transparency', body: 'Open communication and honest timelines — no surprises at delivery.' },
  { title: 'Technical Excellence', body: 'Clean code, best practices, and maintainable architecture on every project.' },
  { title: 'Continuous Growth', body: 'We stay current with emerging technologies so our clients stay ahead.' },
];

const whyUs = [
  { emoji: '🎯', title: 'Goal-Oriented', body: 'We measure success by your business outcomes, not just deliverables.' },
  { emoji: '🔍', title: 'Requirements First', body: 'We understand what you need before writing a single line of code — or hiring the right people to do it.' },
  { emoji: '⚡', title: 'Fast Turnaround', body: 'We move quickly and communicate clearly. No radio silence, no surprises at delivery.' },
  { emoji: '🤝', title: 'Long-Term Partnership', body: "We don't just build and leave — we're here as your product grows and your needs evolve." },
];

const highlights = [
  { label: 'Founded', value: '2025' },
  { label: 'Team', value: 'Lean & Agile' },
  { label: 'Approach', value: 'Requirements First' },
  { label: 'Response Time', value: 'Within 24 hrs' },
];

export default function AboutPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/60 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <ClientPageHeader titleKey="about_title" descKey="about_desc" />
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-14 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Who We Are</h2>
              <div className="space-y-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                <p>TechTrekker Labs is a new software agency built on a simple idea: understand what a client actually needs first, then figure out the best way to build it — whether that means using our existing skills or bringing in the right people for the job.</p>
                <p>We don&apos;t limit ourselves to a fixed set of technologies or industries. If it can run on a screen, we can build it. We work with founders, startups, and businesses of all sizes who need a technical partner they can trust to be honest with them.</p>
                <p>We are just getting started — and we&apos;re building this agency the same way we build products: transparently, with quality, and for the long term.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800/40 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700/50 rounded-xl overflow-hidden">
              {highlights.map((item, i) => (
                <div key={item.label} className={`flex justify-between items-center px-6 py-4 ${i < highlights.length - 1 ? 'border-b border-slate-100 dark:border-slate-700/50' : ''}`}>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">{item.label}</span>
                  <span className="text-slate-900 dark:text-slate-100 font-semibold text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white dark:bg-slate-800/40 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700/50 rounded-xl p-7 hover:border-blue-500/40 transition-colors duration-300">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-md shadow-blue-500/20">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">To empower businesses with secure, scalable, and intelligent digital solutions that drive real growth. We combine technical depth with business understanding to build products that matter.</p>
            </div>
            <div className="bg-white dark:bg-slate-800/40 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700/50 rounded-xl p-7 hover:border-indigo-500/40 transition-colors duration-300">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-4 shadow-md shadow-indigo-500/20">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Our Vision</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">To be the most trusted technology partner for modern businesses — known for our integrity, technical excellence, and the lasting impact we create for every client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-7">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white dark:bg-slate-800/40 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700/50 rounded-xl p-5 hover:border-blue-500/40 transition-colors duration-300">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1.5 text-sm">{v.title}</h3>
                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-7">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-2xl leading-none">{item.emoji}</span>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1 text-sm">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 dark:from-blue-900/40 dark:via-indigo-900/20 dark:to-slate-900/60 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Ready to Work Together?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-5">Let&apos;s build something great.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 text-sm">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
