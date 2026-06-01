# Hyperreality Key — Academic Level Mapping Analysis

## 1. Current Coverage Assessment

### What's Well Covered (9 unique theorists mapped to 12 tools):
| Theorist | Theory | Tools Covered | Status |
|----------|--------|---------------|--------|
| **Cialdini** | 6 Principles of Influence | bad-arguments (Authority), feelings-check (Scarcity, Liking), false-appeal (Authority, Consensus) | Covers 3 tools, good fit |
| **Kahneman & Tversky** | Cognitive Biases / System 1 | brain-check | 1 clean tool |
| **Tajfel & Turner** | Social Identity Theory | us-vs-them | 1 clean tool |
| **Haidt** | Moral Foundations Theory | value-check | 1 clean tool |
| **Barthes** | Mythologies (Semiotics) | hidden-story | 1 clean tool |
| **Baudrillard** | Simulacra and Simulation | fake-check | 1 clean tool |
| **Schopenhauer** | Eristic Dialectic | bad-arguments (partial), red-herring | 2 partial tools |
| **McCombs & Shaw** | Agenda-Setting Theory | agenda-setting | 1 clean tool |
| **Sunstein** | Echo Chambers / Group Polarization | echo-chamber | 1 clean tool |
| **Foucault** | Power/Knowledge | source-check (partial) | Partial coverage |

### What's Missing or Underdeveloped:
1. **Cialdini's Reciprocity principle** — not explicitly covered by any tool
2. **Cialdini's Consistency/Commitment principle** — not explicitly covered
3. **Noelle-Neumann (Spiral of Silence)** — media theory gap
4. **Lakoff (Framing Theory)** — partially covered by agenda-setting, but deserves its own focus
5. **van Dijk (Critical Discourse Analysis)** — covers subtle text-level manipulation
6. **Festinger (Cognitive Dissonance)** — a core psychological mechanism behind resistance to facts

### Current Mapping Problem:
The current 12-level structure has some tools borrowing from MULTIPLE theorists:
- `bad-arguments` = Schopenhauer's eristic dialectic + Cialdini's Authority principle
- `false-appeal` = Cialdini's Authority + Appeal to Tradition/Novelty
- `feelings-check` = Cialdini's Scarcity + Haidt's Care foundation

## 2. Recommended Level Count: 12

**Keep 12 levels.** Rationale:
- The codebase already has 12 tools with full highlight rules, real articles, and precomputed data
- 12 levels provide enough granularity to cover the 3 academic domains thoroughly
- 3 posts × 12 levels = 36 total posts (manageable, educational pacing)
- 12 theorists fit a clean 3-domain structure (4 per domain)

## 3. Proposed Optimal 12-Level Mapping (One Primary Scientist Per Level)

### Domain I: Philosophy & Logic (Levels 1–4)

**Level 1 — Bad Arguments → ARTHUR SCHOPENHAUER**
*Why:* Schopenhauer's *Eristic Dialectic* (38 stratagems) is the foundational text on logical fallacies. Overgeneralization ("always"/"never"), straw man, slippery slope, and absolute words — all eristic tricks designed to win arguments, not find truth.
*Tool overlap:* This level stands alone. Schopenhauer returns for Level 10 (red-herring).

**Level 2 — Feelings Check → ROBERT CIALDINI**
*Why:* Cialdini's Scarcity principle (limited time/availability → urgency) and Liking principle (emotional bonding → trust) explain why fear, outrage, and sympathy bypass critical thinking. These are not logical errors — they are emotional manipulation levers.
*Tool overlap:* Cialdini returns for Level 12 (false-appeal, covering Authority + Consensus).

**Level 3 — Brain Check → DANIEL KAHNEMAN**
*Why:* Kahneman's System 1/System 2 model, anchoring bias, bandwagon effect, and availability heuristic perfectly explain how cognitive shortcuts are exploited. "Most people believe..." = bandwagon. "Record numbers..." = anchoring anchor.
*Tool overlap:* Clean singleton. Tversky is co-theorist (mentioned alongside Kahneman).

