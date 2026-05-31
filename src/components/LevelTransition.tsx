// ── LEVEL TRANSITION SCREEN v1 ──
// Shows between tiers: Tier 1 → Tier 2 → Tier 3

interface LevelTransitionProps {
  tier: number
  tierScore: number
  onNext: () => void
}

const TIER_NAMES = ['', 'Easy', 'Medium', 'Hard']
const TIER_COLORS = ['', '#22c55e', '#f59e0b', '#ef4444']
const TIER_ICONS = ['', '🟢', '🟡', '🔴']
const TIER_MESSAGES = [
  '',
  'Good start! You spotted the obvious tricks. Now let\'s make it harder.',
  'Getting sharp! These were subtle. Ready for expert level?',
  'Final challenge complete! Let\'s see your rank.',
]

export default function LevelTransition({ tier, tierScore, onNext }: LevelTransitionProps) {
  if (tier >= 3) return null // Victory handles tier 3

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full opacity-[0.08]"
          style={{ background: `radial-gradient(circle, ${TIER_COLORS[tier]}, transparent 70%)`, animation: 'pulse 4s infinite' }} />
      </div>

      <div className="w-full max-w-sm animate-fade-in-up text-center">
        <div className="relative rounded-2xl p-8 border"
          style={{
            background: 'linear-gradient(180deg, rgba(19,19,26,0.95), rgba(15,15,22,0.98))',
            borderColor: `${TIER_COLORS[tier]}30`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 30px ${TIER_COLORS[tier]}15`,
          }}>
          
          <div className="text-5xl mb-4">{TIER_ICONS[tier]} → {TIER_ICONS[tier + 1]}</div>
          
          <div className="text-[10px] text-gray-600 font-mono mb-2">TIER {tier} COMPLETE</div>
          <h2 className="text-xl font-bold text-white mb-1">
            <span style={{ color: TIER_COLORS[tier] }}>{TIER_NAMES[tier]}</span>
            {' → '}
            <span style={{ color: TIER_COLORS[tier + 1] }}>{TIER_NAMES[tier + 1]}</span>
          </h2>
          <p className="text-sm text-gray-400 mb-5">{TIER_MESSAGES[tier]}</p>

          <div className="rounded-xl p-4 mb-6 text-left text-xs space-y-2"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-2 text-gray-400">
              <span>🎯</span> <span>Score this round: <strong className="text-white">{tierScore}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>🧠</span> <span>New tools unlocked in next tier</span>
            </div>
          </div>

          <button onClick={onNext}
            className="w-full px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer hover:translate-y-[-2px]"
            style={{
              background: `linear-gradient(135deg, ${TIER_COLORS[tier]}, ${TIER_COLORS[tier + 1]})`,
              color: '#fff',
              boxShadow: `0 4px 20px ${TIER_COLORS[tier]}40`,
            }}>
            Start Tier {tier + 1} →
          </button>
        </div>
      </div>
    </div>
  )
}
