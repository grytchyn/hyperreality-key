// ── GAME SCREEN v6 — Full Design Overhaul ──
import { useState, useMemo, useCallback } from 'react'
import { getMissionPosts } from '../data/missions'
import { CORE_TOOLS, TOOL_LARGE_ICONS, getHighlightsFor } from '../data/coreTools'
import type { CoreToolId } from '../types'

interface GameScreenProps { onFinish: (score: number) => void }

/* ── Decorative background particles ── */
const BG_PARTICLES = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: 10 + Math.random() * 30,
  x: Math.random() * 100,
  y: Math.random() * 100,
  speed: 3 + Math.random() * 4,
  delay: Math.random() * 6,
  color: ['#8b5cf6', '#06b6d4', '#ec4899', '#22c55e', '#f59e0b'][i % 5],
}))

export default function GameScreen({ onFinish }: GameScreenProps) {
  const [posts] = useState(() => getMissionPosts())
  const [postIndex, setPostIndex] = useState(0)
  const [activeFilters, setActiveFilters] = useState<CoreToolId[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [score, setScore] = useState(0)
  const [toolPopup, setToolPopup] = useState<CoreToolId | null>(null)
  const [showHint, setShowHint] = useState(false)

  const post = posts[postIndex]
  const isLast = postIndex >= posts.length - 1

  const highlights = useMemo(
    () => getHighlightsFor(activeFilters, post.content + ' ' + post.title),
    [activeFilters, post]
  )

  /** How many unique words are highlighted right now */
  const highlightCount = useMemo(() => {
    const words = post.content.toLowerCase().replace(/[^a-z\s%]/g, '').split(/\s+/)
    return [...new Set(words)].filter(w => highlights.has(w)).length
  }, [highlights, post])

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
      setShowHint(false)
    }
  }, [isLast, score, onFinish])

  // ── SUBMITTED ──
  if (feedback) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="relative overflow-hidden rounded-2xl border-2 p-8 text-center"
            style={{
              borderColor: feedback === 'correct' ? '#22c55e' : '#ef4444',
              background: feedback === 'correct'
                ? 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(16,185,129,0.05))'
                : 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(220,38,38,0.05))',
              boxShadow: feedback === 'correct'
                ? '0 0 40px rgba(34,197,94,0.2)'
                : '0 0 40px rgba(239,68,68,0.2)',
            }}>
            {/* Floating icons */}
            <div className="absolute -top-8 -right-8 text-6xl opacity-10 select-none pointer-events-none"
              style={{ transform: 'rotate(15deg)' }}>🔑</div>
            
            <div className="text-6xl mb-4 animate-bounce">{feedback === 'correct' ? '🎉' : '🤔'}</div>
            <h2 className="text-xl font-bold text-white mb-2">
              {feedback === 'correct' ? 'Nicely spotted!' : 'Not quite'}
            </h2>
            <p className="text-sm text-gray-400 mb-1">
              {feedback === 'correct'
                ? `The trick is: "${post.options[post.correctIndex]}"`
                : `The answer was: "${post.options[post.correctIndex]}"`
              }
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono mb-6 mt-2"
              style={{ background: 'rgba(139,92,246,0.15)', color: '#a78bfa', border: '1px solid rgba(139,92,246,0.3)' }}>
              {post.neededTools.map(id => {
                const t = CORE_TOOLS.find(x => x.id === id)
                return t ? `${t.icon} ${t.name}` : ''
              }).join(' · ')} filter revealed it
            </div>
            <button onClick={handleNext} 
              className="relative w-full px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all cursor-pointer hover:translate-y-[-2px]"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(139,92,246,0.4)',
              }}>
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
          <span key={i} className="relative group cursor-pointer rounded-sm px-0.5 font-medium transition-all"
            style={{
              backgroundColor: entries[0].color + '30',
              borderBottom: `2px solid ${entries[0].color}`,
              color: '#111',
            }}>
            {w}
            <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-xl text-xs leading-relaxed pointer-events-none shadow-2xl"
              style={{
                background: '#13131a',
                border: `1px solid ${entries[0].color}`,
                boxShadow: `0 4px 20px ${entries[0].color}40`,
              }}>
              <div className="font-bold text-white text-[11px] mb-1.5 flex items-center gap-1.5">
                <span>🔍</span> Clue found!
              </div>
              {entries.map((e, j) => (
                <div key={j} className="text-gray-300 mt-1 text-[11px] leading-relaxed">{e.explanation}</div>
              ))}
            </span>
          </span>
        )
      }
      return <span key={i}>{w}</span>
    })
  }

  const allToolIds = useMemo(() => CORE_TOOLS.map(t => t.id), [])

  return (
    <div className="min-h-screen pb-8 relative overflow-hidden">
      
      {/* ── ANIMATED BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            animation: 'pulse 5s infinite',
          }} />
        <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            animation: 'pulse 7s infinite 1s',
          }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
            animation: 'pulse 6s infinite 2.5s',
          }} />
        
        {/* Floating particles */}
        {BG_PARTICLES.map(p => (
          <div key={p.id} className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: p.color,
              opacity: 0.08,
              animation: `float ${p.speed}s ease-in-out ${p.delay}s infinite alternate`,
            }} />
        ))}

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
      </div>

      <div className="max-w-2xl mx-auto p-3 sm:p-4 space-y-4 relative z-10">
        
        {/* ── PROGRESS BAR ── */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="flex-1 bg-dark-border rounded-full h-2 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${((postIndex + 1) / posts.length) * 100}%`,
                background: 'linear-gradient(90deg, #8b5cf6, #06b6d4, #ec4899)',
                boxShadow: '0 0 8px rgba(139,92,246,0.4)',
              }} />
          </div>
          <span className="text-gray-400">{postIndex + 1}/{posts.length}</span>
          <span className="text-neon-cyan font-bold">★ {score}</span>
        </div>

        {/* ── POST CARD ── */}
        <div className="relative rounded-2xl overflow-hidden border border-dark-border/50"
          style={{
            background: 'linear-gradient(180deg, rgba(19,19,26,0.95), rgba(15,15,22,0.98))',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}>
          
          {/* Glowing top accent line */}
          <div className="h-[2px] w-full"
            style={{
              background: 'linear-gradient(90deg, transparent, #8b5cf6, #06b6d4, #ec4899, transparent)',
              opacity: 0.6,
            }} />

          {/* Article image / emoji illustration */}
          <div className={`relative h-28 sm:h-32 flex items-center justify-center bg-gradient-to-br ${post.imageBg} overflow-hidden`}>
            <span className="text-5xl sm:text-6xl select-none relative z-10 drop-shadow-2xl">{post.imageEmoji}</span>
            {/* Decorative rings */}
            <div className="absolute w-40 h-40 rounded-full border border-white/5" />
            <div className="absolute w-28 h-28 rounded-full border border-white/5" style={{ transform: 'rotate(45deg)' }} />
            {/* Category badge */}
            <div className="absolute bottom-2 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider"
              style={{
                background: post.categoryColor + '20',
                color: post.categoryColor,
                border: `1px solid ${post.categoryColor}40`,
                backdropFilter: 'blur(4px)',
              }}>
              {post.category}
            </div>
          </div>

          {/* Post header */}
          <div className="px-4 pt-3 pb-1 flex items-center gap-3 border-b border-dark-border/30">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg shrink-0"
              style={{
                background: `linear-gradient(135deg, ${post.categoryColor}, ${post.categoryColor}88)`,
              }}>
              {post.source[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-white truncate">{post.source}</div>
              <div className="text-[11px] text-gray-500 flex items-center gap-2">
                <span>Shared • just now</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span className="truncate">{post.category}</span>
              </div>
            </div>
            <div className="text-gray-600 text-lg flex gap-1">
              <span>⋯</span>
            </div>
          </div>

          {/* Post content */}
          <div className="px-4 py-3">
            <h2 className="text-base font-bold text-white mb-2 leading-snug">{post.title}</h2>
            <div className="text-[13px] text-gray-300 leading-relaxed">{renderContent()}</div>
          </div>

          {/* Social-like action bar */}
          <div className="px-4 pb-2 flex items-center gap-4 text-gray-500 text-xs border-b border-dark-border/20">
            <span className="flex items-center gap-1">💬 12</span>
            <span className="flex items-center gap-1">🔄 47</span>
            <span className="flex items-center gap-1">❤️ 231</span>
          </div>

          {/* ── FILTER BUTTONS ── */}
          <div className="px-4 py-3">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[10px] font-mono text-gray-500 flex items-center gap-1.5">
                <span className="text-neon-purple">◆</span>
                {activeFilters.length === 0
                  ? 'Tap a filter to reveal hidden tricks'
                  : `🖱️ ${highlightCount} clues revealed`
                }
              </div>
              {activeFilters.length > 0 && (
                <button onClick={() => setActiveFilters([])}
                  className="text-[10px] text-gray-500 hover:text-gray-300 font-mono transition-colors cursor-pointer">
                  clear all
                </button>
              )}
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
                      className="w-full flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-200 cursor-pointer"
                      style={{
                        borderColor: isOn ? t.color : `${t.color}20`,
                        background: isOn
                          ? `linear-gradient(180deg, ${t.color}25, ${t.color}10)`
                          : 'rgba(255,255,255,0.02)',
                        boxShadow: isOn ? `0 0 20px ${t.color}25` : 'none',
                      }}>
                      <span className="text-2xl transition-transform duration-200"
                        style={{ transform: isOn ? 'scale(1.15)' : 'scale(1)' }}>
                        {isOn ? largeIcon : t.icon}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-center leading-tight"
                        style={{ color: isOn ? t.color : '#666' }}>
                        {t.name}
                      </span>
                      {isNeeded && !isOn && (
                        <span className="text-[7px] text-gray-600 font-mono">tap to use</span>
                      )}
                    </button>

                    {/* Tooltip */}
                    {toolPopup === toolId && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 z-50 animate-fade-in-up pointer-events-none">
                        <div className="rounded-xl p-3 shadow-2xl border"
                          style={{
                            background: '#13131a',
                            borderColor: t.color + '50',
                            boxShadow: `0 4px 20px rgba(0,0,0,0.5), 0 0 30px ${t.color}15`,
                          }}>
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

        {/* ── MISSION CARD ── */}
        <div className="relative rounded-2xl overflow-hidden border border-dark-border/50 p-5"
          style={{
            background: 'linear-gradient(135deg, rgba(19,19,26,0.95), rgba(26,26,36,0.9))',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
          }}>
          
          {/* Mission header */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(139,92,246,0.15)' }}>
              <span className="text-sm">🎯</span>
            </div>
            <div>
              <div className="text-[10px] font-mono text-neon-purple uppercase tracking-widest font-bold">Mission</div>
            </div>
            <button onClick={() => setShowHint(!showHint)}
              className="ml-auto text-[10px] font-mono text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
              {showHint ? 'hide hint' : 'need hint?'}
            </button>
          </div>

          {/* Question */}
          <p className="text-sm text-white font-bold mb-3 leading-relaxed">{post.question}</p>

          {/* Hint */}
          {showHint && (
            <div className="mb-3 px-3 py-2 rounded-lg text-[11px] text-gray-400 font-mono leading-relaxed animate-fade-in-up"
              style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }}>
              💡 <span className="text-gray-300">{post.neededTools.map(id => {
                const t = CORE_TOOLS.find(x => x.id === id)
                return t ? `${t.icon} ${t.name}` : ''
              }).join(' or ')}</span> filter can help spot the answer!
            </div>
          )}

          {/* Answers */}
          <div className="grid grid-cols-1 gap-2">
            {post.options.map((opt, i) => {
              const isSelected = selectedAnswer === i
              return (
                <button key={i} onClick={() => setSelectedAnswer(i)}
                  className="w-full text-left text-sm px-4 py-3 rounded-xl border-2 transition-all duration-150 cursor-pointer hover:translate-x-0.5"
                  style={{
                    borderColor: isSelected ? '#8b5cf6' : 'rgba(42,42,58,0.6)',
                    background: isSelected
                      ? 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05))'
                      : 'transparent',
                    color: isSelected ? '#fff' : '#999',
                  }}>
                  <span className="mr-3 font-mono text-xs"
                    style={{ color: isSelected ? '#8b5cf6' : '#555' }}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                  {isSelected && <span className="float-right text-neon-purple">●</span>}
                </button>
              )
            })}
          </div>

          {/* Submit */}
          <button onClick={handleSubmit} disabled={selectedAnswer === null}
            className="w-full mt-4 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:translate-y-[-1px]"
            style={{
              background: selectedAnswer !== null
                ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
                : 'linear-gradient(135deg, rgba(42,42,58,0.5), rgba(30,30,40,0.5))',
              color: selectedAnswer !== null ? '#fff' : '#666',
              boxShadow: selectedAnswer !== null ? '0 4px 20px rgba(139,92,246,0.3)' : 'none',
            }}>
            {selectedAnswer !== null ? '✅ Check Answer' : 'Select an answer above'}
          </button>
        </div>
      </div>

      {/* ── INLINE KEYFRAMES ── */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-30px) rotate(5deg); }
        }
      `}</style>
    </div>
  )
}
