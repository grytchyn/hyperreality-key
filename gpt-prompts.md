# Hyperreality Key — GPT Image Generation Prompts

## Как работает схема
1. Ты копируешь промпт → вставляешь в GPT-4o (или Midjourney/DALL-E 3)
2. Получаешь **одну картинку** с сеткой элементов
3. Пересылаешь мне
4. Я разрезаю на отдельные PNG и вставляю в код

---

## Prompt 1: Game Backgrounds (7 уровней)

**Цель:** 7 квадратов (по одному на уровень) в одном изображении. Каждый квадрат — тематический фон.

```
Design a 2x4 grid of 8 game background concepts for a media literacy detective game called "Hyperreality Key". Dark theme, neon accents. Each square is 400x400 pixels with a white 2px border between them.

The game is about detecting manipulation in online posts. Style: cyber-noir meets educational game, colorful but dark.

Row 1 (Levels 1-2):
[Level 1 - Bad Arguments] News studio with fake authority figures, floating "expert says" badges, red neon
[Level 2 - Feelings] Social media feed with exaggerated reaction emojis, orange amber alert signs, urgent headlines

Row 2 (Levels 3-4):
[Level 3 - Brain Check] Abstract brain with algorithm pathways, green neon, data streams
[Level 4 - Us vs Them] Two groups facing each other divided by a glowing red line, purple/pink neon, protest signs

Row 3 (Levels 5-6):
[Level 5 - Moral Buttons] Dashboard with 5 glowing buttons (Care, Fairness, Loyalty, Authority, Sanctity), amber/orange
[Level 6 - Hidden Myth] Ancient temple ruins overlaid with modern advertisements, cyan/teal neon, mythological symbols

Row 4 (Level 7 - Final):
[Level 7 - Hyperreality] Mirror maze with reflections showing different realities, multicolor neon, simulation glitch effects
[Bonus - Menu] Dark control room with monitors showing social media feeds, purple neon

Design style: cinematic dark, glowing outlines, neon gradients, grid layout with clear labels.
```

---

## Prompt 2: Tool Icons (7 штук)

**Цель:** один ряд из 7 иконок для фильтров-инструментов.

```
Design 7 game UI icons in a horizontal row for a media analysis game. Each icon is 120x120 pixels isolated on transparent background, arranged left to right with 20px gaps. Style: flat vector, glowing neon outlines, dark game UI aesthetic.

Icon 1 [Bad Arguments]: A shield with a crack and a warning exclamation mark, red/orange glow
Icon 2 [Feelings Check]: A brain with a flame on one side and a tear drop on the other, amber/yellow glow
Icon 3 [Brain Check]: A gear/cog inside a human head silhouette, green neon glow
Icon 4 [Us vs Them]: Two crossed swords dividing a circle, one side "WE" one side "THEY", magenta/pink glow
Icon 5 [Moral Buttons]: Five small connected squares arranged in a pentagon shape with different symbols, orange glow
Icon 6 [Hidden Myth]: An eye with a book/page inside the pupil, cyan/teal glow
Icon 7 [Fake Check]: A spiral/maze with a magnifying glass overlay, purple/lavender glow

Each icon: minimal, flat, 2px stroke, game-ready, rounded corners on square backgrounds.
```

---

## Prompt 3: UI Elements Kit

**Цель:** набор UI компонентов на одной картинке.

```
Design a game UI elements kit for a detective media literacy game. Dark theme, neon purple/teal accents. All elements on a single horizontal strip.

From left to right:
1. A progress bar (300x24px) with gradient fill from purple to teal, glowing edge
2. A score badge (pill shape, 120x36px) with a star icon and "210" text, purple fill
3. A question card (400x200px) with rounded corners, dark glass background, purple border glow, containing placeholder text lines
4. A chat bubble (280x80px) with avatar circle, username line, message text, left-aligned, dark bg with subtle border
5. A tool button grid (320x240px) showing 4 circular buttons in 2x2 grid, each with different neon glow colors

Style: glassmorphism, dark bg (#0a0a0f), neon outlines, rounded corners, game-ready UI.
Annotations: none — elements should be clean, separated by 30px gaps.
```

---

## Prompt 4: Character Avatars (Chat Friends)

**Цель:** 7 аватаров для друзей в чате.

```
Design 7 circular game avatar icons (120x120px each) arranged in a horizontal row on transparent background. Each avatar is a simple flat vector of a different person/character with a colored circle background.

Style: minimal flat vector, game UI style, solid color backgrounds with white/simple icons.

Avatar 1: Male with glasses, green circle bg
Avatar 2: Female with ponytail, amber circle bg
Avatar 3: Male with cap, purple circle bg
Avatar 4: Female with curly hair, pink circle bg  
Avatar 5: Male with beard, teal circle bg
Avatar 6: Female with short hair, orange circle bg
Avatar 7: Non-binary with hoodie, cyan circle bg

Each avatar: simple 2-color design, expressive, friendly, game-style.
```

---

## Prompt 5: Main Game Board Layout

**Цель:** одна картинка полного интерфейса для референса.

```
Design a complete game screen mockup for "Hyperreality Key" — a media manipulation detective game.

Layout (1920x1080, dark theme):
- Top bar: 🔑 "HYPERREALITY KEY" logo (purple/teal gradient text), level indicator "Level 2/7", score "★ 30"
- Center: A "browser post" card (like a news article) with URL bar, headline, body text with some words highlighted in different neon colors
- Below card: A 2x4 grid of round filter tool buttons with neon glows
- Bottom: A "Question" panel with multiple choice (A, B, C, D options) with purple accent on selected
- Background: Subtle glowing orbs in purple/teal

Style: dark game UI, neon accents, glass cards with borders, mobile-friendly but shown on desktop. The aesthetic should feel like "Papers Please meets Tron" — functional but futuristic.
```

---

## Как это работает

1. Ты выбираешь **один промпт** (я рекомендую начать с Prompt 1 или Prompt 3)
2. Копируешь текст → вставляешь в GPT-4o с генерацией картинки
3. Сохраняешь результат
4. Пересылаешь мне в чат
5. Я разрезаю и внедряю

**Рекомендую начать с Prompt 3 (UI Elements Kit)** — он даст сразу кучу готовых элементов для интерфейса.
