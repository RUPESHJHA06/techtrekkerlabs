import type { Project } from '@/data/portfolio';

export default function PortfolioCard({ title, description, tech, category, projectType, gradient, visual }: Project) {
  return (
    <article className="group h-full overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/60 hover:shadow-[0_12px_28px_rgba(59,130,246,0.14)] dark:border-slate-700/50 dark:bg-slate-800/40 dark:shadow-none dark:hover:border-blue-500/40 dark:hover:shadow-blue-500/5">
      {/* Cover */}
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${gradient} p-5`}>
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full border border-white/15 bg-white/10" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950/35 to-transparent" />
        <ProjectPreview visual={visual} />
        <div className="relative z-10 flex justify-between gap-3">
          <span className="rounded-full border border-white/20 bg-slate-950/25 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
            {projectType}
          </span>
          <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/90">
            {category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex h-[calc(100%-12rem)] flex-col p-5">
        <h3 className="mb-2 text-lg font-semibold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
          {title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
        <div className="mt-auto">
          <div className="mb-4 flex flex-wrap gap-1.5">
            {tech.slice(0, 4).map((item) => (
              <span
                key={item}
                className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-700/60 dark:bg-slate-800/70 dark:text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-500 dark:text-blue-400 dark:group-hover:text-blue-300">
            View case study
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}

/** Small decorative mockup shown on the card cover, keyed by project category. */
function ProjectPreview({ visual }: { visual: Project['visual'] }) {
  const content = {
    website: (
      <>
        <div className="mb-3 h-2 w-20 rounded-full bg-blue-300/80" />
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 h-12 rounded-md bg-white/90" />
          <div className="h-12 rounded-md bg-blue-200/80" />
        </div>
        <div className="mt-2 h-6 rounded-md bg-white/45" />
      </>
    ),
    knowledge: (
      <>
        <div className="h-2 w-24 rounded-full bg-violet-200" />
        <div className="mt-3 rounded-lg border border-white/25 bg-slate-950/30 p-3">
          <div className="h-2 w-3/4 rounded-full bg-white/80" />
          <div className="mt-2 h-2 w-full rounded-full bg-white/35" />
          <div className="mt-2 h-2 w-2/3 rounded-full bg-white/35" />
        </div>
        <div className="mt-2 flex gap-2">
          <span className="h-5 w-12 rounded bg-violet-200/70" />
          <span className="h-5 w-16 rounded bg-white/30" />
        </div>
      </>
    ),
    finance: (
      <>
        <div className="flex items-end justify-between">
          <div>
            <div className="h-2 w-14 rounded-full bg-cyan-100/80" />
            <div className="mt-2 h-5 w-20 rounded bg-white/90" />
          </div>
          <div className="h-9 w-9 rounded-full border-4 border-cyan-100/80" />
        </div>
        <div className="mt-4 flex h-10 items-end gap-1.5">
          {[35, 65, 45, 85, 60, 100, 75].map((height) => (
            <span key={height} className="flex-1 rounded-t bg-white/75" style={{ height: `${height}%` }} />
          ))}
        </div>
      </>
    ),
    tasks: (
      <>
        <div className="mb-3 flex justify-between">
          <span className="h-2 w-12 rounded-full bg-emerald-100" />
          <span className="h-2 w-7 rounded-full bg-white/40" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['bg-white/80', 'bg-emerald-100/75', 'bg-white/60'].map((color, index) => (
            <div key={index} className="space-y-2 rounded-md bg-slate-950/20 p-2">
              <div className={`h-7 rounded ${color}`} />
              <div className="h-2 rounded bg-white/35" />
              <div className="h-2 w-3/4 rounded bg-white/25" />
            </div>
          ))}
        </div>
      </>
    ),
    security: (
      <>
        <div className="flex items-center justify-between">
          <div className="h-2 w-16 rounded-full bg-rose-100" />
          <span className="h-5 w-5 rounded-full border-2 border-rose-100" />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-md border border-white/20 bg-slate-950/30 p-2">
            <div className="h-2 w-8 rounded bg-rose-200/80" />
            <div className="mt-2 h-5 w-12 rounded bg-white/70" />
          </div>
          <div className="rounded-md border border-white/20 bg-slate-950/30 p-2">
            <div className="h-2 w-8 rounded bg-white/45" />
            <div className="mt-2 h-5 w-12 rounded bg-white/70" />
          </div>
        </div>
        <div className="mt-2 h-2 w-full rounded bg-rose-100/60" />
      </>
    ),
  };

  return (
    <div className="absolute bottom-4 left-5 right-5 z-10 rounded-xl border border-white/20 bg-slate-950/20 p-3 shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1">
      {content[visual]}
    </div>
  );
}
