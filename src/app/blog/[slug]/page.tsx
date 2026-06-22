import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import BlogCard from '@/components/BlogCard';

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-slate-950 border-b border-slate-800/60 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="mb-5">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-blue-400 text-xs hover:text-blue-300 transition-colors mb-5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Blog
            </Link>
          </div>
          <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded mb-4 ${post.categoryColor}`}>
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-50 leading-tight mb-5">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                {post.author[0]}
              </div>
              <span className="text-slate-300 font-medium">{post.author}</span>
            </div>
            <span>&middot;</span>
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className={`leading-relaxed ${
                  i === 0
                    ? 'text-slate-200 text-base first-letter:text-5xl first-letter:font-black first-letter:text-blue-400 first-letter:float-left first-letter:mr-2 first-letter:leading-none'
                    : 'text-slate-400 text-sm'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap gap-2">
            {[post.category, 'TechTrekker Labs', 'Engineering'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs rounded-md">
                #{tag.toLowerCase().replace(/\s+/g, '-')}
              </span>
            ))}
          </div>

          {/* Author card */}
          <div className="mt-8 bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 flex gap-4">
            <div className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0">
              {post.author[0]}
            </div>
            <div>
              <div className="text-slate-100 font-semibold text-sm">{post.author}</div>
              <div className="text-slate-500 text-xs mt-0.5">
                Engineer &amp; writer at TechTrekker Labs. Writes about security, AI, and modern software development.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-12 bg-slate-950 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-100 mb-6">More from the Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="block">
                <BlogCard {...p} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-slate-900 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/40 via-indigo-900/20 to-slate-900/60 border border-blue-500/20 rounded-2xl p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
            <h2 className="text-xl font-bold text-slate-100 mb-2">Like what you read?</h2>
            <p className="text-slate-400 text-sm mb-5">Let&apos;s build something together.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 text-sm">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
