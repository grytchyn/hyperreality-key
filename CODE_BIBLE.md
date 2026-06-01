# 💻 Code Bible — Hyperreality Key

> **Version 1.0** | Stand: 01.06.2026
> *Architektur-Regeln, Patterns, und Konventionen*

---

## 1. ARCHITECTURE OVERVIEW

### 1.1 Tech Stack (Pinned)
```
Runtime:     Node.js 22+
Build:       Vite 8
Framework:   React 19.2
Language:    TypeScript 6 (strict mode)
Styling:     Tailwind CSS 4 + CSS Custom Properties
Testing:     Vitest + React Testing Library (planned)
E2E:         Playwright (planned)
```

### 1.2 Project Structure (Canonical)

```
hyperreality-key/
├── index.html                    # Entry — ALL meta tags here
├── vite.config.ts                # Vite config — no secrets
├── tsconfig.json                 # strict: true
├── public/
│   ├── assets/
│   │   ├── bg/                   # Background PNGs (1920×1080)
│   │   ├── scientists/           # Scientist avatars (120×120)
│   │   ├── logo-new.png          # Game logo with text
│   │   └── *.png                 # Tool icons, favicon
│   └── og-image.png              # Social preview
└── src/
    ├── main.tsx                  # ReactDOM entry
    ├── App.tsx                   # State orchestrator — MINIMAL
    ├── types.ts                  # ALL TypeScript interfaces/types
    ├── config/
    │   ├── colors.ts             # ★ CENTRAL COLOR TOKENS
    │   └── game.ts               # Game constants (maxLevel, scorePerCorrect)
    ├── data/
    │   ├── missions.ts           # Level data EN
    │   ├── missions-de.ts        # Level data DE
    │   └── missions-ua.ts        # Level data UA
    ├── engine/
    │   ├── coreTools.ts          # HIGHLIGHT ENGINE (stemmer + rules)
    │   ├── scientists.ts         # ★ Scientist avatar registry (shared!)
    │   ├── levelTools.ts         # ★ Tool progression config (single source)
    │   └── scoring.ts            # Score calculation
    ├── hooks/
    │   ├── useGame.ts            # Game state machine (useReducer)
    │   ├── useHighlights.ts      # Memoized highlight computation
    │   └── useLanguage.ts        # i18n context hook
    ├── components/
    │   ├── screens/
    │   │   ├── SplashScreen.tsx
    │   │   ├── GameScreen.tsx
    │   │   └── VictoryScreen.tsx
    │   ├── layout/
    │   │   └── Header.tsx
    │   ├── game/
    │   │   ├── ArticleCard.tsx
    │   │   ├── ToolGrid.tsx
    │   │   ├── AnswerPanel.tsx
    │   │   ├── ExplanationPanel.tsx
    │   │   └── HighlightRenderer.tsx
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── Badge.tsx
    │   │   ├── Icon.tsx
    │   │   └── Tooltip.tsx
    │   └── icons/
    │       └── ToolIcons.tsx
    ├── i18n/
    │   ├── index.ts              # i18n setup
    │   └── translations.ts       # UI strings in EN/DE/UA
    └── styles/
        ├── tokens.css            # ★ ALL CSS variables (single file)
        ├── animations.css        # All keyframes
        └── components.css        # Utility classes (pixel-btn, etc.)
```

**Migration Plan (Phase 3):**
1. `config/colors.ts` — extract all hardcoded colors from components
2. `engine/scientists.ts` — extract SCIENTIST_AVATARS map (eliminates 4× duplication)
3. `engine/levelTools.ts` — extract LEVEL_TOOLS (eliminates 3× duplication)
4. `styles/tokens.css` — consolidate all CSS variables
5. `hooks/useGame.ts` — extract game state machine from App.tsx
6. Delete: `LevelComplete.tsx`, `LevelTransition.tsx`, all unused JSONs
7. Optional: Extract ChatUi phone-status-bar SVGs

---

## 2. ARCHITECTURE RULES

### 🟢 DO — Always

