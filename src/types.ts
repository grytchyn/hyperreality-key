// ── HYPERREALITY KEY v14 — Multi-Language Core Types ──

export type CoreToolId =
  | 'bad-arguments' | 'feelings-check' | 'brain-check'
  | 'hidden-story' | 'us-vs-them' | 'value-check' | 'fake-check'
  | 'source-check' | 'echo-chamber' | 'agenda-setting' | 'red-herring'
  | 'false-appeal'

export const ALL_CORE_TOOLS: CoreToolId[] = [
  'bad-arguments', 'feelings-check', 'brain-check',
  'hidden-story', 'us-vs-them', 'value-check', 'fake-check',
  'source-check', 'echo-chamber', 'agenda-setting', 'red-herring',
  'false-appeal',
]

// Single language type — used everywhere
export type Language = 'en' | 'de' | 'ua'

export interface CoreToolConfig {
  id: CoreToolId
  icon: string
  name: Record<Language, string>
  color: string
  description: Record<Language, string>
}

export interface HighlightEntry {
  word: string
  explanation: Record<Language, string>
  color: string
}

export interface HighlightRule {
  words: Record<Language, string[]>
  explanation: Record<Language, string>
}