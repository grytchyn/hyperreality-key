# Hyperreality Key — Game Design (v2 Practical)

## Design Philosophy

1. **Progressive tool unlocks** — каждый уровень добавляет 1 новый инструмент. Игрок учится одному приёму за раз
2. **Level-specific question** — не "manipulative or not", а вопрос про конкретный приём в статье
3. **3 posts per level** — по 3 однотипных примера, чтобы навык закрепился
4. **Всего 7 уровней × 3 поста = 21 пост**
5. **Финальный уровень — все инструменты доступны**, сложный пост с несколькими слоями манипуляции

---

## 1. Level Progression

| Уровень | Новый инструмент | Manipulation Type | Тип вопроса | Кол-во постов |
|---------|-----------------|-------------------|-------------|:---------:|
| 1 | bad-arguments | Authority + Absolutes | "Which authority is being faked?" | 3 |
| 2 | feelings-check | Fear + Urgency | "What emotion is being triggered?" | 3 |
| 3 | brain-check | Anchoring + Bandwagon | "Which cognitive shortcut?" | 3 |
| 4 | us-vs-them | In-group/Out-group | "How is 'them' described?" | 3 |
| 5 | value-check | Moral Foundations | "Which moral button is pushed?" | 3 |
| 6 | hidden-story | Myths + Narratives | "What hidden myth is being sold?" | 3 |
| 7 | fake-check + ALL | Hyperreality | "What's the reality level?" | 3 |

**Total:** 21 posts

---

## 2. Question Format

Each question has **multiple choice with 3-4 options**. Player uses the tool to find the right one.

### Example questions per tool:

**Level 1 — Bad Words:**
> *Post: "A new study from the Institute for Social Research claims: 80%..."*
> ❓ "The post says 'Dr. Markus Weber, lead researcher.' What is this technique called?"
> A) Statistical analysis ✓
> B) False authority ← correct
> C) Emotional appeal

**Level 2 — Feelings Check:**
> ❓ "What emotion is this post trying to make you feel?"
> A) Outrage and fear ← correct (if article about layoffs)
> B) Curiosity
> C) Joy

**Level 3 — Brain Check:**
> ❓ "The post says '67% of people support this.' What bias does this use?"
> A) Anchoring
> B) Bandwagon / social proof ← correct
> C) Authority

**Level 4 — Us vs Them:**
> ❓ "How does the post describe 'them'?"
> A) As individuals with unique circumstances
> B) As a homogeneous threat ← correct (if uses "they" + nature metaphors)
> C) As neutral

**Level 5 — Value Check:**
> ❓ "Which moral foundation is being activated?"
> A) Care/Harm ← correct (if mentions "children", "victims")
> B) Authority
> C) Sanctity

**Level 6 — Hidden Myth:**
> ❓ "What deeper story does this post rely on?"
> A) The myth of progress
> B) The myth of crisis ← correct
> C) The myth of freedom

**Level 7 — Fake Check (all tools):**
> ❓ "What level of reality is this post operating at?"
> A) Real event, accurate reporting
> B) Distorted but based on real events
> C) Pure simulation — no original referent ← correct (for clickbait)

---

## 3. UI Changes per Level

### Level 1-6: Only active tools shown
- Filter buttons show ONLY tools unlocked so far
- Answer card shows level-specific question
- No "Is this manipulating you?" generic question
- Banner says: "Use the NEW TOOL to find the answer"

### Level 7: All tools
- All 7 tools visible
- Complex post requiring 2-3 tools to fully analyze
- Question still specific (not generic)

### Progress bar shows:
- Level progress (3 posts per level, 7 levels)
- Which tools unlocked
- Score

---

## 4. Implementation Complexity

### Files to change:

| File | Change | Complexity | Time |
|------|--------|:----------:|:----:|
| `src/data/missions.ts` | Add: `levelQuestion`, `choices`, `correctChoice`. Restructure 21 posts across 7 levels | 🟡 Medium | 30 min |
| `src/types.ts` | Add `LevelQuestion` type, `MissionPost` changes | 🟢 Easy | 5 min |
| `src/data/coreTools.ts` | Add: unlock level for each tool | 🟢 Easy | 5 min |
| `src/App.tsx` | New level flow: track unlocked tools per level | 🟡 Medium | 15 min |
| `src/components/GameScreen.tsx` | New question + answer format. Dynamic tool visibility | 🔴 Hard | 45 min |
| `src/components/LevelTransition.tsx` | Update to show unlocked tool | 🟢 Easy | 10 min |

