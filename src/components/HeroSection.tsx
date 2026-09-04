'use client';

import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldIcon, GlobeIcon, MobileIcon, BrainIcon, ArrowRightIcon, CheckIcon, ClockIcon, BriefcaseIcon } from '@/lib/icons';

type ShowcaseTab = 'web' | 'mobile' | 'ai';

const TABS: { id: ShowcaseTab; label: string; icon: typeof GlobeIcon }[] = [
  { id: 'web', label: 'Web', icon: GlobeIcon },
  { id: 'mobile', label: 'Mobile', icon: MobileIcon },
  { id: 'ai', label: 'AI / SaaS', icon: BrainIcon },
];

export default function HeroSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('web');
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const dir = e.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (index + dir + TABS.length) % TABS.length;
    setActiveTab(TABS[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/70 to-indigo-50/50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 overflow-hidden">
      {/* Glow orbs — vivid in light mode, subtle in dark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-400/25 dark:bg-blue-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-32 w-[380px] h-[380px] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>
      <div className="absolute inset-0 grid-bg" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/10 dark:bg-blue-500/10 border border-blue-300/70 dark:border-blue-500/20 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              <span className="text-blue-700 dark:text-blue-400 text-xs font-semibold tracking-wide">{t('hero_badge')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-950 dark:text-slate-50 leading-tight mb-5">
              {t('hero_h1a')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
                {t('hero_h1b')}
              </span>
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 max-w-xl">
              {t('hero_desc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/25 text-sm"
              >
                {t('hero_cta_primary')}
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-lg bg-white/80 dark:bg-transparent hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500/60 dark:hover:text-blue-400 transition-all duration-200 text-sm shadow-sm dark:shadow-none"
              >
                {t('hero_cta_secondary')}
              </Link>
            </div>
          </div>

          {/* Interactive product showcase — conceptual, not a real client product */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-400/20 to-indigo-400/10 dark:from-blue-600/10 dark:to-indigo-600/5 rounded-[2rem] blur-2xl" aria-hidden="true" />

            {/* Tabs */}
            <div role="tablist" aria-label="Product showcase" className="relative flex items-center justify-center lg:justify-start gap-1.5 mb-4">
              {TABS.map((tab, i) => {
                const isActive = tab.id === activeTab;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`hero-tab-${tab.id}`}
                    aria-selected={isActive}
                    aria-controls={`hero-panel-${tab.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveTab(tab.id)}
                    onKeyDown={(e) => handleTabKeyDown(e, i)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 ${
                      isActive
                        ? 'border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                        : 'border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 hover:border-blue-400/60 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Stage */}
            <div
              key={activeTab}
              role="tabpanel"
              id={`hero-panel-${activeTab}`}
              aria-labelledby={`hero-tab-${activeTab}`}
              className="hero-tab-panel flex items-center justify-center min-h-[400px]"
            >
              {activeTab === 'web' && <WebShowcase />}
              {activeTab === 'mobile' && <MobileShowcase />}
              {activeTab === 'ai' && <AIShowcase />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Accent = 'blue' | 'cyan' | 'emerald' | 'violet' | 'amber';

const ACCENTS: Record<Accent, { bg: string; text: string; bar: string; dot: string }> = {
  blue: { bg: 'bg-blue-50 dark:bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400', bar: 'bg-blue-500', dot: 'bg-blue-500' },
  cyan: { bg: 'bg-cyan-50 dark:bg-cyan-500/10', text: 'text-cyan-600 dark:text-cyan-400', bar: 'bg-cyan-500', dot: 'bg-cyan-500' },
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', bar: 'bg-emerald-500', dot: 'bg-emerald-500' },
  violet: { bg: 'bg-violet-50 dark:bg-violet-500/10', text: 'text-violet-600 dark:text-violet-400', bar: 'bg-violet-500', dot: 'bg-violet-500' },
  amber: { bg: 'bg-amber-50 dark:bg-amber-500/10', text: 'text-amber-600 dark:text-amber-400', bar: 'bg-amber-500', dot: 'bg-amber-500' },
};

/** Small trend badge — a rotated arrow icon standing in for an "up" indicator, no numbers. */
function TrendUp({ accent = 'emerald' as Accent }) {
  return <ArrowRightIcon className={`w-2.5 h-2.5 -rotate-90 ${ACCENTS[accent].text}`} />;
}

/** Conceptual web-product dashboard — decorative, not a real client screenshot. */
function WebShowcase() {
  const stats: { icon: typeof GlobeIcon; label: string; accent: Accent; fill: string }[] = [
    { icon: BriefcaseIcon, label: 'Projects', accent: 'blue', fill: '70%' },
    { icon: GlobeIcon, label: 'Performance', accent: 'cyan', fill: '85%' },
    { icon: ShieldIcon, label: 'Uptime', accent: 'emerald', fill: '95%' },
  ];
  const chart = [
    { h: 40, c: 'bg-blue-400 dark:bg-blue-500/80' },
    { h: 65, c: 'bg-cyan-400 dark:bg-cyan-500/80' },
    { h: 45, c: 'bg-violet-400 dark:bg-violet-500/80' },
    { h: 80, c: 'bg-blue-500' },
    { h: 55, c: 'bg-cyan-500' },
    { h: 95, c: 'bg-blue-600' },
    { h: 70, c: 'bg-violet-500' },
  ];
  const activity: { icon: typeof GlobeIcon; label: string; badge: string; accent: Accent }[] = [
    { icon: CheckIcon, label: 'Build passed', badge: 'Done', accent: 'emerald' },
    { icon: BriefcaseIcon, label: 'New task added', badge: 'Task', accent: 'blue' },
    { icon: ClockIcon, label: 'Review pending', badge: 'Pending', accent: 'amber' },
  ];

  return (
    <div className="relative w-full rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm shadow-[0_20px_50px_rgba(15,23,42,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-[11px] font-medium text-slate-500 dark:text-slate-400">Analytics Overview</span>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live
        </span>
      </div>

      <div className="flex">
        {/* Icon rail */}
        <div className="hidden sm:flex w-12 flex-col items-center justify-center gap-3 border-r border-slate-100 dark:border-slate-800 py-4">
          {[GlobeIcon, BriefcaseIcon, ClockIcon, ShieldIcon].map((Icon, i) => (
            <span
              key={i}
              className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                i === 0 ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
            </span>
          ))}
        </div>

        <div className="flex-1 p-4 space-y-3">
          {/* Stat tiles */}
          <div className="grid grid-cols-3 gap-2.5">
            {stats.map((s) => {
              const a = ACCENTS[s.accent];
              const Icon = s.icon;
              return (
                <div key={s.label} className="rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-2.5">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-md ${a.bg} ${a.text}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <TrendUp accent="emerald" />
                  </div>
                  <span className="block text-[8.5px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5">{s.label}</span>
                  <div className="h-1 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div className={`h-full ${a.bar}`} style={{ width: s.fill }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Colorful chart */}
          <div className="rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-semibold text-slate-600 dark:text-slate-300">Analytics</span>
              <span className="text-[8.5px] text-slate-400 dark:text-slate-500">This week</span>
            </div>
            <div className="flex items-end gap-1.5 h-14">
              {chart.map((bar, i) => (
                <span key={i} className={`flex-1 rounded-t ${bar.c}`} style={{ height: `${bar.h}%` }} />
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="space-y-1.5">
            <span className="text-[9px] font-semibold text-slate-600 dark:text-slate-300">Recent Activity</span>
            {activity.map((row) => {
              const a = ACCENTS[row.accent];
              const Icon = row.icon;
              return (
                <div
                  key={row.label}
                  className="flex items-center gap-2.5 rounded-lg border border-slate-100 dark:border-slate-800 px-2.5 py-1.5 hover:border-blue-200 dark:hover:border-blue-500/30 transition-colors duration-200"
                >
                  <span className={`flex h-6 w-6 items-center justify-center rounded-md flex-shrink-0 ${a.bg} ${a.text}`}>
                    <Icon className="w-3 h-3" />
                  </span>
                  <span className="flex-1 text-[9.5px] font-medium text-slate-600 dark:text-slate-300">{row.label}</span>
                  <span className={`rounded-full px-1.5 py-0.5 text-[7.5px] font-semibold ${a.bg} ${a.text}`}>{row.badge}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Conceptual mobile app UI inside a device frame — decorative, not a real client screenshot. */
function MobileShowcase() {
  const navIcons = [GlobeIcon, MobileIcon, ShieldIcon, BrainIcon];
  const activity: { icon: typeof GlobeIcon; label: string; accent: Accent }[] = [
    { icon: CheckIcon, label: 'Build passed', accent: 'emerald' },
    { icon: BriefcaseIcon, label: 'New task added', accent: 'blue' },
    { icon: ClockIcon, label: 'Review pending', accent: 'amber' },
  ];

  return (
    <div className="mx-auto w-48">
      <div
        className="relative rounded-[2.3rem] border-[6px] border-slate-900 dark:border-slate-700 bg-slate-900 shadow-[0_20px_50px_rgba(15,23,42,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
        style={{ aspectRatio: '9 / 19.5' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 dark:bg-slate-950 rounded-b-2xl z-10" />
        <div className="absolute inset-0 rounded-[1.8rem] bg-white dark:bg-slate-900 overflow-hidden flex flex-col">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3.5 pb-1">
            <span className="h-1.5 w-8 rounded-full bg-slate-300 dark:bg-slate-700" />
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span className="h-1.5 w-3 rounded-full bg-slate-300 dark:bg-slate-700" />
            </div>
          </div>

          {/* App header */}
          <div className="px-4 pt-2 pb-2 flex items-center justify-between">
            <div>
              <span className="block text-[11px] font-bold text-slate-800 dark:text-slate-100 tracking-tight">Overview</span>
              <span className="inline-flex items-center gap-1 mt-0.5 text-[7px] font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="h-1 w-1 rounded-full bg-emerald-500" />
                Synced
              </span>
            </div>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <BrainIcon className="w-3 h-3" />
            </span>
          </div>

          {/* Body */}
          <div className="flex-1 px-4 space-y-2">
            {/* Highlighted status banner */}
            <div className="flex items-center gap-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-500 text-white flex-shrink-0">
                <CheckIcon className="w-3 h-3" />
              </span>
              <span className="text-[8px] font-semibold text-emerald-700 dark:text-emerald-400">All caught up</span>
            </div>

            {/* Data cards */}
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[7px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">Projects</span>
                  <TrendUp accent="emerald" />
                </div>
                <div className="h-1 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div className="h-full w-3/5 rounded-full bg-blue-500" />
                </div>
              </div>
              <div className="rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[7px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">Tasks</span>
                  <TrendUp accent="emerald" />
                </div>
                <div className="h-1 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div className="h-full w-4/5 rounded-full bg-violet-500" />
                </div>
              </div>
            </div>

            {/* Insights indicator + mini chart */}
            <div className="rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-2">
              <div className="flex items-center gap-2.5">
                <div
                  className="relative h-8 w-8 flex-shrink-0 rounded-full"
                  style={{ background: 'conic-gradient(#3b82f6 0deg 250deg, rgba(148,163,184,0.3) 250deg 360deg)' }}
                >
                  <div className="absolute inset-[3px] rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <span className="block text-[7px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-1">Insights</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 px-1.5 py-0.5 text-[7px] font-semibold text-cyan-600 dark:text-cyan-400">
                    On track
                  </span>
                </div>
              </div>
              <div className="mt-2 flex items-end gap-1 h-3">
                {[40, 70, 55, 90, 60].map((h, i) => (
                  <span
                    key={i}
                    className={['bg-blue-400', 'bg-cyan-400', 'bg-violet-400', 'bg-blue-500', 'bg-cyan-500'][i] + ' flex-1 rounded-t'}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Activity list */}
            <div className="space-y-1.5">
              <span className="block text-[7px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">Activity</span>
              {activity.map((row) => {
                const a = ACCENTS[row.accent];
                const Icon = row.icon;
                return (
                  <div
                    key={row.label}
                    className="flex items-center gap-2 rounded-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-2 py-1.5 hover:border-blue-200 dark:hover:border-blue-500/30 transition-colors duration-200"
                  >
                    <span className={`flex h-6 w-6 items-center justify-center rounded-md flex-shrink-0 ${a.bg} ${a.text}`}>
                      <Icon className="w-3 h-3" />
                    </span>
                    <span className="flex-1 text-[8.5px] font-medium text-slate-600 dark:text-slate-300">{row.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom tab bar */}
          <div className="flex items-center justify-around border-t border-slate-100 dark:border-slate-800 py-2.5">
            {navIcons.map((Icon, i) => (
              <span
                key={i}
                className={`flex h-6 w-6 items-center justify-center rounded-lg ${i === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-slate-300 dark:text-slate-600'}`}
              >
                <Icon className="w-3.5 h-3.5" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Conceptual AI/SaaS workspace UI — decorative, not a real client screenshot. */
function AIShowcase() {
  const sidebarIcons = [BrainIcon, GlobeIcon, ClockIcon, ShieldIcon];
  const prompts = ['Summarize', 'Analyze', 'Automate'];

  return (
    <div className="relative w-full rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm shadow-[0_20px_50px_rgba(15,23,42,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-[11px] font-medium text-slate-500 dark:text-slate-400">AI Workspace</span>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-violet-50 dark:bg-violet-500/10 px-2 py-0.5 text-[9px] font-semibold text-violet-600 dark:text-violet-400">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
          Online
        </span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden sm:flex w-14 flex-col items-center justify-center gap-3 border-r border-slate-100 dark:border-slate-800 py-4">
          {sidebarIcons.map((Icon, i) => (
            <span
              key={i}
              className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                i === 0 ? 'bg-gradient-to-br from-blue-600 to-violet-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
            </span>
          ))}
        </div>

        {/* Workspace */}
        <div className="flex-1 flex flex-col p-4 gap-2.5">
          <div className="self-start max-w-[80%] rounded-xl rounded-bl-sm bg-slate-100 dark:bg-slate-800 px-3 py-2.5">
            <span className="text-[10px] leading-snug text-slate-700 dark:text-slate-200">Summarize this week&apos;s tasks</span>
          </div>
          <div className="self-end max-w-[72%] rounded-xl rounded-br-sm bg-gradient-to-br from-blue-600 to-violet-600 px-3 py-2.5">
            <span className="text-[10px] leading-snug text-white">Here&apos;s a quick overview of your active work.</span>
          </div>

          {/* Insight / result panels */}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-violet-100 dark:border-violet-500/20 bg-violet-50/60 dark:bg-violet-500/10 px-2.5 py-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-violet-600 text-white flex-shrink-0">
                <CheckIcon className="w-3.5 h-3.5" />
              </span>
              <span className="text-[9px] font-semibold text-violet-700 dark:text-violet-300">Summary ready</span>
            </div>

            <div className="rounded-lg border border-cyan-100 dark:border-cyan-500/20 bg-cyan-50/60 dark:bg-cyan-500/10 px-2.5 py-2">
              <span className="block text-[7.5px] font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-400 mb-1">Key Insights</span>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-cyan-500 flex-shrink-0" />
                  <span className="text-[8px] text-slate-600 dark:text-slate-300">Priorities identified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-violet-500 flex-shrink-0" />
                  <span className="text-[8px] text-slate-600 dark:text-slate-300">Items to review</span>
                </div>
              </div>
            </div>
          </div>

          {/* Suggested prompt chips */}
          <div className="flex flex-wrap gap-1.5">
            {prompts.map((p) => (
              <span
                key={p}
                className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-2.5 py-1 text-[8.5px] font-medium text-slate-500 dark:text-slate-400"
              >
                {p}
              </span>
            ))}
          </div>

          {/* Prompt input */}
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2">
            <span className="flex-1 text-[9.5px] text-slate-400 dark:text-slate-500">Ask anything…</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-violet-600 text-white flex-shrink-0">
              <ArrowRightIcon className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
