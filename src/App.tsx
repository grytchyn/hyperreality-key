// ── APP v13 — 7 levels, sequential progression ──
import { useState, useCallback } from 'react'
import { getMissionPosts, LEVEL_CONFIG } from './data/missions'
import SplashScreen from './components/SplashScreen'
import GameScreen from './components/GameScreen'
import LevelTransition from './components/LevelTransition'
import VictoryScreen from './components/VictoryScreen'

type Phase = 'splash' | 'playing' | 'transition' | 'victory'

export default function App() {
  const [phase, setPhase] = useState<Phase>('splash')
  const [totalScore, setTotalScore] = useState(0)
  const [allPosts] = useState(() => getMissionPosts())
  const [roundScore, setRoundScore] = useState(0)
  const [index, setIndex] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(1)

  const handleStart = useCallback(() => {
    setTotalScore(0)
    setRoundScore(0)
    setIndex(0)
    setCurrentLevel(1)
    setPhase('playing')
  }, [])

  const handleFinish = useCallback((points: number) => {
    const newRound = roundScore + points
    setRoundScore(newRound)

    if (index + 1 >= allPosts.length) {
      setTotalScore(s => s + newRound)
      setPhase('victory')
    } else {
      // Check if next post is a new level
      const nextPost = allPosts[index + 1]
      if (nextPost && nextPost.level > currentLevel) {
        // Level complete — show transition
        setTotalScore(s => s + newRound)
        setPhase('transition')
      } else {
        setIndex(i => i + 1)
      }
    }
  }, [roundScore, index, allPosts, currentLevel])

  const handleNextLevel = useCallback(() => {
    const nextLevel = currentLevel + 1
    setCurrentLevel(nextLevel)
    setRoundScore(0)
    // Find first post of next level
    const nextIdx = allPosts.findIndex(p => p.level === nextLevel)
    setIndex(nextIdx >= 0 ? nextIdx : 0)
    setPhase('playing')
  }, [currentLevel, allPosts])

  const handleRestart = useCallback(() => {
    setTotalScore(0)
    setRoundScore(0)
    setIndex(0)
    setCurrentLevel(1)
    setPhase('splash')
  }, [])

  if (phase === 'splash') return <SplashScreen onStart={handleStart} />
  if (phase === 'victory') return <VictoryScreen score={totalScore + roundScore} onRestart={handleRestart} />
  if (phase === 'transition') return <LevelTransition tier={currentLevel} tierScore={roundScore} onNext={handleNextLevel} />

  const post = allPosts[index]
  if (!post) return <SplashScreen onStart={handleStart} />

  // Get all posts of the current level for progress bar
  const levelPosts = allPosts.filter(p => p.level === currentLevel)
  const levelIndex = levelPosts.indexOf(post)

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
            <span className="font-bold" style={{ color: LEVEL_CONFIG[currentLevel]?.color || '#8b5cf6' }}>Lvl {currentLevel}/7</span>
            <span className="text-gray-500 font-bold">★ {totalScore + roundScore}</span>
          </div>
        </div>
      </header>
      <main>
        <GameScreen
          post={post}
          allPosts={levelPosts}
          postIndex={levelIndex}
          onFinish={handleFinish}
        />
      </main>
    </div>
  )
}
