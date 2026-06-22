import Link from 'next/link';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function NotFound() {
  return (
    <main className="relative flex-1 flex items-center justify-center min-h-[70vh] bg-slate-950 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>
      <div className="absolute inset-0 grid-bg" />

      <div className="relative text-center px-4">
        {/* Big 404 */}
        <div className="relative inline-block mb-6 select-none">
          <span className="text-[9rem] md:text-[13rem] font-black leading-none text-slate-800/80">
            404
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-[9rem] md:text-[13rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-blue-400/40 to-indigo-600/20 blur-[2px]">
            404
          </span>
        </div>

        <h1 className="text-2xl font-bold text-slate-100 mb-3">Page not found</h1>
        <p className="text-slate-400 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 text-sm"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200 text-sm"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex flex-wrap gap-5 justify-center">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
