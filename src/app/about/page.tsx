import type { Metadata } from 'next';
import Link from 'next/link';

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
  { emoji: '🔐', title: 'Security Experts', body: 'Our team includes certified security professionals and ethical hackers.' },
  { emoji: '⚡', title: 'Fast Turnaround', body: 'We ship fast without cutting corners, thanks to our proven process.' },
  { emoji: '🤝', title: 'Long-Term Partnership', body: "We don't just build and leave — we support you as your product grows." },
];

const highlights = [
  { label: 'Founded', value: '2019' },
  { label: 'Team Size', value: '15+ professionals' },
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Client Retention', value: '90%+' },
];

export default function AboutPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative bg-slate-950 border-b border-slate-800/60 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-slate-50 mb-3">About TechTrekker Labs</h1>
            <p className="text-slate-400 text-base leading-relaxed">
              A modern IT agency built by engineers, for businesses that take technology seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-14 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-4">Who We Are</h2>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
                <p>
                  TechTrekker Labs is a startup IT agency founded by engineers, designers, and cybersecurity professionals with a shared mission: to help businesses build secure, reliable, and scalable digital products.
                </p>
                <p>
                  We work with startups, SMEs, and growing enterprises across industries — from healthcare and fintech to e-commerce and legal tech. Our expertise spans mobile app development, web engineering, cybersecurity, and AI integration.
                </p>
                <p>
                  What sets us apart is our security-first mindset. In every project we touch, security is a core design principle — not an afterthought.
                </p>
              </div>
            </div>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl overflow-hidden">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex justify-between items-center px-6 py-4 ${i < highlights.length - 1 ? 'border-b border-slate-700/50' : ''}`}
                >
                  <span className="text-slate-400 text-sm">{item.label}</span>
                  <span className="text-slate-100 font-semibold text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-7 hover:border-blue-500/30 transition-colors duration-300">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-md shadow-blue-500/20">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-100 mb-2">Our Mission</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                To empower businesses with secure, scalable, and intelligent digital solutions that drive real growth. We combine technical depth with business understanding to build products that matter.
              </p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-7 hover:border-indigo-500/30 transition-colors duration-300">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-4 shadow-md shadow-indigo-500/20">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-100 mb-2">Our Vision</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                To be the most trusted technology partner for modern businesses — known for our integrity, technical excellence, and the lasting impact we create for every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-100 mb-7">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:border-blue-500/30 transition-colors duration-300">
                <h3 className="font-semibold text-slate-200 mb-1.5 text-sm">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-100 mb-7">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-2xl leading-none">{item.emoji}</span>
                <div>
                  <h3 className="font-semibold text-slate-200 mb-1 text-sm">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-slate-900 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/40 via-indigo-900/20 to-slate-900/60 border border-blue-500/20 rounded-2xl p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
            <h2 className="text-xl font-bold text-slate-100 mb-2">Ready to Work Together?</h2>
            <p className="text-slate-400 text-sm mb-5">Let&apos;s build something great.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 text-sm">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
