// ── HYPERREALITY KEY v3 — Layer Edition App ──
import { useState, useCallback } from 'react'
import { createSession } from './game/GameEngine'
import type { GameSession } from './types'
import SplashScreen from './components/SplashScreen'
import GameScreen from './components/GameScreen'
import VictoryScreen from './components/VictoryScreen'

export default function App() {
  const [gameSession, setGameSession] = useState<GameSession | null>(null)
  const [showSplash, setShowSplash] = useState(true)

  const handleStart = useCallback((_country: string) => {
    const session = createSession()
    setGameSession(session)
    setShowSplash(false)
  }, [])

  const handleSessionUpdate = useCallback((updated: GameSession) => {
    setGameSession(updated)
  }, [])

  const handleRestart = useCallback(() => {
    setGameSession(null)
    setShowSplash(true)
  }, [])

  if (showSplash || !gameSession) {
    return <SplashScreen onStart={handleStart} />
  }

  if (gameSession.completed) {
    return <VictoryScreen session={gameSession} onRestart={handleRestart} />
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <header className="bg-dark-card border-b border-dark-border px-3 py-2 sticky top-0 z-40">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-base">🔑</span>
            <span className="text-[11px] font-bold tracking-widest">
              <span className="text-neon-purple">HYPER</span>
              <span className="text-neon-cyan">REALITY</span>
              <span className="text-neon-pink">KEY</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-gray-500">Round {gameSession.currentRound + 1}/4</span>
            <span className="text-neon-cyan">★ {gameSession.score}</span>
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
