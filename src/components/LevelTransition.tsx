// ── LEVEL TRANSITION v3 — neon redesign with theme colors ──
import { LEVEL_CONFIG } from '../data/missions'

interface LevelTransitionProps {
  tier: number
  tierScore: number
  onNext: () => void
}

export default function LevelTransition({ tier, tierScore, onNext }: LevelTransitionProps) {
  if (tier >= 7) return null

  const cfg = LEVEL_CONFIG[tier]
  const nextCfg = LEVEL_CONFIG[tier + 1]

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 right-10 w-[30rem] h-[30rem] rounded-full opacity-[0.08]"
          style={{ background: `radial-gradient(circle, ${cfg?.color || '#8b5cf6'}, transparent 70%)`, animation: 'pulse 5s infinite' }} />
        <div className="absolute bottom-10 left-10 w-[25rem] h-[25rem] rounded-full opacity-[0.06]"
          style={{ background: `radial-gradient(circle, ${nextCfg?.color || '#06b6d4'}, transparent 70%)`, animation: 'pulse 7s infinite 1s' }} />
      </div>

      <div className="w-full max-w-sm animate-fade-in-up">
        <div className="relative rounded-2xl p-8 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(19,19,26,0.95), rgba(15,15,22,0.98))',
            border: `1px solid ${cfg?.color || '#8b5cf6'}30`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 40px ${cfg?.color || '#8b5cf6'}10`,
          }}>
          
          {/* Sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="absolute w-1 h-1 rounded-full"
                style={{
                  background: cfg?.color || '#8b5cf6',
                  top: `${10 + Math.random() * 80}%`,
                  left: `${10 + Math.random() * 80}%`,
                  animation: `pulse 2s infinite ${Math.random() * 3}s`,
                }} />
            ))}
          </div>
          
          {/* Icons transition */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
              style={{ background: `${cfg?.color || '#8b5cf6'}20`, border: `2px solid ${cfg?.color || '#8b5cf6'}40` }}>
              {cfg?.icon || '🔑'}
            </div>
            <div className="text-2xl text-gray-500">→</div>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl animate-pulse"
              style={{ background: `${nextCfg?.color || '#06b6d4'}20`, border: `2px solid ${nextCfg?.color || '#06b6d4'}40` }}>
              {nextCfg?.icon || '🔑'}
            </div>
          </div>
          
          <div className="inline-block px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider mb-3"
            style={{ background: `${cfg?.color || '#8b5cf6'}20`, color: cfg?.color || '#8b5cf6', border: `1px solid ${cfg?.color || '#8b5cf6'}40` }}>
            Level {tier} Complete
          </div>
          
          <h2 className="text-lg font-bold text-white mb-1">
            <span style={{ color: cfg?.color }}>{cfg?.name || 'Tool'}</span>
            {' → '}
            <span style={{ color: nextCfg?.color }}>{nextCfg?.name || 'Next'}</span>
          </h2>
          <p className="text-sm mt-3 mb-5" style={{ color: '#9ca3af' }}>Tool unlocked: <strong style={{ color: '#e5e7eb' }}>{nextCfg?.name}</strong></p>

          {/* Score card */}
          <div className="rounded-xl p-4 mb-6 text-left text-xs"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-3">
              <span>🎯</span>
              <span style={{ color: '#9ca3af' }}>Score: <strong style={{ color: '#e5e7eb' }} className="tabular-nums">{tierScore}</strong> / 30</span>
              <span className="ml-auto text-[9px]" style={{ color: nextCfg?.color }}>🔓 +1 tool</span>
            </div>
          </div>

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
