// ── 7 CORE TOOLS v3 — Layer Edition ──

import type { CoreToolConfig, CoreToolId, HighlightEntry } from '../types'

export const CORE_TOOLS: CoreToolConfig[] = [
  {
    id: 'fallacy-scanner',
    icon: '⚡',
    name: 'Find Bad Arguments',
    shortLabel: 'Bad Args',
    philosopher: 'Aristotle',
    color: '#ef4444',
    category: 'media-sociology',
    categoryLabel: 'Media Sociology',
    categoryIcon: '📺',
    description: 'Spot logical tricks like Ad Hominem, Straw Man, false dilemmas.',
    simpleQuestion: 'Does this post use a logical fallacy?',
    options: ['Yes — Straw Man', 'Yes — Ad Hominem', 'Yes — False Dilemma', 'No obvious fallacy'],
    correctAnswer: '',
    explanation: 'Logical fallacies trick you into accepting bad arguments by attacking the person (Ad Hominem), misrepresenting the position (Straw Man), or offering only two extremes (False Dilemma).',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Fallacy',
  },
  {
    id: 'rhetoric-detector',
    icon: '🎭',
    name: 'See Persuasion Tricks',
    shortLabel: 'Tricks',
    philosopher: 'Aristotle',
    color: '#f59e0b',
    category: 'media-sociology',
    categoryLabel: 'Media Sociology',
    categoryIcon: '📺',
    description: 'Detect Authority appeal (Ethos), Emotion (Pathos), and Logic claims (Logos).',
    simpleQuestion: 'Which persuasion trick is strongest here?',
    options: ['Authority appeal (Ethos)', 'Emotional pull (Pathos)', 'Fake logic (Logos)', 'Mixed / none'],
    correctAnswer: '',
    explanation: 'Ethos = trust in authority. Pathos = emotional reaction. Logos = logical argument. News often mixes all three.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Modes_of_persuasion',
  },
  {
    id: 'bias-detector',
    icon: '🧠',
    name: 'Spot Brain Shortcuts',
    shortLabel: 'Bias',
    philosopher: 'Kahneman & Tversky',
    color: '#22c55e',
    category: 'cognitive-psychology',
    categoryLabel: 'Cognitive Psychology',
    categoryIcon: '🧠',
    description: 'Find cognitive biases: Confirmation Bias, Anchoring, Framing effect.',
    simpleQuestion: 'Which thinking shortcut is used here?',
    options: ['Confirmation bias', 'Anchoring effect', 'Framing effect', 'No obvious bias'],
    correctAnswer: '',
    explanation: 'Our brain takes shortcuts. Confirmation = look for what agrees with us. Anchoring = first number shapes the rest. Framing = how it\'s said changes what we think.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Cognitive_bias',
  },
  {
    id: 'meaning-map',
    icon: '🗺️',
    name: 'Uncover Hidden Meaning',
    shortLabel: 'Meaning',
    philosopher: 'Roland Barthes',
    color: '#06b6d4',
    category: 'philosophy',
    categoryLabel: 'Philosophy',
    categoryIcon: '📖',
    description: 'Look beneath the surface — what myth does this text sell?',
    simpleQuestion: 'What deeper message hides beneath the surface?',
    options: ['"We need protection" myth', '"Progress is good" myth', '"Crisis is everywhere" myth', 'No hidden meaning'],
    correctAnswer: '',
    explanation: 'Barthes said texts sell myths as natural truths. Look for what is presented as "just common sense" — that\'s where ideology hides.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Roland_Barthes',
  },
  {
    id: 'binary-scalpel',
    icon: '⚔️',
    name: 'Find Hidden Battles',
    shortLabel: 'Battles',
    philosopher: 'Jacques Derrida',
    color: '#d946ef',
    category: 'philosophy',
    categoryLabel: 'Philosophy',
    categoryIcon: '📖',
    description: 'Reveal hidden opposites: Good/Evil, Us/Them, Safe/Dangerous.',
    simpleQuestion: 'Which hidden opposition is created in this text?',
    options: ['Us vs Them', 'Good vs Evil', 'Safe vs Dangerous', 'No clear opposition'],
    correctAnswer: '',
    explanation: 'Derrida showed that texts create meaning by opposing two terms — but one is always privileged. Ask: who is "us" and who is "them"?',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Jacques_Derrida',
  },
  {
    id: 'moral-compass',
    icon: '📊',
    name: 'Check Moral Buttons',
    shortLabel: 'Morals',
    philosopher: 'Jonathan Haidt',
    color: '#f97316',
    category: 'cognitive-psychology',
    categoryLabel: 'Cognitive Psychology',
    categoryIcon: '🧠',
    description: 'Which moral sense is being pressed? Care, Fairness, Loyalty, Authority, Sanctity, Liberty.',
    simpleQuestion: 'Which moral button is this text pressing?',
    options: ['Care / Harm', 'Fairness / Cheating', 'Loyalty / Betrayal', 'Authority / Subversion'],
    correctAnswer: '',
    explanation: 'Haidt found 6 moral foundations. Texts that make you feel outrage or warmth are pressing these buttons. Ask: which feeling is being triggered?',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Moral_foundations_theory',
  },
  {
    id: 'simulacrum-meter',
    icon: '🌀',
    name: 'How Real Is This?',
    shortLabel: 'Reality',
    philosopher: 'Jean Baudrillard',
    color: '#a78bfa',
    category: 'philosophy',
    categoryLabel: 'Philosophy',
    categoryIcon: '📖',
    description: 'How far from reality? Real Report → Propaganda → AI Fake → Pure Simulation.',
    simpleQuestion: 'How close to reality is this post?',
    options: ['Real report of events', 'Biased but based on facts', 'Made-up narrative', 'Pure simulation (no real referent)'],
    correctAnswer: '',
    explanation: 'Baudrillard warned reality is replaced by symbols of reality. A meme that only references other memes is a "simulacrum" — a copy without original.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Simulacrum',
  },
]

