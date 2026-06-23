export interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  coverGradient: string;
  coverIcon: string;
}

export default function BlogCard({ title, excerpt, author, date, readTime, category, categoryColor, coverGradient, coverIcon }: BlogCardProps) {
  return (
    <article className="group bg-white dark:bg-slate-800/40 shadow-[0_1px_4px_rgba(0,0,0,0.08)] dark:shadow-none border border-slate-200/80 dark:border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-400/60 hover:shadow-[0_4px_16px_rgba(59,130,246,0.11)] dark:hover:border-blue-500/40 dark:hover:shadow-blue-500/5 transition-all duration-300 flex flex-col">
      {/* Cover */}
      <div className={`relative h-32 bg-gradient-to-br ${coverGradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <span className="text-5xl relative z-10 drop-shadow-lg">{coverIcon}</span>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className={`inline-block self-start px-2 py-0.5 text-xs font-medium rounded mb-3 ${categoryColor}`}>
          {category}
        </span>
        <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-sm leading-snug mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 flex-1">
          {title}
        </h3>
        <p className="text-slate-500 dark:text-slate-500 text-xs leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-200 dark:border-slate-700/50">
          <span className="text-slate-700 dark:text-slate-400 font-medium">{author}</span>
          <span className="text-slate-400 dark:text-slate-600">{date} &middot; {readTime}</span>
        </div>
      </div>
    </article>
  );
}
