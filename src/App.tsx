// ── HYPERREALITY KEY — English Only, Clean ──
import { useState, useEffect, useCallback } from 'react'
import { createSession, loadSession, clearSession, getGamePhase } from './game/GameEngine'
import type { GameSession } from './types'
import SplashScreen from './components/SplashScreen'
import GameScreen from './components/GameScreen'

function AppContent() {
  const [initialized, setInitialized] = useState(false)
  const [showSplash, setShowSplash] = useState(true)
  const [gameSession, setGameSession] = useState<GameSession | null>(null)

  useEffect(() => {
    const saved = loadSession()
    if (saved) {
      const phase = getGamePhase(saved)
      if (phase === 'victory' || phase === 'briefing') {
        setGameSession(saved)
        setShowSplash(false)
      } else {
        setShowSplash(true)
      }
    } else {
      setShowSplash(true)
    }
    setInitialized(true)
  }, [])

  const handleStart = useCallback((country: string) => {
    const session = createSession({ name: '', country, language: 'en' }, 1)
    setGameSession(session)
    setShowSplash(false)
  }, [])

  const handleRestart = useCallback(() => {
    clearSession()
    setGameSession(null)
    setShowSplash(true)
  }, [])

  const handleSessionUpdate = useCallback((updatedSession: GameSession) => {
    setGameSession(updatedSession)
  }, [])

  if (!initialized) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-neon-purple border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-neon-cyan font-mono text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  if (showSplash || !gameSession) {
    return <SplashScreen onStart={handleStart} />
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <header className="bg-dark-card border-b border-dark-border px-4 py-3 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">🔑</span>
            <span className="text-sm font-bold">
              <span className="text-neon-purple">HYPER</span>
              <span className="text-neon-cyan">REALITY</span>
              <span className="text-neon-pink">KEY</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            {gameSession.earnedBadges.length > 0 && (
              <span className="text-amber-400">🏅 {gameSession.earnedBadges.length}</span>
            )}
            <span className="text-neon-cyan">★ {gameSession.score}</span>
            <span className="text-gray-500 text-[10px]">{gameSession.player.country?.toUpperCase() || ''}</span>
          </div>
        </div>
      </header>
      <main>
        <GameScreen
          session={gameSession}
          onSessionUpdate={handleSessionUpdate}
          onRestart={handleRestart}
        />
      </main>
    </div>
  )
}

export default function App() {
  return <AppContent />
}