// ── HIGHLIGHTS ──
// Which words each tool highlights and what explanation to show

interface HighlightRule {
  words: string[]
  explanation: string
}

const HIGHLIGHT_RULES: Record<CoreToolId, HighlightRule[]> = {
  'fallacy-scanner': [
    { words: ['always', 'never', 'everyone', 'nobody', 'either', 'totally'], explanation: '⚡ Overgeneralization — words like "always" ignore exceptions. A common fallacy.' },
    { words: ['typical', 'obviously', 'clearly', 'undeniable'], explanation: '⚡ "Obviously" avoids real proof. Claims something is self-evident without evidence.' },
    { words: ['expert', 'professor', 'doctor', 'study', 'research'], explanation: '⚡ Authority appeal — who is this expert? Are they really neutral?' },
  ],
  'rhetoric-detector': [
    { words: ['expert', 'professor', 'doctor', 'study', 'research', 'science', 'authority', 'institute'], explanation: '🎭 Ethos: Trust the authority. Who benefits from this trust?' },
    { words: ['fear', 'danger', 'terrible', 'unthinkable', 'crisis', 'urgent', 'scandal', 'outrage', 'horrible'], explanation: '🎭 Pathos: Emotional trigger. Why make you afraid?' },
    { words: ['therefore', 'because', 'proves', 'fact', 'statistics', 'logical', 'numbers'], explanation: '🎭 Logos: Claims logic, but are the numbers real?' },
  ],
  'bias-detector': [
    { words: ['everyone knows', 'of course', 'obviously', 'naturally', 'clearly', 'undeniable'], explanation: '🧠 Framing effect: presents opinion as obvious truth' },
    { words: ['majority', 'most people', 'common sense', 'everyone', 'public'], explanation: '🧠 Bandwagon bias: "everyone thinks this" — but do they?' },
    { words: ['first', 'only', 'never before', 'unprecedented', 'record'], explanation: '🧠 Anchoring: sets a dramatic reference point' },
  ],
  'meaning-map': [
    { words: ['freedom', 'security', 'order', 'chaos', 'progress', 'tradition', 'crisis'], explanation: '🗺️ Myth layer: this word carries a hidden story about how the world should be' },
    { words: ['natural', 'normal', 'common sense', 'obvious', 'right'], explanation: '🗺️ Presented as natural — but whose "normal" is this?' },
    { words: ['protect', 'defend', 'save', 'threat', 'danger', 'safe'], explanation: '🗺️ Security myth: who or what needs protection? From whom?' },
  ],
  'binary-scalpel': [
    { words: ['we', 'us', 'our', 'ourselves'], explanation: '⚔️ "Us" — who is included in this group?' },
    { words: ['they', 'them', 'their', 'those', 'these people', 'outsiders'], explanation: '⚔️ "Them" — the other side. How are they described?' },
    { words: ['good', 'bad', 'right', 'wrong', 'evil', 'pure', 'dangerous', 'safe'], explanation: '⚔️ Binary opposition: only two categories, no middle ground' },
  ],
  'moral-compass': [
    { words: ['innocent', 'hurt', 'harm', 'victim', 'suffer', 'protect', 'children'], explanation: '📊 Care/Harm button: triggers compassion or outrage at suffering' },
    { words: ['fair', 'unfair', 'equal', 'justice', 'cheat', 'dishonest'], explanation: '📊 Fairness/Cheating button: sense of injustice' },
    { words: ['loyal', 'betray', 'patriot', 'traitor', 'united', 'divide'], explanation: '📊 Loyalty/Betrayal button: us-vs-them loyalty' },
    { words: ['authority', 'respect', 'obey', 'traditional', 'duty'], explanation: '📊 Authority/Subversion button: respect for hierarchy' },
  ],
  'simulacrum-meter': [
    { words: ['viral', 'meme', 'trending', 'share', 'like', 'follow'], explanation: '🌀 This references the internet itself — a simulation feeding on itself' },
    { words: ['everyone says', 'apparently', 'rumor', 'sources say', 'anonymous'], explanation: '🌀 Unverified information — at least one step from reality' },
    { words: ['literally', 'unreal', 'surreal', 'like a movie', 'dream'], explanation: '🌀 Calling attention to the gap between reality and representation' },
  ],
}