1. **Single Source of Truth**: Jeder Wert existiert genau EINMAL. Farben in `colors.ts`. Tool-Config in `levelTools.ts`. Scientist-Map in `scientists.ts`.

2. **Components sind klein**: Max 100 Zeilen pro Component. Alles größer → zerlegen.

3. **Hooks für Logik**: Game-Logik gehört in `hooks/`, nicht in Components.

4. **TypeScript strict**: `strict: true` im tsconfig. Kein `any`. Kein `@ts-ignore`.

5. **Named exports only**: `export function Button()` statt `export default`.

6. **CSS Variables > Inline styles**: Keine `color: #0a0a0f` in Components. Immer `bg-[var(--color-dark-bg)]` oder Tailwind-Theme.

### 🔴 DON'T — Never

1. **Keine duplizierten Maps/Configs**: SCIENTIST_AVATARS wird NICHT in 3 Files definiert.
2. **Keine toten Komponenten**: LevelComplete, LevelTransition → löschen.
3. **Keine ungenutzten JSONs**: 11 JSONs in data/ → löschen.
4. **Keine Hardcoded Social-Media-Zahlen**: `💬 12 • 🔄 47` → dynamisch oder raus.
5. **Keine Inline-Farben**: Jede Farbe ist eine Variable.

---

## 3. STATE MANAGEMENT

### 3.1 Game State (useReducer Pattern)

```typescript
// hooks/useGame.ts

interface GameState {
  phase: 'splash' | 'playing' | 'victory';
  currentLevel: number;    // 1-12
  totalScore: number;
  language: 'en' | 'de' | 'ua';
}

type GameAction =
  | { type: 'START_GAME' }
  | { type: 'ANSWER_QUESTION'; correct: boolean }
  | { type: 'NEXT_LEVEL' }
  | { type: 'RESTART' }
  | { type: 'SET_LANGUAGE'; language: 'en' | 'de' | 'ua' };

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME':
      return { ...state, phase: 'playing', currentLevel: 1, totalScore: 0 };
    case 'ANSWER_QUESTION':
      return {
        ...state,
        totalScore: state.totalScore + (action.correct ? 10 : 0),
      };
    case 'NEXT_LEVEL':
      return state.currentLevel >= 12
        ? { ...state, phase: 'victory' }
        : { ...state, currentLevel: state.currentLevel + 1 };
    case 'RESTART':
      return { ...initialState };
    // ...
  }
}
```

### 3.2 Per-Level State (inside GameScreen)

```typescript
interface LevelState {
  activeFilters: CoreToolId[];
  chosenAnswer: number | null;
  feedBack: { isCorrect: boolean; explanation: string } | null;
  phase: 'reading' | 'analyzing' | 'choosing' | 'answered';
}
```

### 3.3 No External State Libraries
- Kein Redux, kein Zustand, kein Jotai
- `useReducer` + `useContext` reichen für dieses Spiel
- Falls nötig: `localStorage` für Spielstand-Persistenz

---

## 4. COMPONENT PATTERNS

### 4.1 Functional Component Template

