# GPT — Generate ONE Sheet with All 10 Scientist Avatars

## FORMAT SPEC

- **Single image file** containing ALL 10 character avatars as a grid layout
- **Canvas:** 2400×1500px (landscape, 8:5 aspect ratio)
- **Background:** FULLY TRANSPARENT (PNG with alpha channel — absolutely NO background color, NO gradient, NO white fill behind the icons)
- **Grid layout:** 5 columns × 2 rows
- **Each icon:** Circular, 280×280px per slot, with 20px padding between icons and 40px margin on canvas edges
- **Resolution:** 300 DPI recommended for crisp downscaling
- **File delivery: ONE single PNG file**, named `scientists-sheet.png`

---

## VISUAL LAYOUT

```
┌──────────────────────────────────────────────────────────────┐
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐          │
│  │   1  │  │   2  │  │   3  │  │   4  │  │   5  │          │
│  │Schope│  │Cialdi│  │Kahnem│  │Tajfel│  │Haidt │          │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘          │
│                                                              │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐          │
│  │   6  │  │   7  │  │   8  │  │   9  │  │ 10   │          │
│  │Barthe│  │Baudri│  │Foucau│  │Sunste│  │McComb│          │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘          │
└──────────────────────────────────────────────────────────────┘
```

---

## MASTER STYLE FRAME (applies to ALL icons equally)

**Art Direction:** Flat vector character portraits in circular framing. Inspired by:
- "Disco Elysium" portrait aesthetic — painterly flat shading, warm-rim highlights
- "Into the Breach" clean iconography — silhouette-first, readable at small sizes
- Modern mobile game avatar design (AFK Arena, Genshin character portraits simplified)

