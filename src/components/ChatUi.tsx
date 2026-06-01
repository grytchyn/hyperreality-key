// ── CHAT UI — phone-style chat (refactored, uses shared scientists.ts) ──
import { getScientistAvatar } from '../engine/scientists'

interface ChatUiProps {
  friendName?: string
  friendColor?: string
  friendPreview?: string
  articleTitle?: string
  articleSource?: string
  onAnalyze?: () => void
  showAnalyze?: boolean
  userAnswer?: boolean
  isCorrect?: boolean
  showFeedback?: boolean
}

export default function ChatUi({
  friendName,
  friendColor = '#8b5cf6',
  friendPreview = 'Check this out 👀',
  articleTitle = '',
  articleSource = '',
  onAnalyze,
  showAnalyze = true,
  userAnswer,
  isCorrect,
  showFeedback,
}: ChatUiProps) {
  const scientist = friendName ? getScientistAvatar(friendName.toLowerCase()) : null
  const avatarSrc = scientist?.avatar || ''

  return (
    <div className="w-full rounded-2xl overflow-hidden"
      style={{
        background: '#13131a',
        border: '1px solid rgba(42,42,58,0.6)',
        maxWidth: '360px',
      }}
    >
      {/* Phone status bar */}
      <div className="flex items-center justify-between px-4 py-2"
        style={{ background: '#0a0a0f', borderBottom: '1px solid rgba(42,42,58,0.4)' }}
      >
        <div className="flex items-center gap-1.5">
          <svg width="14" height="10" viewBox="0 0 18 12" fill="none">
            <rect x="0.5" y="0.5" width="15" height="11" rx="2" stroke="#9ca3af" strokeOpacity="0.5" fill="none" />
            <rect x="2.5" y="2.5" width="11" height="7" fill="#22c55e" opacity="0.6" rx="0.5" />
          </svg>
          <span className="text-[9px] font-mono text-[#9ca3af]">{friendName || 'Telegram'}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg width="14" height="10" viewBox="0 0 24 12" fill="none">
            <rect x="14" y="1" width="5" height="8" rx="0.5" fill="#22c55e" opacity="0.6" />
            <rect x="9" y="1" width="4" height="8" rx="0.5" fill="#22c55e" opacity="0.7" />
            <rect x="4" y="1" width="4" height="8" rx="0.5" fill="#22c55e" opacity="0.8" />
            <rect x="0" y="0.5" width="3.5" height="10.5" rx="2.5" fill="none" stroke="#22c55e" strokeOpacity="0.8" />
          </svg>
          <span className="text-[8px] text-[#6b7280] font-mono">5G</span>
          <svg width="14" height="10" viewBox="0 0 24 14" fill="none">
            <rect x="12" y="2" width="3" height="10" rx="0.5" fill="#22c55e" opacity="0.5" />
            <rect x="8" y="2" width="3" height="10" rx="0.5" fill="#22c55e" opacity="0.6" />
            <rect x="4" y="2" width="3" height="10" rx="0.5" fill="#22c55e" opacity="0.7" />
            <rect x="0" y="2" width="3" height="10" rx="0.5" fill="#22c55e" opacity="0.8" />
          </svg>
        </div>
      </div>

      {/* Chat messages */}
      <div className="p-3 space-y-3 min-h-[200px]"
        style={{ background: '#0a0a0f' }}
      >
        {/* Friend message with avatar */}
        {friendName && (
          <div className="flex items-start gap-2">
            <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0"
              style={{ border: `1px solid ${friendColor}40` }}
            >
              {avatarSrc ? (
                <img src={avatarSrc} alt={friendName} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[10px] font-mono"
                  style={{ background: friendColor }}
                >
                  {friendName[0]}
                </div>
              )}
            </div>
            <div>
              <div className="text-[9px] font-mono mb-1" style={{ color: friendColor }}>
                {friendName}
              </div>
              <div className="rounded-2xl px-3 py-2 text-[10px] leading-relaxed"
                style={{
                  background: 'linear-gradient(135deg, rgba(19,19,26,0.95), rgba(26,26,36,0.95))',
                  border: '1px solid rgba(42,42,58,0.6)',
                  color: '#e5e7eb',
                  borderBottomLeftRadius: '4px',
                  maxWidth: '260px',
                }}
              >
                {friendPreview}
              </div>
            </div>
          </div>
        )}

        {/* Article preview */}
        {articleTitle && (
          <div className="flex justify-end">
            <div className="rounded-2xl px-3 py-2 text-[10px] leading-relaxed"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(124,58,237,0.1))',
                border: '1px solid rgba(139,92,246,0.2)',
                color: '#e5e7eb',
                borderBottomRightRadius: '4px',
                maxWidth: '260px',
              }}
            >
              <div className="text-[8px] font-mono mb-0.5" style={{ color: '#8b5cf6' }}>
                📰 Shared Article
              </div>
              <div className="font-bold mb-0.5">{articleTitle}</div>
              {articleSource && (
                <div className="text-[8px]" style={{ color: '#6b7280' }}>
                  {articleSource}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Analyze button */}
        {showAnalyze && onAnalyze && (
          <div className="flex justify-center mt-2">
            <button
              onClick={onAnalyze}
              className="px-4 py-2 rounded-xl text-[10px] font-mono transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                color: '#fff',
                border: '1px solid rgba(139,92,246,0.4)',
                boxShadow: '0 4px 12px rgba(139,92,246,0.2)',
              }}
            >
              🔍 Open & Analyze
            </button>
          </div>
        )}

        {/* Feedback */}
        {showFeedback && userAnswer !== undefined && (
          <div className="flex justify-end">
            <div className={`rounded-2xl px-3 py-2 text-[10px] leading-relaxed ${isCorrect ? '' : ''}`}
              style={{
                background: isCorrect
                  ? 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(22,163,74,0.1))'
                  : 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(220,38,38,0.1))',
                border: `1px solid ${isCorrect ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}`,
                color: isCorrect ? '#4ade80' : '#f87171',
                borderBottomRightRadius: '4px',
              }}
            >
              {isCorrect ? '✅ Correct!' : '❌ Not quite...'}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}