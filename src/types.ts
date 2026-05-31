// ── HYPERREALITY KEY v4 — Mission: Filter & Reveal ──

export interface Article {
  title: string
  source: string
  content: string
  url: string
  publishedAt: string
  category?: string
}

export interface ArticleMission {
  question: string
  hint: string
  answer: string
  answerToolId: CoreToolId | 'any'
}

export type CoreToolId =
  | 'bad-arguments'
  | 'feelings-check'
  | 'brain-check'
  | 'hidden-story'
  | 'us-vs-them'
  | 'value-check'
  | 'fake-check'

export const ALL_CORE_TOOLS: CoreToolId[] = [
  'bad-arguments', 'feelings-check', 'brain-check',
  'hidden-story', 'us-vs-them', 'value-check', 'fake-check',
]

export type ToolCategory = 'philosophy' | 'cognitive-psychology' | 'media-sociology'

export interface CoreToolConfig {
  id: CoreToolId
  icon: string
  name: string
  shortLabel: string
  color: string
  category: ToolCategory
  description: string
}

export interface HighlightEntry {
  word: string
  explanation: string
  color: string
}

export interface GameSession {
  roundIndex: number
  totalRounds: number
  score: number
  completed: boolean
}
