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
