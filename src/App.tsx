// ── APP v19 — LanguageProvider + useGame + Language Switcher ──
import { useCallback, useRef } from 'react'
import { LanguageProvider, useLanguage } from './hooks/useLanguage'
import { useGame } from './hooks/useGame'
import SplashScreen from './components/SplashScreen'
import GameScreen from './components/GameScreen'
import VictoryScreen from './components/VictoryScreen'

function AppInner() {
  const { missions, language, setLanguage } = useLanguage()

  const {
    state,
    handleStart,
    handleAnswer: gameHandleAnswer,
    handleNextLevel,
    handleRestart,
  } = useGame()

  const levelRef = useRef(state.currentLevel)
  levelRef.current = state.currentLevel

  const currentPost = missions.find(p => p.level === state.currentLevel)

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
      style={{ backgroundColor: 'var(--color-dark-bg)', minHeight: '100dvh' }}
    >
      <main>
        <GameScreen
          post={currentPost}
          onAnswer={handleAnswer}
          totalScore={state.totalScore}
          currentLanguage={language}
          onSetLanguage={setLanguage}
          key={state.currentLevel}
        />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  )
}