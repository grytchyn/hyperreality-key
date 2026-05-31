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

import type { CoreToolConfig, CoreToolId, HighlightEntry, HighlightRule } from '../types'

export const CORE_TOOLS: CoreToolConfig[] = [
  {
    id: 'bad-arguments',
    icon: '⚠️',
    name: 'Bad Words',
    color: '#ef4444',
    description: 'Logical fallacies & false authority — based on Schopenhauer\'s Eristic Dialectic and Cialdini.',
  },
  {
    id: 'feelings-check',
    icon: '🎭',
    name: 'Feelings',
    color: '#f59e0b',
    description: 'Emotional triggers — fear, urgency, pity. Cialdini: Scarcity & Liking.',
  },
  {
    id: 'brain-check',
    icon: '🧠',
    name: 'Brain Check',
    color: '#22c55e',
    description: 'Cognitive biases — Kahneman System 1. Anchoring, Bandwagon, Framing.',
  },
  {
    id: 'hidden-story',
    icon: '🗺️',
    name: 'Hidden Myth',
    color: '#06b6d4',
    description: 'Myths & narratives — Roland Barthes: how ideology disguises itself as "natural".',
  },
  {
    id: 'us-vs-them',
    icon: '⚔️',
    name: 'Us vs Them',
    color: '#d946ef',
    description: 'In-group/out-group — Tajfel & Turner: Social Identity Theory. Binary enemies.',
  },
  {
    id: 'value-check',
    icon: '📊',
    name: 'Moral Buttons',
    color: '#f97316',
    description: 'Moral Foundations — Haidt: Care, Fairness, Loyalty, Authority, Sanctity.',
  },
  {
    id: 'fake-check',
    icon: '🌀',
    name: 'Fake Check',
    color: '#a78bfa',
    description: 'Reality vs simulation — Baudrillard: Hyperreality. Source epistemology.',
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
}

// ── HIGHLIGHT RULES v8 — English only ──
//
// Rules use EXACT word matching (array of exact word strings).
// Multi-word phrases stored alongside single words.
// No stem/prefix matching — "danger" does NOT match "dangerous".

const HIGHLIGHT_RULES: Record<CoreToolId, HighlightRule[]> = {
  // ── BAD ARGUMENTS: Schopenhauer, Cialdini (Authority) ──
  'bad-arguments': [
    { words: ['always', 'never', 'everyone', 'nobody', 'every', 'none', 'nothing', 'all', 'totally', 'completely', 'absolutely'], explanation: 'Absolute word — suppresses exceptions (Schopenhauer: overgeneralization).' },
    { words: ['expert', 'professor', 'doctor', 'scientist', 'institute', 'authority'], explanation: 'Authority claim — Cialdini: Authority. Who is this person really?' },
    { words: ['obviously', 'clearly', 'undeniably', 'certainly', 'surely', 'plainly'], explanation: 'False certainty — "obvious" replaces arguments (Eristic: dictum simpliciter).' },
    { words: ['percent', 'majority', 'statistics', 'proves', 'proof', 'figures', 'ratio', 'percentage'], explanation: 'False precision — a number without a source is opinion, not fact.' },
  ],

  // ── FEELINGS CHECK: Cialdini (Scarcity, Liking), Fear Appeals ──
  'feelings-check': [
    { words: ['fear', 'danger', 'terrible', 'horrible', 'unthinkable', 'shocking', 'horrifying', 'devastating', 'catastrophic', 'dreadful'], explanation: 'Fear bait — Cialdini: Scarcity plus Fear. Who benefits from your fear?' },
    { words: ['urgent', 'immediately', 'now', 'hurry', 'crisis', 'emergency', 'last chance', 'act now', 'before it'], explanation: 'Urgency — designed to bypass System 2. Take a breath.' },
    { words: ['outrage', 'scandal', 'appalling', 'disgrace', 'despicable', 'revolting', 'atrocious', 'monstrous'], explanation: 'Outrage bait — emotion replaces argument. The fury is intentional.' },
    { words: ['poor', 'suffer', 'heartbreaking', 'tragic', 'victim', 'innocent', 'helpless'], explanation: 'Sympathy manipulation — Cialdini: Liking. Emotional bonding instead of facts.' },
  ],

  // ── BRAIN CHECK: Kahneman (System 1 biases) ──
  'brain-check': [
    { words: ['majority', 'most people', 'everyone', 'public', 'popular', 'widespread', 'common', 'people say', 'according to'], explanation: 'Bandwagon — Kahneman: Availability Heuristic. "Many believe it" ≠ it\'s true.' },
    { words: ['million', 'billion', 'thousands', 'record', 'unprecedented', 'highest', 'lowest', 'biggest', 'worst', 'largest', 'massive'], explanation: 'Anchoring — Kahneman: Anchoring. Sets an extreme reference point.' },
    { words: ['of course', 'naturally', 'obviously', 'common sense', 'everyone knows', 'undeniable', 'surely'], explanation: 'Framing as consensus — Kahneman: WYSIATI. Just because it\'s in the text doesn\'t make it true.' },
    { words: ['either', 'or', 'only', 'choice', 'alternative', 'option'], explanation: 'False binary — Kahneman: Framing. Either/or ignores nuance.' },
  ],

  // ── HIDDEN MYTH: Roland Barthes (Mythologies) ──
  'hidden-story': [
    { words: ['freedom', 'liberty', 'security', 'order', 'chaos', 'progress', 'tradition', 'modern', 'natural'], explanation: 'Barthes: Myth exposed — "Freedom" is not an argument, it\'s a story.' },
    { words: ['natural', 'normal', 'proper', 'correct', 'right', 'inevitable', 'unavoidable', 'just is', 'reality'], explanation: 'Barthes: Naturalization — ideology disguised as "normal". Who defines normal?' },
    { words: ['crisis', 'threat', 'danger', 'emergency', 'breakdown', 'collapse', 'disaster'], explanation: 'Barthes: Myth of crisis — suggests urgency and justifies measures.' },
  ],

  // ── US VS THEM: Tajfel & Turner (Social Identity Theory) ──
  'us-vs-them': [
    { words: ['we', 'us', 'our', 'ourselves', 'our own', 'our people', 'our nation', 'our culture'], explanation: 'Tajfel: In-group — "we" creates belonging. Who is NOT part of "us"?' },
    { words: ['they', 'them', 'their', 'those', 'these', 'these people', 'outsiders', 'foreigners', 'strangers', 'others', 'the other'], explanation: 'Tajfel: Out-group — "they" are homogenized. Individuals disappear.' },
    { words: ['good', 'bad', 'evil', 'pure', 'dangerous', 'threat', 'menace', 'correct', 'wrong', 'right'], explanation: 'Tajfel: Binary — only two categories. The gray area is erased.' },
    { words: ['flood', 'wave', 'invasion', 'swarm', 'plague', 'infestation', 'tide'], explanation: 'Dehumanization — nature metaphors turn people into a threat.' },
  ],

  // ── MORAL BUTTONS: Haidt (Moral Foundations Theory) ──
  'value-check': [
    { words: ['innocent', 'hurt', 'harm', 'victim', 'suffer', 'protect', 'children', 'abuse', 'cruel', 'kindness', 'compassion', 'care'], explanation: 'Haidt: Care — activates compassion or outrage. Check who is portrayed as victim.' },
    { words: ['fair', 'unfair', 'equal', 'justice', 'cheat', 'dishonest', 'corrupt', 'fraud', 'deserve', 'rights', 'discrimination'], explanation: 'Haidt: Fairness — sense of injustice triggered. Is fairness really violated?' },
    { words: ['loyal', 'betray', 'patriot', 'traitor', 'united', 'divide', 'together', 'treason', 'loyalty', 'sacrifice', 'nation'], explanation: 'Haidt: Loyalty — tribalism. "Us" against "traitors".' },
    { words: ['authority', 'respect', 'obey', 'traditional', 'duty', 'order', 'disrespect', 'defy', 'disobey', 'rebel', 'establishment'], explanation: 'Haidt: Authority — hierarchy is invoked. Who decides what respect means?' },
    { words: ['pure', 'impure', 'sacred', 'sin', 'disgust', 'filthy', 'clean', 'dirty', 'corrupt', 'decay', 'degradation'], explanation: 'Haidt: Sanctity — disgust as moral judgment. Body metaphors for abstract criticism.' },
  ],

  // ── FAKE CHECK: Baudrillard (Simulacra), Epistemology ──
  'fake-check': [
    { words: ['viral', 'meme', 'trending', 'share', 'like', 'follow', 'influencer', 'social media', 'go viral', 'blowing up'], explanation: 'Baudrillard: Simulacrum — the content is only about its own spread.' },
    { words: ['apparently', 'rumor', 'anonymous', 'sources say', 'unconfirmed', 'allegedly', 'reportedly', 'supposedly', 'claims', 'alleged'], explanation: 'Epistemology: unverified — at least one step removed from reality.' },
    { words: ['literally', 'unreal', 'surreal', 'like a movie', 'dream', 'can\'t believe', 'unbelievable', 'like a scene', 'straight out of'], explanation: 'Baudrillard: Hyperreality — the text itself signals something is off.' },
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
