// 🌐 UI String Translations — EN / DE / UA
// Mission data lives in missions.ts, missions-de.ts, missions-ua.ts

export const UI_STRINGS = {
  en: {
    splash: {
      welcome: "A scientist friend shared something important with you...",
      start: "OK, I'll check this post for manipulation 🔍",
      loading: "Loading...",
    },
    game: {
      question: "Question",
      correct: "✓ Correct!",
      wrong: "✗ Not quite",
      nextLevel: "Next Level →",
      results: "🏁 Results",
      wordsHighlighted: "words highlighted",
      clear: "clear",
      analyze: "🔍 Open & Analyze",
      correcting: "Analyzing...",
    },
    header: {
      en: "EN",
      de: "DE",
      ua: "UA",
    },
    victory: {
      title: "🏆 GAME COMPLETE",
      score: "Score",
      correct: "Correct",
      wrong: "Wrong",
      accuracy: "Accuracy",
      rank: "Rank",
      hyperreality: "HYPERREALITY",
      reality: "REALITY",
      key: "KEY",
      unlocked: "Unlocked",
      postsAnalyzed: "Posts Analyzed",
      skillsTrained: "Skills Trained",
      restart: "Play Again",
    },
    splashUi: {
      meet: "Meet Your Teachers",
      loading: "Loading theorists...",
    },
  },
  de: {
    splash: {
      welcome: "Ein Wissenschaftler-Freund hat etwas Wichtiges mit dir geteilt...",
      start: "OK, ich überprüfe diesen Beitrag auf Manipulation 🔍",
      loading: "Wird geladen...",
    },
    game: {
      question: "Frage",
      correct: "✓ Richtig!",
      wrong: "✗ Nicht ganz",
      nextLevel: "Nächstes Level →",
      results: "🏁 Ergebnisse",
      wordsHighlighted: "Wörter markiert",
      clear: "zurücksetzen",
      analyze: "🔍 Öffnen & Analysieren",
      correcting: "Analysiere...",
    },
    header: {
      en: "EN",
      de: "DE",
      ua: "UA",
    },
    victory: {
      title: "🏆 SPIEL BEENDET",
      score: "Punkte",
      correct: "Richtig",
      wrong: "Falsch",
      accuracy: "Genauigkeit",
      rank: "Rang",
      hyperreality: "HYPERREALITÄT",
      reality: "REALITÄT",
      key: "SCHLÜSSEL",
      unlocked: "Freigeschaltet",
      postsAnalyzed: "Beiträge analysiert",
      skillsTrained: "Fähigkeiten trainiert",
      restart: "Erneut spielen",
    },
    splashUi: {
      meet: "Lerne deine Lehrer kennen",
      loading: "Theoretiker werden geladen...",
    },
  },
  ua: {
    splash: {
      welcome: "Друг-науковець поділився з тобою чимось важливим...",
      start: "Гаразд, я перевірю цей допис на маніпуляцію 🔍",
      loading: "Завантаження...",
    },
    game: {
      question: "Питання",
      correct: "✓ Правильно!",
      wrong: "✗ Не зовсім",
      nextLevel: "Наступний рівень →",
      results: "🏁 Результати",
      wordsHighlighted: "слів виділено",
      clear: "скинути",
      analyze: "🔍 Відкрити та Аналізувати",
      correcting: "Аналізую...",
    },
    header: {
      en: "EN",
      de: "DE",
      ua: "UA",
    },
    victory: {
      title: "🏆 ГРУ ЗАВЕРШЕНО",
      score: "Очки",
      correct: "Правильно",
      wrong: "Неправильно",
      accuracy: "Точність",
      rank: "Ранг",
      hyperreality: "ГІПЕРРЕАЛЬНІСТЬ",
      reality: "РЕАЛЬНІСТЬ",
      key: "КЛЮЧ",
      unlocked: "Розблоковано",
      postsAnalyzed: "Дописів проаналізовано",
      skillsTrained: "Навичок треновано",
      restart: "Грати знову",
    },
    splashUi: {
      meet: "Познайомся зі своїми вчителями",
      loading: "Завантаження теоретиків...",
    },
  },
} as const;

export type LanguageCode = keyof typeof UI_STRINGS;

/**
 * Resolve a dot-notation key like 'splash.start' or 'game.question' to a translated string.
 * Falls back to the key itself if not found.
 */
export function t(key: string, language: LanguageCode): string {
  const parts = key.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = UI_STRINGS[language];
  for (const part of parts) {
    if (value == null || typeof value !== 'object') return key;
    value = value[part as keyof typeof value];
  }
  return typeof value === 'string' ? value : key;
}