**Total estimated time:** ~2 hours of vibe-coding

### Detailed flow for GameScreen changes:

```
Current:
  [7 tools visible] → [generic "is this manipulative?"] → [yes/no]

New:
  [N tools visible (unlocked)] → [level-specific question with choices] 
  → [select answer] → [tooltip shows correct/wrong with explanation]
  
  Flow:
  1. Friend sends post
  2. User reads post
  3. Banner: "Use {tool} to analyze this post"
  4. User activates tool → words highlighted
  5. Question appears (gated by tool use)
  6. User picks A/B/C answer
  7. Feedback: correct/wrong with explanation
```

---

## 5. Data structure for missions.ts

```typescript
export interface MissionPost {
  title: string
  source: string
  content: string
  category: string
  imageEmoji: string
  level: number // 1-7
  neededTool: CoreToolId
  question: string
  choices: string[] // 3-4 options
  correctIndex: number // 0-based
  explanation: string
  friendPreview: string
  friendName: string
  friendColor: string
}
```

---

## 6. Scoring

| Action | Points |
|--------|:------:|
| Correct answer | +10 |
| Wrong answer | +0 (no penalty, but no points) |
| Using wrong tool | Question stays locked until correct tool used |

**Max score:** 21 × 10 = 210

---

## 7. Implementation Order (vibe-coder priority)

### Phase 1 (next session, ~1 hour):
1. Update `types.ts` — add new MissionPost fields
2. Rewrite `missions.ts` — 21 posts across 7 levels with proper questions
3. Update `GameScreen.tsx` — new question/answer UI, dynamic tool visibility
4. Update `App.tsx` — level tracking, unlock logic

### Phase 2 (later):
5. Animations for level transitions
6. Sound effects
7. Victory screen with Hyperreality Key reveal

---

## 8. Example: Level 1 (complete)

```typescript
{
  title: 'Study: "80% of Housing Crisis Caused by Immigration"',
  source: 'Daily News',
  content: `A new study from the Institute for Social Research claims: 80% of the housing shortage is caused by immigration. "Numbers don't lie," says Dr. Markus Weber. Critics disagree. "The study ignores that immigrants also build homes."`,
  category: 'Politics',
  imageEmoji: '🏘️',
  level: 1,
  neededTool: 'bad-arguments',
  question: 'The post name-drops "Dr. Markus Weber" and "Institute for Social Research." What technique is this?',
  choices: ['Emotional manipulation', 'False authority name-drop', 'Statistical analysis', 'Logical fallacy of extremes'],
  correctIndex: 1,
  explanation: '"Dr." and "Institute" sound credible but neither is identified. This is Cialdini\'s Authority principle — using titles to borrow trust without providing actual credentials.',
  friendPreview: 'Bro have you seen this? 👀',
  friendName: 'Alex',
  friendColor: '#22c55e',
}
```

---

## 9. Key Design Decisions

1. **No penalty for wrong answers** — game is educational, not punishing
2. **Tool required before question appears** — ensures player uses the mechanic before answering
3. **3 posts per level** — enough to learn pattern, not boring repetition
4. **Choices always 3-4** — never yes/no. Forces cognitive engagement
5. **Distractors are plausible** — wrong answers are real techniques, just incorrect for this post
6. **Level 7 is "all tools"** — final test using everything learned

---

## 10. Current State vs Target

| Aspect | Current (render.com) | Target |
|--------|:-------------------:|:------:|
| Posts | 12 | 21 |
| Levels | 3 tiers | 7 levels |
| Tools per screen | All 7 | Only unlocked |
| Question | "Is this manipulative?" (yes/no) | Level-specific (multiple choice) |
| Scoring | 10 per correct | 10 per correct (max 210) |
| Progression | Random shuffle | Sequential levels |
| Unlock | None | Tools unlock per level |