**Visual DNA — applies to each of the 10 icons:**
- **Circular crop:** Each character fills a perfect circle. Head and shoulders only. Top of head has ~5px breathing room to circle edge. Shoulders fill lower third of circle.
- **3-tone shading system per icon:** Base tone → Shadow tone (30% darker, pushed to lower-right side of face) → Rim light (warm white #fff5e6 at 10-15% opacity, hitting upper-left edge)
- **Linework:** Selective — only key facial features + silhouette outline. 1.5px line weight. Color: warm gray #8a7f75, NOT black. Lines taper slightly at endpoints.
- **Color system per character:** Each icon uses EXACTLY ONE dominant color for its background glow/aura ring, plus neutral grays for clothing and natural skin tones. The dominant color appears as:
  1. A subtle **outer ring glow** (6px wide, 25% opacity, blurred edge) around the circle
  2. An **eye catchlight** tint
  3. A **shoulder/clothing accent** (tie, collar detail, or lapel stripe)
- **Skin tones:** Natural, slightly desaturated Caucasian skin for all (all 10 figures are European academics). Base `#e8ddd0`, shadow `#c4b49a`, warm highlight `#f5ede4`.
- **No gradients on flat areas** — the 3-tone shading should look like flat vector, not airbrush
- **Subtle grain/noise texture** overlaying the entire sheet (2% opacity) for a premium feel
- **No text labels** — the icons must work on their own without names

---

## PER-ICON SPECIFICATIONS

### Icon 1 — Arthur Schopenhauer (Levels 1 & 10)
| Property | Value |
|----------|-------|
| Dominant color | Deep red `#ef4444` |
| Shadow color | `#991b1b` |
| Hair | Receding gray-white widow's peak, wild/brushed-back, exploding at sides — unkempt |
| Eyebrows | **Extremely thick**, expressive — his most defining feature |
| Eyes | Heavy-lidded with deep under-eye bags, skeptical squint |
| Glasses | Round wire-rimmed spectacles with subtle lens glare |
| Clothing | High-collared dark 19th-century frock coat, white shirt collar slightly askew |
| Expression | Deeply skeptical, borderline annoyed — tired of bad arguments |
| Light angle | Underlighting from below (lamp-on-desk effect), shadows in eye sockets. Warm rim from upper-left |
| Head angle | Three-quarter turn, head tilted 3° forward, looking up through glasses |

### Icon 2 — Robert Cialdini (Levels 2 & 12)
| Property | Value |
|----------|-------|
| Dominant color | Amber/gold `#f59e0b` |
| Shadow color | `#b45309` |
| Hair | Mid-50s, receding hairline, neatly side-combed salt-and-pepper — distinguished |
| Eyes | Warm, crinkly with crow's feet, catchlight visible |
| Glasses | Thin reading glasses pushed UP onto forehead (NOT on eyes) |
| Clothing | Dark tweed sport coat, light blue Oxford shirt, top button undone, no tie |
| Expression | Warm, knowing half-smile — the magician showing the trick |
| Light angle | Three-quarter key light from upper-right, soft, warm. Two-point catchlight in eyes |
| Head angle | Slight lean forward, engagement posture |

### Icon 3 — Daniel Kahneman (Level 3)
| Property | Value |
|----------|-------|
| Dominant color | Emerald green `#22c55e` |
| Shadow color | `#166534` |
| Hair | Completely bald on top, monk-like horseshoe of fine white-gray hair on sides |
| Glasses | **Extremely large, thick round tortoiseshell frames** — dominates ~40% of his face |
| Eyes | Warm, slightly tired, gentle |
| Clothing | Light beige cardigan over white button-up shirt, no tie |
| Expression | Warm, weary benevolence — at peace with human irrationality |
| Light angle | Soft, diffuse overcast — no harsh shadows. Library lighting. Rim from above-left |
| Head angle | Direct-facing, slight head tilt — curious, not demanding |

### Icon 4 — Henri Tajfel (Level 4)
| Property | Value |
|----------|-------|
| Dominant color | Magenta `#d946ef` |
| Shadow color | `#86198f` |
| Hair | Full head of immaculately side-parted silver-gray hair, slightly slicked |
| Eyes | Sharp, narrow-set dark eyes |
| Glasses | Thin silver wire-rimmed, rectangular lenses |
| Clothing | Dark charcoal suit jacket, white dress shirt, narrow dark tie |
| Expression | Intense, analytical focus — not angry, studying you |
| Light angle | **Dramatic chiaroscuro** — Rembrandt lighting from one side, half face in shadow |
| Head angle | Three-quarter profile, chin slightly lifted — looking down at group dynamics |

### Icon 5 — Jonathan Haidt (Level 5)
| Property | Value |
|----------|-------|
| Dominant color | Vibrant orange `#f97316` |
| Shadow color | `#9a3412` |
| Hair | Early 50s, short dark brown with distinguished gray at temples, slightly messy |
| Facial hair | Clean-shaven with subtle 5-o'clock shadow suggestion |
| Clothing | Modern casual blazer over simple white t-shirt |
| Expression | Engaged, slightly challenging but warm — mid-thought, mid-objection |
| Light angle | Natural window lighting from side, warm. Edge light from behind separating from background |
| Head angle | Slightly asymmetric, one shoulder higher — mid-gesture pose |

### Icon 6 — Roland Barthes (Level 6)
| Property | Value |
|----------|-------|
| Dominant color | Cyan `#06b6d4` |
| Shadow color | `#155e75` |
| Hair | Dark, deliberately disheveled side-part, slightly too long, falling across forehead |
| Face | Thin, angular with high cheekbones. Dark circles under hooded eyes |
| Clothing | Black turtleneck — canonical French intellectual uniform. NO glasses |
| Expression | Small, knowing half-smile — quietly amused at hidden meanings |
| Light angle | Low-key, single hard key light from above — cinematic contrast, dramatic cheek shadows |
| Head angle | Direct eye contact, head tilted 5° — "I see what you missed" |

### Icon 7 — Jean Baudrillard (Level 7)
| Property | Value |
|----------|-------|
| Dominant color | Soft purple `#a78bfa` |
| Shadow color | `#5b21b6` |
| Hair | Late 70s, receding gray-white hair brushed straight back, high forehead |
| Eyebrows | **Extremely distinctive thick, dark eyebrows** contrasting with white hair — signature feature |
| Clothing | Dark unstructured jacket over simple collared shirt, no tie |
| Expression | Ironic detachment — ghost of a smirk, eyes narrowed — "is this even real?" |
| Light angle | Cool, desaturated — subtle blue tint. Hyperreal temperature. Soft chromatic aberration feel at edges |
| Head angle | Slight head turn, looking at viewer from angle — not quite meeting eyes |

### Icon 8 — Michel Foucault (Level 8)
| Property | Value |
|----------|-------|
| Dominant color | Teal `#14b8a6` |
| Shadow color | `#115e59` |
| Hair | **Completely bald — smooth shaved head** — his absolute iconic signature |
| Eyes | Extremely intense, dark-set, heavy brow ridge — staring through you |
| Nose | Prominent, wide |
| Clothing | Simple black turtleneck — minimal, stark, confrontational. No jewelry |
| Expression | Challenging, confrontational — "who decided that? who benefits?" |
| Light angle | High-contrast, front-flat with dramatic edge rim separating from background. Noir-ish |
| Head angle | Direct, square to viewer — no angle, no tilt. Confrontational symmetry |

### Icon 9 — Cass Sunstein (Level 9)
| Property | Value |
|----------|-------|
| Dominant color | Pink `#ec4899` |
| Shadow color | `#9d174d` |
| Hair | Early 60s, full brown hair with pronounced graying at temples, slight wave |
| Glasses | Rectangular wire-rimmed — professional, academic |
| Clothing | Well-tailored dark navy suit jacket, light blue shirt, subtly patterned tie |
| Expression | Thoughtfully analytical, eyebrows slightly raised — mid-argument |
| Light angle | Warm, even lighting with good fill — well-lit interview. Professional but warm |
| Head angle | Conversational — body ¾ to viewer, head turned to face. Gesturing energy |

### Icon 10 — Maxwell McCombs & Donald Shaw (Level 11)
| Property | Value |
|----------|-------|
| Dominant color | Sky blue `#0ea5e9` (SAME for both) |
| Shadow color | `#0369a1` |
| **McCombs (left)** | Older gentleman, late 80s, silver-white hair neatly combed back. Thin gold wire-rim glasses. Navy academic blazer with striped tie. Warm, avuncular expression — the grandfather who discovered something |
| **Shaw (right)** | Middle-aged, darker brown hair with gray streaks. Thin silver wire-rim glasses. Charcoal suit with solid red tie. Thoughtful, earnest expression |
| Composition | **TWO figures sharing ONE circular icon** — McCombs slightly forward (senior), Shaw slightly back (junior). Both in business attire, same blue ring glow |
| Light angle | Even, journalistic — like PBS interview set |
| Head angle | Both looking at viewer, slight ¾ turn INWARD toward each other |

---

## CRITICAL DESIGN CONSTRAINTS (MUST FOLLOW)

1. **ABSOLUTELY NO background color** on the canvas — it must be transparent PNG. Only the circular icons with their outer ring glows appear on the transparent field.
2. **All 10 icons must be in EXACTLY one image** — do NOT send 10 separate files
3. **Grid alignment** must be precise — use the 2400×1500 canvas with the 5×2 grid spec above
4. **Circular crop must be PERFECT** — no oval, no clipping. Exact circles.
5. **Line color** must be warm gray `#8a7f75`, never black
6. **No text labels** anywhere on the image
7. **Facial resemblance** to the real scientists is important — recognizable features (Schopenhauer's eyebrows, Kahneman's glasses, Foucault's bald head) must be accurate
8. **Consistency across icons** — same line thickness, same shading system, same lighting quality across all 10

---

## DELIVERY

**One file:** `scientists-sheet.png`
**Canvas:** 2400×1500px (8:5)
**Background:** FULLY TRANSPARENT (alpha layer preserved)
**Format:** PNG-24 with alpha
**Content:** 10 circular scientist icons in 5×2 grid
**Resolution:** 300 DPI