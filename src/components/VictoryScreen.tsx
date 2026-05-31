// ── VICTORY SCREEN v6 ──

interface VictoryScreenProps { score: number; onRestart: () => void }

export default function VictoryScreen({ score, onRestart }: VictoryScreenProps) {
  const maxScore = 90
  const pct = Math.round((score / maxScore) * 100)
  
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 left-1/3 w-96 h-96 rounded-full opacity-[0.1]"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)', animation: 'pulse 4s infinite' }} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)', animation: 'pulse 6s infinite 1.5s' }} />
      </div>

      <div className="w-full max-w-md animate-fade-in-up text-center relative z-10">
        <div className="relative rounded-2xl p-8 border"
          style={{
            background: 'linear-gradient(180deg, rgba(19,19,26,0.95), rgba(15,15,22,0.98))',
            borderColor: 'rgba(139,92,246,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 40px rgba(139,92,246,0.1)',
          }}>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl animate-bounce">🔑</div>
          
          <div className="mt-8 mb-2">
            <h1 className="text-2xl font-bold" style={{ fontFamily: "'Courier New', monospace" }}>
              <span className="text-neon-purple">HYPER</span>
              <span className="text-neon-cyan">REALITY</span>
              <span className="text-neon-pink">KEY</span>
            </h1>
          </div>
          <p className="text-sm text-gray-400 mb-6">Mission complete! You've trained your deception radar.</p>

          {/* Score circle */}
          <div className="flex justify-center mb-6">
            <div className="relative w-28 h-28 rounded-full flex items-center justify-center border-4"
              style={{
                borderColor: pct >= 80 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444',
                boxShadow: `0 0 30px ${pct >= 80 ? 'rgba(34,197,94,0.3)' : 'rgba(245,158,11,0.3)'}`,
                background: `${pct >= 80 ? 'rgba(34,197,94,0.1)' : 'rgba(245,158,11,0.1)'}`,
              }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{score}</div>
                <div className="text-[10px] text-gray-500 font-mono">/ {maxScore}</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-4 mb-6 text-left text-xs space-y-2"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-2 text-gray-400">
              <span>📰</span> <span>Posts analyzed: <strong className="text-white">9</strong></span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>🎯</span> <span>Correct: <strong className="text-white">{Math.round(score / 10)}</strong>/9</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>🧠</span> <span>Skills trained: <strong className="text-white">7 filters</strong></span>
            </div>
          </div>

          <button onClick={onRestart}
            className="w-full px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer hover:translate-y-[-2px]"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              color: '#fff',
              boxShadow: '0 4px 20px rgba(139,92,246,0.3)',
            }}>
            🔄 Play Again
          </button>

          <p className="text-[10px] text-gray-600 mt-4 font-mono">
            Now try spotting these tricks in real posts!
          </p>
        </div>
      </div>
    </div>
  )
}
