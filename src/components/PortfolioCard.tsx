export interface PortfolioCardProps {
  title: string;
  description: string;
  tech: string[];
  category: string;
  gradient: string;
}

export default function PortfolioCard({ title, description, tech, category, gradient }: PortfolioCardProps) {
  return (
    <div className="group bg-slate-800/40 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
      <div className={`h-44 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-slate-950/40" />
        <span className="absolute inset-0 flex items-center justify-center text-6xl font-black text-white/15 select-none">
          {title[0]}
        </span>
      </div>
      <div className="p-5">
        <span className="inline-block px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-medium rounded mb-3">
          {category}
        </span>
        <h3 className="text-slate-100 font-semibold text-base mb-1.5 group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span key={t} className="px-2 py-0.5 bg-slate-700/50 border border-slate-600/50 text-slate-400 text-xs rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
