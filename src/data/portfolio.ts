export type ProjectType = 'Internal Product' | 'Concept Project' | 'Technical Showcase';
export type ProjectVisual = 'website' | 'knowledge' | 'finance' | 'tasks' | 'security';

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  projectType: ProjectType;
  /** Whether this is a real, operated TechTrekker Labs product — not the same as projectType. Drives the case-study disclosure. */
  isReal: boolean;
  tech: string[];
  gradient: string;
  visual: ProjectVisual;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string[];
}

export const projects: Project[] = [
  {
    id: 1, slug: 'techtrekkerlabs-website', title: 'TechTrekker Labs Website', category: 'Web / Product', projectType: 'Internal Product', isReal: true, tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'], gradient: 'from-blue-600 via-indigo-600 to-slate-900', visual: 'website',
    description: 'Our public web presence: a responsive, accessible company site built to explain how we work and make it easy to start a conversation.',
    overview: 'An internal product that establishes TechTrekker Labs’ public presence with a focused information architecture, bilingual interface, dark mode, and a direct project-enquiry path.',
    problem: 'We needed a credible, fast website that represented our engineering approach without relying on invented client work or generic agency claims.',
    solution: 'We designed and built a content-led Next.js site with reusable components, responsive layouts, accessible navigation, metadata, and a lightweight contact workflow.',
    features: ['Responsive service, portfolio, blog, and company pages', 'Light and dark themes with persistent preference', 'English and Hindi interface support', 'Contact form backed by a server route', 'Route-level metadata, sitemap, and robots configuration'],
    architecture: ['Next.js App Router with statically authored content data', 'Reusable React components shared across page types', 'Tailwind CSS design tokens and theme-aware utility classes', 'Server-side contact endpoint using Resend when configured'],
  },
  {
    id: 2, slug: 'ai-knowledge-hub', title: 'AI Knowledge Hub', category: 'AI / SaaS', projectType: 'Concept Project', isReal: false, tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Vector Search', 'LLM API'], gradient: 'from-violet-600 via-purple-600 to-slate-900', visual: 'knowledge',
    description: 'A reference implementation concept for turning scattered internal documents into a searchable, citation-aware AI workspace.',
    overview: 'Designed to demonstrate how a knowledge assistant can help teams locate source-backed answers across approved internal material while retaining clear retrieval boundaries.',
    problem: 'Teams often lose time searching across policy documents, product notes, and technical references, while a generic chatbot cannot show where an answer came from.',
    solution: 'The concept pairs document ingestion and metadata with retrieval-augmented generation, then presents answers alongside their supporting source passages and controlled access context.',
    features: ['Document ingestion with source and collection metadata', 'Semantic search and conversational retrieval', 'Inline citations that link answers back to source material', 'Role-aware collections and workspace permissions', 'Feedback capture for improving retrieval quality'],
    architecture: ['Ingestion pipeline for parsing, chunking, and embedding approved documents', 'PostgreSQL for workspace metadata and access control', 'Vector index for similarity search with metadata filtering', 'API layer that retrieves context before invoking an LLM', 'Evaluation-ready logging for retrieval and answer review'],
  },
  {
    id: 3, slug: 'finflow', title: 'FinFlow', category: 'Mobile / FinTech', projectType: 'Concept Project', isReal: false, tech: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Plaid'], gradient: 'from-cyan-500 via-blue-600 to-slate-900', visual: 'finance',
    description: 'A mobile financial-planning concept focused on clear cash-flow visibility, intentional spending, and privacy-conscious account connections.',
    overview: 'A reference mobile-product concept demonstrating the information hierarchy, consent patterns, and backend boundaries needed for a personal finance experience.',
    problem: 'Financial activity can be difficult to understand when balances, recurring bills, and discretionary spending live in separate places or are only visible after the fact.',
    solution: 'FinFlow brings a user’s cash-flow picture into a calm mobile dashboard, with explicit connection states, categorized activity, and forward-looking budget views.',
    features: ['Cash-flow timeline and account overview', 'Spending categories with user review controls', 'Recurring payment detection concept', 'Budget planning and upcoming-bill reminders', 'Biometric app access and privacy settings'],
    architecture: ['React Native client with feature-oriented screens and secure local storage', 'Backend-for-frontend API that separates mobile concerns from provider integrations', 'Tokenized financial-data integration boundary; no credentials stored by the app', 'Encrypted data in transit and at rest with least-privilege service access', 'Event-based notification service for user-approved reminders'],
  },
  {
    id: 4, slug: 'taskpilot', title: 'TaskPilot', category: 'Web / SaaS', projectType: 'Concept Project', isReal: false, tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'], gradient: 'from-emerald-500 via-teal-600 to-slate-900', visual: 'tasks',
    description: 'A collaborative work-management concept that turns project goals into visible, accountable delivery workflows.',
    overview: 'Designed as an internal-product concept to demonstrate a practical SaaS foundation for planning, collaboration, and delivery visibility without unnecessary process overhead.',
    problem: 'Small product teams need a shared view of priorities and ownership, but heavyweight workflow tools can make a straightforward delivery process harder to maintain.',
    solution: 'TaskPilot centers projects, concise task states, and contextual updates in one workspace, with a structure that can grow from a focused MVP into a multi-team product.',
    features: ['Project boards with focused workflow states', 'Ownership, due dates, and priority signals', 'Activity feed and contextual comments', 'Workspace roles and invitation flows', 'Saved views for personal and team planning'],
    architecture: ['Multi-tenant workspace model with organization-scoped queries', 'Next.js web application backed by typed API boundaries', 'PostgreSQL for relational project data and audit-friendly activity records', 'Redis-ready cache and background-job boundary for notifications', 'Role-based access checks applied at the service layer'],
  },
  {
    id: 5, slug: 'securewatch', title: 'SecureWatch', category: 'Cybersecurity / Web', projectType: 'Technical Showcase', isReal: false, tech: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'OpenTelemetry'], gradient: 'from-rose-600 via-red-700 to-slate-950', visual: 'security',
    description: 'A cybersecurity operations dashboard concept for translating security signals into an actionable, reviewable workflow.',
    overview: 'A technical showcase designed to demonstrate the frontend and service patterns behind a security-review workspace; it is not presented as an active monitoring product.',
    problem: 'Security teams can receive more alerts than they can confidently prioritize, especially when evidence, ownership, and response context are fragmented across tools.',
    solution: 'SecureWatch groups illustrative findings into a review queue with severity context, evidence trails, and explicit human decision points rather than automated claims or remediation promises.',
    features: ['Severity-based finding queue and triage states', 'Asset and service context for each finding', 'Evidence timeline with review notes', 'Ownership, escalation, and resolution workflow', 'Export-ready audit summary concept'],
    architecture: ['Connector boundary for normalized, read-only security events', 'Event processing service that enriches findings with asset metadata', 'PostgreSQL record of review decisions and evidence references', 'Web dashboard with role-aware access and immutable activity history', 'Observability hooks for service health and processing failures'],
  },
];
