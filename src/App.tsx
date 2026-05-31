// ── APP v5 ──
import { useState } from 'react'
import SplashScreen from './components/SplashScreen'
import GameScreen from './components/GameScreen'
import VictoryScreen from './components/VictoryScreen'

type Phase = 'splash' | 'playing' | 'victory'

export default function App() {
  const [phase, setPhase] = useState<Phase>('splash')
  const [score, setScore] = useState(0)

  const handleStart = () => setPhase('playing')
  const handleFinish = (finalScore: number) => { setScore(finalScore); setPhase('victory') }
  const handleRestart = () => { setScore(0); setPhase('splash') }

  if (phase === 'splash') return <SplashScreen onStart={handleStart} />
  if (phase === 'victory') return <VictoryScreen score={score} onRestart={handleRestart} />

  return (
    <div className="min-h-screen bg-dark-bg">
      <header className="bg-dark-card/80 backdrop-blur border-b border-dark-border px-3 py-2 sticky top-0 z-40">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-base">🔑</span>
            <span className="text-[11px] font-bold tracking-widest">
              <span className="text-neon-purple">HYPER</span>
              <span className="text-neon-cyan">REALITY</span>
              <span className="text-neon-pink">KEY</span>
            </span>
          </div>
        </div>
      </header>
      <main><GameScreen onFinish={handleFinish} /></main>
    </div>
  )
}
