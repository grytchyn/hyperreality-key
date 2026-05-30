import type { GameSession, PlayerInfo, Analysis, AnalysisAnswer, Badge } from '../types'

const STORAGE_KEY = 'hyperreality-game-session'

export function loadSession(): GameSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as GameSession
  } catch {
    return null
  }
}

export function saveSession(session: GameSession): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
  } catch { /* silent fail */ }
}

export function createSession(player: PlayerInfo, tier: number = 1): GameSession {
  const session: GameSession = {
    player,
    activeTools: ['fallacy-scanner', 'rhetoric-detector', 'bias-detector'],
    completedAnalyses: [],
    score: 0,
    tier,
    skeletonProgress: {},
    earnedBadges: [],
  }
  saveSession(session)
  return session
}

export function recordAnalysis(session: GameSession, analysis: Analysis): GameSession {
  const updated: GameSession = {
    ...session,
    completedAnalyses: [...session.completedAnalyses, analysis],
    score: session.score + analysis.score,
  }

  const newBadges = checkBadgeUnlocks(updated)
  if (newBadges.length > 0) {
    updated.earnedBadges = [...updated.earnedBadges, ...newBadges]
  }

  saveSession(updated)
  return updated
}

export function calcAnalysisScore(answers: AnalysisAnswer[]): number {
  const correctCount = answers.filter(a => a.correct).length
  const total = answers.length
  if (total === 0) return 0
  return Math.round((correctCount / total) * 100)
}

function checkBadgeUnlocks(session: GameSession): Badge[] {
  const now = Date.now()
  const newBadges: Badge[] = []
  const count = session.completedAnalyses.length

  if (count >= 1 && !session.earnedBadges.find(b => b.id === 'first-analysis')) {
    newBadges.push({ id: 'first-analysis', name: 'First Analysis', description: 'Completed your first tool analysis', unlockedAt: now })
  }
  if (count >= 3 && !session.earnedBadges.find(b => b.id === 'tool-collector')) {
    newBadges.push({ id: 'tool-collector', name: 'Tool Collector', description: 'Used 3 different tools', unlockedAt: now })
  }
  if (count >= 5 && !session.earnedBadges.find(b => b.id === 'analyst')) {
    newBadges.push({ id: 'analyst', name: 'Analyst', description: 'Completed 5 analyses', unlockedAt: now })
  }
  if (count >= 7 && !session.earnedBadges.find(b => b.id === 'hyperreality-key')) {
    newBadges.push({ id: 'hyperreality-key', name: 'Hyperreality Key', description: 'Used all 7 tools', unlockedAt: now })
  }

  return newBadges
}

export function getGamePhase(session: GameSession): 'briefing' | 'analyzing' | 'synthesis' | 'victory' {
  const count = session.completedAnalyses.length
  if (count === 0) return 'briefing'
  if (count < 7) return 'analyzing'
  return 'victory'
}

export function clearSession(): void {
  try { localStorage.removeItem(STORAGE_KEY) } catch { /* silent fail */ }
}
