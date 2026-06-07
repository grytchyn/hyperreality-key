// ── SPLASH SCREEN v3 — WhatsApp-style Messenger + smooth animations ──
import { useState, useEffect } from 'react'

interface SplashScreenProps {
  onStart: () => void
}

interface Message {
  id: string
  text: string
  sender: 'friend' | 'me'
  isArticle?: boolean
}

const MESSAGES: Message[] = [
  {
    id: '1',
    text: "Wow, you gotta see this! Some incredible news just dropped! 🤯",
    sender: 'friend',
  },
  {
    id: '2',
    text: "BREAKING: Trump's immigration approval drops to record low, poll shows. Only 39% approve — down from 41% in January...",
    sender: 'friend',
    isArticle: true,
  },
]

export default function SplashScreen({ onStart }: SplashScreenProps) {
  const [visible, setVisible] = useState(false)
  const [showMessages, setShowMessages] = useState(false)
  const [msgIndex, setMsgIndex] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setVisible(true)
    const t1 = setTimeout(() => setShowMessages(true), 500)
    return () => clearTimeout(t1)
  }, [])

  useEffect(() => {
    if (!showMessages) return
    if (msgIndex < MESSAGES.length) {
      const delay = MESSAGES[msgIndex].isArticle ? 1600 : 1200
      const t = setTimeout(() => setMsgIndex(i => i + 1), delay)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => setReady(true), 500)
      return () => clearTimeout(t)
    }
  }, [showMessages, msgIndex])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: 'var(--color-dark-bg) url(/assets/bg/webp/splash-bg.webp) center center / cover no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'linear-gradient(180deg, color-mix(in srgb, var(--color-dark-bg) 60%, transparent) 0%, color-mix(in srgb, var(--color-dark-bg) 80%, transparent) 50%, color-mix(in srgb, var(--color-dark-bg) 95%, transparent) 100%)',
        }}
      />

      <div
        className={`relative z-10 w-full max-w-xs transition-all duration-700 ease-out ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        {/* PHONE FRAME */}
        <div
          className="rounded-[2.5rem] overflow-hidden shadow-2xl"
          style={{
            background: 'var(--color-dark-bg)',
            border: '2px solid color-mix(in srgb, var(--color-dark-border) 60%, transparent)',
            boxShadow: '0 0 60px color-mix(in srgb, var(--color-neon-purple) 10%, transparent), 0 20px 60px rgba(0,0,0,0.5)',
          }}
        >
          {/* Status bar */}
          <div
            className="flex items-center justify-between px-6 py-2"
            style={{ background: 'var(--color-dark-bg)', borderBottom: '1px solid color-mix(in srgb, var(--color-dark-border) 40%, transparent)' }}
          >
            <span className="text-[10px] font-mono font-bold" style={{ color: 'var(--color-text-primary)' }}>9:41</span>
            <div className="flex items-center gap-1">
              <svg width="14" height="12" viewBox="0 0 24 12" fill="none">
                <rect x="14" y="1" width="5" height="8" rx="0.5" fill="var(--color-pixel-green)" opacity="0.6" />
                <rect x="9" y="1" width="4" height="8" rx="0.5" fill="var(--color-pixel-green)" opacity="0.7" />
                <rect x="4" y="1" width="4" height="8" rx="0.5" fill="var(--color-pixel-green)" opacity="0.8" />
                <rect x="0" y="0.5" width="3.5" height="10.5" rx="2.5" fill="none" stroke="var(--color-pixel-green)" strokeOpacity="0.8" />
              </svg>
              <span className="text-[9px] font-mono" style={{ color: 'var(--color-pixel-green)' }}>5G</span>
              <svg width="16" height="12" viewBox="0 0 24 14" fill="none">
                <rect x="12" y="2" width="3" height="10" rx="0.5" fill="var(--color-pixel-green)" opacity="0.5" />
                <rect x="8" y="2" width="3" height="10" rx="0.5" fill="var(--color-pixel-green)" opacity="0.6" />
                <rect x="4" y="2" width="3" height="10" rx="0.5" fill="var(--color-pixel-green)" opacity="0.7" />
                <rect x="0" y="2" width="3" height="10" rx="0.5" fill="var(--color-pixel-green)" opacity="0.8" />
              </svg>
            </div>
          </div>

          {/* Messenger header */}
          <div
            className="flex items-center justify-between px-4 py-2.5"
            style={{
              background: 'linear-gradient(90deg, color-mix(in srgb, var(--color-neon-purple) 20%, transparent), color-mix(in srgb, var(--color-neon-cyan) 10%, transparent))',
              borderBottom: '1px solid color-mix(in srgb, var(--color-neon-purple) 15%, transparent)'
            }}
          >
            <button className="text-[11px] font-mono" style={{ color: 'var(--color-neon-cyan)' }}>← Chats</button>
            <span className="text-[11px] font-bold font-mono" style={{ color: 'var(--color-text-primary)' }}>Alex</span>
            {/* HEADER AVATAR — 28px */}
            <div className="w-7 h-7 rounded-full overflow-hidden shrink-0"
              style={{ border: '1px solid color-mix(in srgb, var(--color-neon-purple) 30%, transparent)' }}>
              <img src="/assets/bg/webp/avatars.webp" alt="Alex" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Chat area — messages appear at bottom like real messenger */}
          <div className="p-3 min-h-[280px] flex flex-col justify-end" style={{ background: 'var(--color-dark-bg)' }}>
            {/* Typing indicator */}
            {showMessages && msgIndex < 1 && (
              <div className="flex items-start gap-2 mb-3 animate-fade-in">
                {/* CHAT AVATAR — 32px */}
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0" style={{ border: '1px solid #4ade8040' }}>
                  <img src="/assets/bg/webp/avatars.webp" alt="Alex" className="w-full h-full object-cover" />
                </div>
                <div className="flex gap-1 px-3 py-2.5 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-dark-card) 95%, transparent), color-mix(in srgb, var(--color-dark-surface) 95%, transparent))',
                    border: '1px solid color-mix(in srgb, var(--color-dark-border) 60%, transparent)',
                    borderBottomLeftRadius: '4px',
                  }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '200ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '400ms' }} />
                </div>
              </div>
            )}

            {/* Messages */}
            {MESSAGES.slice(0, msgIndex).map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'friend' ? 'items-start gap-2' : 'justify-end'} mb-3 animate-fade-in-up`}
                style={{ animation: 'fadeInUp 0.5s ease-out' }}>
                {msg.sender === 'friend' && (
                  /* CHAT AVATAR — 32px */
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0" style={{ border: '1px solid #4ade8040' }}>
                    <img src="/assets/bg/webp/avatars.webp" alt="Alex" className="w-full h-full object-cover" />
                  </div>
                )}
                {!msg.isArticle ? (
                  <div className="rounded-2xl px-3 py-2 text-[10px] leading-relaxed max-w-[220px]"
                    style={{
                      background: msg.sender === 'friend'
                        ? 'linear-gradient(135deg, color-mix(in srgb, var(--color-dark-card) 95%, transparent), color-mix(in srgb, var(--color-dark-surface) 95%, transparent))'
                        : 'linear-gradient(135deg, color-mix(in srgb, var(--color-neon-purple) 15%, transparent), color-mix(in srgb, var(--color-neon-purple) 10%, transparent))',
                      border: `1px solid ${msg.sender === 'friend' ? 'color-mix(in srgb, var(--color-dark-border) 60%, transparent)' : 'color-mix(in srgb, var(--color-neon-purple) 20%, transparent)'}`,
                      color: 'var(--color-text-primary)',
                      borderBottomLeftRadius: msg.sender === 'friend' ? '4px' : '12px',
                      borderBottomRightRadius: msg.sender === 'friend' ? '12px' : '4px',
                    }}>
                    {msg.text}
                  </div>
                ) : (
                  <div className="rounded-2xl px-3 py-2 text-[10px] leading-relaxed max-w-[240px]"
                    style={{
                      background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-dark-card) 95%, transparent), color-mix(in srgb, var(--color-dark-surface) 95%, transparent))',
                      border: '1px solid color-mix(in srgb, var(--color-neon-purple) 15%, transparent)',
                      color: 'var(--color-text-primary)',
                      borderBottomLeftRadius: '4px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    }}>
                    <div className="flex items-center gap-1 mb-1">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--color-neon-purple)" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                      <span className="text-[8px] font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--color-neon-cyan)' }}>Shared Article</span>
                    </div>
                    <div className="font-bold text-[11px] leading-snug mb-0.5 text-white">Trump's immigration approval drops to record low</div>
                    <div className="text-[8px]" style={{ color: 'var(--color-text-muted)' }}>Reuters/Ipsos · 2 min ago</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* START BUTTON */}
        <div className="flex justify-center mt-6">
          {!ready ? (
            <div className="flex justify-center gap-2">
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bounce-dot"
                  style={{
                    backgroundColor: 'var(--color-neon-purple)',
                    opacity: 0.5,
                    animation: `bounce 1.2s infinite`,
                    animationDelay: `${i * 200}ms`,
                  }}
                />
              ))}
            </div>
          ) : (
            <button
              onClick={onStart}
              className="px-6 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in-up pulse-glow cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, var(--color-neon-purple), #7c3aed)',
                color: '#fff',
                boxShadow: '0 4px 25px color-mix(in srgb, var(--color-neon-purple) 35%, transparent)',
                animation: 'fade-in-up 0.5s ease-out',
              }}
            >
              🔍 Let's see what's there
            </button>
          )}
        </div>
      </div>
    </div>
  )
}