```typescript
// ✅ DO: Named function, typed props, explicit return
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'pixel-btn font-mono text-xl transition-all duration-fast';
  const variantStyles = variantStylesMap[variant];
  
  return (
    <button
      className={`${baseStyles} ${variantStyles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
```

### 4.2 Data Flow: Parent → Child

```
App.tsx (GameState)
  │ useReducer → state + dispatch
  │
  ├── SplashScreen({ onStart })
  │     ← dispatch({ type: 'START_GAME' })
  │
  ├── GameScreen({
  │       post,            // from missions.ts
  │       availableTools,  // from levelTools.ts
  │       totalScore,
  │       onAnswer(success),
  │       onNextLevel()
  │   })
  │     │ useHighlights(activeFilters, post)
  │     │ useLevelState()  // local: chosenAnswer, feedback
  │     │
  │     ├── Header({ level, levelName, score })
  │     ├── ArticleCard({ post, highlights })
  │     ├── ToolGrid({ tools, activeFilters, onToggle })
  │     ├── AnswerPanel({ choices, onPick, disabled })
  │     └── ExplanationPanel({ isCorrect, explanation })
  │
  └── VictoryScreen({ score, onRestart })
```

### 4.3 Performance Rules
- `useMemo` für `getHighlightsFor()` (bereits implementiert ✅)
- `useCallback` für event handler, die als Props weitergegeben werden (bereits ✅)
- `key={currentLevel}` auf GameScreen für sauberen Remount (bereits ✅)
- **Kein** `useEffect` für unnötige Seiteneffekte

---

## 5. STYLING STANDARDS

### 5.1 CSS Variable Hierarchy

```
tokens.css (Single Source of Truth)
    │
    ├── index.css (Tailwind @theme + @import tokens)
    │     │
    │     ├── animations.css (keyframes)
    │     └── components.css (utility classes)
    │
    └── Components (Tailwind classes only)
          bg-[var(--color-dark-bg)]     ✅
          bg-[#0a0a0f]                  ❌ VERBOTEN
```

### 5.2 Tailwind Usage Rules

```typescript
// ✅ DO: Use Tailwind utility classes
<div className="bg-[var(--color-dark-card)] text-[var(--color-text-primary)]" />

// ✅ DO: Use semantic color variables
<button className="bg-[var(--color-neon-purple)]" />

// ❌ DON'T: Hardcoded hex
<div style={{ background: '#13131a' }} />   // WRONG

// ❌ DON'T: Inline styles for layout
<div style={{ marginTop: '16px' }} />       // WRONG → use className="mt-4"
```

### 5.3 Responsive Classes (Mobile-First)

```typescript
// Mobile (default) → Tablet (sm:) → Desktop (md:)
className="
  grid grid-cols-2          /* Mobile: 2 columns */
  sm:grid-cols-3            /* Tablet: 3 columns */
  md:grid-cols-4            /* Desktop: 4 columns */
"
```

### 5.4 Dark Mode
- Immer dark. Es gibt kein Light-Theme.
- `bg-[var(--color-dark-bg)]` ist der Standard.

---

## 6. DATA LAYER

### 6.1 Import Hierarchy

```
src/config/colors.ts          ← Alle Farben als const exports
src/config/game.ts            ← Spiel-Konstanten (MAX_LEVEL, SCORE_PER_CORRECT)
src/engine/scientists.ts      ← SCIENTIST_AVATARS Map (EINMAL!)
src/engine/levelTools.ts      ← LEVEL_TOOLS + LEVEL_CONFIG (EINMAL!)
src/engine/coreTools.ts       ← HIGHLIGHT_RULES + stemmer + getHighlightsFor
src/engine/scoring.ts         ← score calculation helpers
src/data/missions.ts          ← Nur Level-Daten (Text, Fragen, Antworten)
```

### 6.2 Color Config (`config/colors.ts`)

```typescript
export const COLORS = {
  bg: '#0a0a0f',
  card: '#13131a',
  surface: '#1a1a24',
  border: '#2a2a3a',
  text: {
    primary: '#e5e7eb',
    secondary: '#9ca3af',
    muted: '#6b7280',
  },
  neon: {
    purple: '#8b5cf6',
    pink: '#ec4899',
    cyan: '#06b6d4',
    green: '#10b981',
    red: '#ef4444',
    amber: '#f59e0b',
  },
  tools: {
    'bad-arguments': '#ef4444',
    'feelings-check': '#f59e0b',
    // ... alle 12 tools
  } as const satisfies Record<CoreToolId, string>,
} as const;
```

### 6.3 Scientist Registry (`engine/scientists.ts`)

```typescript
export const SCIENTIST_AVATARS: Record<string, { name: string; avatar: string; color: string }> = {
  schopenhauer: { name: 'Arthur Schopenhauer', avatar: '/assets/scientists/schopenhauer.png', color: '#ef4444' },
  cialdini: { name: 'Robert Cialdini', avatar: '/assets/scientists/cialdini.png', color: '#f59e0b' },
  // ... alle 8 weiteren
};

export function getScientistAvatar(key: string) {
  return SCIENTIST_AVATARS[key] || SCIENTIST_AVATARS.schopenhauer;
}
```

---

## 7. I18N PATTERN

### 7.1 Language Context

```typescript
// hooks/useLanguage.ts
import { createContext, useContext } from 'react';

type Language = 'en' | 'de' | 'ua';

interface LanguageContext {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;  // translation function
  missions: MissionPost[];     // correct mission file based on language
}

export const LanguageContext = createContext<LanguageContext>(/* ... */);
export function useLanguage() { return useContext(LanguageContext); }
```

### 7.2 Mission Selection

```typescript
// In App.tsx
const missions = language === 'de' ? getMissionPostsDe()
  : language === 'ua' ? getMissionPostsUa()
  : getMissionPosts();
```

---

## 8. TESTING STANDARDS

### 8.1 Test Structure

```
tests/
├── unit/
│   ├── engine/
│   │   ├── coreTools.test.ts          # stemmer, getHighlightsFor
│   │   ├── scientists.test.ts         # registry lookup
│   │   ├── levelTools.test.ts         # tool progression
│   │   └── scoring.test.ts            # score calculation
│   └── data/
│       └── missions.test.ts           # all 12 levels valid
├── integration/
│   ├── GameScreen.test.tsx            # render + interaction
│   ├── Header.test.tsx                # prop combinations
│   └── AnswerPanel.test.tsx           # click → feedback
└── e2e/
    └── game-flow.spec.ts              # Playwright: splash → level 1-12 → victory
```

### 8.2 What to Test

| Priority | What | How | Tool |
|----------|------|-----|------|
| 🔴 Critical | Stemmer: Output für bekannte Inputs | Unit | Vitest |
| 🔴 Critical | getHighlightsFor: Korrekte Tool-Zuordnung | Unit | Vitest |
| 🔴 Critical | Level Progression: Tools unlocken sich richtig | Unit | Vitest |
| 🟡 Important | GameScreen: Artikel rendern, Tools klicken, Antwort wählen | Integration | RTL |
| 🟡 Important | Alle 12 Level: Text und Fragen valide | Unit | Vitest |
| 🟢 Nice | Header: Score und Level korrekt anzeigen | Integration | RTL |
| 🟢 Nice | Full Game Flow: Splash → 12 Levels → Victory | E2E | Playwright |

### 8.3 Test Example (Unit)

```typescript
// coreTools.test.ts
import { describe, it, expect } from 'vitest';
import { simpleStem, getHighlightsFor } from '../src/engine/coreTools';

describe('simpleStem', () => {
  it('strips common suffixes', () => {
    expect(simpleStem('running')).toBe('run');
    expect(simpleStem('arguments')).toBe('argument');
    expect(simpleStem('manipulation')).toBe('manipul');
  });

  it('handles edge cases', () => {
    expect(simpleStem('')).toBe('');
    expect(simpleStem('a')).toBe('a');
  });
});

describe('getHighlightsFor', () => {
  it('finds bad-arguments keywords in text', () => {
    const text = 'This is absolutely the only way to think.';
    const result = getHighlightsFor(['bad-arguments'], text);
    expect(result.size).toBeGreaterThan(0);
    expect(result.get('bad-arguments')!.length).toBeGreaterThan(0);
  });
});
```

### 8.4 Test Example (Integration)

```typescript
// GameScreen.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { GameScreen } from '../src/components/screens/GameScreen';

describe('GameScreen', () => {
  const mockPost = getMissionPosts()[0]; // Level 1
  const mockOnAnswer = vi.fn();

  it('renders the article from the post', () => {
    render(<GameScreen post={mockPost} onAnswer={mockOnAnswer} />);
    expect(screen.getByText(mockPost.content)).toBeInTheDocument();
  });

  it('shows tool filters', () => {
    render(<GameScreen post={mockPost} onAnswer={mockOnAnswer} />);
    const toolGrid = screen.getByTestId('tool-grid');
    expect(toolGrid).toBeInTheDocument();
  });

  it('moves to answered phase on choice click', () => {
    render(<GameScreen post={mockPost} onAnswer={mockOnAnswer} />);
    const choices = screen.getAllByTestId('choice-button');
    fireEvent.click(choices[0]);
    expect(screen.getByText(/correct|wrong/i)).toBeInTheDocument();
  });
});
```

---

## 9. PERFORMANCE BUDGET

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Bundle Size (gzip) | < 200KB | ~50KB (no libs) | ✅ |
| Initial Load Time | < 2s | < 1s | ✅ |
| Level Transition | < 100ms | Instant (remount) | ✅ |
| Highlight Computation | < 50ms | useMemo | ✅ |
| Image Assets | < 3MB total | ~5MB (backgrounds) | ⚠️ Optimize PNGs |
| Memory Usage | < 100MB | < 50MB | ✅ |

---

## 10. CLEANUP PLAN (Phase 3)

### Delete (Dead Code)
```bash
# Unused components
rm src/components/LevelComplete.tsx
rm src/components/LevelTransition.tsx

# Unused JSONs (11 files)
rm src/data/expanded_corpus.json
rm src/data/smart_corpus.json
rm src/data/unified_corpus.json
rm src/data/word_tool_map.json
rm src/data/precomputed.json
rm src/data/preprocessed_highlights.json
rm src/data/level1_tokens.json
rm src/data/level2_tokens.json
rm src/data/level3_tokens.json
rm src/data/level4_tokens.json
rm src/data/level5_tokens.json
rm src/data/level6_tokens.json
rm src/data/level7_tokens.json
```

### Extract (Deduplication)
1. `SCIENTIST_AVATARS` + `getScientistAvatar()` → `engine/scientists.ts`
2. `LEVEL_TOOLS` + `LEVEL_CONFIG` → `engine/levelTools.ts`
3. Alle 12 Farben → `config/colors.ts`
4. Alle CSS Hardcoded Colors → use variables or `colors.ts`

### Create (New Files)
1. `src/config/colors.ts`
2. `src/config/game.ts`
3. `src/engine/scientists.ts`
4. `src/engine/levelTools.ts`
5. `src/engine/scoring.ts`
6. `src/hooks/useGame.ts`
7. `src/hooks/useHighlights.ts`
8. `src/hooks/useLanguage.ts`
9. `src/i18n/index.ts`
10. `src/styles/animations.css`

### After Cleanup
Total file count: ~30 files → ~25 files (after consolidation)
Total source lines: ~2,955 → ~2,500 (after dead code removal)
Dead code percentage: 25% → 0%

---

## 11. ERROR BOUNDARIES

```typescript
// Fallback-Komponente für Rendering-Fehler
export function GameErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      fallback={
        <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-dark-bg)] text-[var(--color-text-primary)]">
          <p className="text-xl font-mono text-[var(--color-neon-red)]">
            ⚡ CRITICAL ERROR ⚡
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] mt-2">
            The Hyperreality Key encountered a system fault.
          </p>
          <button onClick={() => window.location.reload()}>
            ⟳ RESTART SYSTEM
          </button>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}
```

---

## 12. CODING CONVENTIONS

### Naming
- **Files**: PascalCase für Components (`GameScreen.tsx`), camelCase für utilities (`coreTools.ts`)
- **Functions**: camelCase (`getHighlightsFor`, `simpleStem`)
- **Types/Interfaces**: PascalCase (`MissionPost`, `CoreToolConfig`)
- **CSS Classes**: kebab-case (`.pixel-btn`, `.tool-btn-label`)
- **CSS Variables**: kebab-case (`--color-neon-purple`)

### File Organization
- EIN Export pro Datei (named, nicht default)
- imports: React → Libraries → Internal → Styles
- Max 100 Zeilen pro Component-File
- Max 400 Zeilen pro Utility-File (coreTools ist Ausnahme mit 378)

### Git
- Branch: `main`
- Commits: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`
- Push after every working change
- Never commit broken builds