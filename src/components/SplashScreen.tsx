// ── SPLASH SCREEN v8 — single source of scientists.ts ──
import { useState, useEffect, useCallback } from 'react'
import { SCIENTIST_AVATARS, SPECTRUM_COLORS, getScientistAvatar } from '../engine/scientists'

const SCIENTIST_NAMES = Object.keys(SCIENTIST_AVATARS)

interface SplashScreenProps {
  onStart: () => void
}

export default function SplashScreen({ onStart }: SplashScreenProps) {
  const [visible, setVisible] = useState(false)
  const [currentChar, setCurrentChar] = useState(0)

  useEffect(() => {
    setVisible(true)
    setCurrentChar(0)

    const interval = setInterval(() => {
      setCurrentChar(prev => {
        if (prev < SCIENTIST_NAMES.length) {
          return prev + 1
        }
        clearInterval(interval)
        return prev
      })
    }, 400)

    return () => clearInterval(interval)
  }, [])

  const handleStart = useCallback(() => {
    onStart()
  }, [onStart])

  const visibleScientists = SCIENTIST_NAMES.slice(0, currentChar)

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

        {/* SCIENTIST AVATAR GRID */}
        <div
          className="rounded-2xl p-5 mb-4"
          style={{
            background: 'linear-gradient(180deg, color-mix(in srgb, var(--color-dark-card) 95%, transparent), color-mix(in srgb, var(--color-dark-bg) 98%, transparent))',
            border: '1px solid color-mix(in srgb, var(--color-neon-purple) 15%, transparent)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-center mb-4" style={{ color: 'var(--color-neon-purple)' }}>
            🧠 Meet Your Teachers
          </div>

          <div className="grid grid-cols-5 gap-2">
            {visibleScientists.map((key, idx) => {
              const scientist = getScientistAvatar(key)
              const color = SPECTRUM_COLORS[idx] || 'var(--color-neon-purple)'
              return (
                <div
                  key={key}
                  className="flex flex-col items-center gap-1 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div
                    className="w-12 h-12 rounded-full overflow-hidden ring-2"
                    style={{
                      borderColor: `color-mix(in srgb, ${color} 37.5%, transparent)`,
                      boxShadow: `0 0 12px color-mix(in srgb, ${color} 19%, transparent)`,
                    }}
                  >
                    <img
                      src={scientist.avatar}
                      alt={scientist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[6px] font-mono text-center leading-tight" style={{ color: 'var(--color-text-secondary)' }}>
                    {scientist.name}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Loading indicator */}
          {currentChar < SCIENTIST_NAMES.length && (
            <div className="text-center mt-3">
              <span className="text-[9px] font-mono" style={{ color: 'var(--color-text-muted)' }}>
                Loading theorists...
              </span>
            </div>
          )}
        </div>

        {/* START BUTTON — styled as chat reply message */}
        {currentChar >= SCIENTIST_NAMES.length && (
          <div className="animate-fade-in-up">
            <div className="flex justify-end mb-2">
              <div
                className="max-w-[80%] rounded-2xl px-4 py-3 text-xs leading-relaxed cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                onClick={handleStart}
                style={{
                  background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-neon-purple) 25%, transparent), color-mix(in srgb, var(--color-neon-purple) 15%, transparent))',
                  border: '1px solid color-mix(in srgb, var(--color-neon-purple) 30%, transparent)',
                  color: 'var(--color-text-primary)',
                  borderBottomRightRadius: '4px',
                }}
              >
                <div className="text-[9px] font-mono mb-1" style={{ color: '#a78bfa' }}>→ REPLY</div>
                OK, I'll check this post for manipulation 🔍
              </div>
            </div>
            <div className="flex justify-end">
              <div
                className="rounded-2xl px-4 py-3 text-xs cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                onClick={handleStart}
                style={{
                  background: 'linear-gradient(135deg, var(--color-neon-purple), #7c3aed)',
                  color: '#fff',
                  boxShadow: '0 4px 20px color-mix(in srgb, var(--color-neon-purple) 30%, transparent)',
                  borderBottomRightRadius: '4px',
                }}
              >
                <span className="font-bold text-sm">Send →</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}