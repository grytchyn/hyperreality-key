// ── 7 TOOLS — Simple names, for mission mode ──

import type { CoreToolConfig, CoreToolId, HighlightEntry } from '../types'

export const CORE_TOOLS: CoreToolConfig[] = [
  {
    id: 'bad-arguments',
    icon: '⚠️',
    name: 'Bad Words',
    shortLabel: 'Bad Words',
    color: '#ef4444',
    category: 'media-sociology',
    description: 'Finds logical tricks: overgeneralization ("always", "never"), false authority, and fake facts.',
  },
  {
    id: 'feelings-check',
    icon: '🎭',
    name: 'Feelings Check',
    shortLabel: 'Feelings',
    color: '#f59e0b',
    category: 'media-sociology',
    description: 'Shows emotion tricks: fear, urgency, outrage, and who they want you to trust.',
  },
  {
    id: 'brain-check',
    icon: '🧠',
    name: 'Brain Check',
    shortLabel: 'Brain',
    color: '#22c55e',
    category: 'cognitive-psychology',
    description: 'Reveals thinking shortcuts: "everyone thinks this", "of course", dramatic numbers.',
  },
  {
    id: 'hidden-story',
    icon: '🗺️',
    name: 'Hidden Story',
    shortLabel: 'Story',
    color: '#06b6d4',
    category: 'philosophy',
    description: 'Finds the deeper myth: freedom, security, crisis — the story they sell as normal.',
  },
  {
    id: 'us-vs-them',
    icon: '⚔️',
    name: 'Us vs Them',
    shortLabel: 'Divide',
    color: '#d946ef',
    category: 'philosophy',
    description: 'Reveals hidden battles: "we" vs "they", good vs bad, safe vs dangerous.',
  },
  {
    id: 'value-check',
    icon: '📊',
    name: 'Value Check',
    shortLabel: 'Values',
    color: '#f97316',
    category: 'cognitive-psychology',
    description: 'Checks which moral button is pressed: care, fairness, loyalty, authority.',
  },
  {
    id: 'fake-check',
    icon: '🌀',
    name: 'Fake Check',
    shortLabel: 'Fake',
    color: '#a78bfa',
    category: 'philosophy',
    description: 'Measures how real this is: real report, biased, made up, or pure internet simulation.',
  },
]

// ── HIGHLIGHTS ──

interface HighlightRule {
  words: string[]
  explanation: string
}

