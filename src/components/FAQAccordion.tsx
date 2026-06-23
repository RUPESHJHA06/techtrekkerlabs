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
            className={`bg-white dark:bg-slate-800/40 dark:shadow-none border rounded-xl overflow-hidden transition-all duration-200 ${
              isOpen
                ? 'border-blue-400/60 dark:border-blue-500/40 shadow-[0_2px_12px_rgba(59,130,246,0.10)] dark:shadow-none'
                : 'border-slate-200/80 dark:border-slate-700/50 shadow-[0_1px_3px_rgba(0,0,0,0.07)] dark:shadow-none hover:border-blue-300 dark:hover:border-slate-600'
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-slate-800 dark:text-slate-200 font-medium text-sm pr-4">{faq.question}</span>
              <span className={`text-slate-500 dark:text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
              <p className="px-5 pb-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700/50 pt-3">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