**Level 4 — Us vs Them → HENRI TAJFEL**
*Why:* Tajfel's Social Identity Theory (minimal group paradigm) proves that even random group assignment creates in-group favoritism and out-group hostility. "Us vs Them" is not just political — it's hardwired.
*Tool overlap:* Clean singleton.

### Domain II: Social Psychology & Morality (Levels 5–8)

**Level 5 — Value Check → JONATHAN HAIDT**
*Why:* Haidt's Moral Foundations Theory (Care, Fairness, Loyalty, Authority, Sanctity, Liberty) provides the most complete framework for understanding how moral language manipulates. Every emotionally charged post presses exactly one foundation.
*Tool overlap:* Clean singleton. Haidt's Care foundation also appears in feelings-check content but his theory is standalone here.

**Level 6 — Hidden Myth → ROLAND BARTHES**
*Why:* Barthes' *Mythologies* deconstructs how "common sense" narratives (freedom vs security, crisis, tradition) are actually ideological constructs dressed as natural. The "hidden story" tool reveals the myth beneath the message.
*Tool overlap:* Clean singleton.

**Level 7 — Fake Check → JEAN BAUDRILLARD**
*Why:* Baudrillard's *Simulacra and Simulation* — the 4 orders of simulacra, hyperreality — is the game's namesake. This level asks: "Is this real, distorted, or pure simulation with no original referent?"
*Tool overlap:* Clean singleton. Capstone level of the game's philosophy.

**Level 8 — Source Check → MICHEL FOUCAULT**
*Why:* Foucault's Power/Knowledge thesis: institutions decide what counts as "legitimate" knowledge. "Experts say," "studies show," "according to authorities" — these are not neutral descriptors but exercises of discursive power.
*Tool overlap:* Clean singleton. The closest existing mapping was "partial" — now it gets a full level.

### Domain III: Media Theory & Information Ecosystems (Levels 9–12)

**Level 9 — Echo Chamber → CASS SUNSTEIN**
*Why:* Sunstein's work on echo chambers and group polarization explains how information loops create extreme beliefs. "Multiple sources confirm" often means one source repeated. Closed-loop reasoning.
*Tool overlap:* Clean singleton.

**Level 10 — Red Herring → ARTHUR SCHOPENHAUER (return)**
*Why:* Schopenhauer's stratagems #7 (diversion) and #14 (declaring victory despite defeat). "But what about X?" and "Meanwhile..." are eristic distraction techniques. Schopenhauer is the natural home for both bad-arguments AND red-herring.
*Tool overlap:* Shared with Level 1. Same theorist, different subset of his stratagems.

**Level 11 — Agenda Setting → MAXWELL MCCOMBS & DONALD SHAW**
*Why:* Their 1972 Chapel Hill study proved media doesn't tell you WHAT to think — it tells you WHAT TO THINK ABOUT. "The real issue," "what matters," "the only question" — agenda-setting in action.
*Tool overlap:* Clean singleton (two co-theorists treated as one).

**Level 12 — False Appeal → ROBERT CIALDINI (return)**
*Why:* Cialdini's Authority principle (titles, uniforms, credentials) and Social Proof ("everyone agrees") explain why fake experts and consensus appeals work. "Leading experts," "for centuries," "common sense" — all Cialdini.
*Tool overlap:* Shared with Level 2. Same theorist, different principle subset.

### Summary Table

