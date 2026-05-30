// ── 7 CORE TOOLS — English Only, Simple Names ──
import type { CoreToolConfig, DeepDiveEntry } from '../types'

export const CORE_TOOLS: CoreToolConfig[] = [
  {
    id: 'fallacy-scanner',
    icon: '⚡',
    name: 'Find Bad Arguments',
    shortLabel: 'Bad Args',
    philosopher: 'Aristotle',
    color: '#ef4444',
    unlockOrder: 1,
    description: 'Finds logical tricks: Ad Hominem, Straw Man, false dilemmas, and more.',
    visualEffect: 'Red highlights on bad logic',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Fallacy',
  },
  {
    id: 'rhetoric-detector',
    icon: '🎭',
    name: 'See Persuasion Tricks',
    shortLabel: 'Tricks',
    philosopher: 'Aristotle',
    color: '#f59e0b',
    unlockOrder: 2,
    description: 'Shows 3 persuasion styles: Authority (Ethos), Emotion (Pathos), Logic (Logos).',
    visualEffect: '3-color heatmap on article text',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Aristotle',
  },
  {
    id: 'bias-detector',
    icon: '🧠',
    name: 'Spot Brain Shortcuts',
    shortLabel: 'Brain Bias',
    philosopher: 'Kahneman & Tversky',
    color: '#fbbf24',
    unlockOrder: 3,
    description: 'Detects thinking errors: Confirmation Bias, Anchoring, Framing, and more.',
    visualEffect: 'Yellow highlights on biased phrases',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Cognitive_bias',
  },
  {
    id: 'meaning-map',
    icon: '🗺️',
    name: 'Uncover Hidden Meaning',
    shortLabel: 'Hidden Meaning',
    philosopher: 'Roland Barthes',
    color: '#06b6d4',
    unlockOrder: 4,
    description: 'Peels 3 layers: What it says → What it implies → The myth it sells.',
    visualEffect: '3 stackable overlays on article',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Roland_Barthes',
  },
  {
    id: 'binary-scalpel',
    icon: '⚔️',
    name: 'Find Hidden Battles',
    shortLabel: 'Battles',
    philosopher: 'Jacques Derrida',
    color: '#8b5cf6',
    unlockOrder: 5,
    description: 'Reveals hidden opposites: Good/Evil, Us/Them, Natural/Artificial.',
    visualEffect: 'Opposing pairs in purple/pink',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Jacques_Derrida',
  },
  {
    id: 'moral-compass',
    icon: '📊',
    name: 'Check Moral Buttons',
    shortLabel: 'Morals',
    philosopher: 'Jonathan Haidt',
    color: '#22c55e',
    unlockOrder: 6,
    description: 'Shows which of 6 moral senses are being pressed: Care, Fairness, Loyalty, etc.',
    visualEffect: 'Radar chart + colored text',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Jonathan_Haidt',
  },
  {
    id: 'simulacrum-meter',
    icon: '🌀',
    name: 'How Real Is This?',
    shortLabel: 'Reality',
    philosopher: 'Jean Baudrillard',
    color: '#a78bfa',
    unlockOrder: 7,
    description: 'Measures how far from reality: Real Report → Hidden Agenda → AI Fake → Meme World.',
    visualEffect: '4-segment gauge + dramatic text fade',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Jean_Baudrillard',
  },
]

export const DEEP_DIVES: DeepDiveEntry[] = [
  {
    id: 'foucault-power',
    icon: '👁️',
    name: 'Who Speaks?',
    description: 'Who talks? Who is silenced? Who benefits?',
    philosopher: 'Michel Foucault',
  },
  {
    id: 'lyotard-narrative',
    icon: '📖',
    name: 'The Big Story',
    description: 'Which grand story carries the text? Progress? Apocalypse?',
    philosopher: 'Jean-François Lyotard',
  },
  {
    id: 'deleuze-rhizome',
    icon: '🔗',
    name: 'False Connections',
    description: 'Which connections are fake? Which real ones are missing?',
    philosopher: 'Deleuze & Guattari',
  },
  {
    id: 'marx-capital',
    icon: '🏛️',
    name: 'Who Profits?',
    description: 'What kind of value is being promoted? Money? Status? Education?',
    philosopher: 'Marx & Bourdieu',
  },
  {
    id: 'zuboff-surveillance',
    icon: '🔮',
    name: 'Are You Tracked?',
    description: 'Does this text push surveillance? Data collection?',
    philosopher: 'Shoshana Zuboff',
  },
]

// ── HELPERS ──

export function getToolById(id: string): CoreToolConfig | undefined {
  return CORE_TOOLS.find(t => t.id === id)
}

export function getToolUnlockOrder(id: string): number {
  return CORE_TOOLS.find(t => t.id === id)?.unlockOrder ?? 99
}

export function getUnlockedCount(completedCount: number): number {
  return Math.min(completedCount + 1, 7)
}

export const MAX_TOOLS = 7

// ── INFO PLATE CALCULATORS ──
import type { InfoPlateData } from '../types'

export function calcInfoPlates(usedTools: string[], articleLength: number): InfoPlateData[] {
  const plates: InfoPlateData[] = []

  const spectacleScore = Math.min(10, Math.max(1, Math.round(articleLength / 80)))
  plates.push({
    id: 'spectacle',
    icon: '🎭',
    label: 'Spectacle',
    value: `${spectacleScore}/10`,
    status: spectacleScore > 7 ? 'danger' : spectacleScore > 4 ? 'warn' : 'good',
  })

  const confidenceBase = usedTools.length > 0 ? 30 + usedTools.length * 8 : 50
  plates.push({
    id: 'confidence',
    icon: '🧬',
    label: 'Confidence',
    value: `${confidenceBase}%`,
    status: confidenceBase < 40 ? 'danger' : confidenceBase < 70 ? 'warn' : 'good',
  })

  if (articleLength > 800) {
    const fatigue = Math.min(10, Math.round(articleLength / 200) + 2)
    plates.push({
      id: 'fatigue',
      icon: '💤',
      label: 'Fatigue',
      value: `${fatigue}/10`,
      status: fatigue > 7 ? 'danger' : fatigue > 4 ? 'warn' : 'good',
    })
  }

  return plates
}
