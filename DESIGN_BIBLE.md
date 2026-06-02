# 🎨 Design Bible — Hyperreality Key

> **Version 1.2** | Stand: 02.06.2026
> *Single Source of Truth für alle UI-Entscheidungen*

---

## 0. CHANGELOG

### v1.2 (02.06.2026)
- **EN-only**: DE/UA completely removed. App simplified to English only. Bundle size -25%.
- **Tool visibility**: Only tools that actively highlight words in the current text are shown. Texts redesigned to use ≥3 tools each.
- **Double-flag fix**: Old correct/incorrect feedback block removed. Only the scientist explanation bubble remains.
- **Button colors**: Wrong answer → red Next button. Correct answer → green Next button.
- **Avatars**: All 10 scientist avatars re-cropped from the original `scientists-sheet.png` to exactly 120×120px (matching this spec @5.2).
- **Alex avatar**: Re-cropped to 120×120px from the original.
- **Splash change**: Alex (friend avatar) now appears in the messenger mockup instead of Schopenhauer.
- **Scientists reshuffled**: Level 1 → Robert Cialdini (modern). Schopenhauer moved to Level 10.
- **New mission topics added**: Ukraine disinfo (Level 4), Gaza famine denial (Level 6), Russia's African Initiative (Level 11). Topics now span conflicts, climate, health, entertainment, and politics.
- **getScientistField()**: New exported function for dynamic field display in the scientist bubble (replaces hardcoded switch).

### v1.1 (01.06.2026)
- Background: unified `game-bg.png` for ALL levels (Level 1 no longer has separate bg)
- SplashScreen: removed scientist grid, simplified to logo + single CTA
- Avatar rendering: uses `getScientistAvatar(scientistKey)` from shared registry
- Added `scientistKey` to MissionPost interface
- i18n: Language switcher in Header (EN|DE|UA buttons)

---

## 1. DESIGN TOKENS

### 1.1 Color System

```css
/* 🌑 Backgrounds */
--color-dark-bg:        #0a0a0f;   /* Haupt-Hintergrund */
--color-dark-card:      #13131a;   /* Karten/Surfaces */
--color-dark-surface:   #1a1a24;   /* Erhöhte Surfaces */
--color-dark-border:    #2a2a3a;   /* Rahmen/Trennlinien */

/* 🌈 Neon Accents */
--color-neon-purple:    #8b5cf6;   /* PRIMARY — Header, Buttons, Highlights */
--color-neon-pink:      #ec4899;   /* Echo Chamber Tool */
--color-neon-cyan:      #06b6d4;   /* Hidden Myth Tool */
--color-neon-green:     #10b981;   /* Correct/Success */
--color-neon-red:       #ef4444;   /* Bad Arguments / Error */
--color-neon-amber:     #f59e0b;   /* Feelings Check Tool */

/* ✨ Text Colors */
--color-text-primary:   #e5e7eb;   /* Haupttext */
--color-text-secondary: #9ca3af;   /* Sekundärtext */
--color-text-muted:     #6b7280;   /* Deaktiviert/Hinweise */

/* 🎯 Tool Colors (Level-specific) */
--tool-bad-arguments:   #ef4444;   /* Level 1 — Schopenhauer */
--tool-feelings-check:  #f59e0b;   /* Level 2 — Cialdini */
--tool-brain-check:     #22c55e;   /* Level 3 — Kahneman */
--tool-us-vs-them:      #3b82f6;   /* Level 4 — Tajfel */
--tool-value-check:     #a855f7;   /* Level 5 — Haidt */
--tool-hidden-story:    #06b6d4;   /* Level 6 — Barthes */
--tool-fake-check:      #f97316;   /* Level 7 — Baudrillard */
--tool-source-check:    #14b8a6;   /* Level 8 — Foucault */
--tool-echo-chamber:    #ec4899;   /* Level 9 — Sunstein */
--tool-red-herring:     #eab308;   /* Level 10 — Schopenhauer */
--tool-agenda-setting:  #6366f1;   /* Level 11 — McCombs & Shaw */
--tool-false-appeal:    #a855f7;   /* Level 12 — Cialdini */

/* ✅ Semantic Colors */
--color-success:        #22c55e;   /* Richtig */
--color-error:          #ef4444;   /* Falsch */
--color-warning:        #f59e0b;   /* Warnung */
--color-info:           #3b82f6;   /* Information */
```

