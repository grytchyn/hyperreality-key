// ── GAME ENGINE v3 — Layer Edition ──

import type { GameSession, ArticleRound, CoreToolId } from '../types'
import { getToolCategoryMix } from '../data/articleAssigner'

const STORAGE_KEY = 'hyperreality-v3'

export function createSession(): GameSession {
  // Round 1: 2 tools from different categories
  // Round 2: 2-3 tools
  // Round 3: 3 tools to cover all
  const session: GameSession = {
    rounds: [],
    currentRound: 0,
    score: 0,
    completed: false,
  }
  saveSession(session)
  return session
}

export function assignToolsToRound(roundIndex: number): CoreToolId[] {
  // Round 0: intro — 2 easy tools (fallacy-scanner + rhetoric-detector)
  // Round 1: add cognitive bias
  // Round 2: add philosophy tools
  // Round 3+: mix
  
  switch (roundIndex) {
    case 0: return ['fallacy-scanner', 'rhetoric-detector']
    case 1: return ['bias-detector', 'meaning-map']
    case 2: return ['binary-scalpel', 'moral-compass']
    case 3: return ['simulacrum-meter', 'fallacy-scanner']
    default: return getToolCategoryMix(roundIndex)
  }
}

export function loadSession(): GameSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as GameSession
  } catch { return null }
}

export function saveSession(session: GameSession): void {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(session)) } catch {}
}

export function updateRound(session: GameSession, round: ArticleRound): GameSession {
  const rounds = [...session.rounds]
  rounds[session.currentRound] = round
  const updated = { ...session, rounds }
  saveSession(updated)
  return updated
}

export function nextRound(session: GameSession): GameSession {
  const next = session.currentRound + 1
  const completed = next >= 4  // 4 rounds total
  const updated = { ...session, currentRound: next, completed }
  saveSession(updated)
  return updated
}

export function addScore(session: GameSession, points: number): GameSession {
  const updated = { ...session, score: session.score + points }
  saveSession(updated)
  return updated
}

export function clearSession(): void {
  try { localStorage.removeItem(STORAGE_KEY) } catch {}
}
