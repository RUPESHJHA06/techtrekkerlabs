import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/data/services';
import { ServiceIconMap } from '@/lib/icons';
import FAQAccordion from '@/components/FAQAccordion';
import PortfolioCard from '@/components/PortfolioCard';
import { projects } from '@/data/portfolio';
import type { FAQ } from '@/data/faqs';

const legacyServiceSlugs: Record<string, string> = {
  'mobile-app': 'mobile-app-development',
  'web-dev': 'web-development',
  'ai-integration': 'ai-solutions',
};

const serviceExtras: Record<
  string,
  { process: { title: string; body: string }[]; faqs: FAQ[]; relatedSlugs: string[] }
> = {
  'mobile-app-development': {
    process: [
      { title: 'Discovery & UX Research', body: 'We study your users, map their journeys, and define the minimum lovable product before any design begins.' },
      { title: 'Design & Prototype', body: 'High-fidelity Figma prototypes tested with real users. Interactions, edge cases, and platform guidelines all resolved before development.' },
      { title: 'Native & Cross-Platform Build', body: 'Engineered using platform-appropriate stacks — Swift/SwiftUI, Kotlin/Compose, or React Native/Flutter — with security and performance built in from day one.' },
      { title: 'QA, Store & Launch', body: 'Automated and manual QA across device matrix, App Store and Play Store submission, and launch-day support to handle any issues in real time.' },
    ],
    faqs: [
      { question: 'Native or cross-platform — which is better for my project?', answer: 'Native is better when you need maximum platform integration, peak performance, or access to cutting-edge OS features the moment Apple or Google releases them. Cross-platform is better when you need both platforms simultaneously on a tighter budget or timeline. We will recommend honestly based on your requirements.' },
      { question: 'Do you handle App Store and Play Store submission?', answer: 'Yes — we manage the full submission process including compliance review, metadata, screenshots, and communication with the review teams. We handle rejections and resubmissions at no extra cost.' },
      { question: 'Can you take over an existing mobile app?', answer: 'Yes. We conduct a code audit first to understand the current state, then provide a clear assessment of what we can build on and what needs to be replaced. We will not take over a project we cannot genuinely improve.' },
    ],
    relatedSlugs: ['securevault', 'fintrack-mobile'],
  },
  'web-development': {
    process: [
      { title: 'Discovery & Architecture', body: 'We map your user flows, define your content model, choose the right rendering strategy (SSR, SSG, ISR), and design the data architecture before writing code.' },
      { title: 'Design System & UI', body: 'A component-first design system built in Figma, then implemented in code — ensuring consistency at any scale.' },
      { title: 'Development & Integration', body: 'Next.js frontend with your preferred CMS or backend, fully integrated with third-party services, payment systems, and analytics.' },
      { title: 'Performance & Launch', body: 'Core Web Vitals audit, image optimisation, CDN configuration, and a staged rollout to catch issues before they reach your full audience.' },
    ],
    faqs: [
      { question: 'Which CMS do you integrate with?', answer: 'We work with Sanity, Contentful, Prismic, Strapi, and WordPress headless. We will recommend based on your team\'s technical comfort level and content workflow requirements.' },
      { question: 'Do you handle SEO?', answer: 'Yes — SEO is built into our development process, not added at the end. This includes semantic HTML, structured data, meta tag strategy, sitemap generation, and Core Web Vitals optimisation.' },
      { question: 'Can you improve the performance of an existing website?', answer: 'Yes. We start with a performance audit (Lighthouse, WebPageTest, Chrome DevTools) to identify the highest-impact bottlenecks, then implement targeted improvements with measurable before/after metrics.' },
    ],
    relatedSlugs: ['medconnect-portal', 'legaldocs-automator'],
  },
  cybersecurity: {
    process: [
      { title: 'Scoping & Threat Modelling', body: 'We define the assessment scope, identify critical assets, and model the threats most relevant to your industry and technology stack.' },
      { title: 'Active Testing', body: 'Manual and automated testing using industry tools and custom techniques. For web and mobile: OWASP Top 10. For networks: infrastructure and configuration review.' },
      { title: 'Findings & Prioritisation', body: 'Every finding is rated by severity (CVSS), exploitability, and business impact — giving you a clear, prioritised remediation roadmap.' },
      { title: 'Remediation Support', body: 'We work alongside your engineering team during fixes, verify remediations, and provide a remediation-verified report for stakeholders and auditors.' },
    ],
    faqs: [
      { question: 'What is the difference between a vulnerability assessment and a penetration test?', answer: 'A vulnerability assessment identifies and catalogues potential weaknesses using automated tools and manual review. A penetration test goes further — it actively exploits confirmed vulnerabilities to demonstrate real-world impact and attack chains. We offer both, and often recommend starting with an assessment before a full pentest.' },
      { question: 'How long does a security assessment take?', answer: 'A web application pentest typically takes 3–5 business days for assessment plus 2 days for reporting. Mobile app assessments are similar. Network assessments vary by scope. We provide a precise estimate during scoping.' },
      { question: 'Will testing disrupt our production environment?', answer: 'We work with you to define safe testing windows and can conduct testing against a staging environment to eliminate risk. For production tests, we use non-destructive techniques unless you explicitly authorise otherwise.' },
    ],
    relatedSlugs: ['threatscan-pro', 'securevault'],
  },
  'ai-solutions': {
    process: [
      { title: 'AI Opportunity Audit', body: 'We review your existing product and workflows to identify where AI creates the highest ROI — not where it sounds exciting.' },
      { title: 'Proof of Concept', body: 'A focused 2-week POC that proves the core AI behaviour works in your context before we build production infrastructure.' },
      { title: 'Production Engineering', body: 'Scalable AI pipelines with evaluation frameworks, monitoring, guardrails, and cost controls built in from the start.' },
      { title: 'Evaluation & Iteration', body: 'We build eval datasets, run automated quality checks in CI, and iterate based on real user feedback until the feature meets your success criteria.' },
    ],
    faqs: [
      { question: 'Which AI models do you work with?', answer: 'We are model-agnostic but have the deepest production experience with Claude (Anthropic), GPT-4 (OpenAI), and Gemini (Google). We recommend models based on your specific use case, latency requirements, and cost targets.' },
      { question: 'How do you ensure AI outputs are safe and accurate?', answer: 'We design multiple layers of control: input/output filtering, structured output constraints, confidence thresholds, human-in-the-loop escalation, and regular red-teaming. We never deploy an AI feature without a defined evaluation framework.' },
      { question: 'How much does AI integration cost compared to traditional features?', answer: 'Initial build cost is similar to or slightly higher than traditional features. The key difference is ongoing inference cost, which scales with usage. We model your expected usage patterns upfront so you have a realistic cost projection before committing.' },
    ],
    relatedSlugs: ['retailbot-ai', 'legaldocs-automator'],
  },
  'saas-development': {
    process: [
      { title: 'Product Scope', body: 'We define your users, pricing model, tenant structure, core workflows, and the minimum feature set needed for launch.' },
      { title: 'Platform Architecture', body: 'We design secure data models, subscription flows, permissions, APIs, and infrastructure that can scale past the MVP.' },
      { title: 'SaaS Build', body: 'We build dashboards, onboarding, billing, analytics, integrations, and admin tools with clean, maintainable engineering.' },
      { title: 'Launch & Improve', body: 'We deploy, monitor, measure usage, and keep improving the product based on user behaviour and business goals.' },
    ],
    faqs: [
      { question: 'Can you build a SaaS MVP for a startup?', answer: 'Yes. We help startup teams prioritise the first paid version, build the product, set up billing, and prepare the technical foundation for future growth.' },
      { question: 'Do you support multi-tenant SaaS architecture?', answer: 'Yes. We design tenant-aware data models, access controls, audit trails, billing boundaries, and admin workflows for B2B and B2C SaaS products.' },
      { question: 'Can you integrate Stripe or other subscription billing tools?', answer: 'Yes. We integrate Stripe and similar payment platforms for recurring subscriptions, invoices, trials, upgrades, downgrades, and account lifecycle events.' },
    ],
    relatedSlugs: ['legaldocs-automator', 'medconnect-portal'],
  },
  'cloud-solutions': {
    process: [
      { title: 'Infrastructure Audit', body: 'We review your current hosting, deployment, costs, security posture, and reliability risks before recommending changes.' },
      { title: 'Cloud Architecture', body: 'We design the right blend of managed services, serverless components, containers, databases, monitoring, and network controls.' },
      { title: 'Migration & Automation', body: 'We implement CI/CD, infrastructure automation, observability, backups, and safe migration plans with minimal downtime.' },
      { title: 'Operate & Optimise', body: 'We monitor performance, improve reliability, reduce cloud waste, and keep your infrastructure aligned with product growth.' },
    ],
    faqs: [
      { question: 'Which cloud platforms do you work with?', answer: 'We work with AWS, Azure, Google Cloud, Vercel, and modern managed infrastructure providers depending on the application needs and team workflow.' },
      { question: 'Can you migrate an existing application to the cloud?', answer: 'Yes. We plan staged migrations, validate performance and security, and reduce downtime risk with backups, observability, and rollback paths.' },
      { question: 'Do cloud solutions include DevOps and CI/CD?', answer: 'Yes. We set up deployment pipelines, environment management, monitoring, alerts, and infrastructure automation so teams can ship reliably.' },
    ],
    relatedSlugs: ['threatscan-pro', 'fintrack-mobile'],
  },
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.id}`,
    },
    openGraph: {
      title: `${service.title} | TechTrekker Labs`,
      description: service.description,
      url: `/services/${service.id}`,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (legacyServiceSlugs[slug]) {
    redirect(`/services/${legacyServiceSlugs[slug]}`);
  }

  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  const extras = serviceExtras[slug];
  const Icon = ServiceIconMap[service.icon];
  const relatedProjects = projects.filter((p) =>
    extras?.relatedSlugs.includes(p.slug)
  );

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/60 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs hover:text-blue-500 dark:hover:text-blue-300 transition-colors mb-6">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            All Services
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-500 dark:text-blue-400 flex-shrink-0">
              {Icon && <Icon className="w-7 h-7" />}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-3">{service.title}</h1>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-2xl">{service.detail}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {service.features.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white dark:bg-slate-800/40 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700/50 rounded-lg px-4 py-3 hover:border-blue-500/40 transition-colors duration-200">
                <div className="w-5 h-5 bg-blue-600 rounded-md flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-slate-700 dark:text-slate-300 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {extras && (
        <section className="py-14 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">Our Process</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {extras.process.map((step, i) => (
                <div key={step.title} className="bg-white dark:bg-slate-800/40 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700/50 rounded-xl p-5 hover:border-blue-500/40 transition-colors duration-300">
                  <div className="text-3xl font-black text-slate-200 dark:text-slate-800 mb-2 select-none leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1.5 text-sm">{step.title}</h3>
                  <p className="text-slate-500 dark:text-slate-500 text-xs leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="py-14 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">Case Studies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedProjects.map((p) => (
                <Link key={p.slug} href={`/portfolio/${p.slug}`} className="block">
                  <PortfolioCard {...p} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {extras && (
        <section className="py-14 bg-white dark:bg-slate-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={extras.faqs} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 dark:from-blue-900/40 dark:via-indigo-900/20 dark:to-slate-900/60 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Ready to Get Started?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-5">Tell us about your project — no commitment, no sales pitch.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 text-sm">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