### 1.2 Typography Scale

```css
/* 🔤 Font Families */
--font-mono:   'Courier New', 'Consolas', monospace;      /* Code, UI Labels */
--font-pixel:  'Courier New', 'VT323', monospace;          /* Headers, Game Text */

/* 📏 Font Sizes */
--text-2xs:    6px;    /* Scientist names, badges */
--text-xs:     8px;    /* Tool labels, timestamps */
--text-sm:     9px;    /* Info plates, secondary info */
--text-base:   10px;   /* Metadata, section headers */
--text-md:     11px;   /* Body text */
--text-lg:     12px;   /* Tooltips, emphasis */
--text-xl:     13px;   /* Article body, buttons */
--text-2xl:    16px;   /* Subheaders */
--text-3xl:    24px;   /* Score display */

/* 📐 Line Heights */
--leading-tight:    1.15;
--leading-normal:   1.4;
--leading-relaxed:  1.6;
```

### 1.3 Spacing System (4px Base)

```css
--space-1:   4px;
--space-2:   8px;
--space-3:   12px;
--space-4:   16px;
--space-5:   20px;
--space-6:   24px;
--space-8:   32px;
--space-10:  40px;
--space-12:  48px;
--space-16:  64px;
```

### 1.4 Border Radius

```css
--radius-sm:  6px;     /* Small badges */
--radius-md:  8px;     /* Cards, buttons */
--radius-lg:  12px;    /* Large surfaces */
--radius-xl:  16px;    /* Modals, containers */
--radius-full: 50%;    /* Circles, avatars */
```

### 1.5 Shadows & Glows

```css
--shadow-sm:  0 2px 4px rgba(0,0,0,0.3);
--shadow-md:  0 4px 12px rgba(0,0,0,0.4);
--shadow-lg:  0 8px 24px rgba(0,0,0,0.5);
--glow-purple:  0 0 20px rgba(139,92,246,0.3);
--glow-success: 0 0 20px rgba(34,197,94,0.3);
--glow-error:   0 0 20px rgba(239,68,68,0.3);
```

---

## 2. COMPONENT SYSTEM (Atomic Design)

### 2.1 Atoms

| Component | Props | CSS Class | Description |
|-----------|-------|-----------|-------------|
| `Button` | variant, size, disabled, onClick | `.pixel-btn` | Primary action button |
| `Icon` | name, size, glowColor | — | SVG/PNG icon wrapper |
| `Badge` | text, color, variant | `.info-plate` | Status/Label badge |
| `Tooltip` | text, position | CSS-only | Hover-info box |
| `Avatar` | src, alt, size | — | Circular image |
| `ChoiceIcon` | emoji, index, selected | Inline | A/B/C/D emoji circle |

### 2.2 Molecules

| Component | Composed From | Props | Description |
|-----------|--------------|-------|-------------|
| `ToolButton` | Button + Icon + Badge | toolId, active, locked | Single filter tool |
| `ToolGrid` | ToolButton[] | tools, activeFilters | 4-column tool grid |
| `ChoiceButton` | ChoiceIcon + text | label, emoji, onClick | Answer option |
| `HighlightSpan` | Inline text + Badge | word, toolId, explanation | Highlighted word |
| `HeaderScore` | Badge[] | score, level, levelName | Score + Level display |

### 2.3 Organisms

