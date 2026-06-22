'use client';

import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const empty: FormState = { name: '', email: '', subject: '', message: '' };

const inputCls =
  'w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all duration-200';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-slate-100 font-semibold text-xl mb-2">Message Sent!</h3>
        <p className="text-slate-400 text-sm">We&apos;ll get back to you within 24 hours.</p>
        <button
          onClick={() => { setSubmitted(false); setForm(empty); }}
          className="mt-5 text-blue-400 text-sm hover:text-blue-300 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">
            Name <span className="text-red-400">*</span>
          </label>
          <input id="name" type="text" required value={form.name} onChange={set('name')} placeholder="John Doe" className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input id="email" type="email" required value={form.email} onChange={set('email')} placeholder="john@company.com" className={inputCls} />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-1.5">Subject</label>
        <input id="subject" type="text" value={form.subject} onChange={set('subject')} placeholder="How can we help?" className={inputCls} />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={set('message')}
          placeholder="Tell us about your project..."
          className={`${inputCls} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed text-sm shadow-lg shadow-blue-500/20"
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
