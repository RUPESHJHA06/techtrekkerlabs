'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Language, type TranslationKey } from '@/lib/translations';

type LanguageContextType = {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key) => translations.en[key],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('ttl-lang') as Language | null;
    if (stored === 'en' || stored === 'hi') {
      setLangState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem('ttl-lang', l);
    document.documentElement.lang = l;
  };

  const t = (key: TranslationKey): string => translations[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