| Component | Composed From | Props | Description |
|-----------|--------------|-------|-------------|
| `Header` | Logo + HeaderScore | level, levelName, levelColor, showLevel, totalScore | Sticky top bar |
| `ArticleCard` | Text + HighlightSpan[] | content, title, author, source | Social media post |
| `AnswerPanel` | ChoiceButton[] | choices, selected, onSelect | Question UI |
| `ExplanationPanel` | Text + Badge[] | explanation, isCorrect, feedback | Post-answer feedback |
| `ScientistCard` | Avatar + Text | name, field, avatarSrc, color | Scientist profile |

### 2.4 Templates

| Template | Composed From | State | Description |
|----------|--------------|-------|-------------|
| `GameLayout` | Header + ArticleCard + ToolGrid + AnswerPanel + ExplanationPanel | phase chat/game/answered | Main game view |
| `SplashLayout` | Logo + CTA | fade-in + loading dots | Welcome screen |
| `VictoryLayout` | Header + Score + Stats + Restart | score data | Final screen |

### 2.5 Page-Level Components

| Component | Template | Description |
|-----------|----------|-------------|
| `SplashScreen` | SplashLayout | Welcome — logo + start CTA |
| `GameScreen` | GameLayout | Main game loop — chat intro → analysis → answer |
| `VictoryScreen` | VictoryLayout | Results |
| ~~LevelComplete~~ | — | **DELETED** — replaced by inline flow |
| ~~LevelTransition~~ | — | **DELETED** — replaced by inline flow |
| ~~ChatUi~~ | — | **UNUSED** — to be removed or repurposed |

---

## 3. LAYOUT SYSTEM

### 3.1 Breakpoints

```css
--bp-mobile:  360px;
--bp-tablet:  768px;
--bp-desktop: 1024px;
--bp-wide:    1440px;
```

### 3.2 Container Widths

```css
--container-narrow: 360px;    /* Splash, Victory */
--container-normal: 480px;    /* GameScreen (max-w-md) */
--container-wide:   640px;    /* Future: expanded views */
```

### 3.3 Grid System

- **Tool Grid**: 4 Columns (desktop) → 2 Columns (mobile)
- **Scientist Grid**: 5 Columns (desktop) → 3 Columns (mobile)
- **Answer Choices**: 2 × 2 Grid (always)

### 3.4 Z-Index Layers

```css
--z-base:        1;
--z-card:        10;
--z-header:      50;
--z-tooltip:     100;
--z-modal:       200;
--z-overlay:     300;
--z-loading:     500;
```

---

## 4. ANIMATION TOKENS

### 4.1 Durations

```css
--duration-instant:  0ms;
--duration-fast:    150ms;
--duration-normal:  300ms;
--duration-slow:    500ms;
--duration-glitch:  800ms;
```

### 4.2 Easing

```css
--ease-out:        cubic-bezier(0.16, 1, 0.3, 1);
--ease-in:         cubic-bezier(0.4, 0, 1, 1);
--ease-in-out:     cubic-bezier(0.65, 0, 0.35, 1);
--ease-bounce:     cubic-bezier(0.34, 1.56, 0.64, 1);
```

### 4.3 Animations

| Name | Type | Properties | Usage |
|------|------|-----------|-------|
| `fade-in-up` | Enter | opacity 0→1, translateY 20→0 | Cards, panels |
| `slide-up` | Enter | translateY 100%→0 | Modals, overlays |
| `pulse-glow` | Loop | box-shadow 0→25px | Active tools |
| `glitch` | One-shot | text-shadow swap | Cyberpunk effect |
| `dissolve` | Exit | opacity→0, blur→4, scale→0.98 | Level transition |

---

## 5. ASSET STANDARDS

### 5.1 Background Images
- **Format**: PNG
- **Resolution**: 1920×1080px
- **Files in use**:
  - `splash-bg.png` — Splash/Start screen
  - `game-bg.png` — ALL game levels 1–12 (unified)
  - `victory-bg.png` — Victory/Results screen
