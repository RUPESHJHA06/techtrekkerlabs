'use client';

import { useState } from 'react';
import Link from 'next/link';
import PortfolioCard from '@/components/PortfolioCard';
import type { Project } from '@/data/portfolio';

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];
  const [activeCategory, setActiveCategory] = useState('All');
  const visibleProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      {/* Category filters — horizontal scroll on mobile, wraps on larger screens */}
      <div className="-mx-4 mb-7 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 [mask-image:linear-gradient(to_right,black_92%,transparent)] sm:[mask-image:none]">
        <div role="group" aria-label="Filter projects by category" className="flex w-max gap-2 sm:flex-wrap">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-900 ${
                  isActive
                    ? 'border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'border-slate-300 bg-white text-slate-600 hover:border-blue-500/50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-400 dark:hover:text-blue-400'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            aria-label={`View ${project.title} case study`}
            className="block h-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            <PortfolioCard {...project} />
          </Link>
        ))}
      </div>
    </>
  );
}
