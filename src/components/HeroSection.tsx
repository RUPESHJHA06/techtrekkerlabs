import Link from 'next/link';

const techStack = [
  'Swift', 'Kotlin', 'React Native', 'Flutter',
  'Next.js', 'Node.js', 'Python', 'AI / LLMs',
];

export default function HeroSection() {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 -left-48 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>
      {/* Grid */}
      <div className="absolute inset-0 grid-bg" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-400 text-xs font-medium tracking-wide">Software & Digital Products Agency</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-50 leading-tight mb-5">
            We Build Whatever{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Your Business Needs
            </span>
          </h1>

          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-xl">
            Apps, websites, automation, AI tools, dashboards, APIs, security audits — if it runs on a screen, we can build it. Tell us what you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/25 text-sm"
            >
              Get Started
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200 text-sm"
            >
              See Our Work
            </Link>
          </div>

          {/* Tech stack */}
          <div className="mt-7">
            <p className="text-slate-600 text-[10px] uppercase tracking-widest mb-2.5">
              Technologies we work with
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-slate-800/70 border border-slate-700/50 text-slate-400 text-xs rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
