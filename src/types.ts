// ── HYPERREALITY KEY v5 — Choose & Reveal ──

export type CoreToolId =
  | 'bad-arguments' | 'feelings-check' | 'brain-check'
  | 'hidden-story' | 'us-vs-them' | 'value-check' | 'fake-check'

export const ALL_CORE_TOOLS: CoreToolId[] = [
  'bad-arguments', 'feelings-check', 'brain-check',
  'hidden-story', 'us-vs-them', 'value-check', 'fake-check',
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
