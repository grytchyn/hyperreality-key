// ── APP v15 — 1 post per level, no postIndex ──
import { useState, useCallback } from 'react'
import { getMissionPosts, LEVEL_CONFIG } from './data/missions'
import SplashScreen from './components/SplashScreen'
import GameScreen from './components/GameScreen'
import LevelTransition from './components/LevelTransition'
import VictoryScreen from './components/VictoryScreen'
import type { MissionPost } from './data/missions'

type Phase = 'splash' | 'playing' | 'transition' | 'victory'

export interface PostResult {
  post: MissionPost
  correct: boolean
  points: number
}

export default function App() {
  const [phase, setPhase] = useState<Phase>('splash')
  const [totalScore, setTotalScore] = useState(0)
  const [allPosts] = useState(() => getMissionPosts())
  const [currentLevel, setCurrentLevel] = useState(1)
  const [lastResult, setLastResult] = useState<PostResult | null>(null)

  const currentPost = allPosts.find(p => p.level === currentLevel)

  const handleStart = useCallback(() => {
    setTotalScore(0)
    setCurrentLevel(1)
    setLastResult(null)
    setPhase('playing')
  }, [])

  const handleAnswer = useCallback((correct: boolean, points: number) => {
    if (!currentPost) return

    setLastResult({ post: currentPost, correct, points })
    setTotalScore(s => s + points)

    const nextLevel = currentLevel + 1
    if (nextLevel > 7) {
      setTimeout(() => setPhase('victory'), 300)
    } else {
      setTimeout(() => setPhase('transition'), 300)
    }
  }, [currentPost, currentLevel])

  const handleNextLevel = useCallback(() => {
    const nextLevel = currentLevel + 1
    setCurrentLevel(nextLevel)
    setLastResult(null)
    if (nextLevel > 7) {
      setPhase('victory')
    } else {
      setPhase('playing')
    }
  }, [currentLevel])

  const handleRestart = useCallback(() => {
    setTotalScore(0)
    setCurrentLevel(1)
    setLastResult(null)
    setPhase('splash')
  }, [])

  if (phase === 'splash') return <SplashScreen onStart={handleStart} />
  if (phase === 'victory') return <VictoryScreen score={totalScore} onRestart={handleRestart} />
  if (phase === 'transition' && lastResult) {
    return (
      <LevelTransition
        tier={currentLevel}
        tierScore={lastResult.points}
        onNext={handleNextLevel}
      />
    )
  }

  if (!currentPost) return <SplashScreen onStart={handleStart} />

  return (
    <div className="min-h-[100dvh] bg-dark-bg" style={{ minHeight: '100dvh' }}>
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
            <span className="font-bold" style={{ color: LEVEL_CONFIG[currentLevel]?.color || '#8b5cf6' }}>Lvl {currentLevel}/7</span>
            <span className="text-gray-500 font-bold">★ {totalScore}</span>
          </div>
        </div>
      </header>
      <main>
        <GameScreen
          post={currentPost}
          onAnswer={handleAnswer}
          key={currentLevel}
        />
      </main>
    </div>
  )
}