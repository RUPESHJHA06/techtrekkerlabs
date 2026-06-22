const companies = [
  { name: 'Finvero', sector: 'Fintech' },
  { name: 'HealthPath', sector: 'Healthcare' },
  { name: 'ShopSphere', sector: 'E-Commerce' },
  { name: 'LegalDesk', sector: 'LegalTech' },
  { name: 'MedConnect', sector: 'Health' },
  { name: 'RetailBot', sector: 'AI / Retail' },
];

export default function TrustedByBar() {
  return (
    <div className="py-8 bg-slate-900 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.18em] text-center mb-6">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {companies.map((c) => (
            <div key={c.name} className="text-center group">
              <div className="text-slate-500 font-bold text-sm tracking-tight group-hover:text-slate-300 transition-colors duration-200">
                {c.name}
              </div>
              <div className="text-slate-700 text-[10px] mt-0.5">{c.sector}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
