import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { MailIcon, MapPinIcon, PhoneIcon } from '@/lib/icons';
import FAQAccordion from '@/components/FAQAccordion';
import { generalFAQs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with TechTrekker Labs to start your project or ask us anything.',
};

const contactInfo = [
  { Icon: MailIcon, label: 'Email', value: 'contact@techtrekkerlabs.com', href: 'mailto:contact@techtrekkerlabs.com' },
  { Icon: PhoneIcon, label: 'WhatsApp', value: 'Chat on WhatsApp', href: 'https://wa.me/918287666656?text=Hi%20TechTrekker%20Labs%2C%20I%27d%20like%20to%20discuss%20a%20project' },
  { Icon: MapPinIcon, label: 'Location', value: 'Gurugram, India · Remote Worldwide', href: null },
];

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative bg-slate-950 border-b border-slate-800/60 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-slate-50 mb-3">Get in Touch</h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Have a project in mind or want to explore what we can do together? Drop us a message — we respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-14 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-1.5">Contact Details</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Prefer email or a quick call? Here&apos;s how to reach us directly.
                </p>
              </div>

              <div className="space-y-3">
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex gap-3 bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 hover:border-blue-500/30 transition-colors duration-300">
                    <div className="w-9 h-9 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-200">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5">
                <p className="text-xs text-slate-500 mb-1.5 uppercase tracking-widest">Response time</p>
                <p className="text-sm font-semibold text-slate-200">Within 24 hours on business days</p>
              </div>

              <a
                href="https://wa.me/918287666656?text=Hi%20TechTrekker%20Labs%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-xl p-5 hover:border-green-500/40 transition-colors duration-200"
              >
                <div className="w-9 h-9 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.122 1.524 5.862L0 24l6.306-1.497A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.012-1.378l-.36-.214-3.733.885.936-3.617-.235-.372A9.77 9.77 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100">Chat on WhatsApp</p>
                  <p className="text-xs text-slate-400 mt-0.5">Quickest way to reach us</p>
                </div>
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-7">
              <h2 className="text-lg font-bold text-slate-100 mb-5">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-14 bg-slate-950 border-t border-slate-800/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-100 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion faqs={generalFAQs} />
        </div>
      </section>
    </main>
  );
}