const HIGHLIGHT_RULES: Record<CoreToolId, HighlightRule[]> = {
  'bad-arguments': [
    { words: ['always', 'never', 'everyone', 'nobody', 'either', 'totally'], explanation: '⚠️ Absolute words — they ignore exceptions. Overgeneralization trick.' },
    { words: ['expert', 'professor', 'doctor', 'study', 'research', 'scientist'], explanation: '⚠️ Authority name-drop. Are they truly neutral?' },
    { words: ['obviously', 'clearly', 'undeniable', 'typical'], explanation: '⚠️ Claiming something is obvious — avoids real proof.' },
    { words: ['statistics', 'numbers', 'percent', 'majority', 'study shows', 'proves'], explanation: '⚠️ Fake facts: "proves" without showing the proof.' },
  ],
  'feelings-check': [
    { words: ['fear', 'danger', 'terrible', 'unthinkable', 'crisis', 'urgent', 'scandal', 'outrage', 'horrible', 'shocking'], explanation: '🎭 Fear trigger — making you scared on purpose.' },
    { words: ['expert', 'professor', 'doctor', 'study', 'research', 'science', 'authority', 'institute'], explanation: '🎭 Trust authority trick — who benefits from your trust?' },
    { words: ['therefore', 'because', 'proves', 'fact', 'statistics', 'logical'], explanation: '🎭 Fake logic: sounds reasonable, but check the numbers.' },
  ],
  'brain-check': [
    { words: ['everyone knows', 'of course', 'obviously', 'naturally', 'common sense', 'undeniable'], explanation: '🧠 Framing — they present opinion as obvious truth.' },
    { words: ['majority', 'most people', 'public', 'everyone', 'people say'], explanation: '🧠 Bandwagon — "everyone thinks this". Do they?' },
    { words: ['first', 'only', 'never before', 'unprecedented', 'record', 'biggest', 'worst'], explanation: '🧠 Drama number — sets an extreme anchor.' },
  ],
  'hidden-story': [
    { words: ['freedom', 'security', 'order', 'chaos', 'progress', 'tradition', 'crisis'], explanation: '🗺️ Big story word — carries a hidden message about how the world should be.' },
    { words: ['natural', 'normal', 'common sense', 'obvious', 'right', 'proper'], explanation: '🗺️ "Normal" trick — who decided what is normal?' },
    { words: ['protect', 'defend', 'save', 'threat', 'danger', 'safe', 'security'], explanation: '🗺️ Protection myth — someone needs saving. From whom?' },
  ],
  'us-vs-them': [
    { words: ['we', 'us', 'our', 'ourselves'], explanation: '⚔️ "Us" — who belongs? Who is left out?' },
    { words: ['they', 'them', 'their', 'those', 'these people', 'outsiders', 'foreigners'], explanation: '⚔️ "Them" — the other side. How are they described?' },
    { words: ['good', 'bad', 'evil', 'pure', 'dangerous', 'safe', 'right', 'wrong'], explanation: '⚔️ Binary — only two options, no middle ground.' },
  ],
  'value-check': [
    { words: ['innocent', 'hurt', 'harm', 'victim', 'suffer', 'protect', 'children'], explanation: '📊 Care button — makes you feel compassion or outrage.' },
    { words: ['fair', 'unfair', 'equal', 'justice', 'cheat', 'dishonest', 'corrupt'], explanation: '📊 Fairness button — sense of injustice triggered.' },
    { words: ['loyal', 'betray', 'patriot', 'traitor', 'united', 'divide', 'together'], explanation: '📊 Loyalty button — us vs them loyalty.' },
    { words: ['authority', 'respect', 'obey', 'traditional', 'duty', 'order'], explanation: '📊 Authority button — respect the hierarchy.' },
  ],
  'fake-check': [
    { words: ['viral', 'meme', 'trending', 'share', 'like', 'follow', 'internet', 'social media'], explanation: '🌀 Internet buzz — this references the web itself, feeding on attention.' },
    { words: ['apparently', 'rumor', 'anonymous', 'sources say', 'unconfirmed', 'allegedly'], explanation: '🌀 Unverified — at least one step removed from reality.' },
    { words: ['literally', 'unreal', 'surreal', 'like a movie', 'dream', 'crazy'], explanation: '🌀 Reality gap — the text itself admits something is off.' },
  ],
}

// ── HELPERS ──

export function getHighlightForWord(toolId: CoreToolId, word: string): HighlightEntry | null {
  const rules = HIGHLIGHT_RULES[toolId]
  if (!rules) return null
  const clean = word.toLowerCase().replace(/[^a-z]/g, '')
  for (const rule of rules) {
    if (rule.words.some(w => clean === w || clean.startsWith(w) || (clean.length > 3 && rule.words.some(rw => clean.includes(rw.toLowerCase()))))) {
      return { word, explanation: rule.explanation, color: CORE_TOOLS.find(t => t.id === toolId)?.color || '#888' }
    }
  }
  return null
}

export function getHighlightsFor(toolIds: CoreToolId[], text: string): Map<string, HighlightEntry[]> {
  const map = new Map<string, HighlightEntry[]>()
  const words = text.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/)
  
  for (const toolId of toolIds) {
    const rules = HIGHLIGHT_RULES[toolId]
    if (!rules) continue
    const config = CORE_TOOLS.find(t => t.id === toolId)
    if (!config) continue
    
    for (const word of [...new Set(words)]) {
      for (const rule of rules) {
        if (rule.words.some(w => word === w || word.startsWith(w) || (word.length > 3 && rule.words.some(rw => word.includes(rw.toLowerCase()))))) {
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
