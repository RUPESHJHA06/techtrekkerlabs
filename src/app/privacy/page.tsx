import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'TechTrekker Labs privacy policy — how we collect, use, and protect your data.',
};

const sections = [
  {
    heading: '1. Information We Collect',
    body: 'We collect information you provide directly to us, such as your name, email address, and message when you use our contact form. We may also collect usage data automatically, including your IP address, browser type, and pages visited, through standard web analytics tools.',
  },
  {
    heading: '2. How We Use Your Information',
    body: 'We use the information we collect to respond to your inquiries, provide and improve our services, send service-related communications, and comply with legal obligations. We do not sell your personal data to third parties.',
  },
  {
    heading: '3. Cookies and Tracking',
    body: 'Our website may use cookies and similar tracking technologies to improve your browsing experience and understand how visitors interact with our site. You can control cookie settings through your browser preferences. Essential cookies required for site functionality cannot be disabled.',
  },
  {
    heading: '4. Data Sharing',
    body: 'We do not sell or rent your personal information. We may share data with trusted third-party service providers solely to support our business operations, under strict data-processing agreements. We may disclose information where required by law or to protect our rights.',
  },
  {
    heading: '5. Data Retention',
    body: 'We retain personal information for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Contact form submissions are retained for a maximum of 24 months.',
  },
  {
    heading: '6. Your Rights',
    body: 'Depending on your location, you may have rights regarding your personal data, including the right to access, correct, delete, or restrict processing. To exercise these rights, contact us at privacy@techtrekkerlabs.com. We will respond within 30 days.',
  },
  {
    heading: '7. Data Security',
    body: 'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of internet transmission is 100% secure.',
  },
  {
    heading: '8. Third-Party Links',
    body: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently.",
  },
  {
    heading: "9. Children's Privacy",
    body: 'Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If we become aware of such collection, we will take steps to delete it promptly.',
  },
  {
    heading: '10. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website. Your continued use of our services following changes constitutes acceptance of the updated policy.',
  },
  {
    heading: '11. Contact Us',
    body: 'If you have questions or concerns about this Privacy Policy, please contact us at: privacy@techtrekkerlabs.com',
  },
];

export default function PrivacyPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/60 py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-3">Privacy Policy</h1>
            <p className="text-slate-500 dark:text-slate-500 text-sm">
              Last updated: <time dateTime="2025-01-01">January 1, 2025</time>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-10">
            At TechTrekker Labs (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or engage with our services.
          </p>
          <div className="space-y-7">
            {sections.map((s) => (
              <div key={s.heading} className="bg-white dark:bg-slate-800/40 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700/50 rounded-xl p-6">
                <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2">{s.heading}</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
