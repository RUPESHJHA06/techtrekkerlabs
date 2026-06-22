export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  initial: string;
  avatarColor: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "TechTrekker Labs built our mobile app from scratch in under 3 months. Biometric login, Stripe payments, offline sync — everything worked perfectly at launch. They genuinely cared about the product, not just the contract.",
    author: 'Sarah Chen',
    role: 'CEO',
    company: 'HealthPath Inc.',
    rating: 5,
    initial: 'S',
    avatarColor: 'bg-blue-600',
  },
  {
    id: 2,
    quote:
      "Their security audit caught 14 critical vulnerabilities we had no idea about. The remediation report was clear, prioritised by severity, and the team was available throughout the fixing process. Outstanding.",
    author: 'James Okafor',
    role: 'CTO',
    company: 'Finvero',
    rating: 5,
    initial: 'J',
    avatarColor: 'bg-indigo-600',
  },
  {
    id: 3,
    quote:
      "We needed an AI assistant for our e-commerce platform in 6 weeks. TechTrekker Labs delivered in 5, and it now handles 80% of our customer queries automatically with accuracy our support team couldn't match at scale.",
    author: 'Priya Nair',
    role: 'Head of Product',
    company: 'ShopSphere',
    rating: 5,
    initial: 'P',
    avatarColor: 'bg-violet-600',
  },
  {
    id: 4,
    quote:
      "The new Next.js site they built cut our load time from 8s to under 1s. Conversion rates went up 35% in the first month. Best ROI from any technology vendor we have worked with, full stop.",
    author: 'Marcus Weber',
    role: 'Founder',
    company: 'LegalDesk',
    rating: 5,
    initial: 'M',
    avatarColor: 'bg-cyan-600',
  },
];
