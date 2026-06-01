// ── CORE TOOLS v8 — Scientific Framework (English only) ──
//
// Each tool is based on established academic research:
//   - Cialdini (Influence / 6 Principles)
//   - Kahneman & Tversky (Cognitive Biases / System 1)
//   - Haidt (Moral Foundations Theory)
//   - Tajfel & Turner (Social Identity Theory)
//   - Barthes (Mythologies / Semiotics)
//   - Schopenhauer (Eristic Dialectic / Logical Fallacies)
//
// Matching rules: EXACT word match only. Multi-word phrases matched before
// any single-word matching to prevent false positives.
//
// v8.1 — Refined highlight rules to eliminate false positives from common
// English words (we, us, our, they, them, good, bad, all, everyone, nobody).
// Us-vs-Them now uses multi-word phrases instead of generic pronouns.

import type { CoreToolConfig, CoreToolId, HighlightEntry, HighlightRule } from '../types'

export const CORE_TOOLS: CoreToolConfig[] = [
  {
    id: 'bad-arguments',
    icon: '⚠️',
    name: 'Bad Words',
    color: '#ef4444',
    description: 'Catches logical tricks and fake authority. Example: "Experts say" without naming who → name-dropping. "Everyone knows" → overgeneralization. "Never/always" → ignores exceptions. Ask: Would this hold up in a debate?',
  },
  {
    id: 'feelings-check',
    icon: '🎭',
    name: 'Feelings',
    color: '#f59e0b',
    description: 'Reveals emotional manipulation. Fear words (shocking, urgent) → Cialdini\'s Scarcity. Outrage bait (scandal, disgrace) → bypasses logic. Pity (victim, innocent) → Liking principle. Ask: What emotion are they trying to make you feel — and why?',
  },
  {
    id: 'brain-check',
    icon: '🧠',
    name: 'Brain Check',
    color: '#22c55e',
    description: 'Exposes cognitive shortcuts (Kahneman System 1). "Most people" → bandwagon effect. "Record numbers" → anchoring bias. "Of course, obviously" → availability heuristic. Ask: Are you thinking, or just reacting?',
  },
  {
    id: 'hidden-story',
    icon: '🗺️',
    name: 'Hidden Myth',
    color: '#06b6d4',
    description: 'Uncovers the deeper narrative (Roland Barthes\' Mythologies). "Freedom", "security", "crisis" are not facts — they are stories with hidden agendas. When something is called "natural" or "normal", ideology is disguised as common sense. Ask: What world-view does this try to make seem inevitable?',
  },
  {
    id: 'us-vs-them',
    icon: '⚔️',
    name: 'Us vs Them',
    color: '#d946ef',
    description: 'Reveals social division tactics (Tajfel\'s Social Identity Theory). "We" vs "they" creates in-groups and out-groups in seconds. "Flood", "wave", "invasion" dehumanize people by using nature metaphors. Ask: Who is being cast as the enemy — and what proof exists?',
  },
  {
    id: 'value-check',
    icon: '📊',
    name: 'Moral Buttons',
    color: '#f97316',
    description: 'Detects which moral foundation (Haidt) is being pressed. Care: "children", "victim" → compassion trigger. Fairness: "corrupt", "cheat" → injustice trigger. Loyalty: "traitor", "patriot" → tribal trigger. Authority: "duty", "order" → hierarchy trigger. Sanctity: "pure", "disgust" → moral disgust. Ask: Which button are they pushing — and do you want it pushed?',
  },
  {
    id: 'fake-check',
    icon: '🌀',
    name: 'Fake Check',
    color: '#a78bfa',
    description: 'Assesses reality level (Baudrillard\'s Hyperreality). Is this a real event, a distorted report, or pure internet simulation? "Viral", "trending" → the content only cares about its own spread. "Allegedly", "sources say" → unverified. "Unreal", "like a movie" → even the text knows something is off. Ask: Is this about reality, or about attention?',
  },
  {
    id: 'source-check',
    icon: '🔎',
    name: 'Source Check',
    color: '#14b8a6',
    description: 'Verifies whether sources actually exist and are credible. "According to experts", "studies show" → anonymous authority. "Sources say", "reportedly" → no named source. "I heard", "someone told me" → hearsay. "The internet says" → no origin at all. Ask: Can I find this source with a 30-second search?',
  },
]

