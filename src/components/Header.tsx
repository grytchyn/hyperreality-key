// ── HEADER v2 — Bigger logo + score display ──
interface HeaderProps {
  level?: number
  levelName?: string
  levelColor?: string
  showLevel?: boolean
  totalScore?: number
}

export default function Header({ level, levelName, levelColor = '#8b5cf6', showLevel = false, totalScore }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 w-full px-4 py-3"
      style={{
        background: 'linear-gradient(180deg, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.85) 80%, transparent 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(139,92,246,0.12)',
      }}>
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        {/* Big Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo-new.png"
            alt="Hyperreality Key"
            className="h-14 sm:h-16 w-auto object-contain"
            style={{
              filter: 'brightness(1.05) contrast(1.1) drop-shadow(0 0 25px rgba(139,92,246,0.35))',
            }}
          />
        </div>

        {/* Right side: level badge + score + decorations */}
        <div className="flex items-center gap-3">
          {showLevel && level && (
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider"
              style={{
                background: `${levelColor}12`,
                border: `1px solid ${levelColor}30`,
                color: levelColor,
                boxShadow: `0 0 15px ${levelColor}15`,
              }}>
              <span className="text-[8px]">◆</span>
              <span>
                {levelName || `LEVEL ${level}`}
              </span>
              <span className="text-[8px]">◆</span>
            </div>
          )}

          {/* Score display — only when positive */}
          {totalScore !== undefined && totalScore > 0 && (
            <div
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-mono font-bold"
              style={{
                background: 'rgba(251,191,36,0.1)',
                border: '1px solid rgba(251,191,36,0.2)',
                color: '#fbbf24',
              }}>
              <span>★</span>
              <span className="tabular-nums">{totalScore}</span>
            </div>
          )}

          {/* Decorative dot-matrix */}
          <div className="hidden sm:flex items-center gap-1">
            <span className="w-1 h-1 rounded-full" style={{ background: '#8b5cf6', opacity: 0.4 }} />
            <span className="w-1 h-1 rounded-full" style={{ background: '#06b6d4', opacity: 0.3 }} />
            <span className="w-1 h-1 rounded-full" style={{ background: '#ec4899', opacity: 0.4 }} />
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(6,182,212,0.3), transparent)',
        }}
      />
    </header>
  )
}