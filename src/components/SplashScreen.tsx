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
        background: '#0a0a0f url(/assets/bg/splash-bg.png) center center / cover no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,10,15,0.6) 0%, rgba(10,10,15,0.8) 50%, rgba(10,10,15,0.95) 100%)',
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
              filter: 'drop-shadow(0 0 30px rgba(139,92,246,0.4))',
            }}
          />
        </div>

        {/* SCIENTIST AVATAR GRID */}
        <div
          className="rounded-2xl p-5 mb-4"
          style={{
            background: 'linear-gradient(180deg, rgba(19,19,26,0.95), rgba(15,15,22,0.98))',
            border: '1px solid rgba(139,92,246,0.15)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-center mb-4" style={{ color: '#8b5cf6' }}>
            🧠 Meet Your Teachers
          </div>

          <div className="grid grid-cols-5 gap-2">
            {visibleScientists.map((key, idx) => {
              const scientist = getScientistAvatar(key)
              const color = SPECTRUM_COLORS[idx] || '#8b5cf6'
              return (
                <div
                  key={key}
                  className="flex flex-col items-center gap-1 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div
                    className="w-12 h-12 rounded-full overflow-hidden ring-2"
                    style={{
                      borderColor: `${color}60`,
                      boxShadow: `0 0 12px ${color}30`,
                    }}
                  >
                    <img
                      src={scientist.avatar}
                      alt={scientist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[6px] font-mono text-center leading-tight" style={{ color: '#9ca3af' }}>
                    {scientist.name}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Loading indicator */}
          {currentChar < SCIENTIST_NAMES.length && (
            <div className="text-center mt-3">
              <span className="text-[9px] font-mono" style={{ color: '#6b7280' }}>
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
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(124,58,237,0.15))',
                  border: '1px solid rgba(139,92,246,0.3)',
                  color: '#e5e7eb',
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
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(139,92,246,0.3)',
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