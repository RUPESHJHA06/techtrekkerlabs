'use client';

import { useState } from 'react';
import type { FAQ } from '@/data/faqs';

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`bg-slate-800/40 border rounded-xl overflow-hidden transition-colors duration-200 ${
              isOpen ? 'border-blue-500/30' : 'border-slate-700/50 hover:border-slate-600'
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-slate-200 font-medium text-sm pr-4">{faq.question}</span>
              <span
                className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="px-5 pb-4 text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 pt-3">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
