'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import type { TranslationKey } from '@/lib/translations';

interface Props {
  titleKey: TranslationKey;
  descKey: TranslationKey;
}

export default function ClientPageHeader({ titleKey, descKey }: Props) {
  const { t } = useLanguage();
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-3">{t(titleKey)}</h1>
      <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">{t(descKey)}</p>
    </div>
  );
}
