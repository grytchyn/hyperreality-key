// ── HYPERREALITY KEY v13 — 12 Core Tools ──

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

export interface CoreToolConfig {
  id: CoreToolId
  icon: string
  name: string
  color: string
  description: string
}

export interface HighlightEntry {
  word: string
  explanation: string
  color: string
}

export interface HighlightRule {
  words: string[]
  explanation: string
}