// ── API Client — local-first with background API cache warm-up ──
import type { CoreToolId, HighlightRule } from '../types'

export interface MissionPost {
  id: number
  title: string
  source: string
  url: string
  logo: string
  scientist: string
  color: string
  content: string
  highlightRules: Record<CoreToolId, HighlightRule[]>
  standardViolations?: { rule: string; text: string }[]
  explanation: string
  choices: { text: string; correct: boolean }[]
}

const API_BASE = import.meta.env.VITE_API_URL || 'https://hyperreality-key-api.onrender.com'

let cachedMissions: MissionPost[] | null = null
let localCache: MissionPost[] | null = null

async function loadLocal(): Promise<MissionPost[]> {
  if (localCache) return localCache
  const { MISSIONS } = await import('../data/missions')
  localCache = MISSIONS
  return localCache
}

async function warmupApiCache(): Promise<void> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/articles`, {
      signal: AbortSignal.timeout(10000)
    })
    if (!res.ok) return
    const json = await res.json()
    if (!json.success) return

    const fullArticles = await Promise.all(
      json.data.map((a: any) =>
        fetch(`${API_BASE}/api/v1/articles/${a.id}`, {
          signal: AbortSignal.timeout(10000)
        }).then(r => r.json()).then(j => j.data)
      )
    )
    // Replace cache with API data — future calls get fresh data
    cachedMissions = fullArticles
  } catch {
    // Silent — local missions already loaded
  }
}

export async function fetchMissions(): Promise<MissionPost[]> {
  if (cachedMissions) return cachedMissions

  // 1. Return local data IMMEDIATELY (no waiting for API)
  const local = await loadLocal()
  cachedMissions = local // future calls return instantly

  // 2. Fire API warm-up in background (never blocks the app)
  warmupApiCache()

  return local
}

export async function fetchMission(id: number): Promise<MissionPost | null> {
  // Check cache first
  if (cachedMissions) {
    const found = cachedMissions.find(m => m.id === id)
    if (found) return found
  }

  // Fall back to local data
  const local = await loadLocal()
  return local.find(m => m.id === id) || null
}