export interface Article {
  title: string
  source: string
  content: string
  url: string
  publishedAt: string
  author?: string
}

export interface Tool {
  id: string
  name: string
  philosopher: string
  icon: string
  color: string
  description: string
  unlocked: boolean
}

export interface ToolResult {
  toolId: string
  findings: string[]
  score: number
  usedAt: number
}

export interface GameState {
  phase: 'loading' | 'splash' | 'playing' | 'won' | 'lost'
  article: Article | null
  userCountry: string
  userLanguage: string
  unlockedTools: string[]
  toolResults: ToolResult[]
  missionCluesFound: number
  totalClues: number
  score: number
  articleManipulation: { label: string, detected: boolean, correct: boolean }[]
}

export interface MissionClue {
  toolId: string
  text: string
  correctAnswer: string
}

export interface MissionEntry {
  id: string
  title: string
  description: string
  clues: MissionClue[]
  finalAnswer: string
  reward: string
}

export interface PhilosopherLevel {
  id: number
  label: string
  description: string
  simpleLabel: string
}

export interface PhilosopherCategory {
  id: string
  label: string
  description: string
  simpleLabel: string
}

export interface PhilosopherQuestion {
  id: string
  label: string
  description: string
  simpleLabel: string
}

export interface PhilosopherNarrative {
  id: string
  label: string
  description: string
  simpleLabel: string
}

export interface PhilosopherEntry {
  id: string
  name: string
  fullName: string
  era: string
  concept: string
  description: string
  simpleDescription: string
  toolName: string
  icon: string
  color: string
  question: string
  wikipediaUrl: string
  levels?: PhilosopherLevel[]
  categories?: PhilosopherCategory[]
  questions?: PhilosopherQuestion[]
  narratives?: PhilosopherNarrative[]
}

// ── GAME ENGINE TYPES ──

export type GamePhase = 'splash' | 'briefing' | 'playing' | 'result' | 'victory'

export interface PlayerInfo {
  name: string
  country: string
  language: string
}

export interface AnalysisAnswer {
  questionId: string
  selected: string
  correct: boolean
}

export interface Analysis {
  toolId: string
  articleTitle: string
  answers: AnalysisAnswer[]
  score: number
  timestamp: number
}

export interface Badge {
  id: string
  name: string
  description: string
  unlockedAt: number
}

export interface GameSession {
  player: PlayerInfo
  activeTools: string[]
  completedAnalyses: Analysis[]
  score: number
  tier: number
  skeletonProgress: Record<string, number>
  earnedBadges: Badge[]
}

// ── TIER 1 PHILOSOPHER TYPES ──

export type Tier1ToolType = 'ethos-pathos-logos' | 'fallacies' | 'cognitive-biases'

export interface Tier1Philosopher {
  id: string
  name: string
  toolName: string
  icon: string
  color: string
  simpleDescription: string
  wikipediaUrl: string
  type: Tier1ToolType
}

export interface EthosPathosLogosQuestion {
  statement: string
  correctAnswer: 'ethos' | 'pathos' | 'logos'
  explanation: string
}

export interface FallacyQuestion {
  statement: string
  correctAnswer: string
  options: { id: string; label: string }[]
  explanation: string
}

export interface BiasQuestion {
  statement: string
  correctAnswer: string
  options: { id: string; label: string }[]
  explanation: string
}

export interface SkeletonEntry {
  id: string
  name: string
  description: string
  icon: string
  color: string
  requiredAnalyses: number
  unlocked: boolean
}

// ── 7-TOOL SYSTEM TYPES ──

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

export interface CoreToolConfig {
  id: CoreToolId
  icon: string
  name: string
  shortLabel: string
  philosopher: string
  color: string
  unlockOrder: number
  description: string
  visualEffect: string
  wikipediaUrl: string
}

export interface InfoPlateData {
  id: string
  icon: string
  label: string
  value: string | number
  status: 'good' | 'warn' | 'danger'
}

export interface DeepDiveEntry {
  id: string
  icon: string
  name: string
  description: string
  philosopher: string
}
