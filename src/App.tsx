// ── APP v12 — Clean tier progression ──
import { useState, useCallback } from 'react'
import type { MissionPost } from './data/missions'
import { getMissionPosts } from './data/missions'
import SplashScreen from './components/SplashScreen'
import GameScreen from './components/GameScreen'
import LevelTransition from './components/LevelTransition'
import VictoryScreen from './components/VictoryScreen'

type Phase = 'splash' | 'playing' | 'transition' | 'victory'

export default function App() {
  const [phase, setPhase] = useState<Phase>('splash')
  const [totalScore, setTotalScore] = useState(0)
  const [currentTier, setCurrentTier] = useState(1)
  const [roundScore, setRoundScore] = useState(0)
  const [allPosts] = useState(() => getMissionPosts())
  const [currentBatch, setCurrentBatch] = useState<MissionPost[]>([])
  const [index, setIndex] = useState(0)

  const startTier = useCallback((tier: number) => {
    const batch = allPosts.filter(p => p.tier === tier).sort(() => Math.random() - 0.5)
    setCurrentBatch(batch)
    setCurrentTier(tier)
    setIndex(0)
    setRoundScore(0)
    setPhase('playing')
  }, [allPosts])

  const handleStart = useCallback(() => {
    startTier(1)
  }, [startTier])

  const handleFinish = useCallback((points: number) => {
    const newRound = roundScore + points
    setRoundScore(newRound)

    if (index + 1 >= currentBatch.length) {
      // Tier complete → advance
      setTotalScore(s => s + newRound)
      if (currentTier >= 3) {
        setPhase('victory')
      } else {
        setPhase('transition')
      }
    } else {
      setIndex(i => i + 1)
    }
  }, [roundScore, index, currentBatch.length, currentTier])

  const handleNextTier = useCallback(() => {
    startTier(currentTier + 1)
  }, [currentTier, startTier])

  const handleRestart = useCallback(() => {
    setTotalScore(0)
    setCurrentTier(1)
    setRoundScore(0)
    setIndex(0)
    setCurrentBatch([])
    setPhase('splash')
  }, [])

  if (phase === 'splash') return <SplashScreen onStart={handleStart} />
  if (phase === 'victory') return <VictoryScreen score={totalScore} onRestart={handleRestart} />
  if (phase === 'transition') return <LevelTransition tier={currentTier} tierScore={roundScore} onNext={handleNextTier} />

  const post = currentBatch[index]
  if (!post) return <SplashScreen onStart={handleStart} />

  return (
    <div className="min-h-screen bg-dark-bg">
      <header className="bg-dark-card/80 backdrop-blur border-b border-dark-border/30 px-3 py-2 sticky top-0 z-40">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-base">🔑</span>
            <span className="text-[11px] font-bold tracking-widest">
              <span className="text-neon-purple">HYPER</span>
              <span className="text-neon-cyan">REALITY</span>
              <span className="text-neon-pink">KEY</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-[9px] font-mono">
            <span className="text-gray-500">Tier {currentTier}/3</span>
            <span className="text-neon-cyan font-bold">★ {totalScore + roundScore}</span>
          </div>
        </div>
      </header>
      <main>
        <GameScreen
          post={post}
          allPosts={currentBatch}
          postIndex={index}
          onFinish={handleFinish}
        />
      </main>
    </div>
  )
}