| Level | Tool | Primary Scientist | Theory | Domain |
|-------|------|-------------------|--------|--------|
| 1 | bad-arguments | **Arthur Schopenhauer** | Eristic Dialectic | Philosophy |
| 2 | feelings-check | **Robert Cialdini** | Scarcity + Liking | Social Psych |
| 3 | brain-check | **Daniel Kahneman** | Cognitive Biases | Psychology |
| 4 | us-vs-them | **Henri Tajfel** | Social Identity Theory | Social Psych |
| 5 | value-check | **Jonathan Haidt** | Moral Foundations Theory | Social Psych |
| 6 | hidden-story | **Roland Barthes** | Mythologies | Philosophy |
| 7 | fake-check | **Jean Baudrillard** | Simulacra and Simulation | Philosophy |
| 8 | source-check | **Michel Foucault** | Power/Knowledge | Philosophy |
| 9 | echo-chamber | **Cass Sunstein** | Echo Chambers | Media Theory |
| 10 | red-herring | **Arthur Schopenhauer** | Eristic (Diversion) | Philosophy |
| 11 | agenda-setting | **McCombs & Shaw** | Agenda-Setting Theory | Media Theory |
| 12 | false-appeal | **Robert Cialdini** | Authority + Consensus | Social Psych |

**Unique scientists:** 10 (Schopenhauer ×2, Cialdini ×2, others ×1)
**Domains covered:** 3 (Philosophy/Semiotics, Psychology/Cognitive, Social Psych/Morality, Media Theory)

## 4. Potential Expansion Opportunities

If expanding beyond 12 levels, consider:

| New Level | Proposed Tool | Scientist | Theory | Why |
|-----------|--------------|-----------|--------|-----|
| 13 | framing-check | **George Lakoff** | Framing Theory / Moral Politics | Frames define reality before facts enter |
| 14 | spiral-check | **Elisabeth Noelle-Neumann** | Spiral of Silence | Why people self-censor when they think they're in the minority |
| 15 | dissonance-check | **Leon Festinger** | Cognitive Dissonance | Why people double down when faced with contradictory evidence |
| 16 | discourse-check | **Teun van Dijk** | Critical Discourse Analysis | Subtle linguistic manipulation (passive voice, nominalization) |

**Recommendation:** Keep 12 levels for now. The game is already built with 12 tools and real articles. The 3 proposed new tools (Framing, Spiral of Silence, Cognitive Dissonance) are strong candidates for a v2 expansion.

## 5. Avatar Image Prompts (One Per Scientist)

Below are detailed GPT image prompts for each scientist's avatar. Each is designed as a 120×120px circular portrait icon suitable for game chat UI, consistent with the existing game UI style.

---

### 1. Arthur Schopenhauer (Levels 1 & 10)

**Style:** Minimal flat vector, circular avatar, 120×120px, transparent background. Game UI art style — friendly but intellectually intense, clean lines, 2 colors max.

**Prompt:**
```
Flat vector game avatar icon, circular 120×120px, transparent background. Arthur Schopenhauer as a minimalist character portrait. Older man with wild, receding gray-white hair brushed back, thick furrowed eyebrows, intense skeptical eyes with heavy eyelids. Round wire-rimmed glasses. High-collared dark coat visible above shoulders. Expression: deeply skeptical, slightly annoyed — the face of someone who has heard every bad argument and is tired of it. Dominant color: deep red (#ef4444) circular background. Linework: clean 2px strokes, flat shading, no gradients. Game UI icon style.
```

---

### 2. Robert Cialdini (Levels 2 & 12)

**Style:** Minimal flat vector, circular avatar, 120×120px, transparent background. Persuasive but friendly appearance.

**Prompt:**
```
Flat vector game avatar icon, circular 120×120px, transparent background. Robert Cialdini as a minimalist character portrait. Middle-aged man, receding hairline with neatly combed brown-gray hair, warm but knowing smile. Wearing a collared shirt with top button undone and a tweed-style jacket. Round reading glasses pushed up on forehead. Expression: warm and persuasive, like a professor who knows exactly how influence works and is about to explain it to you. Dominant color: amber (#f59e0b) circular background. Linework: clean 2px strokes, flat shading. Game UI icon style.
```

