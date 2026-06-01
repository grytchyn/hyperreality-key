// ── VICTORY SCREEN v11 — reference-based design ──
// Matches the reference: glowing key, score gauge, stats grid,
// rank badge with laurels, NFT preview card, wallet connect
import { useState } from 'react'
import Header from './Header'

interface VictoryScreenProps { score: number; onRestart: () => void }

export default function VictoryScreen({ score, onRestart }: VictoryScreenProps) {
  const [walletConnected, setWalletConnected] = useState(false)
  const [nftMinted, setNftMinted] = useState(false)
  const [minting, setMinting] = useState(false)
  const maxScore = 120
  const pct = Math.round((score / maxScore) * 100)
  const rank = pct >= 90 ? 'HYPERREALITY MASTER' : pct >= 70 ? 'DECEPTION DETECTOR' : pct >= 50 ? 'TRUTH SEEKER' : 'APPRENTICE'
  const rankStars = pct >= 90 ? 5 : pct >= 70 ? 4 : pct >= 50 ? 3 : 2
  const rankColor = pct >= 90 ? 'var(--color-pixel-yellow)' : pct >= 70 ? 'var(--color-neon-purple)' : pct >= 50 ? 'var(--color-neon-cyan)' : 'var(--color-pixel-green)'
  const rarity = pct >= 90 ? 'Legendary' : pct >= 70 ? 'Epic' : pct >= 40 ? 'Rare' : 'Common'
  const rarityColor = pct >= 90 ? 'var(--color-pixel-yellow)' : pct >= 70 ? 'var(--color-neon-purple)' : pct >= 40 ? 'var(--color-neon-cyan)' : 'var(--color-pixel-green)'

  const handleConnectWallet = () => setWalletConnected(true)

  const handleMintNft = () => {
    setMinting(true)
    setTimeout(() => { setMinting(false); setNftMinted(true) }, 2000)
  }

  // Circle gauge arc calculation
  const circumference = 2 * Math.PI * 40
  const offset = circumference - (pct / 100) * circumference

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col relative overflow-hidden"
      style={{
        background: `var(--color-dark-bg) url('/assets/bg/victory-bg.png') center center / cover no-repeat`,
      }}>
      {/* Dark overlay for readability */}
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

          {/* Top badges — GAME COMPLETE | ALL LEVELS MASTERED */}
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

          {/* Hyperreality Key — animated */}
          <div className="relative w-20 h-20 mx-auto mb-3">
            {/* Halo rings */}
            <div className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, var(--color-neon-purple), var(--color-neon-cyan), var(--color-pixel-yellow), var(--color-neon-pink), var(--color-neon-purple))',
                animation: 'spin 4s linear infinite',
                opacity: 0.2,
              }} />
            <div className="absolute inset-1 rounded-full"
              style={{
                background: 'conic-gradient(from 90deg, var(--color-pixel-yellow), transparent, var(--color-pixel-yellow), transparent)',
                animation: 'spin 6s linear infinite',
                opacity: 0.15,
              }} />
            <div className="absolute inset-2 rounded-full"
              style={{
                background: 'conic-gradient(from 180deg, var(--color-neon-purple), transparent, var(--color-neon-purple), transparent)',
                animation: 'spin 8s linear infinite',
                opacity: 0.1,
              }} />
            <div className="absolute inset-[2px] rounded-full flex items-center justify-center"
              style={{ background: 'var(--color-dark-bg)' }}>
              {/* Key SVG — glowing golden key with eye */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                {/* Key body */}
                <path d="M10 30 L10 38 L14 38 L14 30" stroke="var(--color-pixel-yellow)" strokeWidth="2" strokeLinecap="round" />
                <rect x="14" y="28" width="14" height="10" rx="2" stroke="var(--color-pixel-yellow)" strokeWidth="2" fill="none" />
                {/* Key bit */}
                <rect x="28" y="32" width="4" height="3" rx="0.5" fill="var(--color-pixel-yellow)" />
                <rect x="28" y="35" width="3" height="2" rx="0.5" fill="var(--color-pixel-yellow)" />
                {/* Eye in key bow */}
                <circle cx="18" cy="34" r="3" stroke="var(--color-pixel-yellow)" strokeWidth="1.5" fill="none" />
                <circle cx="18" cy="34" r="1" fill="var(--color-pixel-yellow)" />
                {/* Glow */}
                <circle cx="18" cy="34" r="6" fill="var(--color-pixel-yellow)" opacity="0.15" />
              </svg>
            </div>
          </div>

          {/* HYPERREALITY KEY title — gradient text */}
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

          {/* Score gauge — circular + stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {/* LEFT: Score gauge */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-20 h-20 mb-1">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  {/* Background circle */}
                  <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                  {/* Score arc */}
                  <circle cx="40" cy="40" r="36" fill="none" stroke={rankColor} strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${circumference}`}
                    strokeDashoffset={offset}
                    transform="rotate(-90, 40, 40)"
                    style={{ transition: 'stroke-dashoffset 1s ease-out' }} />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-white tabular-nums">{score}</span>
                  <span className="text-[8px] text-gray-500 font-mono">/ {maxScore}</span>
                </div>
              </div>
              <span className="text-[7px] text-gray-500 font-mono uppercase">SCORE</span>
            </div>

            {/* RIGHT: Stats grid (2×2) */}
            <div className="col-span-2 grid grid-cols-2 gap-2">
              {[
                { icon: '👁️', label: 'Posts Analyzed', value: '12', color: 'var(--color-neon-purple)' },
                { icon: '✓', label: 'Correct', value: `${Math.round(score / 10)}/12`, color: 'var(--color-pixel-green)' },
                { icon: '🧠', label: 'Skills Trained', value: '12', color: 'var(--color-neon-cyan)' },
                { icon: '🎯', label: 'Accuracy', value: `${pct}%`, color: 'var(--color-pixel-yellow)' },
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

          {/* Rank badge + NFT Preview */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {/* Rank badge */}
            <div className="rounded-xl p-3 flex flex-col items-center text-center"
              style={{
                background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-neon-purple) 8%, transparent), rgba(0,0,0,0.1))',
                border: '1px solid color-mix(in srgb, var(--color-neon-purple) 15%, transparent)',
              }}>
              {/* Laurels */}
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

            {/* NFT Preview */}
            <div className="rounded-xl p-3 text-left"
              style={{
                background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-pixel-yellow) 6%, transparent), rgba(0,0,0,0.1))',
                border: '1px solid color-mix(in srgb, var(--color-pixel-yellow) 12%, transparent)',
              }}>
              <div className="flex items-center gap-1 mb-2">
                <span style={{ color: 'var(--color-neon-purple)', fontSize: '10px' }}>◆</span>
                <span className="text-[8px] text-gray-500 font-mono uppercase">NFT Preview</span>
              </div>
              <div className="flex items-center gap-2">
                {/* Mini key */}
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'color-mix(in srgb, var(--color-pixel-yellow) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--color-pixel-yellow) 20%, transparent)' }}>
                  <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
                    <path d="M10 30 L10 38 L14 38 L14 30" stroke="var(--color-pixel-yellow)" strokeWidth="2" />
                    <rect x="14" y="28" width="14" height="10" rx="2" stroke="var(--color-pixel-yellow)" strokeWidth="2" fill="none" />
                    <circle cx="18" cy="34" r="2" stroke="var(--color-pixel-yellow)" strokeWidth="1.5" fill="none" />
                    <circle cx="18" cy="34" r="0.8" fill="var(--color-pixel-yellow)" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] font-bold text-white truncate">Hyperreality Key #001</div>
                  <div className="inline-block px-1.5 py-0.5 rounded text-[7px] font-mono font-bold mt-0.5"
                    style={{ background: `${rarityColor}20`, color: rarityColor, border: `1px solid ${rarityColor}30` }}>
                    {rarity}
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-[7px] font-mono" style={{ color: 'var(--color-text-muted)' }}>
                <span>Score: <strong style={{ color: 'var(--color-text-primary)' }}>{score}/{maxScore}</strong></span>
                <span>Levels: <strong style={{ color: 'var(--color-neon-cyan)' }}>12/12</strong></span>
              </div>
            </div>
          </div>

          {/* Wallet Connect + NFT Mint */}
          <div className="mb-4">
            {!walletConnected ? (
              <button onClick={handleConnectWallet}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer hover:translate-y-[-1px] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, var(--color-neon-purple), #7c3aed)',
                  color: '#fff',
                  boxShadow: '0 4px 20px color-mix(in srgb, var(--color-neon-purple) 30%, transparent)',
                }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
                Connect Wallet to Mint Key →
              </button>
            ) : !nftMinted ? (
              <div>
                <div className="flex items-center gap-2 justify-center mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] text-green-400 font-mono">Wallet Connected</span>
                </div>
                <button onClick={handleMintNft} disabled={minting}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: minting ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'linear-gradient(135deg, var(--color-pixel-yellow), #f59e0b)',
                    color: '#000',
                    boxShadow: '0 4px 20px color-mix(in srgb, var(--color-pixel-yellow) 30%, transparent)',
                  }}>
                  {minting ? (
                    <><span className="animate-spin">⏳</span> Minting your KEY...</>
                  ) : (
                    <><span>🪙</span> Mint Hyperreality Key NFT</>
                  )}
                </button>
                <p className="text-[7px] text-gray-600 mt-1.5 font-mono">
                  Mint your unique key as an NFT and prove your critical thinking mastery.
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-2xl mb-1">🏆</div>
                <div className="text-sm font-bold text-yellow-400 mb-0.5">Hyperreality Key Minted!</div>
                <p className="text-[8px] text-gray-500 font-mono mb-2">0x7b3d...a91e · ERC-721</p>
                <div className="rounded-lg p-2.5"
                  style={{ background: 'color-mix(in srgb, var(--color-pixel-yellow) 8%, transparent)', border: '1px solid color-mix(in srgb, var(--color-pixel-yellow) 15%, transparent)' }}>
                  <div className="flex items-center justify-between text-[8px] font-mono">
                    <span className="text-gray-500">Rank: <strong className="text-yellow-400">{rank}</strong></span>
                    <span className="text-gray-500">Score: <strong className="text-white">{score}</strong></span>
                    <span className="text-gray-500">Tier: <strong className="text-cyan-400">7/7</strong></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Restart */}
          <button onClick={onRestart}
            className="w-full px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer hover:translate-y-[-1px]"
            style={{
              background: 'transparent',
              color: '#666',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
            🔄 Train Again
          </button>

          <p className="text-[8px] text-gray-600 mt-2 font-mono">
            Now try spotting these tricks in real posts every day.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