export const TOOL_LARGE_ICONS: Record<CoreToolId, string> = {
  'bad-arguments': '⚡',
  'feelings-check': '🔥',
  'brain-check': '🔬',
  'hidden-story': '🔍',
  'us-vs-them': '⚔️',
  'value-check': '🛡️',
  'fake-check': '👁️',
  'source-check': '📋',
}

// ── HIGHLIGHT RULES v8.1 — English only ──
//
// Rules use EXACT word matching (array of exact word strings).
// Multi-word phrases stored alongside single words.
// No stem/prefix matching — "danger" does NOT match "dangerous".
//
// v8.1 fixes: Removed overly common words (we, us, our, they, them, good,
// bad, all, everyone, nobody) from ALL rules to eliminate false positives in
// every post. Us-vs-Them now uses multi-word manipulation phrases instead of
// generic pronouns. False-binary uses phrase patterns instead of single words.

const HIGHLIGHT_RULES: Record<CoreToolId, HighlightRule[]> = {
  // ── BAD ARGUMENTS: Schopenhauer, Cialdini (Authority) ──
  'bad-arguments': [
    { words: ['always', 'never', 'every', 'none', 'nothing', 'totally', 'completely', 'absolutely'], explanation: 'Absolute word — suppresses exceptions (Schopenhauer: overgeneralization).' },
    { words: ['expert', 'professor', 'doctor', 'scientist', 'institute', 'authority'], explanation: 'Authority claim — Cialdini: Authority. Who is this person really?' },
    { words: ['obviously', 'clearly', 'undeniably', 'certainly', 'surely', 'plainly'], explanation: 'False certainty — "obvious" replaces arguments (Eristic: dictum simpliciter).' },
    { words: ['percent', 'majority', 'statistics', 'proves', 'proof', 'figures', 'ratio', 'percentage'], explanation: 'False precision — a number without a source is opinion, not fact.' },
  ],

  // ── FEELINGS CHECK: Cialdini (Scarcity, Liking), Fear Appeals ──
  'feelings-check': [
    { words: ['fear', 'danger', 'terrible', 'horrible', 'unthinkable', 'shocking', 'horrifying', 'devastating', 'catastrophic', 'dreadful', 'terrifying'], explanation: 'Fear bait — Cialdini: Scarcity plus Fear. Who benefits from your fear?' },
    { words: ['urgent', 'immediately', 'hurry', 'crisis', 'emergency', 'last chance', 'act now', 'before it'], explanation: 'Urgency — designed to bypass System 2. Take a breath.' },
    { words: ['outrage', 'scandal', 'appalling', 'disgrace', 'despicable', 'revolting', 'atrocious', 'monstrous'], explanation: 'Outrage bait — emotion replaces argument. The fury is intentional.' },
    { words: ['suffer', 'heartbreaking', 'tragic', 'victim', 'innocent', 'helpless'], explanation: 'Sympathy manipulation — Cialdini: Liking. Emotional bonding instead of facts.' },
  ],

  // ── BRAIN CHECK: Kahneman (System 1 biases) ──
  'brain-check': [
    { words: ['majority', 'most people', 'people say', 'according to', 'popular opinion', 'everyone thinks'], explanation: 'Bandwagon — Kahneman: Availability Heuristic. "Many believe it" ≠ it\'s true.' },
    { words: ['million', 'billion', 'thousands', 'record', 'unprecedented', 'highest', 'lowest', 'biggest', 'worst', 'largest', 'massive'], explanation: 'Anchoring — Kahneman: Anchoring. Sets an extreme reference point.' },
    { words: ['of course', 'naturally', 'obviously', 'common sense', 'everyone knows', 'undeniable', 'surely'], explanation: 'Framing as consensus — Kahneman: WYSIATI. Just because it\'s in the text doesn\'t make it true.' },
    { words: ['either/or', 'only choice', 'no choice', 'only option', 'no alternative', 'either way', 'take it or leave it', 'both sides', 'on one hand', 'on the other hand'], explanation: 'False binary — Kahneman: Framing. Either/or ignores nuance.' },
  ],

  // ── HIDDEN MYTH: Roland Barthes (Mythologies) ──
  'hidden-story': [
    { words: ['freedom', 'liberty', 'security', 'order', 'chaos', 'progress', 'tradition', 'modern', 'natural'], explanation: 'Barthes: Myth exposed — "Freedom" is not an argument, it\'s a story.' },
    { words: ['natural', 'normal', 'proper', 'correct', 'inevitable', 'unavoidable', 'just is', 'reality'], explanation: 'Barthes: Naturalization — ideology disguised as "normal". Who defines normal?' },
    { words: ['crisis', 'threat', 'danger', 'emergency', 'breakdown', 'collapse', 'disaster'], explanation: 'Barthes: Myth of crisis — suggests urgency and justifies measures.' },
  ],

  // ── US VS THEM: Tajfel & Turner (Social Identity Theory) ──
  // v8.1: Replaced generic pronouns (we, us, our, they, them) with specific
  // multi-word manipulation phrases. Single pronouns caused false positives in
  // every post.
  'us-vs-them': [
    { words: ['our kind', 'our way of life', 'our values', 'our homeland', 'our country', 'our culture', 'our nation', 'our people'], explanation: 'Tajfel: In-group branding — "our" paired with an abstract identity. Who is excluded from this group?' },
    { words: ['those people', 'these people', 'outsiders', 'foreigners', 'strangers', 'the other', 'others'], explanation: 'Tajfel: Out-group labeling — people reduced to a category. Individuals disappear.' },
    { words: ['invasion', 'flood of', 'wave of', 'swarm', 'plague', 'infestation', 'tide', 'taking over', 'taking our', 'destroying our', 'against us', 'coming for'], explanation: 'Dehumanization & threat — nature/war metaphors turn people into an invading force.' },
    { words: ['real americans', 'real citizens', 'real people', 'true patriots'], explanation: 'Gatekeeping identity — who gets to be "real"? A boundary being drawn.' },
  ],

  // ── MORAL BUTTONS: Haidt (Moral Foundations Theory) ──
  'value-check': [
    { words: ['innocent', 'harm', 'victim', 'suffer', 'protect', 'children', 'abuse', 'cruel', 'kindness', 'compassion'], explanation: 'Haidt: Care — activates compassion or outrage. Check who is portrayed as victim.' },
    { words: ['fair', 'unfair', 'equal', 'justice', 'cheat', 'dishonest', 'corrupt', 'fraud', 'deserve', 'rights', 'discrimination'], explanation: 'Haidt: Fairness — sense of injustice triggered. Is fairness really violated?' },
    { words: ['loyal', 'betray', 'patriot', 'traitor', 'united', 'divide', 'together', 'treason', 'loyalty', 'sacrifice', 'nation'], explanation: 'Haidt: Loyalty — tribalism. "Us" against "traitors".' },
    { words: ['authority', 'respect', 'obey', 'traditional', 'duty', 'order', 'disrespect', 'defy', 'disobey', 'rebel', 'establishment'], explanation: 'Haidt: Authority — hierarchy is invoked. Who decides what respect means?' },
    { words: ['pure', 'impure', 'sacred', 'sin', 'disgust', 'filthy', 'corrupt', 'decay', 'degradation'], explanation: 'Haidt: Sanctity — disgust as moral judgment. Body metaphors for abstract criticism.' },
  ],

  // ── FAKE CHECK: Baudrillard (Simulacra), Epistemology ──
  'fake-check': [
    { words: ['viral', 'meme', 'trending', 'follow', 'influencer', 'social media', 'go viral', 'blowing up'], explanation: 'Baudrillard: Simulacrum — the content is only about its own spread.' },
    { words: ['apparently', 'rumor', 'anonymous', 'sources say', 'unconfirmed', 'allegedly', 'reportedly', 'supposedly', 'claims', 'alleged'], explanation: 'Epistemology: unverified — at least one step removed from reality.' },
    { words: ['unreal', 'surreal', 'like a movie', 'can\'t believe', 'unbelievable', 'like a scene', 'straight out of'], explanation: 'Baudrillard: Hyperreality — the text itself signals something is off.' },
  ],

  // ── SOURCE CHECK: Epistemology, Source Credibility ──
  'source-check': [
    { words: ['experts', 'scientists', 'researchers', 'doctors', 'professionals', 'authorities', 'analysts', 'specialists'], explanation: 'Anonymous authority — "experts" without names are not sources.' },
    { words: ['study', 'studies', 'research', 'survey', 'report', 'analysis', 'data', 'statistics', 'findings'], explanation: 'Vague reference — which study? When? By whom? No link = no source.' },
    { words: ['people say', 'sources say', 'it is said', 'reportedly', 'apparently', 'allegedly', 'rumored', 'word is'], explanation: 'Hearsay — no named source. Someone heard from someone who heard from someone.' },
    { words: ['internet says', 'everyone knows', 'common knowledge', 'widely known'], explanation: 'Fake consensus — "common knowledge" is often just repetition without verification.' },
    { words: ['alleged', 'unconfirmed', 'unverified', 'claimed', 'supposed', 'purported'], explanation: 'Unverified — the content itself admits it has no confirmation.' },
  ],
}