---

### 3. Daniel Kahneman (Level 3)

**Style:** Minimal flat vector, circular avatar, 120×120px, transparent background. Intellectual, warm, slightly weary.

**Prompt:**
```
Flat vector game avatar icon, circular 120×120px, transparent background. Daniel Kahneman as a minimalist character portrait. Elderly man, bald on top with white-gray hair on sides, large round thick-rimmed glasses that dominate his face. Warm but slightly tired expression — the look of someone who knows how irrational humans are and has accepted it. Light-colored button-up shirt. Small gentle smile. Dominant color: emerald green (#22c55e) circular background. Linework: clean 2px strokes, flat shading. Game UI icon style.
```

---

### 4. Henri Tajfel (Level 4)

**Style:** Minimal flat vector, circular avatar, 120×120px, transparent background. Sharp, analytical, European intellectual.

**Prompt:**
```
Flat vector game avatar icon, circular 120×120px, transparent background. Henri Tajfel as a minimalist character portrait. Elderly man with a full head of neatly parted silver-gray hair. Sharp, intelligent eyes behind thin wire-rimmed glasses. Wearing a dark suit jacket with a collared shirt and tie. Expression: intense but scholarly, analyzing the group dynamics in front of him. Polish-born European intellectual aesthetic. Dominant color: magenta (#d946ef) circular background. Linework: clean 2px strokes, flat shading. Game UI icon style.
```

---

### 5. Jonathan Haidt (Level 5)

**Style:** Minimal flat vector, circular avatar, 120×120px, transparent background. Modern, approachable, morally earnest.

**Prompt:**
```
Flat vector game avatar icon, circular 120×120px, transparent background. Jonathan Haidt as a minimalist character portrait. Middle-aged man with short dark hair, slight graying at temples. Clean-shaven, friendly but serious expression. Wearing a casual button-up shirt, no tie — modern academic aesthetic. Intelligent eyes, slightly furrowed brow as if considering a moral dilemma. Dominant color: warm orange (#f97316) circular background. Linework: clean 2px strokes, flat shading. Game UI icon style.
```

---

### 6. Roland Barthes (Level 6)

**Style:** Minimal flat vector, circular avatar, 120×120px, transparent background. French intellectual, stylish, semiotician.

**Prompt:**
```
Flat vector game avatar icon, circular 120×120px, transparent background. Roland Barthes as a minimalist character portrait. Middle-aged French man, slightly disheveled dark hair with a distinctive side part. Wearing a dark turtleneck — the classic French intellectual look. Thin face, thoughtful eyes, a small knowing half-smile as if he's just deconstructed something you thought was obvious. Expression: quietly amused, aware of the hidden meanings in everything. Dominant color: cyan (#06b6d4) circular background. Linework: clean 2px strokes, flat shading. Game UI icon style.
```

---

### 7. Jean Baudrillard (Level 7)

**Style:** Minimal flat vector, circular avatar, 120×120px, transparent background. Ironic, detached, postmodern.

**Prompt:**
```
Flat vector game avatar icon, circular 120×120px, transparent background. Jean Baudrillard as a minimalist character portrait. Older French man, receding gray-white hair brushed back, distinctive thick eyebrows. Wearing a dark jacket over a collared shirt. Slightly detached, ironic expression — the look of someone who believes reality might not exist at all and finds that amusing. Cynical half-smile. Sharp, knowing eyes. Dominant color: purple (#a78bfa) circular background. Linework: clean 2px strokes, flat shading. Game UI icon style.
```

---

### 8. Michel Foucault (Level 8)

**Style:** Minimal flat vector, circular avatar, 120×120px, transparent background. Confrontational, intense, iconic.

