// ── HEADER v5 — Language Switcher ──
import type { Language } from '../types'
import { LANGUAGES } from '../hooks/useLanguage'

interface HeaderProps {
  level?: number
  levelName?: string
  levelColor?: string
  showLevel?: boolean
  totalScore?: number
  currentLanguage?: Language
  onSetLanguage?: (lang: Language) => void
}

export default function Header({
  level,
  levelName,
  levelColor = '#8b5cf6',
  showLevel = false,
  totalScore,
  currentLanguage,
  onSetLanguage,
}: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 w-full px-4 py-3"
      style={{
        background: 'linear-gradient(180deg, color-mix(in srgb, var(--color-dark-bg) 95%, transparent) 0%, color-mix(in srgb, var(--color-dark-bg) 85%, transparent) 80%, transparent 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid color-mix(in srgb, var(--color-neon-purple) 12%, transparent)',
      }}>
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        {/* Full logo with tagline */}
        <div className="flex items-center">
          <img
            src="/assets/logo-new.png"
            alt="Hyperreality Key — Spot the Manipulation"
            className="h-20 sm:h-24 w-auto object-contain"
            style={{
              filter: 'drop-shadow(0 0 25px color-mix(in srgb, var(--color-neon-purple) 35%, transparent))',
            }}
          />
        </div>

        {/* Right side: level badge + score + language */}
        <div className="flex items-center gap-2.5">
          {/* Language Switcher */}
          {currentLanguage && onSetLanguage && (
            <div
              className="flex items-center rounded-lg overflow-hidden"
              style={{
                border: '1px solid color-mix(in srgb, var(--color-neon-purple) 20%, transparent)',
              }}
            >
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onSetLanguage(lang.code)}
                  className="px-2 py-1 text-[9px] font-mono font-bold transition-all duration-150"
                  style={{
                    background: currentLanguage === lang.code
                      ? 'color-mix(in srgb, var(--color-neon-purple) 25%, transparent)'
                      : 'transparent',
                    color: currentLanguage === lang.code
                      ? 'var(--color-text-primary)'
                      : 'var(--color-text-muted)',
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}

          {/* Level badge */}
          {showLevel && level && (
            <div
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[9px] font-mono font-bold uppercase tracking-wider"
              style={{
                background: `${levelColor}12`,
                border: `1px solid ${levelColor}30`,
                color: levelColor,
                boxShadow: `0 0 12px ${levelColor}12`,
              }}>
              <span className="text-[7px]">◆</span>
              <span className="hidden sm:inline">{levelName || `LEVEL ${level}`}</span>
              <span className="sm:hidden">L{level}</span>
              <span className="text-[7px]">◆</span>
            </div>
          )}

          {/* Score — only after earning points */}
          {totalScore !== undefined && totalScore > 0 && (
            <div
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-[9px] font-mono font-bold tabular-nums"
              style={{
                background: 'color-mix(in srgb, var(--color-pixel-yellow) 10%, transparent)',
                border: '1px solid color-mix(in srgb, var(--color-pixel-yellow) 20%, transparent)',
                color: 'var(--color-pixel-yellow)',
              }}>
              <span>★ {totalScore}</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, color-mix(in srgb, var(--color-neon-purple) 30%, transparent), color-mix(in srgb, var(--color-neon-cyan) 30%, transparent), transparent)',
        }}
      />
    </header>
  )
}