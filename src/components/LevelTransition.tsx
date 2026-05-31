// ── LEVEL TRANSITION v2 — 7 levels ──
// Shows between levels: Level 1→2, 2→3, ... 6→7

interface LevelTransitionProps {
  tier: number
  tierScore: number
  onNext: () => void
}

const LEVEL_NAMES = [
  '', // 0
  'Bad Arguments',   // 1
  'Feelings',        // 2
  'Brain Check',     // 3
  'Us vs Them',      // 4
  'Moral Buttons',   // 5
  'Hidden Myth',     // 6
  'Fake Check',      // 7
]
const LEVEL_COLORS = [
  '', '#ef4444', '#f59e0b', '#22c55e', '#d946ef', '#f97316', '#06b6d4', '#a78bfa',
]
const LEVEL_ICONS = [
  '', '⚠️', '🎭', '🧠', '⚔️', '📊', '🗺️', '🌀',
]
const MESSAGES = [
  '',
  'You learned to spot false authority and absolute claims! Now let\'s detect emotional manipulation.',
  'You can identify fear and urgency tricks. Time to examine cognitive biases.',
  'Bandwagon and anchoring exposed! Now let\'s uncover social division tactics.',
  'You see the "us vs them" frame. Time to check which moral buttons are being pushed.',
  'Moral foundations mastered! Now let\'s uncover hidden myths and narratives.',
  'Myths revealed! Final level: all tools combined against hyperreality.',
]

export default function LevelTransition({ tier, tierScore, onNext }: LevelTransitionProps) {
  if (tier >= 7) return null // Victory handles the end

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full opacity-[0.08]"
          style={{ background: `radial-gradient(circle, ${LEVEL_COLORS[tier] || '#8b5cf6'}, transparent 70%)`, animation: 'pulse 4s infinite' }} />
      </div>

      <div className="w-full max-w-sm animate-fade-in-up text-center">
        <div className="relative rounded-2xl p-8 border"
          style={{
            background: 'linear-gradient(180deg, rgba(19,19,26,0.95), rgba(15,15,22,0.98))',
            borderColor: `${LEVEL_COLORS[tier] || '#8b5cf6'}30`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 30px ${LEVEL_COLORS[tier] || '#8b5cf6'}15`,
          }}>
          
          <div className="text-4xl mb-3">{LEVEL_ICONS[tier]} → {LEVEL_ICONS[tier + 1]}</div>
          
          <div className="text-[10px] text-gray-600 font-mono mb-2">LEVEL {tier} COMPLETE</div>
          <h2 className="text-lg font-bold text-white mb-1">
            <span style={{ color: LEVEL_COLORS[tier] }}>{LEVEL_NAMES[tier]}</span>
            {' → '}
            <span style={{ color: LEVEL_COLORS[tier + 1] }}>{LEVEL_NAMES[tier + 1]}</span>
          </h2>
          <p className="text-sm text-gray-400 mb-5">{MESSAGES[tier] || 'Great work! Ready for the next challenge?'}</p>

          <div className="rounded-xl p-4 mb-6 text-left text-xs space-y-2"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-2 text-gray-400">
              <span>🎯</span> <span>Score: <strong className="text-white">{tierScore}</strong> / 30</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>🔓</span> <span>Unlocked: <strong className="text-white">{LEVEL_NAMES[tier + 1]}</strong></span>
            </div>
          </div>

          <button onClick={onNext}
            className="w-full px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer hover:translate-y-[-2px]"
            style={{
              background: `linear-gradient(135deg, ${LEVEL_COLORS[tier] || '#8b5cf6'}, ${LEVEL_COLORS[tier + 1] || '#7c3aed'})`,
              color: '#fff',
              boxShadow: `0 4px 20px ${LEVEL_COLORS[tier] || '#8b5cf6'}40`,
            }}>
            Start Level {tier + 1} →
          </button>
        </div>
      </div>
    </div>
  )
}
