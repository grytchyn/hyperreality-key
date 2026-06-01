// ── LEVEL COMPLETE v1 — unified post-level results screen ──
// One screen: shows results for all posts, explanations, tool summary, and next-level button
import type { PostResult } from '../App'
import { LEVEL_CONFIG } from '../data/missions'
import { getToolIcon } from './icons/ToolIcons'
import type { CoreToolId } from '../types'

interface LevelCompleteProps {
  level: number
  results: PostResult[]
  score: number
  maxScore: number
  onNext: () => void
}

export default function LevelComplete({ level, results, score, maxScore, onNext }: LevelCompleteProps) {
  const cfg = LEVEL_CONFIG[level] || LEVEL_CONFIG[7]
  const nextCfg = LEVEL_CONFIG[level + 1]
  const pct = Math.round((score / maxScore) * 100)
  const isLastLevel = level >= 7

  // Get the tool icon for this level
  const getLevelToolId = (lvl: number): CoreToolId => {
    const map: Record<number, CoreToolId> = {
      1: 'bad-arguments', 2: 'feelings-check', 3: 'brain-check',
      4: 'us-vs-them', 5: 'value-check', 6: 'hidden-story', 7: 'fake-check',
    }
    return map[lvl] || 'fake-check'
  }

  const ToolIcon = getToolIcon(getLevelToolId(level))

  return (
    <div className="min-h-[100dvh] bg-dark-bg flex items-start justify-center p-4 pt-8 relative overflow-hidden"
      style={{ minHeight: '100dvh' }}>
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 right-10 w-[30rem] h-[30rem] rounded-full opacity-[0.08]"
          style={{ background: `radial-gradient(circle, ${cfg?.color || '#8b5cf6'}, transparent 70%)`, animation: 'pulse 5s infinite' }} />
      </div>

      <div className="w-full max-w-md animate-fade-in-up">
        <div className="relative rounded-2xl p-6 text-center"
          style={{
            background: 'linear-gradient(180deg, rgba(19,19,26,0.95), rgba(15,15,22,0.98))',
            border: `1px solid ${cfg?.color || '#8b5cf6'}30`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 40px ${cfg?.color || '#8b5cf6'}10`,
          }}>

          {/* Level badge */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: `linear-gradient(90deg, transparent, ${cfg?.color || '#8b5cf6'})` }} />
            <div className="rounded-lg px-4 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[2px]"
              style={{
                background: `${cfg?.color || '#8b5cf6'}15`,
                border: `1px solid ${cfg?.color || '#8b5cf6'}40`,
                color: cfg?.color || '#8b5cf6',
              }}>
              LEVEL {level} — {cfg?.name} Complete
            </div>
            <div className="h-px w-8" style={{ background: `linear-gradient(90deg, ${cfg?.color || '#8b5cf6'}, transparent)` }} />
          </div>

          {/* Score */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[10px] text-gray-500 font-mono">Score: </span>
            <span className="text-lg font-bold tabular-nums" style={{ color: pct >= 70 ? '#22c55e' : '#f59e0b' }}>
              {score}
            </span>
            <span className="text-[10px] text-gray-500 font-mono">/ {maxScore}</span>
            <span className={`text-[9px] font-mono ${pct >= 70 ? 'text-green-500' : 'text-yellow-500'}`}>
              ({pct}%)
            </span>
          </div>

          {/* Accuracy bar */}
          <div className="w-full bg-gray-800/50 rounded-full h-2 mb-5 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${pct}%`,
                background: `linear-gradient(90deg, ${cfg?.color || '#8b5cf6'}, ${nextCfg?.color || '#06b6d4'})`,
              }} />
          </div>

          {/* Results list */}
          <div className="text-left space-y-3 mb-5">
            {results.map((r, i) => (
              <div key={i}
                className="rounded-xl p-3"
                style={{
                  background: r.correct ? 'rgba(34,197,94,0.06)' : 'rgba(239,68,68,0.06)',
                  border: `1px solid ${r.correct ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)'}`,
                }}>
                <div className="flex items-start gap-2">
                  <span className="text-sm mt-0.5 shrink-0">{r.correct ? '✓' : '✗'}</span>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-white mb-0.5 line-clamp-2">{r.post.title}</div>
                    <div className="text-[9px] font-mono" style={{ color: r.correct ? '#4ade80' : '#ef4444' }}>
                      +{r.points} pts
                    </div>
                    {!r.correct && (
                      <div className="text-[8px] mt-1 leading-relaxed" style={{ color: '#9ca3af' }}>
                        {r.post.explanation.slice(0, 80)}...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tool learned summary */}
          <div className="flex items-center gap-3 justify-center p-3 rounded-xl mb-5"
            style={{ background: `${nextCfg?.color || '#06b6d4'}08`, border: `1px solid ${nextCfg?.color || '#06b6d4'}20` }}>
            <ToolIcon size={32} glowColor={cfg?.color || '#8b5cf6'} active />
            <span className="text-[10px] font-mono" style={{ color: '#9ca3af' }}>
              {isLastLevel ? 'All tools mastered!' : `Next: ${nextCfg?.name}`}
            </span>
            {!isLastLevel && (
              <ToolIcon size={32} glowColor={nextCfg?.color || '#06b6d4'} active />
            )}
          </div>

          {/* Next button */}
          <button onClick={onNext}
            className="w-full px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all cursor-pointer hover:translate-y-[-1px] active:scale-[0.98]"
            style={{
              background: isLastLevel
                ? 'linear-gradient(135deg, #fbbf24, #f59e0b)'
                : `linear-gradient(135deg, ${cfg?.color || '#8b5cf6'}, ${nextCfg?.color || '#06b6d4'})`,
              color: '#fff',
              boxShadow: `0 4px 20px ${cfg?.color || '#8b5cf6'}40`,
            }}>
            {isLastLevel ? '🏁 See Final Results' : `Start Level ${level + 1} →`}
          </button>
        </div>
      </div>
    </div>
  )
}
