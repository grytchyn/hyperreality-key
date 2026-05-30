// ── VICTORY SCREEN ──

import type { GameSession } from '../types'

interface VictoryScreenProps {
  session: GameSession
  onRestart: () => void
}

export default function VictoryScreen({ session, onRestart }: VictoryScreenProps) {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in-up text-center">
        <div className="bg-dark-card border border-dark-border p-8">
          <div className="text-6xl mb-4 animate-pulse">🔑</div>
          <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Courier New', monospace" }}>
            <span className="text-neon-purple">HYPER</span>
            <span className="text-neon-cyan">REALITY</span>
            <span className="text-neon-pink">KEY</span>
          </h1>
          <p className="text-xs text-gray-400 font-mono mb-6">You've completed the journey.</p>

          <div className="bg-dark-surface border border-dark-border p-4 mb-6">
            <div className="text-center mb-3">
              <span className="text-neon-cyan font-mono text-3xl font-bold">★ {session.score}</span>
            </div>
            <div className="text-[10px] text-gray-500 font-mono">
              {session.rounds.length} rounds completed
            </div>
          </div>

          <button
            onClick={onRestart}
            className="pixel-btn w-full justify-center"
            style={{ borderColor: '#8b5cf6', color: '#8b5cf6' }}
          >
            🔄 Play Again
          </button>

          <p className="text-[9px] text-gray-600 font-mono mt-6">
            Every day, the simulation gets smarter. So do you.
          </p>
        </div>
      </div>
    </div>
  )
}
