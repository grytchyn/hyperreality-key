// 🌐 Language Context — single source for i18n state
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { getMissionPosts } from '../data/missions';
import { getMissionPostsDE } from '../data/missions-de';
import { getMissionPostsUA } from '../data/missions-ua';
import type { MissionPost } from '../data/missions';

export type Language = 'en' | 'de' | 'ua';

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'ua', label: 'UA', flag: '🇺🇦' },
];

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  missions: MissionPost[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getMissionsForLanguage(language: Language): MissionPost[] {
  switch (language) {
    case 'de': return getMissionPostsDE();
    case 'ua': return getMissionPostsUA();
    default: return getMissionPosts();
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const missions = getMissionsForLanguage(language);

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, missions }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}