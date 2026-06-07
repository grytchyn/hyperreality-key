// ── API Client — fetch missions from backend with local fallback ──
import type { CoreToolId, HighlightRule } from '../types'

export interface MissionPost {
  id: number
  title: string
  source: string
  url: string
  scientist: string
  color: string
  content: string
  highlightRules: Record<CoreToolId, HighlightRule[]>
  standardViolations?: { rule: string; text: string }[]
  explanation: string
  choices: { text: string; correct: boolean }[]
}

const API_BASE = import.meta.env.VITE_API_URL || 'https://hyperreality-key-api.onrender.com'

// Fallback: local missions if API is down
async function loadLocalMissions(): Promise<MissionPost[]> {
  const { MISSIONS } = await import('../data/missions')
  return MISSIONS
}

let cachedMissions: MissionPost[] | null = null

export async function fetchMissions(): Promise<MissionPost[]> {
  if (cachedMissions) return cachedMissions

  try {
    const res = await fetch(`${API_BASE}/api/v1/articles`, {
      signal: AbortSignal.timeout(5000)
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const json = await res.json()
    if (!json.success) throw new Error('API returned error')

    // Fetch full data for each article
    const fullArticles = await Promise.all(
      json.data.map((a: any) =>
        fetch(`${API_BASE}/api/v1/articles/${a.id}`, {
          signal: AbortSignal.timeout(5000)
        }).then(r => r.json()).then(j => j.data)
      )
    )
    cachedMissions = fullArticles
    return fullArticles
  } catch (err) {
    console.warn('API unavailable, using local missions:', err)
    return loadLocalMissions()
  }
}

export async function fetchMission(id: number): Promise<MissionPost | null> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/articles/${id}`, {
      signal: AbortSignal.timeout(5000)
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const json = await res.json()
    return json.data
  } catch {
    const local = await loadLocalMissions()
    return local.find(m => m.id === id) || null
  }
}