// ── HELPERS ──

export function getHighlightForWord(toolId: CoreToolId, word: string): HighlightEntry | null {
  const rules = HIGHLIGHT_RULES[toolId]
  if (!rules) return null
  const clean = word.toLowerCase().replace(/[^a-z]/g, '')
  for (const rule of rules) {
    if (rule.words.some(w => clean === w || clean.startsWith(w) || clean.endsWith(w))) {
      return { word, explanation: rule.explanation, color: CORE_TOOLS.find(t => t.id === toolId)?.color || '#888' }
    }
  }
  return null
}

export function getHighlightForAll(toolIds: CoreToolId[], text: string): Map<string, HighlightEntry[]> {
  const map = new Map<string, HighlightEntry[]>()
  const words = text.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/)
  const uniqueWords = [...new Set(words)]
  
  for (const toolId of toolIds) {
    const rules = HIGHLIGHT_RULES[toolId]
    if (!rules) continue
    const config = CORE_TOOLS.find(t => t.id === toolId)
    if (!config) continue
    
    for (const word of uniqueWords) {
      for (const rule of rules) {
        if (rule.words.some(w => word === w || word.startsWith(w) || word.endsWith(w))) {
          const existing = map.get(word) || []
          existing.push({ word, explanation: rule.explanation, color: config.color })
          map.set(word, existing)
          break
        }
      }
    }
  }
  return map
}

export function getToolById(id: string): CoreToolConfig | undefined {
  return CORE_TOOLS.find(t => t.id === id)
}

export function getCategoryIcon(cat: string): string {
  switch (cat) {
    case 'philosophy': return '📖'
    case 'cognitive-psychology': return '🧠'
    case 'media-sociology': return '📺'
    default: return '🔍'
  }
}

export function getCategoryLabel(cat: string): string {
  switch (cat) {
    case 'philosophy': return 'Philosophy'
    case 'cognitive-psychology': return 'Cognitive Psychology'
    case 'media-sociology': return 'Media Sociology'
    default: return 'Other'
  }
}
