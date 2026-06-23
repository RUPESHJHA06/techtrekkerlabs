import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function TestimonialsSection() {
  return (
    <section className="py-14 md:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-100 mb-2">What Our Clients Say</h2>
            <p className="text-slate-400 text-sm">
              Honest words from real people — coming soon as we complete our first projects.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-8 text-center max-w-2xl mx-auto">
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              We&apos;re just getting started. Testimonials from real clients will appear here as we complete projects.
              Reach out and let&apos;s build something great together.
            </p>
            <Link
              href="https://wa.me/918287666656?text=Hi%20TechTrekker%20Labs%2C%20I%27d%20like%20to%20discuss%20a%20project"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
