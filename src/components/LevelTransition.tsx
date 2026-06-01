// ── LEVEL TRANSITION v4 — reference-based design ──
// Matches the reference: LEVEL COMPLETE banner, dual icons with separator,
// Score: 30/30 display, Start Level N button with gradient
import { LEVEL_CONFIG } from '../data/missions'
import { getToolIcon } from './icons/ToolIcons'
import type { CoreToolId } from '../types'

interface LevelTransitionProps {
  tier: number
  tierScore: number
  onNext: () => void
}

export default function LevelTransition({ tier, tierScore, onNext }: LevelTransitionProps) {
  if (tier >= 7) return null

  const cfg = LEVEL_CONFIG[tier]
  const nextCfg = LEVEL_CONFIG[tier + 1]

  // Map level numbers to tool IDs for the dual icon display
  const getLevelToolId = (level: number): CoreToolId => {
    const map: Record<number, CoreToolId> = {
      1: 'bad-arguments', 2: 'feelings-check', 3: 'brain-check',
      4: 'us-vs-them', 5: 'value-check', 6: 'hidden-story', 7: 'fake-check',
    }
    return map[level] || 'fake-check'
  }

  const prevToolId = getLevelToolId(tier)
  const nextToolId = getLevelToolId(tier + 1)
  const PrevIcon = getToolIcon(prevToolId)
  const NextIcon = getToolIcon(nextToolId)

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 right-10 w-[30rem] h-[30rem] rounded-full opacity-[0.08]"
          style={{ background: `radial-gradient(circle, ${cfg?.color || '#8b5cf6'}, transparent 70%)`, animation: 'pulse 5s infinite' }} />
        <div className="absolute bottom-10 left-10 w-[25rem] h-[25rem] rounded-full opacity-[0.06]"
          style={{ background: `radial-gradient(circle, ${nextCfg?.color || '#06b6d4'}, transparent 70%)`, animation: 'pulse 7s infinite 1s' }} />
        {/* Stars */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-0.5 h-0.5 rounded-full bg-white/10"
            style={{
              top: `${5 + Math.random() * 90}%`,
              left: `${5 + Math.random() * 90}%`,
              animation: `pulse ${3 + Math.random() * 4}s infinite ${Math.random() * 3}s`,
            }} />
        ))}
      </div>

      <div className="w-full max-w-sm animate-fade-in-up">
        <div className="relative rounded-2xl p-8 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(19,19,26,0.95), rgba(15,15,22,0.98))',
            border: `1px solid ${cfg?.color || '#8b5cf6'}30`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 40px ${cfg?.color || '#8b5cf6'}10`,
          }}>
          
          {/* LEVEL COMPLETE banner — matches reference */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="h-px w-8" style={{ background: `linear-gradient(90deg, transparent, ${cfg?.color || '#8b5cf6'})` }} />
            <div className="rounded-lg px-4 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[2px]"
              style={{
                background: `${cfg?.color || '#8b5cf6'}15`,
                border: `1px solid ${cfg?.color || '#8b5cf6'}40`,
                color: cfg?.color || '#8b5cf6',
              }}>
              LEVEL {tier} COMPLETE
            </div>
            <div className="h-px w-8" style={{ background: `linear-gradient(90deg, ${cfg?.color || '#8b5cf6'}, transparent)` }} />
          </div>

          {/* Diamond accent */}
          <div className="flex justify-center mb-4">
            <svg width="8" height="8" viewBox="0 0 8 8" fill={cfg?.color || '#8b5cf6'} opacity="0.5">
              <polygon points="4,0 8,4 4,8 0,4" />
            </svg>
          </div>

          {/* Dual icons with separator */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{
                background: `${cfg?.color || '#8b5cf6'}15`,
                border: `2px solid ${cfg?.color || '#8b5cf6'}30`,
                boxShadow: `0 0 20px ${cfg?.color || '#8b5cf6'}10`,
              }}>
              <PrevIcon size={32} glowColor={cfg?.color || '#8b5cf6'} active={false} />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-lg" style={{ color: cfg?.color || '#8b5cf6' }}>»</span>
              <span className="text-lg" style={{ color: nextCfg?.color || '#06b6d4' }}>»</span>
            </div>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center animate-pulse"
              style={{
                background: `${nextCfg?.color || '#06b6d4'}15`,
                border: `2px solid ${nextCfg?.color || '#06b6d4'}40`,
                boxShadow: `0 0 20px ${nextCfg?.color || '#06b6d4'}20`,
              }}>
              <NextIcon size={32} glowColor={nextCfg?.color || '#06b6d4'} active />
            </div>
          </div>

          {/* Level name transition */}
          <h2 className="text-base font-bold text-white mb-1">
            <span style={{ color: cfg?.color }}>{cfg?.name || 'Tool'}</span>
            {' → '}
            <span style={{ color: nextCfg?.color }}>{nextCfg?.name || 'Next'}</span>
          </h2>

          {/* Score: 30/30 — matches reference */}
          <div className="mb-5">
            <span className="text-[10px] text-gray-500 font-mono">Score: </span>
            <span className="text-lg font-bold tabular-nums" style={{ color: nextCfg?.color || '#06b6d4' }}>
              {tierScore}
            </span>
            <span className="text-[10px] text-gray-500 font-mono"> / 30</span>
          </div>

          {/* Tool unlocked hint */}
          <div className="rounded-xl p-3 mb-5 text-[10px] font-mono"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ color: '#9ca3af' }}>🔓 +1 tool unlocked: </span>
            <strong style={{ color: nextCfg?.color || '#06b6d4' }}>{nextCfg?.name}</strong>
          </div>

          {/* Start Level N button — matches reference gradient */}
          <button onClick={onNext}
            className="w-full px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all cursor-pointer hover:translate-y-[-1px] active:scale-[0.98]"
            style={{
              background: `linear-gradient(135deg, ${cfg?.color || '#8b5cf6'}, ${nextCfg?.color || '#06b6d4'})`,
              color: '#fff',
              boxShadow: `0 4px 20px ${cfg?.color || '#8b5cf6'}40`,
            }}>
            Start Level {tier + 1} →
          </button>
        </div>
      </div>
    </div>
  )
}
