# Hyperreality Key — 10 GPT Image Generation Prompts

## Notes
- Each prompt generates **one image** with multiple elements in a grid or composite layout
- Send the result to me — I will slice it into individual assets and implement them in the game
- Prompts are optimized for **DALL-E 3 / GPT-4o Vision**. For Midjourney, prepend `--ar 16:9 --style raw --v 6.1`
- References used: Papers Please (diegetic UI), Her Story (search-as-interface), Orwell (OS desktop), Bad News (social feed), Obra Dinn (deduction ledger)

---

## Prompt 1: Level Backgrounds — 3×3 Grid (All 7 Levels + Menu + Victory)

**Goal:** Generate 9 game background panels in a single 3×3 image. Each panel represents a different level's visual theme. White 2px borders between panels, dark cyber-noir aesthetic, vibrant neon accents.

**Style:** Cinematic dark, glowing neon outlines only (no heavy fills), gradient backgrounds, game-ready. Like Blade Runner 2049 meets Papers Please functionalism.

**Grid Layout (3×3, 400×400px each):**

- **[Panel 1 — Level 1: Bad Arguments]** Red neon. A news studio set with fake diplomas on the wall. A figure at a podium labeled "EXPERT" in scare quotes. Glowing red warning borders.
- **[Panel 2 — Level 2: Feelings]** Amber/orange neon. An exploding social media feed with oversized reaction emojis, pulsing alarm icons, "BREAKING" banners with urgency styling.
- **[Panel 3 — Level 3: Brain Check]** Green neon. An abstract brain silhouette with flowing data streams and algorithm flowcharts. Two hemispheres labeled "SYSTEM 1" (fast, glowing) and "SYSTEM 2" (dim, effortful).

- **[Panel 4 — Level 4: Us vs Them]** Magenta/pink neon. A crowd silhouette divided by a glowing red fault line. One side labeled "US" (warm light), the other "THEM" (cold shadow). A binary framing.
- **[Panel 5 — Level 5: Moral Buttons]** Warm orange neon. A dashboard with 5 glowing circular buttons arranged in a pentagon: heart (Care), scales (Fairness), shield (Loyalty), crown (Authority), star (Sanctity).
- **[Panel 6 — Level 6: Hidden Myth]** Cyan/teal neon. Ancient temple ruins overlaid with modern digital billboards. Glowing words "FREEDOM" and "SECURITY" float as if they are natural, inevitable concepts.

- **[Panel 7 — Level 7: Hyperreality]** Multicolor neon. An infinite mirror maze where each reflection shows a different distorted version of reality. "SIMULATION" text glitching like a corrupted file.
- **[Panel 8 — Victory]** Gold neon. A glowing key floating above a stone pedestal. Sparkle particles. Dark background with subtle golden gradient rings.
- **[Panel 9 — Splash/Menu]** Purple neon. A dark control room with multiple monitors showing social media feeds. An empty chair facing the screens, ready for the player.

---

## Prompt 2: Tool Icons — 7 Isolated Game UI Icons

**Goal:** 7 game tool icons in a horizontal row, each 120×120px on transparent background, 30px gaps. Dark game UI style, neon glow outlines, 2px stroke weight, flat vector.

**Technical:** DALL-E handles transparent backgrounds. If it adds a dark bg, I can remove it. Style should feel like flat vector illustration with neon glow, not photographic.

1. **[Bad Words]** Shield icon with a crack running through it and "!" exclamation mark inside. Red/rose neon glow. Square background shape.
2. **[Feelings]** Performance mask — one half smiling, one half angry/frowning. Amber/gold neon glow. Circular background shape.
3. **[Brain Check]** Brain silhouette with a gear/cog embedded inside. Emerald/green neon glow. Hexagonal background shape.
4. **[Us vs Them]** Two crossed swords dividing a circle down the middle. Fuchsia/pink neon glow. Diamond background shape.
5. **[Moral Buttons]** Pentagon of 5 small connected circles arranged in a ring. Orange/warm neon glow. Pentagon background shape.
6. **[Hidden Myth]** Open eye with an open book inside the pupil. Cyan/teal neon glow. Square background shape.
7. **[Fake Check]** Spiral/maze symbol with a magnifying glass overlaid at an angle. Lavender/purple neon glow. Circular background shape.

Each icon: minimal, recognizable at small sizes, game-ready. Dark transparent background behind each icon, not full canvas.

---

## Prompt 3: UI Component Sheet — 3×3 Grid of Game Interface Elements

