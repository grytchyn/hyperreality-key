// ── VICTORY SCREEN v10 — Hyperreality Key reveal + wallet + NFT ──
import { useState } from 'react'

interface VictoryScreenProps { score: number; onRestart: () => void }

export default function VictoryScreen({ score, onRestart }: VictoryScreenProps) {
  const [walletConnected, setWalletConnected] = useState(false)
  const [nftMinted, setNftMinted] = useState(false)
  const [minting, setMinting] = useState(false)
  const maxScore = 120
  const pct = Math.round((score / maxScore) * 100)
  const rank = pct >= 90 ? 'HYPERREALITY MASTER' : pct >= 70 ? 'DECEPTION DETECTOR' : pct >= 40 ? 'TRUTH SEEKER' : 'APPRENTICE'
  const rankColor = pct >= 90 ? '#fbbf24' : pct >= 70 ? '#8b5cf6' : pct >= 40 ? '#06b6d4' : '#22c55e'

  const handleConnectWallet = () => {
    // Placeholder: real wallet connect via ethers.js / wagmi
    setWalletConnected(true)
  }

  const handleMintNft = () => {
    setMinting(true)
    // Simulate mint delay
    setTimeout(() => {
      setMinting(false)
      setNftMinted(true)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 left-1/3 w-96 h-96 rounded-full opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)', animation: 'pulse 4s infinite' }} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #fbbf24, transparent 70%)', animation: 'pulse 6s infinite 1.5s' }} />
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full bg-white/10"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              animation: `pulse ${3 + Math.random() * 4}s infinite ${Math.random() * 3}s`,
            }} />
        ))}
      </div>

      <div className="w-full max-w-lg animate-fade-in-up text-center relative z-10">
        <div className="relative rounded-2xl p-8 border"
          style={{
            background: 'linear-gradient(180deg, rgba(19,19,26,0.95), rgba(15,15,22,0.98))',
            borderColor: 'rgba(251,191,36,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 60px rgba(139,92,246,0.08)',
          }}>
          
          {/* Animated key */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #8b5cf6, #06b6d4, #fbbf24, #ec4899, #8b5cf6)',
                animation: 'spin 4s linear infinite',
                opacity: 0.3,
              }} />
            <div className="absolute inset-1 bg-dark-bg rounded-full flex items-center justify-center">
              <span className="text-5xl animate-bounce" style={{ animationDuration: '2s' }}>🔑</span>
            </div>
          </div>

          {/* Hyperreality Key Title */}
          <div className="mb-1">
            <h1 className="text-2xl font-bold" style={{ fontFamily: "'Courier New', monospace" }}>
              <span className="text-neon-purple">HYPER</span>
              <span className="text-neon-cyan">REALITY</span>
              <span className="text-neon-pink">KEY</span>
            </h1>
            <p className="text-[10px] text-gray-500 font-mono mt-1">UNLOCKED</p>
          </div>

          <p className="text-sm text-gray-400 mb-5">You've trained your deception radar across 12 posts in 3 difficulty tiers.</p>

          {/* Score + Rank */}
          <div className="flex items-center justify-center gap-6 mb-5">
            <div className="relative w-24 h-24 rounded-full flex items-center justify-center border-4"
              style={{
                borderColor: rankColor,
                boxShadow: `0 0 30px ${rankColor}30`,
                background: `${rankColor}10`,
              }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{score}</div>
                <div className="text-[9px] text-gray-500 font-mono">/ {maxScore}</div>
              </div>
            </div>
            <div className="text-left">
              <div className="text-[10px] text-gray-500 font-mono mb-1">RANK</div>
              <div className="text-sm font-bold" style={{ color: rankColor }}>{rank}</div>
              <div className="flex gap-2 mt-2">
                <span className="text-[9px] text-gray-500">Tier 1</span>
                <span className="text-[9px] text-gray-500">→</span>
                <span className="text-[9px] text-gray-500">Tier 2</span>
                <span className="text-[9px] text-gray-500">→</span>
                <span className="text-[9px] text-white font-bold">Tier 3</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="rounded-xl p-4 mb-5 text-left text-xs space-y-2"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-2 text-gray-400">
              <span>📰</span> <span>Posts analyzed: <strong className="text-white">12</strong></span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>🎯</span> <span>Correct: <strong className="text-white">{Math.round(score / 10)}</strong>/12</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>🧠</span> <span>Skills trained: <strong className="text-white">7 filters</strong></span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>📊</span> <span>Accuracy: <strong className="text-white">{pct}%</strong></span>
            </div>
          </div>

          {/* Wallet Connect + NFT Section */}
          <div className="rounded-xl p-4 mb-5"
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(6,182,212,0.05))',
              border: '1px solid rgba(251,191,36,0.15)',
            }}>
            
            {!walletConnected ? (
              <button onClick={handleConnectWallet}
                className="w-full px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer hover:translate-y-[-1px] flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(139,92,246,0.3)',
                }}>
                <span>🔗</span> Connect Wallet to Mint Key
              </button>
            ) : !nftMinted ? (
              <div className="text-center">
                <div className="flex items-center gap-2 justify-center mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-green-400 font-mono">Wallet Connected</span>
                </div>
                <button onClick={handleMintNft} disabled={minting}
                  className="w-full px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    background: minting ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                    color: '#000',
                    boxShadow: '0 4px 20px rgba(251,191,36,0.3)',
                  }}>
                  {minting ? (
                    <><span className="animate-spin">⏳</span> Minting your KEY...</>
                  ) : (
                    <><span>🪙</span> Mint Hyperreality Key NFT</>
                  )}
                </button>
                <p className="text-[8px] text-gray-600 mt-2 font-mono">Free mint — just pay gas. Proof of deception detection.</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-3xl mb-1">🏆</div>
                <div className="text-sm font-bold text-yellow-400 mb-1">Hyperreality Key Minted!</div>
                <p className="text-[9px] text-gray-500 font-mono mb-2">0x7b3d...a91e · ERC-721</p>
                <div className="rounded-lg p-3"
                  style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.15)' }}>
                  <div className="flex items-center justify-between text-[9px] font-mono">
                    <span className="text-gray-500">Rank: <strong className="text-yellow-400">{rank}</strong></span>
                    <span className="text-gray-500">Score: <strong className="text-white">{score}</strong></span>
                    <span className="text-gray-500">Tier: <strong className="text-cyan-400">3/3</strong></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button onClick={onRestart}
            className="w-full px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer hover:translate-y-[-2px]"
            style={{
              background: 'transparent',
              color: '#666',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
            🔄 Train Again
          </button>

          <p className="text-[9px] text-gray-600 mt-3 font-mono">
            Now try spotting these tricks in real posts every day.
          </p>
        </div>
      </div>
    </div>
  )
}
