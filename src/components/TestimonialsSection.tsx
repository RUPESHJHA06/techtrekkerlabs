import { testimonials } from '@/data/testimonials';
import ScrollReveal from '@/components/ScrollReveal';

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-14 md:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-100 mb-2">What Our Clients Say</h2>
            <p className="text-slate-400 text-sm">
              Don&apos;t just take our word for it — here&apos;s what our clients think.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 80}>
              <div className="group bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col h-full">
                <Stars n={t.rating} />
                <blockquote className="mt-3 text-slate-300 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-5 pt-4 border-t border-slate-700/50 flex items-center gap-3">
                  <div
                    className={`w-9 h-9 ${t.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-slate-100 text-sm font-semibold">{t.author}</div>
                    <div className="text-slate-500 text-xs">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
