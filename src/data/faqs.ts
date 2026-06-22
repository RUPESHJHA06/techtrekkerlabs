export interface FAQ {
  question: string;
  answer: string;
}

export const generalFAQs: FAQ[] = [
  {
    question: 'How long does a typical project take?',
    answer:
      'It depends on scope. A marketing website takes 2–4 weeks, a mobile app MVP typically 8–12 weeks, and a complex web platform or AI integration 3–6 months. We provide a detailed timeline during the free discovery call — before any work or commitment begins.',
  },
  {
    question: "What's your pricing model?",
    answer:
      'We work on both fixed-scope and time-and-materials engagements. For well-defined projects we provide a fixed quote with clear deliverables. For evolving products we structure monthly sprint-based contracts. We will recommend the right model based on your project during the discovery call.',
  },
  {
    question: 'Do you work with clients globally?',
    answer:
      'Yes — our team is fully remote and we work with clients across North America, Europe, Asia, and the Middle East. We have experience navigating time-zone differences and typically overlap at least 3–4 hours daily with any client region.',
  },
  {
    question: 'What happens after the project is delivered?',
    answer:
      'All projects include a 30-day post-launch support period at no extra cost. After that, we offer flexible monthly retainer plans for ongoing maintenance, feature additions, security monitoring, or general engineering support. We do not disappear after shipping.',
  },
  {
    question: 'Do you sign NDAs?',
    answer:
      'Absolutely. We sign mutual NDAs before any detailed project discussions. Confidentiality is standard practice for us — especially given the sensitive nature of our cybersecurity and AI integration work.',
  },
];

export const servicesFAQs: FAQ[] = [
  {
    question: 'What mobile platforms do you support?',
    answer:
      'We build natively for iOS (Swift/SwiftUI) and Android (Kotlin/Jetpack Compose), as well as cross-platform using React Native and Flutter. We recommend the right approach based on your budget, timeline, and feature requirements — with transparent trade-off explanations.',
  },
  {
    question: 'How do you ensure security in the products you build?',
    answer:
      'Security is part of our development process, not a final checkbox. We conduct threat modelling during design, implement OWASP best practices throughout development, and perform a security code review before every major release. All penetration test findings are fixed before handover.',
  },
  {
    question: 'Can you integrate AI into an existing product?',
    answer:
      'Yes. We have added LLM features, RAG pipelines, and intelligent automation to existing web apps, mobile apps, and internal tools. We start with an AI audit to identify the highest-impact opportunities and build a roadmap before touching any code.',
  },
  {
    question: 'Do you use a fixed tech stack or adapt to client preferences?',
    answer:
      'We have preferred stacks — Next.js, React Native, Python, Node.js — that we know deliver reliable results. But we adapt to existing client stacks when needed. We always explain the trade-offs transparently so you can make an informed decision.',
  },
  {
    question: 'What security certifications does your team hold?',
    answer:
      'Our security team includes OSCP, CEH, and CompTIA Security+ certified professionals. We follow OWASP, NIST, and ISO 27001 frameworks across all security engagements and stay current with emerging threats.',
  },
];
