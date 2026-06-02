// ── APP — EN-only, clean ──
import { LanguageProvider, useLanguage } from './hooks/useLanguage'
import { useGame } from './hooks/useGame'
import SplashScreen from './components/SplashScreen'
import GameScreen from './components/GameScreen'
import VictoryScreen from './components/VictoryScreen'

function AppInner() {
  const { missions } = useLanguage()
  const { state, handleStart, handleAnswer, handleNextLevel, handleRestart } = useGame()

  const currentPost = missions.find(p => p.level === state.currentLevel)

  if (state.phase === 'splash') return <SplashScreen onStart={handleStart} />
  if (state.phase === 'victory') return <VictoryScreen score={state.totalScore} onRestart={handleRestart} />
  if (!currentPost) return <SplashScreen onStart={handleStart} />

  return (
    <div className="min-h-[100dvh]" style={{ backgroundColor: 'var(--color-dark-bg)', minHeight: '100dvh' }}>
      <main>
        <GameScreen
          post={currentPost}
          onAnswer={handleAnswer}
          onNext={handleNextLevel}
          totalScore={state.totalScore}
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