// ── HIGHLIGHT FUNCTION v8 — Exact match only ──
// No stem/prefix matching. Multi-word phrases stored as-is in array.
// Single words: matched EXACTLY after lowercasing.

export function getHighlightsFor(toolIds: CoreToolId[], text: string): Map<string, HighlightEntry[]> {
  const map = new Map<string, HighlightEntry[]>()

  const singleTokens = text.toLowerCase().replace(/[^a-z\s']/g, '').split(/\s+/).filter(Boolean)

  // Check multi-word phrases first
  for (const toolId of toolIds) {
    const rules = HIGHLIGHT_RULES[toolId]
    if (!rules) continue
    const config = CORE_TOOLS.find(t => t.id === toolId)
    if (!config) continue

    for (const rule of rules) {
      for (const phrase of rule.words) {
        if (phrase.includes(' ')) {
          const lowerText = text.toLowerCase()
          if (lowerText.includes(phrase.toLowerCase())) {
            addEntry(map, phrase, { word: phrase, explanation: rule.explanation, color: config.color })
          }
        }
      }
    }
  }

  // Then single words — EXACT match only
  for (const toolId of toolIds) {
    const rules = HIGHLIGHT_RULES[toolId]
    if (!rules) continue
    const config = CORE_TOOLS.find(t => t.id === toolId)
    if (!config) continue

    const seen = new Set<string>()
    for (const token of singleTokens) {
      if (seen.has(token)) continue
      seen.add(token)

      for (const rule of rules) {
        const exactWords = rule.words.filter(w => !w.includes(' '))
        if (exactWords.includes(token)) {
          addEntry(map, token, { word: token, explanation: rule.explanation, color: config.color })
          break
        }
      }
    }
  }

  return map
}

function addEntry(map: Map<string, HighlightEntry[]>, key: string, entry: HighlightEntry) {
  const existing = map.get(key) || []
  if (!existing.some(e => e.explanation === entry.explanation && e.color === entry.color)) {
    existing.push(entry)
    map.set(key, existing)
  }
}
