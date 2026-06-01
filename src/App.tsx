// ── APP v17 — no old header, score passed to GameScreen ──
import { useState, useCallback } from 'react'
import { getMissionPosts } from './data/missions'
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
    if (nextLevel > 12) {
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
      <main>
        <GameScreen
          post={currentPost}
          onAnswer={handleAnswer}
          totalScore={totalScore}
          key={currentLevel}
        />
      </main>
    </div>
  )
}