**Prompt:**
```
Flat vector game avatar icon, circular 120×120px, transparent background. Michel Foucault as a minimalist character portrait. French philosopher with a completely bald head — smooth shaved — his most iconic look. Intense, piercing eyes that look like they're analyzing power structures in real time. Wearing a dark turtleneck or simple dark collared shirt. Expression: challenging, intellectual, slightly confrontational — as if questioning who decided this avatar should exist. Dominant color: teal (#14b8a6) circular background. Linework: clean 2px strokes, flat shading. Game UI icon style.
```

---

### 9. Cass Sunstein (Level 9)

**Style:** Minimal flat vector, circular avatar, 120×120px, transparent background. Modern, policy-oriented, thoughtful.

**Prompt:**
```
Flat vector game avatar icon, circular 120×120px, transparent background. Cass Sunstein as a minimalist character portrait. Middle-aged man with distinctive full head of brown hair, receding slightly at temples. Clean-shaven, glasses (slightly rectangular wire-rims). Wearing a dark suit jacket with a button-up shirt and tie. Expression: thoughtful and analytical, as if calculating the polarizing effect of an echo chamber. Professional, academic governance aesthetic. Dominant color: pink (#ec4899) circular background. Linework: clean 2px strokes, flat shading. Game UI icon style.
```

---

### 10. Maxwell McCombs & Donald Shaw (Level 11 — co-theorists)

**Style:** Minimal flat vector, TWO circular avatars side by side, 120×120px each. Representing the co-theorists as a duo.

**Prompt:**
```
Flat vector game avatar icons, TWO circular avatars side by side (each 120×120px), transparent background. Left: Maxwell McCombs as an older gentleman with silver-gray hair neatly combed, thin wire-rim glasses, wearing a dark academic blazer with tie. Warm, avuncular expression. Right: Donald Shaw as a middle-aged man with darker hair, similar wire-rim glasses, wearing a suit jacket and tie. Thoughtful, earnest expression. Both look like media researchers who discovered something fundamental about how news shapes reality. Same blue (#0ea5e9) circular background for both. Game UI icon style.
```

---

### 11. Robert Cialdini (Level 2) — same prompt as Level 2 (reuse)
### 12. Arthur Schopenhauer (Level 10) — same prompt as Level 1 (reuse)

These use the same avatars generated for levels 1 and 2. No new image needed.

## 6. Implementation Notes

### Friend Name Replacement
Replace the current `friendName` field in missions.ts with the scientist's name:

| Level | Current Friend | Replace With |
|-------|---------------|--------------|
| 1 | Alex | Arthur Schopenhauer |
| 2 | Jay | Robert Cialdini |
| 3 | Mia | Daniel Kahneman |
| 4 | Jack | Henri Tajfel |
| 5 | Emma | Jonathan Haidt |
| 6 | Zoe | Roland Barthes |
| 7 | TikTok Tom | Jean Baudrillard |
| 8 | Jay | Michel Foucault |
| 9 | Mia | Cass Sunstein |
| 10 | Jack | Arthur Schopenhauer (return) |
| 11 | Zoe | McCombs & Shaw |
| 12 | TikTok Tom | Robert Cialdini (return) |

### Friend Color Updates
Each scientist gets a distinct hex color matching their avatar background:

| Scientist | Color |
|-----------|-------|
| Schopenhauer | #ef4444 (red) |
| Cialdini | #f59e0b (amber) |
| Kahneman | #22c55e (green) |
| Tajfel | #d946ef (magenta) |
| Haidt | #f97316 (orange) |
| Barthes | #06b6d4 (cyan) |
| Baudrillard | #a78bfa (purple) |
| Foucault | #14b8a6 (teal) |
| Sunstein | #ec4899 (pink) |
| McCombs & Shaw | #0ea5e9 (blue) |

### Code Changes Required
1. `src/data/missions.ts` — Replace `friendName`, `friendColor`, and `friendPreview` for all 12 posts
2. Optionally add `avatarPrompt` as optional metadata field for documentation

---

*Document generated: Academic structure analysis complete. Ready for GPT image generation of avatars.*