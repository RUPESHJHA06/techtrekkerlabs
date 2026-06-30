export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  detail: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'mobile-app-development',
    icon: 'mobile',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile experiences for iOS and Android — built for performance, reliability, and real-world scale.',
    detail:
      'We engineer mobile apps using Swift/SwiftUI for iOS, Kotlin/Jetpack Compose for Android, and React Native or Flutter for cross-platform. Every app we ship handles real-world complexity: offline support, maps, payments, biometrics, and hardware integration — all optimised for App Store and Play Store.',
    features: [
      'Native iOS — Swift / SwiftUI',
      'Native Android — Kotlin / Jetpack Compose',
      'Cross-Platform — React Native & Flutter',
      'Maps & Geolocation (Google Maps, Mapbox)',
      'Payment Integration — Stripe, Apple Pay, Google Pay',
      'Push Notifications & In-App Messaging',
      'Biometric Authentication (Face ID, Touch ID)',
      'Offline-First Architecture',
      'Camera, Sensors & Hardware Access',
      'App Store & Play Store Publishing',
    ],
  },
  {
    id: 'web-development',
    icon: 'web',
    title: 'Web Development',
    description:
      'Fast, responsive, and SEO-optimised websites and web applications built with modern frameworks.',
    detail:
      'From marketing sites to complex web applications, we build with Next.js, React, and TypeScript. Every site is optimised for Core Web Vitals, accessibility, and search engine visibility — ready to convert visitors into customers.',
    features: [
      'Next.js / React',
      'E-Commerce Solutions',
      'CMS Integration (Sanity, Contentful)',
      'REST & GraphQL APIs',
      'SEO Optimisation',
      'Performance & Core Web Vitals',
    ],
  },
  {
    id: 'cybersecurity',
    icon: 'security',
    title: 'Cybersecurity Consulting',
    description:
      'Protect your business with penetration testing, security audits, and compliance consulting.',
    detail:
      'Our certified security professionals conduct thorough vulnerability assessments, penetration tests, and code reviews. We identify risks before attackers do and provide clear, actionable remediation roadmaps aligned with OWASP, ISO 27001, and GDPR standards.',
    features: [
      'Web & Mobile Penetration Testing',
      'Vulnerability Assessment (VAPT)',
      'Security Code Review',
      'GDPR / ISO 27001 Compliance',
      'Network Security Audit',
      'Incident Response Planning',
    ],
  },
  {
    id: 'ai-solutions',
    icon: 'ai',
    title: 'AI Solutions & Automation',
    description:
      'Embed AI capabilities into your products — LLM-powered apps, intelligent chatbots, and workflow automation.',
    detail:
      'We help businesses leverage large language models, RAG pipelines, and intelligent automation to reduce manual work and create smarter products. From prompt engineering to production deployment, we ensure your AI features are reliable, safe, and measurable.',
    features: [
      'LLM Integration (Claude, GPT, Gemini)',
      'RAG Pipelines & Vector Search',
      'AI Chatbots & Virtual Agents',
      'Process & Workflow Automation',
      'Predictive Analytics',
      'AI Security Review',
    ],
  },
  {
    id: 'saas-development',
    icon: 'web',
    title: 'SaaS Development',
    description:
      'Subscription-ready SaaS platforms with secure architecture, billing, dashboards, analytics, and scalable cloud deployment.',
    detail:
      'We design and build SaaS products from MVP to enterprise scale, including multi-tenant architecture, role-based access, subscription billing, product analytics, admin dashboards, and reliable deployment pipelines.',
    features: [
      'SaaS MVP Development',
      'Multi-Tenant Architecture',
      'Subscription Billing',
      'Admin & Customer Dashboards',
      'Product Analytics',
      'API Integrations',
      'Role-Based Access Control',
      'Scalable Cloud Deployment',
    ],
  },
  {
    id: 'cloud-solutions',
    icon: 'web',
    title: 'Cloud Solutions',
    description:
      'Cloud architecture, migration, DevOps automation, and managed infrastructure for secure, scalable digital products.',
    detail:
      'We help teams move faster with cloud-native infrastructure, CI/CD pipelines, observability, containerisation, serverless systems, and cost-conscious architecture across AWS, Azure, Google Cloud, and Vercel.',
    features: [
      'Cloud Architecture',
      'AWS, Azure & Google Cloud',
      'DevOps & CI/CD',
      'Docker & Containerisation',
      'Serverless Infrastructure',
      'Monitoring & Observability',
      'Cloud Cost Optimisation',
      'Backup & Disaster Recovery',
    ],
  },
];
