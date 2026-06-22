export interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
}

export default function BlogCard({ title, excerpt, author, date, readTime, category, categoryColor }: BlogCardProps) {
  return (
    <article className="group bg-slate-800/40 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col">
      <div className="h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
      <div className="p-5 flex flex-col flex-1">
        <span className={`inline-block self-start px-2 py-0.5 text-xs font-medium rounded mb-3 ${categoryColor}`}>
          {category}
        </span>
        <h3 className="text-slate-100 font-semibold text-sm leading-snug mb-2 group-hover:text-blue-400 transition-colors duration-200 flex-1">
          {title}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-700/50">
          <span className="text-slate-400 font-medium">{author}</span>
          <span className="text-slate-600">{date} &middot; {readTime}</span>
        </div>
      </div>
    </article>
  );
}
