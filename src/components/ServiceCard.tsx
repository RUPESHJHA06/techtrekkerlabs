import { ServiceIconMap } from '@/lib/icons';

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  const Icon = ServiceIconMap[icon];

  return (
    <div className="group bg-white dark:bg-slate-800/40 shadow-[0_1px_4px_rgba(0,0,0,0.08)] dark:shadow-none border border-slate-200/80 dark:border-slate-700/50 rounded-xl p-6 hover:border-blue-400/60 hover:shadow-[0_4px_16px_rgba(59,130,246,0.12)] dark:hover:shadow-blue-500/5 dark:hover:border-blue-500/40 transition-all duration-300 h-full">
      <div className="w-11 h-11 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
        {Icon && <Icon className="w-5 h-5" />}
      </div>
      <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-base mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
      <ul className="space-y-1.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-400/70 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
