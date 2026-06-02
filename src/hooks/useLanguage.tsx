// 🌐 Language — EN-only simplified context
import { createContext, useContext, type ReactNode } from 'react';
import { MISSIONS } from '../data/missions';
import type { MissionPost } from '../data/missions';

interface LanguageContextValue {
  language: 'en';
  missions: MissionPost[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  return (
    <LanguageContext.Provider value={{ language: 'en', missions: MISSIONS }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export const LANGUAGES = [{ code: 'en' as const, label: 'EN', flag: '🇬🇧' }];
