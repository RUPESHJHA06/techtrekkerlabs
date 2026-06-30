import type { Metadata } from 'next';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blog';
import ClientPageHeader from '@/components/ClientPageHeader';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, guides, and updates from the TechTrekker Labs engineering and security team.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const featured = blogPosts[0];

  return (
    <main>
      {/* Header */}
      <section className="relative bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/60 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <ClientPageHeader titleKey="blog_title" descKey="blog_desc" />
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="py-10 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featured.slug}`} className="block group">
              <div className="relative overflow-hidden bg-white dark:bg-slate-800/40 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 md:p-10 hover:border-blue-500/40 transition-colors duration-300">
                <div className="h-0.5 absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600" />
                <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded mb-3 ${featured.categoryColor}`}>
                  {featured.category}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 max-w-2xl leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {featured.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5 max-w-2xl">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{featured.author}</span>
                  <span>&middot;</span>
                  <span>{featured.date}</span>
                  <span>&middot;</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All posts */}
      <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-base font-bold text-slate-500 dark:text-slate-300 mb-5 uppercase tracking-widest text-xs">
            All Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block h-full">
                <BlogCard {...post} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 dark:from-blue-900/40 dark:via-indigo-900/20 dark:to-slate-900/60 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Stay in the Loop</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 max-w-md mx-auto">
              New articles on security, AI, and engineering — straight to your inbox, no spam.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-sm mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 px-4 py-2.5 bg-white dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all"
              />
              <button className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
