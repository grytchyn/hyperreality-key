// ── SPLASH SCREEN v4 ──
import { useState, useEffect } from 'react'

interface SplashScreenProps {
  onStart: () => void
}

export default function SplashScreen({ onStart }: SplashScreenProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => { setReady(true) }, [])

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-sm animate-fade-in-up">
        <div className="text-5xl mb-6">🔑</div>
        <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Courier New', monospace" }}>
          <span className="text-neon-purple">HYPER</span>
          <span className="text-neon-cyan">REALITY</span>
          <span className="text-neon-pink">KEY</span>
        </h1>
        <p className="text-xs text-gray-400 font-mono mb-6">See what hidden tricks are hiding in everyday posts.</p>

        <div className="text-[10px] text-gray-600 font-mono mb-6 leading-relaxed space-y-1">
          <p>📰 Read a post → 🎯 Answer one question</p>
          <p>🔍 Tap a filter → 🖱️ Hover highlighted words</p>
          <p>💡 Find the clue → ✏️ Type your answer</p>
        </div>

        {ready && (
          <button onClick={onStart} className="pixel-btn w-full justify-center">
            🔍 Start
          </button>
        )}
      </div>
    </div>
  )
}