- **Style**: Dark cyberpunk, 15% opacity + dark overlay (#0a0a0f at 70%)
- **Level 1 does NOT have a separate background** — all levels share `game-bg.png`

### 5.2 Scientist Avatars
- **Format**: PNG
- **Resolution**: **120×120px** (exact — cropped from `scientists-sheet.png` composite)
- **Style**: Portrait, consistent lighting, square crop with circular display
- **Naming**: `{scientist-lastname}.png` (schopenhauer.png)
- **Source**: `scientists-sheet.png` (1536×1024px, 2×5 grid, ~120px content per cell)
- **Fallback**: If image fails → empty fallback (emoji hidden via onError)

### 5.3 Logo
- **Format**: PNG (with transparency)
- **Content**: Shield/Hologram icon + "HYPERREALITY KEY" + "SPOT THE MANIPULATION"
- **Placement**: Header, OG Image

### 5.4 Tool Icons
- **Icons 1-8**: SVG components (inline, full color control)
- **Icons 9-12**: PNG images (echochamber, agendasetting, redherring, falseappeal)

---

## 6. UX PRINCIPLES

### 6.1 Golden Rules
1. **Every action has immediate feedback** — Click → Visual + (future) Sound
2. **Never leave the player wondering** — Tooltips explain everything
3. **One task at a time** — Never show more than necessary
4. **Mobile-first** — All layouts work at 360px width
5. **Dark by default** — Cyberpunk aesthetic, battery-friendly
6. **Accessible** — High contrast, readable fonts, keyboard navigation

### 6.2 Error States
- No loading state needed (all data is local)
- If a level post is missing → show error boundary with restart
- If an image fails → show emoji fallback

### 6.3 Empty States
- No score yet → hidden (Header hides score when 0)
- No highlights → "No manipulation patterns detected" message
- No tools available → all locked, explanation tooltip

---

## 7. RESPONSIVE DESIGN RULES

| Element | Desktop (1024+) | Tablet (768-1023) | Mobile (360-767) |
|---------|----------------|-------------------|------------------|
| Header height | h-24 | h-20 | h-20 |
| Logo width | 200px | 160px | 120px |
| Tool grid | 4 cols | 3 cols | 2 cols |
| Article card | max-w-md | max-w-sm | full width |
| Scientist grid | 5 cols | 4 cols | 3 cols |
| Font sizes | 100% | 90% | 80% |
| Container | centered | centered | full width |

---

## 8. COMPONENT SPECIFICATION (React)

### 8.1 Header (`Header.tsx`)

```tsx
interface HeaderProps {
  level?: number;
  levelName?: string;
  levelColor?: string;
  showLevel?: boolean;
  totalScore?: number;
}
```

**Layout**: `fixed top-0 z-50 w-full h-20 sm:h-24`
- Left: logo (width: 120px/160px/200px)
- Center: Level badge (if showLevel)
- Right: Score (if > 0)
- Background: `backdrop-blur-md bg-[#0a0a0f]/80`

### 8.2 GameScreen — State Machine

```
Phase states:
  'game'       → Initial: Article + Tools + Answer buttons
  'answered'   → After pick: Show feedback, explanation, Next Level button
  'transition' → Brief delay before next level
```

### 8.3 SplashScreen — States
- `loading` → Logo appears + bouncing dots animation (1.2s)
- `ready` → "OK, I'll check this post for manipulation 🔍" CTA appears
- `entering` → Fade out animation (0.5s)

**No scientist avatars on the splash screen** — scientists appear per-level in tooltips and the post-answer avatar card.

---

## 9. REFERENCE IMPLEMENTATIONS

| Aspect | Source | Notes |
|--------|--------|-------|
| CSS Variables Structure | Google Material Design 3 | Semantic token layering |
| Atomic Design | Brad Frost | Component hierarchy |
| Tailwind + CSS Hybrid | Vercel Geist Design System | Single source of truth |
| Neon/Cyberpunk | Various game UI references | High contrast, glowing accents |
| Game UI Patterns | Hades (Supergiant Games) | Juicy feedback, clean info density |
| Educational Game UX | PaGamO, Duolingo | Progression, streaks, immediate feedback |