// ── SPLASH SCREEN v7 — Chat message from friend ──
import { useState, useEffect, useCallback } from 'react'
import { getMissionPosts, type MissionPost } from '../data/missions'

const AVATAR_MAP: Record<string, string> = {
  alex: '/assets/avatars/alex.png',
  jay: '/assets/avatars/jay.png',
  mia: '/assets/avatars/mia.png',
  jack: '/assets/avatars/jack.png',
  emma: '/assets/avatars/emma.png',
  zoe: '/assets/avatars/zoe.png',
  tom: '/assets/avatars/tiktok-tom.png',
}

function getAvatarUrl(name: string): string {
  const key = Object.keys(AVATAR_MAP).find(k => name.toLowerCase().includes(k))
  return key ? AVATAR_MAP[key] : ''
}

interface SplashScreenProps {
  onStart: (post: MissionPost) => void
}

export default function SplashScreen({ onStart }: SplashScreenProps) {
  const [messagePost, setMessagePost] = useState<MissionPost | null>(null)
  const [showChat, setShowChat] = useState(false)
  const [typing, setTyping] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const posts = getMissionPosts()
    setMessagePost(posts[0])
    setTimeout(() => setShowChat(true), 800)
  }, [])

  useEffect(() => {
    if (!showChat || !messagePost) return
    setTyping(true)
    const text = messagePost.friendPreview
    let idx = 0
    const interval = setInterval(() => {
      setMessage(text.slice(0, idx + 1))
      idx++
      if (idx >= text.length) {
        clearInterval(interval)
        setTyping(false)
      }
    }, 35)
    return () => clearInterval(interval)
  }, [showChat, messagePost])

  const handleStart = useCallback(() => {
    if (messagePost) onStart(messagePost)
  }, [messagePost, onStart])

  if (!messagePost) return null

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col relative overflow-hidden"
      style={{
        background: `#0a0a0f url('/assets/bg/splash-bg.png') center center / cover no-repeat`,
      }}>
      {/* Dark overlay */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.7) 100%)' }} />

      {/* Centered content */}
      <div className="flex-1 flex items-center justify-center p-4">
        {/* Phone frame */}
      <div className="relative w-full max-w-sm animate-fade-in-up z-10">
        {/* Phone notch */}
        <div className="mx-auto w-28 h-5 bg-black rounded-b-xl mb-0 relative z-10 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-700" />
          <div className="w-16 h-1.5 rounded-full bg-gray-800" />
        </div>

        {/* Phone screen */}
        <div className="rounded-[2rem] overflow-hidden border-4 border-gray-800 shadow-2xl"
          style={{ background: '#0a0a0f' }}>
          
          {/* Status bar */}
          <div className="px-5 pt-1 pb-1 flex items-center justify-between text-[10px] text-gray-400 font-mono">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span>●●●●</span>
              <span className="text-[8px]">🔋</span>
            </div>
          </div>

          {/* Chat header */}
          <div className="px-4 py-2 flex items-center gap-3 border-b border-dark-border/50"
            style={{ background: 'rgba(19,19,26,0.95)' }}>
            <img src={getAvatarUrl(messagePost.friendName)} alt={messagePost.friendName}
              className="w-8 h-8 rounded-full object-cover shrink-0"
              style={{ border: `2px solid ${messagePost.friendColor}60` }} />
            <div>
              <div className="text-xs font-bold text-white">{messagePost.friendName}</div>
              <div className="text-[9px] text-gray-500 font-mono">online</div>
            </div>
            <div className="ml-auto flex gap-1 text-gray-600">
              <span>📞</span>
              <span>📹</span>
            </div>
          </div>

          {/* Chat messages */}
          <div className="px-4 py-6 min-h-[260px] flex flex-col justify-end">
            {showChat && (
              <>
                {/* Friend's message bubble */}
                <div className="flex items-start gap-2 mb-3 animate-fade-in-up">
                  <img src={getAvatarUrl(messagePost.friendName)} alt={messagePost.friendName}
                    className="w-6 h-6 rounded-full object-cover shrink-0 mt-0.5"
                    style={{ border: `2px solid ${messagePost.friendColor}40` }} />
                  <div className="max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed"
                    style={{
                      background: 'rgba(26,26,36,0.9)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      color: '#e0e0e0',
                      borderBottomLeftRadius: '4px',
                    }}>
                    {typing || message.length > 0 ? (
                      <span>
                        {message}
                        {typing && <span className="inline-block w-1.5 h-3 bg-gray-400 ml-0.5 animate-pulse" />}
                      </span>
                    ) : (
                      <span className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </span>
                    )}
                  </div>
                </div>

                {/* Preview card */}
                {!typing && messagePost && (
                  <div className="ml-8 animate-fade-in-up">
                    <div className="rounded-xl overflow-hidden border border-dark-border/50 cursor-pointer transition-all hover:border-neon-purple/50 group"
                      style={{ background: 'rgba(19,19,26,0.9)' }}
                      onClick={handleStart}>
                      <div className="px-3 py-3">
                        <div className="text-xs font-bold text-white truncate group-hover:text-neon-cyan transition-colors">{messagePost.title}</div>
                        <div className="text-[9px] text-gray-500 font-mono mt-0.5">{messagePost.source}</div>
                      </div>
                    </div>
                    <button onClick={handleStart}
                      className="w-full mt-3 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer hover:translate-y-[-1px]"
                      style={{
                        background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                        color: '#fff',
                        boxShadow: '0 4px 20px rgba(139,92,246,0.3)',
                      }}>
                      🔍 Open & Analyze
                    </button>
                    <p className="text-[9px] text-gray-600 text-center mt-2 font-mono">
                      Tap to analyze this post for manipulation
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Chat input bar */}
          <div className="px-3 py-2 border-t border-dark-border/30 flex items-center gap-2">
            <div className="flex-1 rounded-xl px-3 py-2 text-xs text-gray-500 font-mono"
              style={{ background: 'rgba(26,26,36,0.9)', border: '1px solid rgba(255,255,255,0.05)' }}>
              {typing ? '...' : 'Type a message...'}
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500"
              style={{ background: 'rgba(139,92,246,0.15)' }}>
              ⬆
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
