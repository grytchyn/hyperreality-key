// ── 7 TOOLS — with large colorful buttons and popup descriptions ──

import type { CoreToolConfig, CoreToolId, HighlightEntry } from '../types'

export const CORE_TOOLS: CoreToolConfig[] = [
  {
    id: 'bad-arguments',
    icon: '⚠️',
    name: 'Bad Words',
    color: '#ef4444',
    description: 'Finds logical tricks: overgeneralization ("always", "never"), false authority, and fake facts.',
  },
  {
    id: 'feelings-check',
    icon: '🎭',
    name: 'Feelings',
    color: '#f59e0b',
    description: 'Shows emotion tricks: fear, urgency, outrage, and who they want you to trust.',
  },
  {
    id: 'brain-check',
    icon: '🧠',
    name: 'Brain Check',
    color: '#22c55e',
    description: 'Reveals thinking shortcuts: "everyone thinks this", "of course", dramatic numbers.',
  },
  {
    id: 'hidden-story',
    icon: '🗺️',
    name: 'Hidden Story',
    color: '#06b6d4',
    description: 'Finds the deeper myth: freedom, security, crisis — the story they sell as normal.',
  },
  {
    id: 'us-vs-them',
    icon: '⚔️',
    name: 'Us vs Them',
    color: '#d946ef',
    description: 'Reveals hidden battles: "we" vs "they", good vs bad, safe vs dangerous.',
  },
  {
    id: 'value-check',
    icon: '📊',
    name: 'Values',
    color: '#f97316',
    description: 'Checks which moral button is pressed: care, fairness, loyalty, authority.',
  },
  {
    id: 'fake-check',
    icon: '🌀',
    name: 'Fake Check',
    color: '#a78bfa',
    description: 'Measures how real this is: real report, biased, made up, or pure internet simulation.',
  },
]

// ── EXPANDED EMOJI ICONS for each tool (large decorative) ──
export const TOOL_LARGE_ICONS: Record<CoreToolId, string> = {
  'bad-arguments': '⚡',
  'feelings-check': '🔥',
  'brain-check': '🔬',
  'hidden-story': '🔍',
  'us-vs-them': '⚔️',
  'value-check': '🛡️',
  'fake-check': '👁️',
}

// ── HIGHLIGHT RULES ──

interface HighlightRule { words: string[]; explanation: string }

const HIGHLIGHT_RULES: Record<CoreToolId, HighlightRule[]> = {
  'bad-arguments': [
    { words: ['always', 'never', 'everyone', 'nobody', 'either', 'totally'], explanation: '⚠️ Absolute words — they ignore exceptions. Overgeneralization trick.' },
    { words: ['expert', 'professor', 'doctor', 'study', 'research', 'scientist', 'institute'], explanation: '⚠️ Authority name-drop. Are they truly neutral?' },
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
    { words: ['majority', 'most people', 'public', 'everyone', 'people say', '72%', '67%'], explanation: '🧠 Bandwagon — "everyone thinks this". Do they?' },
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

export function getHighlightsFor(toolIds: CoreToolId[], text: string): Map<string, HighlightEntry[]> {
  const map = new Map<string, HighlightEntry[]>()
  const words = text.toLowerCase().replace(/[^a-z\s%]/g, '').split(/\s+/)
  
  for (const toolId of toolIds) {
    const rules = HIGHLIGHT_RULES[toolId]
    if (!rules) continue
    const config = CORE_TOOLS.find(t => t.id === toolId)
    if (!config) continue
    
    for (const word of [...new Set(words)]) {
      for (const rule of rules) {
        if (rule.words.some(w => word === w || word.startsWith(w) || word.includes(w.replace(/[^a-z]/g, '')))) {
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
