// ── APP v14 — unified flow, level results, mobile-fixed ──
import { useState, useCallback } from 'react'
import { getMissionPosts, LEVEL_CONFIG } from './data/missions'
import SplashScreen from './components/SplashScreen'
import GameScreen from './components/GameScreen'
import LevelTransition from './components/LevelTransition'
import LevelComplete from './components/LevelComplete'
import VictoryScreen from './components/VictoryScreen'
import type { MissionPost } from './data/missions'

type Phase = 'splash' | 'playing' | 'transition' | 'level-complete' | 'victory'

export interface PostResult {
  post: MissionPost
  correct: boolean
  points: number
}

export default function App() {
  const [phase, setPhase] = useState<Phase>('splash')
  const [totalScore, setTotalScore] = useState(0)
  const [allPosts] = useState(() => getMissionPosts())
  const [results, setResults] = useState<PostResult[]>([])
  const [currentLevel, setCurrentLevel] = useState(1)

  // Separate posts by level
  const getLevelPosts = useCallback((level: number): MissionPost[] => {
    return allPosts.filter(p => p.level === level)
  }, [allPosts])

  // Index of current post within the level
  const currentLevelPosts = getLevelPosts(currentLevel)
  const [postIndex, setPostIndex] = useState(0)

  const handleStart = useCallback(() => {
    setTotalScore(0)
    setResults([])
    setCurrentLevel(1)
    setPostIndex(0)
    setPhase('playing')
  }, [])

  const handleAnswer = useCallback((correct: boolean, points: number) => {
    // Record result
    const post = currentLevelPosts[postIndex]
    if (!post) return

    const newResults = [...results, { post, correct, points }]
    setResults(newResults)
    setTotalScore(s => s + points)

    const nextIndex = postIndex + 1
    if (nextIndex >= currentLevelPosts.length) {
      // Level complete — show LevelComplete screen
      setPhase('level-complete')
    } else {
      setPostIndex(nextIndex)
    }
  }, [currentLevelPosts, postIndex, results])

  const handleNextLevel = useCallback(() => {
    const nextLevel = currentLevel + 1
    setCurrentLevel(nextLevel)
    setPostIndex(0)
    setResults([])
    if (nextLevel > 7) {
      setPhase('victory')
    } else {
      setPhase('transition')
    }
  }, [currentLevel])

  const handleContinue = useCallback(() => {
    setPhase('playing')
  }, [])

  const handleRestart = useCallback(() => {
    setTotalScore(0)
    setResults([])
    setCurrentLevel(1)
    setPostIndex(0)
    setPhase('splash')
  }, [])

  if (phase === 'splash') return <SplashScreen onStart={handleStart} />
  if (phase === 'victory') return <VictoryScreen score={totalScore} onRestart={handleRestart} />
  if (phase === 'transition') return <LevelTransition tier={currentLevel} tierScore={results.reduce((s, r) => s + r.points, 0)} onNext={handleContinue} />

  const post = currentLevelPosts[postIndex]

  // ── LEVEL COMPLETE SCREEN ──
  if (phase === 'level-complete') {
    return (
      <LevelComplete
        level={currentLevel}
        results={results}
        score={results.reduce((s, r) => s + r.points, 0)}
        maxScore={currentLevelPosts.length * 10}
        onNext={handleNextLevel}
      />
    )
  }

  // ── PLAYING ──
  if (!post) return <SplashScreen onStart={handleStart} />

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
            <span className="text-gray-600">{postIndex + 1}/{currentLevelPosts.length}</span>
          </div>
        </div>
      </header>
      <main>
        <GameScreen
          post={post}
          onAnswer={handleAnswer}
          key={`${currentLevel}-${postIndex}`}
        />
      </main>
    </div>
  )
}
