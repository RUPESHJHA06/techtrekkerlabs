'use client';

import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const empty: FormState = { name: '', email: '', subject: '', message: '' };

const inputBase =
  'w-full px-4 py-2.5 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all duration-200';

const errorCls = 'border-red-400 dark:border-red-500/60 focus:ring-red-400/30';

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!form.message.trim()) errors.message = 'Message is required';
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const set =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field as keyof Errors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    setServerError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error || 'Something went wrong. Please try again.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setServerError('Network error. Please try WhatsApp or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-500 dark:text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-xl mb-2">Message Sent!</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">We&apos;ll get back to you within 24 hours.</p>
        <button
          onClick={() => { setSubmitted(false); setForm(empty); setErrors({}); }}
          className="mt-5 text-blue-600 dark:text-blue-400 text-sm hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
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
          <label htmlFor="name" className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input id="name" type="text" value={form.name} onChange={set('name')} placeholder="John Doe" className={`${inputBase} ${errors.name ? errorCls : ''}`} />
          {errors.name && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input id="email" type="email" value={form.email} onChange={set('email')} placeholder="john@company.com" className={`${inputBase} ${errors.email ? errorCls : ''}`} />
          {errors.email && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">Subject</label>
        <input id="subject" type="text" value={form.subject} onChange={set('subject')} placeholder="How can we help?" className={inputBase} />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea id="message" rows={5} value={form.message} onChange={set('message')} placeholder="Tell us about your project..." className={`${inputBase} resize-none ${errors.message ? errorCls : ''}`} />
        {errors.message && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.message}</p>}
      </div>

      {serverError && (
        <div className="px-4 py-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-lg text-red-600 dark:text-red-400 text-sm">
          {serverError}
        </div>
      )}

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
