// ── GAME SCREEN v5 — Choose & Reveal ──
import { useState, useMemo, useCallback } from 'react'
import { getMissionPosts } from '../data/missions'
import { CORE_TOOLS, TOOL_LARGE_ICONS, getHighlightsFor } from '../data/coreTools'
import type { CoreToolId } from '../types'

interface GameScreenProps { onFinish: (score: number) => void }

export default function GameScreen({ onFinish }: GameScreenProps) {
  const [posts] = useState(() => getMissionPosts())
  const [postIndex, setPostIndex] = useState(0)
  const [activeFilters, setActiveFilters] = useState<CoreToolId[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [score, setScore] = useState(0)
  const [toolPopup, setToolPopup] = useState<CoreToolId | null>(null)

  const post = posts[postIndex]
  const isLast = postIndex >= posts.length - 1

  const highlights = useMemo(
    () => getHighlightsFor(activeFilters, post.content + ' ' + post.title),
    [activeFilters, post]
  )

  const toggleFilter = useCallback((toolId: CoreToolId) => {
    setActiveFilters(prev =>
      prev.includes(toolId) ? prev.filter(id => id !== toolId) : [...prev, toolId]
    )
    setToolPopup(null)
  }, [])

  const handleSubmit = useCallback(() => {
    if (selectedAnswer === null) return
    const correct = selectedAnswer === post.correctIndex
    setFeedback(correct ? 'correct' : 'wrong')
    if (correct) setScore(prev => prev + 10)
  }, [selectedAnswer, post])

  const handleNext = useCallback(() => {
    if (isLast) { onFinish(score) }
    else {
      setPostIndex(prev => prev + 1)
      setActiveFilters([])
      setSelectedAnswer(null)
      setFeedback(null)
    }
  }, [isLast, score, onFinish])

  // ── SUBMITTED ──
  if (feedback) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="bg-dark-card border-2 p-8 text-center"
            style={{ borderColor: feedback === 'correct' ? '#22c55e' : '#ef4444' }}>
            <div className="text-5xl mb-4">{feedback === 'correct' ? '🎉' : '🤔'}</div>
            <h2 className="text-lg font-bold text-white mb-1">
              {feedback === 'correct' ? 'Correct!' : 'Not quite'}
            </h2>
            <p className="text-sm text-gray-400 mb-1">
              {feedback === 'correct'
                ? `The trick is: "${post.options[post.correctIndex]}"`
                : `Answer was: "${post.options[post.correctIndex]}"`
              }
            </p>
            <p className="text-[11px] text-gray-500 mb-6 font-mono">
              {post.neededTools.map(id => {
                const t = CORE_TOOLS.find(x => x.id === id)
                return t ? `${t.icon} ${t.name}` : ''
              }).join(' · ')} filter showed the clue
            </p>
            <button onClick={handleNext} className="pixel-btn w-full justify-center"
              style={{ borderColor: '#22c55e', color: '#22c55e' }}>
              {isLast ? '🏁 See Results' : 'Next Post →'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── PLAYING ──
  const renderContent = () => {
    const words = post.content.split(/(\s+)/)
    return words.map((w, i) => {
      const clean = w.toLowerCase().replace(/[^a-z%]/g, '')
      const entries = clean ? highlights.get(clean) : undefined
      if (entries && entries.length > 0) {
        return (
          <span key={i} className="relative group cursor-pointer rounded px-0.5 font-medium"
            style={{ backgroundColor: entries[0].color + '35', borderBottom: `2px solid ${entries[0].color}`, color: '#111' }}>
            {w}
            <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-60 p-2.5 rounded-lg text-[10px] leading-relaxed pointer-events-none shadow-xl"
              style={{ background: '#1a1a2e', border: `2px solid ${entries[0].color}` }}>
              <div className="font-bold text-white text-[10px] mb-1">🔍 Clue found!</div>
              {entries.map((e, j) => (
                <div key={j} className="text-gray-200 mt-0.5">{e.explanation}</div>
              ))}
            </span>
          </span>
        )
      }
      return <span key={i}>{w}</span>
    })
  }

  const allToolIds = useMemo(() => {
    // Show all 7 tools but highlight the needed ones
    return CORE_TOOLS.map(t => t.id)
  }, [])

  return (
    <div className="min-h-screen pb-8">
      {/* ── ANIMATED BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', animation: 'pulse 4s infinite' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', animation: 'pulse 6s infinite 1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)', animation: 'pulse 5s infinite 2s' }} />
      </div>

      <div className="max-w-2xl mx-auto p-3 sm:p-4 space-y-3 relative z-10">
        {/* Progress bar */}
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <div className="flex-1 bg-gray-800 rounded-full h-1.5 overflow-hidden">
            <div className="h-full rounded-full transition-all" style={{ width: `${((postIndex + 1) / posts.length) * 100}%`, background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)' }} />
          </div>
          <span className="text-gray-400">{postIndex + 1}/{posts.length}</span>
          <span className="text-neon-cyan">★ {score}</span>
        </div>

        {/* ── POST CARD — Browser/News Feed ── */}
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
          
          {/* Browser-style top bar */}
          <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-white rounded-full px-3 py-1 text-[10px] text-gray-400 font-mono border border-gray-200 truncate">
              {post.source.toLowerCase().replace(/\s+/g, '.')}.com/news
            </div>
          </div>

          {/* Post header */}
          <div className="px-4 pt-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center text-white text-sm font-bold shadow">H</div>
            <div>
              <div className="text-sm font-bold text-gray-800">{post.source}</div>
              <div className="text-[11px] text-gray-400">{post.category}</div>
            </div>
          </div>

          {/* Post content */}
          <div className="px-4 py-3">
            <h2 className="text-base font-bold text-gray-900 mb-2 leading-snug">{post.title}</h2>
            <div className="text-[13px] text-gray-700 leading-relaxed">{renderContent()}</div>
          </div>

          {/* Filter buttons — LARGE, COLORFUL */}
          <div className="border-t border-gray-100 px-4 py-3">
            <div className="text-[10px] font-mono text-gray-400 mb-2">
              {activeFilters.length === 0
                ? '💡 Tap a filter to reveal hidden tricks in the text'
                : '🖱️ Hover highlighted words for clues'
              }
            </div>
            <div className="grid grid-cols-4 gap-2">
              {allToolIds.map(toolId => {
                const t = CORE_TOOLS.find(x => x.id === toolId)
                if (!t) return null
                const isOn = activeFilters.includes(toolId)
                const isNeeded = post.neededTools.includes(toolId)
                const largeIcon = TOOL_LARGE_ICONS[toolId]
                
                return (
                  <div key={toolId} className="relative">
                    <button
                      onClick={() => toggleFilter(toolId)}
                      onMouseEnter={() => setToolPopup(toolId)}
                      onMouseLeave={() => setToolPopup(null)}
                      className="w-full flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all cursor-pointer"
                      style={{
                        borderColor: isOn ? t.color : `${t.color}30`,
                        backgroundColor: isOn ? `${t.color}20` : 'transparent',
                        boxShadow: isOn ? `0 0 15px ${t.color}30` : 'none',
                      }}
                    >
                      <span className="text-2xl">{isOn ? largeIcon : t.icon}</span>
                      <span className="text-[9px] font-bold uppercase tracking-wider"
                        style={{ color: isOn ? t.color : '#999' }}>
                        {t.name}
                      </span>
                      {isNeeded && !isOn && (
                        <span className="text-[8px] text-gray-500">tap to use</span>
                      )}
                    </button>

                    {/* Tooltip popup */}
                    {toolPopup === toolId && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 z-50 animate-fade-in-up pointer-events-none">
                        <div className="bg-dark-card border-2 rounded-xl p-3 shadow-xl"
                          style={{ borderColor: t.color + '60' }}>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-lg">{t.icon}</span>
                            <span className="text-xs font-bold text-white">{t.name}</span>
                          </div>
                          <p className="text-[10px] text-gray-400 leading-relaxed">{t.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── MISSION: Question + 4 choices ── */}
        <div className="bg-dark-card border border-dark-border rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">🎯</span>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Mission</span>
          </div>
          <p className="text-sm text-white font-bold mb-3">{post.question}</p>
          
          <div className="grid grid-cols-1 gap-2">
            {post.options.map((opt, i) => {
              const isSelected = selectedAnswer === i
              return (
                <button
                  key={i}
                  onClick={() => setSelectedAnswer(i)}
                  className="w-full text-left text-sm px-4 py-3 rounded-xl border-2 transition-all"
                  style={{
                    borderColor: isSelected ? '#8b5cf6' : '#2a2a3a',
                    backgroundColor: isSelected ? 'rgba(139,92,246,0.15)' : 'transparent',
                    color: isSelected ? '#fff' : '#bbb',
                  }}
                >
                  <span className="mr-3 font-mono text-xs text-gray-500">{String.fromCharCode(65 + i)}</span>
                  {opt}
                  {isSelected && <span className="float-right text-neon-purple">●</span>}
                </button>
              )
            })}
          </div>

          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="w-full mt-4 pixel-btn disabled:opacity-30 disabled:cursor-not-allowed justify-center"
          >
            {selectedAnswer !== null ? '✅ Check Answer' : 'Pick an answer above'}
          </button>
        </div>
      </div>
    </div>
  )
}
