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
    slug: 'securevault',
    title: 'SecureVault',
    description:
      'A cross-platform mobile password manager with biometric authentication and end-to-end AES-256 encryption.',
    tech: ['React Native', 'Node.js', 'AES-256', 'SQLite'],
    category: 'Mobile App',
    gradient: 'from-blue-500 to-indigo-600',
    problem:
      "The client's 200-person team was managing sensitive credentials in shared spreadsheets and note-taking apps — a critical risk flagged in an internal security audit. They needed a purpose-built, auditable credential management solution with enterprise-grade security that employees would actually use.",
    solution:
      'We built a cross-platform mobile app using React Native with end-to-end AES-256 encryption, biometric authentication (Face ID, Touch ID, and fingerprint), and a zero-knowledge architecture where encryption keys never leave the device. The Node.js backend handles only encrypted blobs — we designed it so that even a full server compromise yields no usable data.',
    result:
      'Deployed to all 200 employees within the first month. Zero credential-related security incidents in the 12 months following launch. The client cited SecureVault as a key control in their successful SOC 2 Type II audit, removing a long-standing finding.',
    metrics: [
      { value: '200+', label: 'Active Users' },
      { value: '0', label: 'Security Incidents' },
      { value: '3 mo', label: 'Time to Launch' },
      { value: 'SOC 2', label: 'Compliance Achieved' },
    ],
  },
  {
    id: 2,
    slug: 'medconnect-portal',
    title: 'MedConnect Portal',
    description:
      'Healthcare web platform connecting patients with doctors for appointment scheduling and teleconsultation.',
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'WebRTC'],
    category: 'Web App',
    gradient: 'from-emerald-500 to-teal-600',
    problem:
      'A regional healthcare provider was managing appointments via phone and paper, with teleconsultation handled over unencrypted consumer video apps. They needed a unified, HIPAA-aligned digital platform that patients could onboard onto without friction.',
    solution:
      'We designed and built a Next.js platform with a patient portal, physician dashboard, and integrated WebRTC video consultation rooms. Stripe handles subscription billing for premium plans. All data is encrypted at rest and in transit, with role-based access controls throughout.',
    result:
      'Reduced appointment no-show rates by 42% through automated SMS reminders. Teleconsultation volume grew 3x in the first quarter. The platform now serves over 8,000 registered patients across 12 clinic locations.',
    metrics: [
      { value: '8,000+', label: 'Registered Patients' },
      { value: '42%', label: 'Fewer No-Shows' },
      { value: '3×', label: 'Telehealth Growth' },
      { value: '12', label: 'Clinic Locations' },
    ],
  },
  {
    id: 3,
    slug: 'threatscan-pro',
    title: 'ThreatScan Pro',
    description:
      'Automated network vulnerability scanner with detailed reporting dashboards and remediation guidance.',
    tech: ['Python', 'React', 'Docker', 'Nmap'],
    category: 'Cybersecurity',
    gradient: 'from-orange-500 to-red-600',
    problem:
      'A managed security service provider was conducting vulnerability assessments manually using a fragmented set of CLI tools. Generating client reports took 2–3 days per engagement, limiting how many clients they could serve and the quality of insights they could deliver.',
    solution:
      'We built ThreatScan Pro — a Python-based scanning engine orchestrating Nmap, OpenVAS, and custom scripts, with a React frontend for report management. Docker-containerised agents can be deployed on-premise or in-cloud. Reports are auto-generated with severity-prioritised findings and remediation recommendations in PDF and JSON.',
    result:
      'Report generation time dropped from 3 days to under 4 hours. The MSSP increased their client capacity by 60% without hiring additional analysts. The platform now runs over 500 assessments per month.',
    metrics: [
      { value: '95%', label: 'Faster Reporting' },
      { value: '500+', label: 'Monthly Scans' },
      { value: '60%', label: 'More Clients Served' },
      { value: '4 hrs', label: 'Report Generation' },
    ],
  },
  {
    id: 4,
    slug: 'retailbot-ai',
    title: 'RetailBot AI',
    description:
      'E-commerce AI assistant that handles customer queries, product recommendations, and order tracking.',
    tech: ['Claude AI', 'Next.js', 'Pinecone', 'Stripe'],
    category: 'AI Integration',
    gradient: 'from-purple-500 to-violet-600',
    problem:
      "An e-commerce company with 50,000 SKUs was spending $40K/month on a support team that handled the same 15 question types repeatedly. Customer satisfaction scores were declining due to slow response times, especially outside business hours.",
    solution:
      'We built RetailBot — a RAG-powered AI assistant using Claude for generation and Pinecone for product catalogue retrieval. The assistant handles product queries, order status checks (via Shopify API), returns processing, and escalates complex issues to human agents with full conversation context.',
    result:
      'RetailBot now handles 78% of customer queries without human involvement, with a 4.6/5 customer satisfaction rating on AI-handled tickets. Support costs dropped by $28K/month while response times fell from hours to seconds.',
    metrics: [
      { value: '78%', label: 'Queries Automated' },
      { value: '4.6/5', label: 'Customer Satisfaction' },
      { value: '$28K', label: 'Monthly Savings' },
      { value: '<10s', label: 'Response Time' },
    ],
  },
  {
    id: 5,
    slug: 'fintrack-mobile',
    title: 'FinTrack Mobile',
    description:
      'Personal finance tracking app with budget planning, expense categorisation, and spending insights.',
    tech: ['Flutter', 'Firebase', 'Dart', 'Plaid API'],
    category: 'Mobile App',
    gradient: 'from-cyan-500 to-blue-600',
    problem:
      'A fintech startup wanted to enter the personal finance market with a differentiated product: one that automatically categorises transactions from linked bank accounts and surfaces actionable spending insights — without the complexity of existing apps.',
    solution:
      'We built FinTrack using Flutter for a truly native feel on both iOS and Android, with Plaid for bank connectivity and Firebase for real-time sync across devices. The ML-powered categorisation engine learns from user corrections. Budget alerts are delivered via push notifications with deep links to the relevant category.',
    result:
      'Launched to 10,000 beta users with a 4.8 App Store rating. Daily active usage of 38% — significantly above the 20% industry average for finance apps. The client raised a seed round 6 weeks post-launch citing product metrics.',
    metrics: [
      { value: '10K+', label: 'Beta Users' },
      { value: '4.8★', label: 'App Store Rating' },
      { value: '38%', label: 'Daily Active Rate' },
      { value: '6 wks', label: 'To Seed Round' },
    ],
  },
  {
    id: 6,
    slug: 'legaldocs-automator',
    title: 'LegalDocs Automator',
    description:
      'AI-powered document generation platform for law firms that reduces contract drafting time by 80%.',
    tech: ['Claude AI', 'Next.js', 'PDF.js', 'PostgreSQL'],
    category: 'AI Integration',
    gradient: 'from-amber-500 to-yellow-600',
    problem:
      'A mid-size law firm was losing 40% of senior associate hours to routine contract drafting — NDAs, employment agreements, service contracts. The work was billable but low-value, and the best talent was leaving for firms with better work quality.',
    solution:
      'We built LegalDocs Automator — a Next.js platform where lawyers input deal parameters and the system generates first drafts using Claude, with firm-specific clause libraries stored in PostgreSQL. Associates review and edit in a purpose-built editor with track changes and version history. PDF generation and e-signature integration complete the workflow.',
    result:
      'Routine contract drafting time fell by 80%. Senior associates reclaimed 15 hours per week for higher-value work. The firm reported a 25% increase in associate satisfaction scores and zero associate departures in the 9 months post-launch.',
    metrics: [
      { value: '80%', label: 'Faster Drafting' },
      { value: '15 hrs', label: 'Weekly Time Saved' },
      { value: '25%', label: 'Satisfaction Increase' },
      { value: '0', label: 'Associate Departures' },
    ],
  },
];
