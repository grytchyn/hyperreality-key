// ── HYPERREALITY KEY v3 — Layer Edition Types ──

export interface Article {
  title: string
  source: string
  content: string  // short — 1 paragraph like social media post
  url: string
  publishedAt: string
  category?: string
}

export type CoreToolId =
  | 'fallacy-scanner'
  | 'rhetoric-detector'
  | 'bias-detector'
  | 'meaning-map'
  | 'binary-scalpel'
  | 'moral-compass'
  | 'simulacrum-meter'

export const ALL_CORE_TOOLS: CoreToolId[] = [
  'fallacy-scanner',
  'rhetoric-detector',
  'bias-detector',
  'meaning-map',
  'binary-scalpel',
  'moral-compass',
  'simulacrum-meter',
]

export type ToolCategory = 'philosophy' | 'cognitive-psychology' | 'media-sociology'

export interface CoreToolConfig {
  id: CoreToolId
  icon: string
  name: string
  shortLabel: string
  philosopher: string
  color: string
  category: ToolCategory
  categoryLabel: string
  categoryIcon: string
  description: string
  simpleQuestion: string
  options: string[]
  correctAnswer: string
  explanation: string
  wikipediaUrl: string
}

export interface HighlightEntry {
  word: string
  explanation: string
  color: string
}

export interface ArticleRound {
  article: Article
  toolIds: CoreToolId[]
  questionAnswers: Record<string, string>   // toolId -> selected answer
  completed: boolean
}

export interface GameSession {
  rounds: ArticleRound[]
  currentRound: number
  score: number
  completed: boolean
}