**Goal:** Generate 9 distinct UI components on a single dark canvas (#0a0a0f), arranged in a clean 3×3 grid with 40px gaps and subtle white borders between cells. This is the most useful prompt for implementation.

**Style:** Glassmorphism, dark background, neon purple and teal accent borders, 12px border-radius on cards, game UI aesthetic. Each component is self-contained — no overlap between cells.

**Top Row:**
1. **[Browser Post Card]** 500×280px. Dark glass background. URL bar with 🔒 lock icon and "familywatch.com". Headline in bold white. 3 lines of body text with 2 words highlighted (green and purple bg). Rounded corners, subtle purple border glow. Engagement bar at bottom: 💬 12 🔄 47 ❤️ 120.
2. **[Filter Tool Buttons]** 500×120px. Four circular neon buttons in a row, each 60px diameter. Colors: purple (#8b5cf6), green (#22c55e), amber (#f59e0b), pink (#d946ef). Each has a small white label below.
3. **[Progress Bar]** 500×60px. Horizontal bar. Gradient fill from purple to teal. "Level 3 / 7" label centered. Glowing edge. White percentage markers.

**Middle Row:**
4. **[Question Card]** 500×200px. Header "🎯 QUESTION" in small purple text. Question text in white bold. Four choice buttons (A, B, C, D) with radio-style circles. First option "A" selected with purple fill + white text, others gray.
5. **[Chat Bubble Panel]** 500×160px. Phone-style chat. Left bubble (friend message) with avatar circle, dark gray bg, bottom-left corner flat. Right bubble (player typing) with purple bg, bottom-right corner flat. Three animated dots.
6. **[Score Badge]** 200×60px. Pill shape. Star icon + "★ 210" text. Gradient purple fill. White text. Subtle shadow glow.

**Bottom Row:**
7. **[Feedback Overlay]** 400×300px. Central modal / card. "🎉 Correct!" or "🤔 Not quite" heading. 2-line explanation text. "Next" button at bottom. Green border for correct, red for wrong.
8. **[Friend Preview Card]** 500×100px. Horizontal card. Small circular avatar on left. Friend name in bold. Message preview line. Article title in smaller text. Tiny thumbnail placeholder on right.
9. **[Level Transition Card]** 400×400px. Centered card. "LEVEL 3 COMPLETE" badge. Icon transition (e.g. ⚠️ → 🎭). Score display "30 / 30". "Start Level 4 →" button with gradient glow.

All components: no text labels or annotations outside the components themselves.

---

## Prompt 4: Chat Avatars — 7 Character Face Icons

**Goal:** 7 circular avatar icons (120×120px each) in a horizontal row. Each is a simple flat vector character face on a solid colored circular background. Transparent overall canvas.

**Style:** Minimal flat vector, friendly game art style, clean lines, no photographic detail. Each avatar should use 2 colors maximum (background + icon silhouette). Expressive but simple.

1. **Green (#22c55e)** — Young male, round glasses, short hair, smiling expression
2. **Amber (#f59e0b)** — Female with ponytail, big eyes, friendly open smile
3. **Purple (#8b5cf6)** — Male with backward baseball cap, slight stubble, cool/confident expression
4. **Pink (#d946ef)** — Female with curly voluminous hair, laughing expression
5. **Teal (#06b6d4)** — Male with full beard and reading glasses, thoughtful expression
6. **Orange (#f97316)** — Female with short bob haircut, serious but kind expression
7. **Cyan (#22d3ee)** — Person with hoodie pulled up, only eyes visible, mysterious/unknown

---

## Prompt 5: Browser Post Cards — 2×2 Grid of News Article Layouts

**Goal:** 4 browser post cards in a 2×2 grid. Each card is 500×300px, dark glass style with neon border glow. Social media feed aesthetic (Facebook/Reddit/X hybrid).

**Style:** Dark glass cards, 2px neon border in category color, 12px rounded corners. Each card has: source badge, headline, 3-4 lines of article text, engagement bar at bottom. Words may be highlighted with colored backgrounds.

- **[Politics — Red glow]** "DAILY NEWS" source badge (red). Headline: "Study: 80% of Housing Crisis Caused by Immigration". 4 lines of article text. 2 words highlighted in red. Engagement: 💬 12 🔄 47 ❤️ 120.
- **[Economy — Amber glow]** "BUSINESS FEED" source badge (amber). Headline: "45,000 Layoffs at Big Tech — Stocks Rise 8%". 3 lines of text mentioning Amazon/Google. 2 words highlighted in amber.
- **[Science — Green glow]** "SCIENCE DAILY" source badge (green). Headline: "Earth Is Still Round". Straightforward text. No highlighted words. Green verified checkmark badge.
- **[Society — Orange glow]** "FAMILY WATCH" source badge (orange). Headline: "Protect Our Children from Online Dangers". Text with emotionally loaded language. 4 words highlighted in orange.

---

## Prompt 6: Answer Choice Buttons — 12 Game UI Buttons

**Goal:** 12 circular game buttons (80×80px) in a 3×4 grid. Each button shows a different symbol for multiple choice answers. Transparent dark background.

**Style:** Flat vector, 2px glowing neon borders, dark fill (#13131a), game UI aesthetic.

- **Row 1 (Purple theme, #8b5cf6):** Letter icons: A / B / C / D
- **Row 2 (Answer type colors):** Green checkmark ✓ / Red X ✗ / Yellow question mark ? / Blue lightbulb 💡
- **Row 3 (Action icons):** Arrow right → / Arrow left ← / House / Refresh ⟳

Each button: centered icon in matching neon color, subtle shadow glow, 2px stroke.

---

## Prompt 7: Square Icon Set — Category + Status Icons

**Goal:** 12 square game icons (80×80px) in a 3×4 grid. Flat vector style with subtle neon glow on transparent dark background.

**Style:** Clean 2px stroke, glowing outlines, game-ready. Each icon isolated in its own square.

- **Row 1 (Category — colored glows):** House/buildings 🏘️ (red), Chart down 📉 (amber), Microscope 🔬 (green), Family 👨‍👩‍👧 (orange)
- **Row 2 (Status — colored glows):** Magnifying glass 🔍 (purple), Verified check ✅ (green), Warning ⚠️ (red), Lock 🔒 (gray)
- **Row 3 (Action — colored glows):** Arrow up ⬆ (blue), Speech bubble 💬 (teal), Heart ❤️ (pink), Refresh ↻ (cyan)

---

## Prompt 8: Level Transition Cards — 2×2 Grid

**Goal:** 4 game cards (400×300px) in a 2×2 grid. Each is a "Level Complete" transition screen. Dark glass background, glowing gradient border.

**Style:** Game UI, dark neon, celebratory but not childish. Each card has centered content: level icon transitioning to next icon, score display, action button.

- **[Top-left — Level 1→2 Complete]** Red→Amber gradient border. Bad Arguments icon (⚠️) transitioning to Feelings icon (🎭). "LEVEL 1 COMPLETE" badge. "Score: 30/30". Amber "Start Level 2 →" button.
- **[Top-right — Level 3→4 Complete]** Green→Pink gradient border. Brain icon (🧠) → Swords (⚔️). "LEVEL 3 COMPLETE". Pink start button.
- **[Bottom-left — Level 5→6 Complete]** Orange→Cyan gradient border. Shield (🛡️) → Map (🗺️). "LEVEL 5 COMPLETE". Cyan start button.
- **[Bottom-right — Level 6→7 Complete]** Cyan→Purple gradient border. Map (🗺️) → Spiral (🌀). "LEVEL 6 COMPLETE". Purple start button.

All cards: dark bg, neon gradient border, centered content, game UI style.

---

## Prompt 9: Victory Screen — Full Game Mockup

**Goal:** Single game screen mockup (900×700px) for the victory screen. Dark theme, gold and purple neon accents. Celebratory but tasteful.

**Layout (center-weighted):**
- **Top center:** Glowing golden key icon (🔑) in a spinning gradient ring (conic gradient: purple → gold → cyan)
- **Below key:** "HYPERREALITY KEY" title in gradient text (purple → gold → cyan). Small "UNLOCKED" badge beneath.
- **Mid area split left/right:** Left — Score circle (120px diameter, golden border, number "150" and "/210"). Right — Rank badge "DECEPTION DETECTOR" in purple/amber gradient.
- **Below mid:** Stats card (dark glass) with 4 rows: Posts analyzed: 21 / Correct: 15/21 / Skills trained: 7 / Accuracy: 71%
- **Bottom section:** Purple gradient button "CONNECT WALLET TO MINT KEY". Small footnote text.
- **Bottom-right corner:** Small NFT preview card showing "Hyperreality Key #001" with rank and score metadata.

**Style:** Dark glass (#0a0a0f), gold and purple neon accents. Victory screen — should feel earned, not overwhelming.

---

## Prompt 10: Mobile Phone Chat — Splash Screen Mockup

**Goal:** Single mobile phone frame (375×812px, iPhone-style) showing a chat conversation. This is the splash screen of the game. Dark theme.

**Phone frame structure (top to bottom):**
1. **Notch area:** Speaker grille and camera dot at top. Status bar: "9:41" time left, battery icon and signal bars right.
2. **Chat header:** Back arrow ← on left. Circular avatar (green #22c55e, male with round glasses). "Alex" name in bold. "online" status in green small text.
3. **Chat body (main scrollable area):**
   - Left bubble: "Bro have you seen this? 👀" — dark gray background (#1a1a2a), rounded corners with bottom-left flat (received message style)
   - Link preview card below: title in white, source "Daily News" in gray, purple border
   - Right bubble: Three animated dots "..." in purple gradient (#8b5cf6), bottom-right flat (typing indicator)
   - Below dots: "🔍 Open & Analyze" button, full width, purple gradient
4. **Input bar (bottom):** Gray rounded field with "Type a message..." text. Purple send button on right.

**Background behind phone:** Very dark (#0a0a0f) with a subtle purple glowing orb behind the phone.

**Style:** Clean modern dark UI, game-styled but realistic phone feel. The phone frame should have rounded corners and a subtle shadow.

---

## Usage Flow

1. Pick one prompt (I suggest starting with **Prompt 3 — UI Component Sheet** for maximum implementation value)
2. Copy the full prompt text
3. Paste into GPT-4o with image generation, DALL-E 3, or Midjourney
4. Download/save the result
5. Send it back to me in this chat
6. I slice the image into individual assets and implement them in the game code

**Priority suggestion:** Prompt 3 → Prompt 1 → Prompt 10 → Prompt 2 → Prompt 4
