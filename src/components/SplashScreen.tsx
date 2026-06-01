// ── SPLASH SCREEN — clean minimal version ──
import { useState, useEffect, useCallback } from 'react'

interface SplashScreenProps {
  onStart: () => void
}

export default function SplashScreen({ onStart }: SplashScreenProps) {
  const [visible, setVisible] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setVisible(true)
    // Brief loading animation before showing the start button
    const timer = setTimeout(() => {
      setReady(true)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const handleStart = useCallback(() => {
    onStart()
  }, [onStart])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: 'var(--color-dark-bg) url(/assets/bg/splash-bg.png) center center / cover no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'linear-gradient(180deg, color-mix(in srgb, var(--color-dark-bg) 60%, transparent) 0%, color-mix(in srgb, var(--color-dark-bg) 80%, transparent) 50%, color-mix(in srgb, var(--color-dark-bg) 95%, transparent) 100%)',
        }}
      />

      <div
        className={`relative z-10 w-full max-w-md transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* KEY LOGO */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/logo-new.png"
            alt="Hyperreality Key"
            className="h-16 sm:h-20 w-auto object-contain"
            style={{
              filter: 'drop-shadow(0 0 30px color-mix(in srgb, var(--color-neon-purple) 40%, transparent))',
            }}
          />
        </div>

        {/* WELCOME TEXT */}
        <div className="text-center mb-8">
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            A scientist friend shared something with you…
          </p>
        </div>

        {/* LOADING ANIMATION */}
        {!ready && (
          <div className="flex justify-center gap-2 mb-8">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="w-2 h-2 rounded-full animate-bounce"
                style={{
                  backgroundColor: 'var(--color-neon-purple)',
                  animationDelay: `${i * 200}ms`,
                  animationDuration: '1.2s',
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
        )}

        {/* START BUTTON — chat reply style */}
        {ready && (
          <div className="flex justify-center animate-fade-in-up" style={{ animation: 'fadeInUp 0.5s ease-out' }}>
            <div
              className="rounded-2xl px-6 py-4 text-sm cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
              onClick={handleStart}
              style={{
                background: 'linear-gradient(135deg, var(--color-neon-purple), #7c3aed)',
                color: '#fff',
                boxShadow: '0 4px 20px color-mix(in srgb, var(--color-neon-purple) 30%, transparent)',
                borderBottomRightRadius: '4px',
              }}
            >
              <span className="font-bold">OK, I'll check this post for manipulation 🔍</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}