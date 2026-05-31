// ── SPLASH SCREEN v6 ──
import { useState, useEffect } from 'react'

interface SplashScreenProps { onStart: () => void }

export default function SplashScreen({ onStart }: SplashScreenProps) {
  const [ready, setReady] = useState(false)
  useEffect(() => { setReady(true) }, [])

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Animated bg */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-[30rem] h-[30rem] rounded-full opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)', animation: 'pulse 5s infinite' }} />
        <div className="absolute bottom-20 right-1/4 w-[25rem] h-[25rem] rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)', animation: 'pulse 7s infinite 1.5s' }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.4) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(139,92,246,0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
      </div>

      <div className="max-w-sm animate-fade-in-up relative z-10">
        {/* Logo area */}
        <div className="relative inline-block mb-6">
          <div className="text-6xl relative z-10 drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">🔑</div>
          <div className="absolute inset-0 animate-ping opacity-20 text-6xl">🔑</div>
        </div>
        
        <h1 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Courier New', monospace" }}>
          <span className="text-neon-purple">HYPER</span>
          <span className="text-neon-cyan">REALITY</span>
          <span className="text-neon-pink">KEY</span>
        </h1>
        <p className="text-sm text-gray-400 mb-8 max-w-xs mx-auto">See the hidden tricks behind every post you scroll past.</p>

        {/* How it works */}
        <div className="rounded-2xl p-5 mb-8 text-left text-xs space-y-3 border"
          style={{
            background: 'rgba(19,19,26,0.8)',
            borderColor: 'rgba(139,92,246,0.15)',
            backdropFilter: 'blur(8px)',
          }}>
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'rgba(139,92,246,0.15)' }}>
              <span className="text-sm">📰</span>
            </div>
            <div>
              <div className="text-white font-bold mb-0.5">Read a post</div>
              <div className="text-gray-500">Like in your social feed — short and real-looking</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'rgba(6,182,212,0.15)' }}>
              <span className="text-sm">🔍</span>
            </div>
            <div>
              <div className="text-white font-bold mb-0.5">Use filter tools</div>
              <div className="text-gray-500">Tap to reveal hidden manipulation in the text</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'rgba(236,72,153,0.15)' }}>
              <span className="text-sm">🎯</span>
            </div>
            <div>
              <div className="text-white font-bold mb-0.5">Answer the mission</div>
              <div className="text-gray-500">One question per post — pick the right trick</div>
            </div>
          </div>
        </div>

        {ready && (
          <button onClick={onStart}
            className="relative w-full px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer hover:translate-y-[-2px]"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              color: '#fff',
              boxShadow: '0 4px 24px rgba(139,92,246,0.4)',
              border: '1px solid rgba(139,92,246,0.3)',
            }}>
            🔍 Start Playing
          </button>
        )}
      </div>
    </div>
  )
}
