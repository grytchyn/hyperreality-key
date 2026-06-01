// ── CHAT UI v2 — answer appears in chat, inline feedback ──
// Flow: friend msg → article preview → user answer as chat bubble
// Avatars: uses /assets/bg/avatar-{name}.png

// ── Chat UI v5 — scientist chat bubble ──
import type { MissionPost } from '../data/missions'

const SCIENTIST_AVATARS: Record<string, string> = {
  'arthur schopenhauer': '/assets/scientists/schopenhauer.png',
  'robert cialdini': '/assets/scientists/cialdini.png',
  'daniel kahneman': '/assets/scientists/kahneman.png',
  'henri tajfel': '/assets/scientists/tajfel.png',
  'jonathan haidt': '/assets/scientists/haidt.png',
  'roland barthes': '/assets/scientists/barthes.png',
  'jean baudrillard': '/assets/scientists/baudrillard.png',
  'michel foucault': '/assets/scientists/foucault.png',
  'cass sunstein': '/assets/scientists/sunstein.png',
  'mccombs & shaw': '/assets/scientists/mccombs-shaw.png',
}

function getScientistAvatar(name: string): string {
  return SCIENTIST_AVATARS[name.toLowerCase()] || ''
}

interface ChatUiProps {
  friendName?: string
  friendColor?: string
  friendPreview?: string
  articleTitle?: string
  articleSource?: string
  onAnalyze?: () => void
  showAnalyze?: boolean
  userAnswer?: number | null
  isCorrect?: boolean | null
  showFeedback?: boolean
}

export default function ChatUi({
  friendName, friendColor, friendPreview,
  articleTitle, articleSource,
  onAnalyze, showAnalyze,
  userAnswer, isCorrect, showFeedback,
}: ChatUiProps) {
  return (
    <div className="rounded-2xl overflow-hidden"
      style={{
        background: '#0a0a0f',
        border: '1px solid rgba(139,92,246,0.2)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
      }}>
      
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2"
        style={{ background: '#0d0d14', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="text-[12px] font-bold text-white">9:41</div>
        <div className="flex items-center gap-1.5">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <rect x="0.5" y="0.5" width="11" height="9" rx="1.5" stroke="#888" strokeWidth="0.8" />
            <text x="4" y="7" fill="#888" fontSize="5" fontWeight="bold">5G</text>
          </svg>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <rect x="0.5" y="2" width="9" height="1" rx="0.5" fill="#888" />
            <rect x="0.5" y="4" width="7" height="1" rx="0.5" fill="#888" />
            <rect x="0.5" y="6" width="5" height="1" rx="0.5" fill="#888" />
            <rect x="0.5" y="8" width="3" height="1" rx="0.5" fill="#888" />
          </svg>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <rect x="1" y="1" width="12" height="8" rx="2" stroke="#4ade80" strokeWidth="0.8" fill="#4ade80" opacity="0.3" />
            <rect x="3" y="3" width="8" height="4" rx="0.5" fill="#4ade80" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Chat header with avatar */}
      <div className="flex items-center gap-3 px-4 py-2.5"
        style={{ background: '#0d0d14', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M15 4 L17 6 L15 8" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="4" y1="6" x2="17" y2="6" stroke="#888" strokeWidth="1.5" />
        </svg>
        <img src={getScientistAvatar(friendName)} alt={friendName}
          className="w-8 h-8 rounded-full object-cover shrink-0"
          style={{ border: `2px solid ${friendColor}60` }} />
        <div className="flex-1">
          <div className="text-[11px] font-bold text-white">{friendName}</div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[9px] text-green-400 font-mono">online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="px-4 py-3 space-y-2.5">
        {/* Incoming: friend message */}
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[11px] leading-relaxed"
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: '#d1d5db',
              borderBottomLeftRadius: '4px',
            }}>
            {friendPreview}
          </div>
        </div>

        {/* Incoming: article preview card */}
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl overflow-hidden"
            style={{
              background: '#0d0d14',
              border: '1px solid rgba(139,92,246,0.25)',
              borderBottomLeftRadius: '4px',
            }}>
            {/* Article thumbnail area with emoji */}
            <div className="h-20 flex items-center justify-center text-3xl"
              style={{ background: `linear-gradient(135deg, ${friendColor}20, rgba(0,0,0,0.5))` }}>
              📰
            </div>
            <div className="p-2.5">
              <div className="text-[11px] font-bold text-white leading-snug mb-0.5">{articleTitle}</div>
              <div className="text-[9px] text-gray-500 font-mono">{articleSource}</div>
            </div>
          </div>
        </div>

        {/* Typing indicator — only BEFORE user answers */}
        {!showFeedback && showAnalyze && !userAnswer && (
          <div className="flex justify-end">
            <div className="rounded-2xl px-3.5 py-2.5"
              style={{
                background: 'rgba(139,92,246,0.15)',
                borderBottomRightRadius: '4px',
              }}>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0s' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0.15s' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0.3s' }} />
              </div>
            </div>
          </div>
        )}

        {/* User answer as chat message */}
        {userAnswer && (
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[11px] leading-relaxed"
              style={{
                background: isCorrect 
                  ? 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(34,197,94,0.1))' 
                  : 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(124,58,237,0.1))',
                color: '#e5e7eb',
                borderBottomRightRadius: '4px',
                border: isCorrect 
                  ? '1px solid rgba(34,197,94,0.2)' 
                  : '1px solid rgba(139,92,246,0.2)',
              }}>
              <div className="text-[9px] font-mono mb-1" style={{ color: isCorrect ? '#4ade80' : '#a78bfa' }}>
                {isCorrect ? '✓ CORRECT' : '✗ NOT QUITE'}
              </div>
              {userAnswer}
            </div>
          </div>
        )}
      </div>

      {/* Feedback bubble explanation — only after answering */}
      {showFeedback && (
        <div className="px-4 pb-2">
          <div className="rounded-xl p-3 text-[10px] leading-relaxed animate-fade-in-up"
            style={{
              background: isCorrect ? 'rgba(34,197,94,0.06)' : 'rgba(239,68,68,0.06)',
              border: `1px solid ${isCorrect ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)'}`,
              color: '#b0b0b0',
            }}>
            <span className="font-bold block mb-1" style={{ color: isCorrect ? '#4ade80' : '#ef4444' }}>
              {isCorrect ? '🎉 Correct!' : '✗ Not quite'}
            </span>
            {isCorrect ? 'Great analysis!' : 'The right answer uses different reasoning.'}
          </div>
        </div>
      )}

      {/* CTA: Open & Analyze button — hidden after answering */}
      <div className="px-4 pb-3">
        {showAnalyze && !userAnswer && (
          <button onClick={onAnalyze}
            className="w-full flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-bold text-xs uppercase tracking-wider transition-all duration-200
              hover:translate-y-[-1px] active:scale-[0.98] cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              color: '#fff',
              boxShadow: '0 4px 20px rgba(139,92,246,0.3)',
            }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Open & Analyze
          </button>
        )}
      </div>

      {/* Input bar */}
      <div className="px-4 pb-3 flex items-center gap-2">
        <div className="flex-1 rounded-full px-3.5 py-2 text-[10px] text-gray-600 font-mono"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)' }}>
          {userAnswer ? 'Answer sent ✓' : 'Type a message...'}
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </div>
      </div>
    </div>
  )
}