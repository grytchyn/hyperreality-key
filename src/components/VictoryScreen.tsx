// ── VICTORY SCREEN v4 ──

interface VictoryScreenProps {
  score: number
  onRestart: () => void
}

export default function VictoryScreen({ score, onRestart }: VictoryScreenProps) {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in-up text-center">
        <div className="bg-dark-card border border-border p-8">
          <div className="text-6xl mb-4 animate-pulse">🔑</div>
          <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Courier New', monospace" }}>
            <span className="text-neon-purple">HYPER</span>
            <span className="text-neon-cyan">REALITY</span>
            <span className="text-neon-pink">KEY</span>
          </h1>
          <p className="text-xs text-gray-400 font-mono mb-6">You've completed all missions!</p>

          <div className="bg-dark-surface border border-gray-700 p-4 mb-6">
            <div className="text-center">
              <span className="text-neon-cyan font-mono text-3xl font-bold">★ {score}</span>
              <div className="text-[10px] text-gray-500 font-mono mt-1">points earned</div>
            </div>
          </div>

          <button onClick={onRestart} className="pixel-btn w-full justify-center"
            style={{ borderColor: '#8b5cf6', color: '#8b5cf6' }}>
            🔄 Play Again
          </button>

          <p className="text-[9px] text-gray-600 font-mono mt-6">
            Now try spotting these tricks in real posts!
          </p>
        </div>
      </div>
    </div>
  )
}
