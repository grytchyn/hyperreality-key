// ── APP v7 — Chat → Analyze → Answer pipeline ──
import { useState, useCallback } from 'react'
import type { MissionPost } from './data/missions'
import { getMissionPosts } from './data/missions'
import SplashScreen from './components/SplashScreen'
import GameScreen from './components/GameScreen'
import VictoryScreen from './components/VictoryScreen'

type Phase = 'splash' | 'playing' | 'victory'

export default function App() {
  const [phase, setPhase] = useState<Phase>('splash')
  const [score, setScore] = useState(0)
  const [posts, setPosts] = useState<MissionPost[]>([])
  const [postIndex, setPostIndex] = useState(0)
  const [currentPost, setCurrentPost] = useState<MissionPost | null>(null)

  const handleStart = useCallback((post: MissionPost) => {
    const allPosts = getMissionPosts()
    setPosts(allPosts)
    setCurrentPost(post)
    setPostIndex(allPosts.indexOf(post))
    setPhase('playing')
  }, [])

  const handleFinish = useCallback((roundScore: number) => {
    // Accumulate score
    const newScore = score + (roundScore > 0 ? roundScore : 0)
    setScore(newScore)
    
    // Go to next post or finish
    const nextIdx = postIndex + 1
    if (nextIdx >= posts.length) {
      setPhase('victory')
    } else {
      setPostIndex(nextIdx)
      setCurrentPost(posts[nextIdx])
    }
  }, [postIndex, posts, score])

  const handleRestart = useCallback(() => {
    setScore(0)
    setPosts([])
    setPostIndex(0)
    setCurrentPost(null)
    setPhase('splash')
  }, [])

  if (phase === 'splash') return <SplashScreen onStart={handleStart} />
  if (phase === 'victory') return <VictoryScreen score={score} onRestart={handleRestart} />

  if (!currentPost || posts.length === 0) return <SplashScreen onStart={handleStart} />

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
        </div>
      </header>
      <main>
        <GameScreen
          post={currentPost}
          allPosts={posts}
          postIndex={postIndex}
          onFinish={handleFinish}
        />
      </main>
    </div>
  )
}
