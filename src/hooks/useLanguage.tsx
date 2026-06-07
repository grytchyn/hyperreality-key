// 🌐 Language + Missions — fetches from API with local fallback
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { fetchMissions } from '../services/api';
import type { MissionPost } from '../services/api';

interface LanguageContextValue {
  language: 'en';
  missions: MissionPost[];
  loading: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [missions, setMissions] = useState<MissionPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchMissions().then(m => {
      if (!cancelled) {
        setMissions(m);
        setLoading(false);
      }
    });
    return () => { cancelled = true; };
  }, []);

  return (
    <LanguageContext.Provider value={{ language: 'en', missions, loading }}>
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
