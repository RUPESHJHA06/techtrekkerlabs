import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { ServiceIconMap } from '@/lib/icons';
import FAQAccordion from '@/components/FAQAccordion';
import { servicesFAQs } from '@/data/faqs';
import ClientPageHeader from '@/components/ClientPageHeader';

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
      <section className="relative bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/60 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <ClientPageHeader titleKey="services_title" descKey="services_desc" />
        </div>
      </section>

      {/* Service cards */}
      <section className="py-14 md:py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = ServiceIconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="group bg-white dark:bg-slate-800/40 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700/50 rounded-xl p-7 hover:border-blue-500/40 hover:shadow-md dark:hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-500 dark:text-blue-400 flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                      {Icon && <Icon className="w-6 h-6" />}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">{service.title}</h2>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">{service.description}</p>
                    </div>
                  </div>
                  <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed mb-5">{service.detail}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 dark:bg-slate-700/40 border border-slate-200 dark:border-slate-600/50 text-slate-600 dark:text-slate-400 text-xs rounded-md"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-500/70" />
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-medium hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
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
      <section className="py-14 md:py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">How We Work</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-lg">
              A structured, transparent process that keeps you informed and in control at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((item) => (
              <div key={item.step} className="bg-white dark:bg-slate-800/40 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700/50 rounded-xl p-6 hover:border-blue-500/40 transition-colors duration-300">
                <div className="text-4xl font-black text-slate-200 dark:text-slate-700 mb-3 select-none leading-none">{item.step}</div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1.5 text-sm">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion faqs={servicesFAQs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 dark:from-blue-900/40 dark:via-indigo-900/20 dark:to-slate-900/60 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Not Sure What You Need?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-5">
              Just tell us your idea or problem — we&apos;ll figure out the right solution together. No jargon, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/918287666656?text=Hi%20TechTrekker%20Labs%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/20 text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.122 1.524 5.862L0 24l6.306-1.497A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.012-1.378l-.36-.214-3.733.885.936-3.617-.235-.372A9.77 9.77 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-sm">
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
