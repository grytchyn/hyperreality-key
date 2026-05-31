// ── SPLASH SCREEN v5 ──
import { useState, useEffect } from 'react'

interface SplashScreenProps { onStart: () => void }

export default function SplashScreen({ onStart }: SplashScreenProps) {
  const [ready, setReady] = useState(false)
  useEffect(() => { setReady(true) }, [])

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Animated bg */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', animation: 'pulse 4s infinite' }} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', animation: 'pulse 6s infinite 1s' }} />
      </div>

      <div className="max-w-sm animate-fade-in-up relative z-10">
        <div className="text-6xl mb-6">🔑</div>
        <h1 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Courier New', monospace" }}>
          <span className="text-neon-purple">HYPER</span>
          <span className="text-neon-cyan">REALITY</span>
          <span className="text-neon-pink">KEY</span>
        </h1>
        <p className="text-sm text-gray-400 font-mono mb-6">See the hidden tricks in everyday posts.</p>

        <div className="bg-dark-card border border-dark-border rounded-xl p-4 mb-6 text-left text-[11px] text-gray-400 font-mono leading-relaxed space-y-2">
          <div className="flex items-start gap-2">
            <span>📰</span>
            <span>You read a post — like in your feed</span>
          </div>
          <div className="flex items-start gap-2">
            <span>🔍</span>
            <span>Tap filters to reveal hidden manipulation</span>
          </div>
          <div className="flex items-start gap-2">
            <span>🎯</span>
            <span>Pick the right answer — one question per post</span>
          </div>
        </div>

        {ready && (
          <button onClick={onStart} className="pixel-btn w-full justify-center text-sm">
            🔍 Start Playing
          </button>
        )}
      </div>
    </div>
  )
}
