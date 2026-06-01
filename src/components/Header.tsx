// ── HEADER v1 — Big logo, sleek glass-morphism redesign ──
interface HeaderProps {
  level?: number
  levelName?: string
  levelColor?: string
  showLevel?: boolean
}

export default function Header({ level, levelName, levelColor = '#8b5cf6', showLevel = false }: HeaderProps) {
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
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo-new.png"
            alt="Hyperreality Key"
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            style={{
              filter: 'brightness(1.05) contrast(1.1)',
            }}
          />
        </div>

        {/* Right side: level badge + cyberpunk decorations */}
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