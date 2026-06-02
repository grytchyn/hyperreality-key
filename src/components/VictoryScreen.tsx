// ── VICTORY SCREEN v12 — clean, no NFT/wallet, beautiful key ──
// Shows: score gauge, stats grid, rank, glowing key image, restart
import Header from './Header'
import { calculateFinalScore } from '../engine/scoring'
import { GAME_CONFIG } from '../config/game'

interface VictoryScreenProps { score: number; onRestart: () => void }

export default function VictoryScreen({ score, onRestart }: VictoryScreenProps) {
  const { percentage, rank } = calculateFinalScore(score)
  const rankStars = percentage >= 90 ? 5 : percentage >= 70 ? 4 : percentage >= 50 ? 3 : 2
  const rankColor = percentage >= 90 ? 'var(--color-pixel-yellow)' : percentage >= 70 ? 'var(--color-neon-purple)' : percentage >= 50 ? 'var(--color-neon-cyan)' : 'var(--color-pixel-green)'

  // Circle gauge
  const circumference = 2 * Math.PI * 40
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col relative overflow-hidden"
      style={{
        background: `var(--color-dark-bg) url('/assets/bg/victory-bg.png') center center / cover no-repeat`,
      }}>
      {/* Dark overlay */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'linear-gradient(180deg, color-mix(in srgb, var(--color-dark-bg) 50%, transparent) 0%, color-mix(in srgb, var(--color-dark-bg) 70%, transparent) 100%)' }} />
      
      {/* HEADER */}
      <Header showLevel={false} />

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in-up text-center relative z-10">
          <div className="relative rounded-2xl p-6"
            style={{
              background: 'linear-gradient(180deg, color-mix(in srgb, var(--color-dark-card) 95%, transparent), color-mix(in srgb, var(--color-dark-bg) 98%, transparent))',
              border: '1px solid color-mix(in srgb, var(--color-neon-purple) 15%, transparent)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 80px color-mix(in srgb, var(--color-neon-purple) 6%, transparent)',
            }}>

            {/* Top badges */}
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-lg px-2.5 py-1 text-[8px] font-mono font-bold uppercase tracking-wider"
                style={{ background: 'color-mix(in srgb, var(--color-pixel-yellow) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--color-pixel-yellow) 20%, transparent)', color: 'var(--color-pixel-yellow)' }}>
                ★ GAME COMPLETE
              </div>
              <div className="rounded-lg px-2.5 py-1 text-[8px] font-mono font-bold uppercase tracking-wider"
                style={{ background: 'color-mix(in srgb, var(--color-pixel-yellow) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--color-pixel-yellow) 20%, transparent)', color: 'var(--color-pixel-yellow)' }}>
                👑 ALL LEVELS MASTERED
              </div>
            </div>

            {/* GLOWING KEY — hero image */}
            <div className="relative w-28 h-28 mx-auto mb-4">
              {/* Halo rings */}
              <div className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, var(--color-neon-purple), var(--color-neon-cyan), var(--color-pixel-yellow), var(--color-neon-pink), var(--color-neon-purple))',
                  animation: 'spin 4s linear infinite',
                  opacity: 0.25,
                }} />
              <div className="absolute inset-2 rounded-full"
                style={{
                  background: 'conic-gradient(from 90deg, var(--color-pixel-yellow), transparent, var(--color-pixel-yellow), transparent)',
                  animation: 'spin 6s linear infinite',
                  opacity: 0.2,
                }} />
              <div className="absolute inset-4 rounded-full"
                style={{
                  background: 'conic-gradient(from 180deg, var(--color-neon-purple), transparent, var(--color-neon-purple), transparent)',
                  animation: 'spin 8s linear infinite',
                  opacity: 0.15,
                }} />
              
              {/* Key icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/assets/key-icon.png" 
                  alt="Hyperreality Key"
                  className="w-16 h-16 object-contain"
                  style={{
                    filter: 'drop-shadow(0 0 30px color-mix(in srgb, var(--color-pixel-yellow) 50%, transparent)) drop-shadow(0 0 60px color-mix(in srgb, var(--color-neon-purple) 30%, transparent))',
                  }}
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-xl font-bold mb-0.5" style={{ fontFamily: "'Courier New', monospace" }}>
              <span style={{ color: 'var(--color-neon-purple)' }}>HYPER</span>
              <span style={{ color: 'var(--color-neon-cyan)' }}>REALITY</span>
              <span style={{ color: 'var(--color-neon-pink)' }}>KEY</span>
            </h1>
            <div className="flex items-center justify-center gap-1 mb-4">
              <span className="text-[8px]">✨</span>
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest" style={{ color: 'var(--color-pixel-yellow)' }}>Unlocked</span>
              <span className="text-[8px]">✨</span>
            </div>

            {/* Score gauge + Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {/* Score gauge */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-20 h-20 mb-1">
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                    <circle cx="40" cy="40" r="36" fill="none" stroke={rankColor} strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={`${circumference}`}
                      strokeDashoffset={offset}
                      transform="rotate(-90, 40, 40)"
                      style={{ transition: 'stroke-dashoffset 1s ease-out' }} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-white tabular-nums">{score}</span>
                    <span className="text-[8px] text-gray-500 font-mono">/ {GAME_CONFIG.MAX_SCORE}</span>
                  </div>
                </div>
                <span className="text-[7px] text-gray-500 font-mono uppercase">SCORE</span>
              </div>

              {/* Stats grid */}
              <div className="col-span-2 grid grid-cols-2 gap-2">
                {[
                  { icon: '👁️', label: 'Posts Analyzed', value: '12', color: 'var(--color-neon-purple)' },
                  { icon: '✓', label: 'Correct', value: `${Math.round(score / 10)}/12`, color: 'var(--color-pixel-green)' },
                  { icon: '🧠', label: 'Skills Trained', value: '12', color: 'var(--color-neon-cyan)' },
                  { icon: '🎯', label: 'Accuracy', value: `${percentage}%`, color: 'var(--color-pixel-yellow)' },
                ].map(stat => (
                  <div key={stat.label}
                    className="rounded-xl p-2.5 text-left"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="text-[9px] text-gray-500 font-mono mb-0.5">{stat.icon} {stat.label}</div>
                    <div className="text-sm font-bold tabular-nums" style={{ color: stat.color }}>{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rank badge */}
            <div className="rounded-xl p-3 flex flex-col items-center text-center mb-4"
              style={{
                background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-neon-purple) 8%, transparent), rgba(0,0,0,0.1))',
                border: '1px solid color-mix(in srgb, var(--color-neon-purple) 15%, transparent)',
              }}>
              <div className="flex items-center gap-1 mb-1">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2 Q6 6 8 12 Q10 16 10 18" stroke="var(--color-pixel-yellow)" strokeWidth="1" fill="none" opacity="0.6" />
                  <path d="M10 2 Q14 6 12 12 Q10 16 10 18" stroke="var(--color-pixel-yellow)" strokeWidth="1" fill="none" opacity="0.6" />
                </svg>
                <span style={{ color: 'var(--color-neon-purple)', fontSize: '12px' }}>◆</span>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2 Q6 6 8 12 Q10 16 10 18" stroke="var(--color-pixel-yellow)" strokeWidth="1" fill="none" opacity="0.6" />
                  <path d="M10 2 Q14 6 12 12 Q10 16 10 18" stroke="var(--color-pixel-yellow)" strokeWidth="1" fill="none" opacity="0.6" />
                </svg>
              </div>
              <div className="text-[8px] text-gray-500 font-mono mb-0.5">RANK</div>
              <div className="text-[10px] font-bold mb-1" style={{ color: rankColor }}>{rank}</div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="text-[10px]" style={{ color: i <= rankStars ? 'var(--color-pixel-yellow)' : '#374151' }}>★</span>
                ))}
              </div>
            </div>

            {/* KEY THEME — visual flourish with mini key and quote */}
            <div className="rounded-xl p-3 flex items-center gap-3 mb-4"
              style={{
                background: 'color-mix(in srgb, var(--color-pixel-yellow) 5%, transparent)',
                border: '1px solid color-mix(in srgb, var(--color-pixel-yellow) 12%, transparent)',
              }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'color-mix(in srgb, var(--color-pixel-yellow) 12%, transparent)', border: '1px solid color-mix(in srgb, var(--color-pixel-yellow) 20%, transparent)' }}>
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                  <path d="M10 30 L10 38 L14 38 L14 30" stroke="var(--color-pixel-yellow)" strokeWidth="2" />
                  <rect x="14" y="28" width="14" height="10" rx="2" stroke="var(--color-pixel-yellow)" strokeWidth="2" fill="none" />
                  <rect x="28" y="32" width="4" height="3" rx="0.5" fill="var(--color-pixel-yellow)" />
                  <rect x="28" y="35" width="3" height="2" rx="0.5" fill="var(--color-pixel-yellow)" />
                  <circle cx="18" cy="34" r="3" stroke="var(--color-pixel-yellow)" strokeWidth="1.5" fill="none" />
                  <circle cx="18" cy="34" r="1" fill="var(--color-pixel-yellow)" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-white mb-0.5">You've earned the Key.</div>
                <p className="text-[8px]" style={{ color: 'var(--color-text-muted)' }}>
                  Now try spotting these tricks in real posts every day.
                </p>
              </div>
            </div>

            {/* Restart */}
            <button onClick={onRestart}
              className="w-full px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer hover:translate-y-[-1px] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, var(--color-neon-purple), #7c3aed)',
                color: '#fff',
                boxShadow: '0 4px 20px color-mix(in srgb, var(--color-neon-purple) 30%, transparent)',
              }}>
              🔄 Train Again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}