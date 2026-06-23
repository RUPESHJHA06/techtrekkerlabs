export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  gradient: string;
  problem: string;
  solution: string;
  result: string;
  metrics: ProjectMetric[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'techtrekkerlabs-website',
    title: 'TechTrekker Labs — Our Own Website',
    description:
      'The website you are looking at right now. Built with Next.js, TypeScript, and Tailwind CSS. Our first public showcase of design, performance, and clean code.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: 'Web App',
    gradient: 'from-blue-500 to-indigo-600',
    problem:
      'We needed a fast, credible web presence to represent TechTrekker Labs without faking work we had not done yet.',
    solution:
      'Built the site ourselves — fully responsive, SEO-optimised, with a custom design system in under two weeks.',
    result:
      'Live at techtrekkerlabs.com. More real projects coming soon as we take on clients.',
    metrics: [],
  },
];
