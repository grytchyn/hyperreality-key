// ── GAME SCREEN v4 — Mission: Filter & Reveal ──
import { useState, useMemo, useCallback } from 'react'
import { getMissionPosts } from '../data/missions'
import { CORE_TOOLS } from '../data/coreTools'
import { getHighlightsFor } from '../data/coreTools'
import type { CoreToolId } from '../types'

interface GameScreenProps {
  onFinish: (score: number) => void
}

export default function GameScreen({ onFinish }: GameScreenProps) {
  const [posts] = useState(() => getMissionPosts())
  const [postIndex, setPostIndex] = useState(0)
  const [activeFilters, setActiveFilters] = useState<CoreToolId[]>([])
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [score, setScore] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const post = posts[postIndex]
  const isLast = postIndex >= posts.length - 1

  // All tools this mission needs + optional extras
  const availableTools = useMemo(() => {
    const needed = post.neededTools
    // Add 1-2 extra tools for variety
    const extras = CORE_TOOLS.filter(t => !needed.includes(t.id)).slice(0, 2)
    return [...needed, ...extras.map(t => t.id)]
  }, [post])

  // Highlights for active filters
  const highlights = useMemo(
    () => getHighlightsFor(activeFilters, post.content + ' ' + post.title),
    [activeFilters, post]
  )

  const toggleFilter = useCallback((toolId: CoreToolId) => {
    setActiveFilters(prev =>
      prev.includes(toolId) ? prev.filter(id => id !== toolId) : [...prev, toolId]
    )
  }, [])

  const handleSubmit = useCallback(() => {
    if (!answer.trim()) return
    const correct = answer.trim().toLowerCase() === post.answer.toLowerCase()
    setFeedback(correct ? 'correct' : 'wrong')
    setSubmitted(true)
    if (correct) setScore(prev => prev + 10)
  }, [answer, post])

  const handleNext = useCallback(() => {
    if (isLast) {
      onFinish(score)
    } else {
      setPostIndex(prev => prev + 1)
      setActiveFilters([])
      setAnswer('')
      setFeedback(null)
      setSubmitted(false)
    }
  }, [isLast, score, onFinish])

  // ── FINISHED ──
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="bg-dark-card border border-dark-border p-8 text-center">
            <div className="text-5xl mb-4">{feedback === 'correct' ? '🎉' : '🤔'}</div>
            <h2 className="text-lg font-bold text-white mb-2">
              {feedback === 'correct' ? 'Got it!' : 'Not quite'}
            </h2>
            <p className="text-xs text-gray-400 font-mono mb-1">
              {feedback === 'correct'
                ? `The trick was: "${post.answer}"`
                : `The answer was: "${post.answer}"`
              }
            </p>
            <p className="text-[10px] text-gray-600 font-mono mb-6">
              {post.hint}
            </p>
            <button
              onClick={handleNext}
              className="pixel-btn w-full justify-center"
              style={{ borderColor: '#22c55e', color: '#22c55e' }}
            >
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
      const clean = w.toLowerCase().replace(/[^a-z]/g, '')
      const entries = clean ? highlights.get(clean) : undefined
      if (entries && entries.length > 0) {
        return (
          <span key={i} className="relative group cursor-pointer rounded px-0.5 font-medium"
            style={{ backgroundColor: entries[0].color + '30', borderBottom: `2px solid ${entries[0].color}`, color: '#111' }}
          >
            {w}
            <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2 rounded text-[10px] leading-relaxed pointer-events-none shadow-lg"
              style={{ background: '#1a1a2e', border: `1px solid ${entries[0].color}` }}>
              {entries.map((e, j) => (
                <div key={j} className="text-gray-200 text-[9px] mt-0.5">{e.explanation}</div>
              ))}
            </span>
          </span>
        )
      }
      return <span key={i}>{w}</span>
    })
  }

  return (
    <div className="max-w-3xl mx-auto p-3 sm:p-4 space-y-3">
      {/* Progress */}
      <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
        <span>Post {postIndex + 1}/{posts.length}</span>
        <span>★ {score}</span>
      </div>

      {/* POST CARD — like social media */}
      <div className="bg-white rounded-lg shadow-xl border border-gray-200">
        {/* Header */}
        <div className="bg-gray-50 border-b border-gray-200 px-3 py-2 flex items-center gap-2 text-[11px]">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center text-white text-[8px]">H</div>
          <span className="font-bold text-gray-700 uppercase tracking-wider">{post.source}</span>
          <span className="text-gray-400">·</span>
          <span className="text-gray-500">{post.category}</span>
        </div>

        {/* Content */}
        <div className="px-3 py-3">
          <h2 className="text-base font-bold text-gray-900 mb-2 leading-tight">{post.title}</h2>
          <div className="text-[13px] text-gray-800 leading-relaxed">{renderContent()}</div>
        </div>

        {/* Filter bar */}
        <div className="border-t border-gray-200 bg-gray-50 px-3 py-2">
          <div className="flex flex-wrap gap-1.5 items-center mb-1">
            {availableTools.map(toolId => {
              const t = CORE_TOOLS.find(x => x.id === toolId)
              if (!t) return null
              const isOn = activeFilters.includes(toolId)
              return (
                <button
                  key={toolId}
                  onClick={() => toggleFilter(toolId)}
                  className="text-[10px] px-2 py-1 rounded-full font-mono border transition-all flex items-center gap-1"
                  style={{
                    borderColor: isOn ? t.color : `${t.color}40`,
                    color: isOn ? '#fff' : t.color,
                    backgroundColor: isOn ? t.color : 'transparent',
                  }}
                >
                  {t.icon}{isOn ? ' ON' : ''}
                </button>
              )
            })}
          </div>
          <p className="text-[8px] text-gray-400 font-mono">
            {activeFilters.length === 0
              ? '💡 Tap a filter to reveal hidden words. Hover highlighted words for clues.'
              : '🖱️ Hover colored words for clues. Need more? Try another filter.'
            }
          </p>
        </div>
      </div>

      {/* MISSION */}
      <div className="bg-dark-card border border-dark-border p-4">
        <div className="text-xs text-gray-400 font-mono mb-1">🎯 MISSION</div>
        <p className="text-sm text-white font-bold mb-1">{post.question}</p>
        <p className="text-[10px] text-gray-500 font-mono mb-3">{post.hint}</p>

        <div className="flex gap-2">
          <input
            type="text"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder="Type your answer..."
            className="flex-1 bg-dark-surface border border-gray-700 rounded px-3 py-2 text-sm text-white placeholder-gray-500 font-mono outline-none focus:border-neon-cyan"
          />
          <button
            onClick={handleSubmit}
            disabled={!answer.trim()}
            className="pixel-btn disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: '#22c55e', color: '#22c55e' }}
          >
            ✓
          </button>
        </div>
      </div>
    </div>
  )
}
