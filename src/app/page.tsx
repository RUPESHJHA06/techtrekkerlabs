import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import BlogCard from '@/components/BlogCard';
import TrustedByBar from '@/components/TrustedByBar';
import TestimonialsSection from '@/components/TestimonialsSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import ScrollReveal from '@/components/ScrollReveal';
import { services } from '@/data/services';
import { projects } from '@/data/portfolio';
import { blogPosts } from '@/data/blog';

const whyUs = [
  { title: 'Security-First Approach', body: 'Every product we build is designed with security at its core — not bolted on after.' },
  { title: 'End-to-End Delivery', body: 'From discovery and design to deployment and support, we handle the full lifecycle.' },
  { title: 'Transparent Process', body: 'Clear timelines, regular updates, and full visibility at every stage.' },
  { title: 'Scalable Solutions', body: 'We build for today and architect for tomorrow — solutions that grow with your business.' },
];

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 4, suffix: '', label: 'Core Services' },
  { value: 5, suffix: '+', label: 'Years Experience' },
];

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustedByBar />

      {/* ── Services ── */}
      <section className="py-14 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-100 mb-2">What We Do</h2>
              <p className="text-slate-400 text-sm max-w-lg">
                Full-stack digital solutions — built with security and scalability in mind.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 70}>
                <Link href={`/services/${s.id}`} className="block h-full">
                  <ServiceCard {...s} />
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/services" className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-14 md:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold text-slate-100 mb-3">
                  Why Businesses Choose TechTrekker Labs
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-7">
                  Engineers and strategists who care about your outcomes — not just deliverables.
                </p>
                <div className="space-y-5">
                  {whyUs.map((p) => (
                    <div key={p.title} className="flex gap-4">
                      <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-blue-500/20">
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-200 mb-0.5 text-sm">{p.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{p.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <ScrollReveal key={s.label} delay={i * 80}>
                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-colors duration-300">
                    <AnimatedCounter
                      target={s.value}
                      suffix={s.suffix}
                      className="text-3xl font-bold text-blue-400 mb-1"
                    />
                    <div className="text-slate-400 text-sm">{s.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio preview ── */}
      <section className="py-14 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-100 mb-2">Recent Work</h2>
              <p className="text-slate-400 text-sm max-w-lg">
                A selection of products and solutions we&apos;ve built for clients.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(0, 3).map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 70}>
                <Link href={`/portfolio/${p.slug}`} className="block h-full">
                  <PortfolioCard {...p} />
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/portfolio" className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialsSection />

      {/* ── Blog preview ── */}
      <section className="py-14 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-100 mb-2">From the Blog</h2>
              <p className="text-slate-400 text-sm max-w-lg">
                Insights and guides from our engineering and security team.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {blogPosts.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 60}>
                <Link href={`/blog/${p.slug}`} className="block h-full">
                  <BlogCard {...p} />
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/blog" className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 md:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/40 via-indigo-900/20 to-slate-900/60 border border-blue-500/20 rounded-2xl p-10 md:p-14 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">
                Ready to Start Your Project?
              </h2>
              <p className="text-slate-400 text-sm mb-7 max-w-lg mx-auto">
                Tell us about your idea and we&apos;ll help you build a secure, scalable digital product.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 text-sm"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200 text-sm"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
