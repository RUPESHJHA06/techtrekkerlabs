import Link from 'next/link';

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Privacy Policy', href: '/privacy' },
];

const serviceLinks = [
  'Mobile App Development',
  'Website Development',
  'Cybersecurity Services',
  'AI Integration & Automation',
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <span className="font-bold text-slate-100 text-lg tracking-tight">TechTrekker Labs</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Building secure, scalable, and intelligent digital solutions for modern businesses.
            </p>
            <div className="mt-4">
              <a href="mailto:contact@techtrekkerlabs.com" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">
                contact@techtrekkerlabs.com
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-slate-300 font-semibold text-xs uppercase tracking-widest mb-4">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-500 hover:text-slate-200 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-300 font-semibold text-xs uppercase tracking-widest mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link href="/services" className="text-slate-500 hover:text-slate-200 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} TechTrekker Labs. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
