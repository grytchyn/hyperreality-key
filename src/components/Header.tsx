// ── HEADER v3 — Full cropped logo (icon + title text) ──
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
      className="sticky top-0 z-50 w-full px-4 py-2"
      style={{
        background: 'linear-gradient(180deg, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.85) 80%, transparent 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(139,92,246,0.12)',
      }}>
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        {/* Full logo — shield icon + HYPERREALITY KEY text */}
        <div className="flex items-center">
          <img
            src="/assets/logo-new.png"
            alt="Hyperreality Key"
            className="h-11 sm:h-14 w-auto object-contain"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(139,92,246,0.3))',
            }}
          />
        </div>

        {/* Right side: level badge + score */}
        <div className="flex items-center gap-2.5">
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
                background: 'rgba(251,191,36,0.1)',
                border: '1px solid rgba(251,191,36,0.2)',
                color: '#fbbf24',
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
          background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(6,182,212,0.3), transparent)',
        }}
      />
    </header>
  )
}