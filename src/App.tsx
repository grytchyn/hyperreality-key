// ── APP v18 — useGame hook (useReducer state machine) ──
import { useCallback, useRef } from 'react'
import { useGame } from './hooks/useGame'
import SplashScreen from './components/SplashScreen'
import GameScreen from './components/GameScreen'
import VictoryScreen from './components/VictoryScreen'

export default function App() {
  const {
    state,
    currentPost,
    handleStart,
    handleAnswer: gameHandleAnswer,
    handleNextLevel,
    handleRestart,
  } = useGame()

  const levelRef = useRef(state.currentLevel)
  levelRef.current = state.currentLevel

  // GameScreen calls onAnswer(correct: boolean, points: number)
  const handleAnswer = useCallback((correct: boolean) => {
    gameHandleAnswer(correct)

    const currentLvl = levelRef.current
    if (currentLvl >= 12) {
      setTimeout(() => handleNextLevel(), 300)
    } else {
      handleNextLevel()
    }
  }, [gameHandleAnswer, handleNextLevel])

  if (state.phase === 'splash') return <SplashScreen onStart={handleStart} />
  if (state.phase === 'victory') return <VictoryScreen score={state.totalScore} onRestart={handleRestart} />

  if (!currentPost) return <SplashScreen onStart={handleStart} />

  return (
    <div
      className="min-h-[100dvh]"
      style={{ backgroundColor: 'var(--color-dark-bg, #0a0a0f)', minHeight: '100dvh' }}
    >
      <main>
        <GameScreen
          post={currentPost}
          onAnswer={handleAnswer}
          totalScore={state.totalScore}
          key={state.currentLevel}
        />
      </main>
    </div>
  )
}