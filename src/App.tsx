// ── APP — EN-only, clean, API-backed ──
import { LanguageProvider, useLanguage } from './hooks/useLanguage'
import { useGame } from './hooks/useGame'
import SplashScreen from './components/SplashScreen'
import GameScreen from './components/GameScreen'
import VictoryScreen from './components/VictoryScreen'

function AppInner() {
  const { missions, loading } = useLanguage()
  const { state, handleStart, handleAnswer, handleNextLevel, handleRestart } = useGame()

  const currentPost = missions.find(p => p.id === state.currentLevel)

  if (loading) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center" style={{ backgroundColor: 'var(--color-dark-bg)' }}>
        <div className="text-center">
          <div className="text-4xl mb-4 animate-pulse">🔑</div>
          <p className="text-gray-400 font-mono text-sm">Loading missions...</p>
        </div>
      </div>
    )
  }

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
