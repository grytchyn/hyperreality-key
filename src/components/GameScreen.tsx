// ── GAME SCREEN v7 — Chat → Browser → Analyze → Answer ──
import { useState, useMemo, useCallback } from 'react'
import { CORE_TOOLS, TOOL_LARGE_ICONS, getHighlightsFor } from '../data/coreTools'
import type { CoreToolId } from '../types'
import type { MissionPost } from '../data/missions'

interface GameScreenProps {
  post: MissionPost
  onFinish: (score: number) => void
  allPosts: MissionPost[]
  postIndex: number
}

export default function GameScreen({ post, onFinish, allPosts, postIndex }: GameScreenProps) {
  const [activeFilters, setActiveFilters] = useState<CoreToolId[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<'yes' | 'no' | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [score, setScore] = useState(0)
  const [toolPopup, setToolPopup] = useState<CoreToolId | null>(null)
  const [correctToolUsed, setCorrectToolUsed] = useState(false)
  const [showAnalyzeBanner, setShowAnalyzeBanner] = useState(true)

  const isLast = postIndex >= allPosts.length - 1

  const highlights = useMemo(
    () => getHighlightsFor(activeFilters, post.content + ' ' + post.title),
    [activeFilters, post]
  )

  const highlightCount = useMemo(() => {
    const words = post.content.toLowerCase().replace(/[^a-z\s%]/g, '').split(/\s+/)
    return [...new Set(words)].filter(w => highlights.has(w)).length
  }, [highlights, post])

  const toggleFilter = useCallback((toolId: CoreToolId) => {
    const newFilters = activeFilters.includes(toolId)
      ? activeFilters.filter(id => id !== toolId)
      : [...activeFilters, toolId]
    setActiveFilters(newFilters)
    setToolPopup(null)
    // Check if required tool is now active
    if (!activeFilters.includes(toolId) && toolId === post.neededTool) {
      setCorrectToolUsed(true)
      setShowAnalyzeBanner(false)
    }
  }, [activeFilters, post])

  const handleAnswer = useCallback((ans: 'yes' | 'no') => {
    setSelectedAnswer(ans)
  }, [])

  const handleSubmit = useCallback(() => {
    if (selectedAnswer === null || !correctToolUsed) return
    const userSaysManipulative = selectedAnswer === 'yes'
    const correct = userSaysManipulative === post.isManipulative
    setFeedback(correct ? 'correct' : 'wrong')
    if (correct) setScore(prev => prev + 10)
  }, [selectedAnswer, correctToolUsed, post])

  const handleNext = useCallback(() => {
    if (isLast) {
      onFinish(score)
    } else {
      // Move to next post
      onFinish(-1) // signal to parent to go next
    }
  }, [isLast, score, onFinish])

  // ── FEEDBACK ──
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
            <div className="absolute -top-8 -right-8 text-6xl opacity-10 select-none pointer-events-none"
              style={{ transform: 'rotate(15deg)' }}>🔑</div>
            
            <div className="text-6xl mb-4 animate-bounce">{feedback === 'correct' ? '🎉' : '🤔'}</div>
            <h2 className="text-xl font-bold text-white mb-2">
              {feedback === 'correct' ? 'Spot on!' : 'Missed it'}
            </h2>
            <p className="text-sm text-gray-400 mb-1">
              {post.isManipulative ? '⚠️ This post IS manipulative' : '✅ This post is truthful'}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed mt-2 mb-6 max-w-sm mx-auto">
              {post.explanation}
            </p>
            <button onClick={handleNext}
              className="relative w-full px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all cursor-pointer hover:translate-y-[-2px]"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(139,92,246,0.4)',
              }}>
              {isLast ? '🏁 See Results' : 'Next Message →'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── RENDER TEXT WITH HIGHLIGHTS ──
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
              color: '#ccc',
            }}>
            {w}
            <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-xl text-xs leading-relaxed pointer-events-none shadow-2xl"
              style={{
                background: '#13131a',
                border: `1px solid ${entries[0].color}`,
                boxShadow: `0 4px 20px ${entries[0].color}40`,
              }}>
              <div className="font-bold text-white text-[11px] mb-1.5 flex items-center gap-1.5">
                <span>🔍</span> Manipulation detected!
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
      
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', animation: 'pulse 5s infinite' }} />
        <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', animation: 'pulse 7s infinite 1s' }} />
      </div>

      <div className="max-w-2xl mx-auto p-3 sm:p-4 space-y-4 relative z-10">
        
        {/* Progress */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="flex-1 bg-dark-border rounded-full h-2 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${((postIndex + 1) / allPosts.length) * 100}%`,
                background: 'linear-gradient(90deg, #8b5cf6, #06b6d4, #ec4899)',
                boxShadow: '0 0 8px rgba(139,92,246,0.4)',
              }} />
          </div>
          <span className="text-gray-400">{postIndex + 1}/{allPosts.length}</span>
          <span className="text-neon-cyan font-bold">★ {score}</span>
        </div>

        {/* ── BROWSER POST CARD ── */}
        <div className="relative rounded-2xl overflow-hidden border border-dark-border/50"
          style={{
            background: 'linear-gradient(180deg, rgba(19,19,26,0.95), rgba(15,15,22,0.98))',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}>
          
          {/* Browser top bar */}
          <div className="h-[2px] w-full"
            style={{ background: 'linear-gradient(90deg, transparent, #8b5cf6, #06b6d4, transparent)', opacity: 0.6 }} />
          
          {/* URL bar */}
          <div className="px-4 py-2 flex items-center gap-2 border-b border-dark-border/30">
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 rounded-full px-3 py-1 text-[9px] text-gray-500 font-mono truncate"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }}>
              🔒 {post.source.toLowerCase().replace(/\s+/g, '')}.com/news
            </div>
            <span className="text-[9px] text-gray-600">{post.category}</span>
          </div>

          {/* Analyze banner */}
          {showAnalyzeBanner && (
            <div className="mx-4 mt-3 rounded-xl px-4 py-3 flex items-center gap-3 animate-fade-in-up"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(6,182,212,0.08))',
                border: '1px solid rgba(139,92,246,0.2)',
              }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'rgba(139,92,246,0.2)' }}>
                <span>🔍</span>
              </div>
              <div className="text-xs">
                <div className="text-white font-bold mb-0.5">Looks interesting, but let's check it 🔍</div>
                <div className="text-gray-500 font-mono text-[10px]">Use the <strong className="text-neon-cyan">{CORE_TOOLS.find(t => t.id === post.neededTool)?.name}</strong> filter to see if this post is manipulating you</div>
              </div>
            </div>
          )}

          {/* Article image */}
          <div className={`h-24 sm:h-28 mx-4 mt-3 rounded-xl flex items-center justify-center bg-gradient-to-br ${post.imageBg} overflow-hidden`}
            style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            <span className="text-5xl select-none drop-shadow-2xl">{post.imageEmoji}</span>
            <div className="absolute bottom-2 left-3 px-2 py-0.5 rounded-full text-[8px] font-mono font-bold uppercase tracking-wider"
              style={{
                background: post.categoryColor + '20',
                color: post.categoryColor,
                border: `1px solid ${post.categoryColor}40`,
              }}>
              {post.category}
            </div>
          </div>

          {/* Post content */}
          <div className="px-4 pt-3 pb-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                style={{ background: `linear-gradient(135deg, ${post.categoryColor}, ${post.categoryColor}88)` }}>
                {post.source[0]}
              </div>
              <div>
                <div className="text-xs font-bold text-white">{post.source}</div>
                <div className="text-[9px] text-gray-500">Shared via friend · just now</div>
              </div>
            </div>
            <h2 className="text-base font-bold text-white mb-2 leading-snug">{post.title}</h2>
            <div className="text-[13px] text-gray-300 leading-relaxed">{renderContent()}</div>
          </div>

          {/* Social bar */}
          <div className="px-4 py-2 flex items-center gap-4 text-gray-500 text-[11px] border-b border-dark-border/20">
            <span className="flex items-center gap-1">💬 12</span>
            <span className="flex items-center gap-1">🔄 47</span>
            <span className="flex items-center gap-1">❤️ {Math.floor(Math.random() * 200) + 50}</span>
          </div>

          {/* Filter buttons */}
          <div className="px-4 py-3">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[9px] font-mono text-gray-500 flex items-center gap-1.5">
                {activeFilters.length === 0
                  ? <><span className="text-neon-purple">◆</span> Tap a filter to reveal hidden tricks</>
                  : <>🔍 <span className="text-gray-400">{highlightCount}</span> words highlighted</>
                }
              </div>
              {activeFilters.length > 0 && (
                <button onClick={() => setActiveFilters([])}
                  className="text-[9px] text-gray-600 hover:text-gray-400 font-mono transition-colors cursor-pointer">
                  clear
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-1.5">
              {allToolIds.map(toolId => {
                const t = CORE_TOOLS.find(x => x.id === toolId)
                if (!t) return null
                const isOn = activeFilters.includes(toolId)
                const isNeeded = toolId === post.neededTool
                const largeIcon = TOOL_LARGE_ICONS[toolId]
                
                return (
                  <div key={toolId} className="relative">
                    <button onClick={() => toggleFilter(toolId)}
                      onMouseEnter={() => setToolPopup(toolId)}
                      onMouseLeave={() => setToolPopup(null)}
                      className="w-full flex flex-col items-center gap-1 p-2.5 rounded-xl border transition-all duration-200 cursor-pointer"
                      style={{
                        borderColor: isOn ? t.color : `${t.color}15`,
                        background: isOn ? `linear-gradient(180deg, ${t.color}25, ${t.color}10)` : 'rgba(255,255,255,0.02)',
                        boxShadow: isOn ? `0 0 15px ${t.color}20` : 'none',
                      }}>
                      <span className="text-xl transition-transform duration-200"
                        style={{ transform: isOn ? 'scale(1.15)' : 'scale(1)' }}>
                        {isOn ? largeIcon : t.icon}
                      </span>
                      <span className="text-[7px] font-bold uppercase tracking-wider text-center leading-tight"
                        style={{ color: isOn ? t.color : '#555' }}>
                        {t.name}
                      </span>
                      {isNeeded && !isOn && (
                        <span className="text-[6px] text-gray-600 font-mono">tap to use</span>
                      )}
                    </button>

                    {toolPopup === toolId && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 z-50 animate-fade-in-up pointer-events-none">
                        <div className="rounded-xl p-2.5 shadow-2xl border"
                          style={{
                            background: '#13131a',
                            borderColor: t.color + '40',
                            boxShadow: `0 4px 20px rgba(0,0,0,0.5)`,
                          }}>
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-base">{t.icon}</span>
                            <span className="text-[10px] font-bold text-white">{t.name}</span>
                          </div>
                          <p className="text-[8px] text-gray-400 leading-relaxed">{t.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── ANSWER CARD ── */}
        <div className="relative rounded-2xl overflow-hidden border border-dark-border/50 p-4"
          style={{
            background: 'linear-gradient(135deg, rgba(19,19,26,0.95), rgba(26,26,36,0.9))',
            backdropFilter: 'blur(12px)',
          }}>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(139,92,246,0.15)' }}>
              <span className="text-xs">🎯</span>
            </div>
            <span className="text-[9px] font-mono text-neon-purple uppercase tracking-widest font-bold">Question</span>
            {!correctToolUsed && (
              <span className="ml-auto text-[8px] text-gray-600 font-mono">🔒 Use tool first</span>
            )}
          </div>

          <p className="text-sm text-white font-bold mb-3">{post.question}</p>

          {/* Answer buttons */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button onClick={() => handleAnswer('yes')}
              disabled={!correctToolUsed}
              className={`px-4 py-3 rounded-xl border-2 text-sm font-bold transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
                selectedAnswer === 'yes' ? 'border-neon-purple text-white' : 'border-dark-border/50 text-gray-500'
              }`}
              style={{
                background: selectedAnswer === 'yes' ? 'rgba(139,92,246,0.15)' : 'transparent',
              }}>
              ⚠️ Yes, manipulative
            </button>
            <button onClick={() => handleAnswer('no')}
              disabled={!correctToolUsed}
              className={`px-4 py-3 rounded-xl border-2 text-sm font-bold transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
                selectedAnswer === 'no' ? 'border-green-500 text-white' : 'border-dark-border/50 text-gray-500'
              }`}
              style={{
                background: selectedAnswer === 'no' ? 'rgba(34,197,94,0.15)' : 'transparent',
              }}>
              ✅ No, it's fine
            </button>
          </div>

          {!correctToolUsed && (
            <div className="text-[10px] text-gray-600 text-center font-mono py-2">
              💡 Use the <span className="text-neon-cyan">{CORE_TOOLS.find(t => t.id === post.neededTool)?.name}</span> filter to reveal the truth
            </div>
          )}

          <button onClick={handleSubmit}
            disabled={selectedAnswer === null || !correctToolUsed}
            className="w-full mt-1 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:translate-y-[-1px]"
            style={{
              background: selectedAnswer !== null && correctToolUsed
                ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
                : 'linear-gradient(135deg, rgba(42,42,58,0.5), rgba(30,30,40,0.5))',
              color: selectedAnswer !== null && correctToolUsed ? '#fff' : '#666',
              boxShadow: selectedAnswer !== null && correctToolUsed ? '0 4px 20px rgba(139,92,246,0.3)' : 'none',
            }}>
            {!correctToolUsed ? '🔒 Analyze with filter first' : selectedAnswer === null ? 'Select an answer' : '✅ Submit Answer'}
          </button>
        </div>
      </div>
    </div>
  )
}
