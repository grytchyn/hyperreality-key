// ── APP v16 — no transition, direct level progression ──
import { useState, useCallback } from 'react'
import { getMissionPosts, LEVEL_CONFIG } from './data/missions'
import SplashScreen from './components/SplashScreen'
import GameScreen from './components/GameScreen'
import VictoryScreen from './components/VictoryScreen'

type Phase = 'splash' | 'playing' | 'victory'

export default function App() {
  const [phase, setPhase] = useState<Phase>('splash')
  const [totalScore, setTotalScore] = useState(0)
  const [allPosts] = useState(() => getMissionPosts())
  const [currentLevel, setCurrentLevel] = useState(1)

  const currentPost = allPosts.find(p => p.level === currentLevel)

  const handleStart = useCallback(() => {
    setTotalScore(0)
    setCurrentLevel(1)
    setPhase('playing')
  }, [])

  const handleAnswer = useCallback((_correct: boolean, points: number) => {
    if (!currentPost) return

    setTotalScore(s => s + points)

    const nextLevel = currentLevel + 1
    if (nextLevel > 7) {
      setTimeout(() => setPhase('victory'), 300)
    } else {
      setCurrentLevel(nextLevel)
    }
  }, [currentPost, currentLevel])

  const handleRestart = useCallback(() => {
    setTotalScore(0)
    setCurrentLevel(1)
    setPhase('splash')
  }, [])

  if (phase === 'splash') return <SplashScreen onStart={handleStart} />
  if (phase === 'victory') return <VictoryScreen score={totalScore} onRestart={handleRestart} />

  if (!currentPost) return <SplashScreen onStart={handleStart} />

  return (
    <div className="min-h-[100dvh] bg-dark-bg" style={{ minHeight: '100dvh' }}>
      <header className="bg-dark-card/80 backdrop-blur border-b border-dark-border/30 px-3 py-2 sticky top-0 z-40">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <img src="/assets/logo.png" alt="Hyperreality Key" className="w-6 h-6 object-contain" />
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