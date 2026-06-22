import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { ServiceIconMap } from '@/lib/icons';
import FAQAccordion from '@/components/FAQAccordion';
import { servicesFAQs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Mobile app development, website development, cybersecurity, and AI integration services.',
};

const process = [
  { step: '01', title: 'Discovery', body: 'We learn about your business, goals, and constraints before writing a single line of code.' },
  { step: '02', title: 'Design & Plan', body: 'Architecture, wireframes, and a clear project roadmap — agreed before development starts.' },
  { step: '03', title: 'Build & Test', body: 'Agile sprints with regular demos, automated testing, and security reviews baked in.' },
  { step: '04', title: 'Deliver & Support', body: 'On-time delivery, smooth handover, and ongoing support as your product evolves.' },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative bg-slate-950 border-b border-slate-800/60 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-slate-50 mb-3">Our Services</h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Full-stack digital solutions — built with security and scalability at the core.
            </p>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-14 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = ServiceIconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="group bg-slate-800/40 border border-slate-700/50 rounded-xl p-7 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                      {Icon && <Icon className="w-6 h-6" />}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-100">{service.title}</h2>
                      <p className="text-slate-400 text-sm mt-0.5">{service.description}</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.detail}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-700/40 border border-slate-600/50 text-slate-400 text-xs rounded-md"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-400/70" />
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-1 text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors"
                  >
                    See full details
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 md:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-100 mb-2">How We Work</h2>
            <p className="text-slate-400 text-sm max-w-lg">
              A structured, transparent process that keeps you informed and in control at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((item) => (
              <div key={item.step} className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-colors duration-300">
                <div className="text-4xl font-black text-slate-700 mb-3 select-none leading-none">{item.step}</div>
                <h3 className="font-semibold text-slate-200 mb-1.5 text-sm">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion faqs={servicesFAQs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-slate-950 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/40 via-indigo-900/20 to-slate-900/60 border border-blue-500/20 rounded-2xl p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
            <h2 className="text-xl font-bold text-slate-100 mb-2">Not Sure Which Service You Need?</h2>
            <p className="text-slate-400 text-sm mb-5">
              Book a free 30-minute discovery call and we&apos;ll help you figure it out.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 text-sm">
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
