// ── GAME SCREEN v14 — neon redesign, level colors, radio buttons ──
import { useState, useMemo, useCallback, useRef } from 'react'
import { CORE_TOOLS, TOOL_LARGE_ICONS, getHighlightsFor } from '../data/coreTools'
import { LEVEL_TOOLS, LEVEL_CONFIG } from '../data/missions'
import type { CoreToolId } from '../types'
import type { MissionPost } from '../data/missions'

interface GameScreenProps {
  post: MissionPost
  onFinish: (score: number) => void
  allPosts: MissionPost[]
  postIndex: number
}

const LETTERS = ['A', 'B', 'C', 'D']

export default function GameScreen({ post, onFinish, allPosts, postIndex }: GameScreenProps) {
  const [activeFilters, setActiveFilters] = useState<CoreToolId[]>([])
  const [chosenAnswer, setChosenAnswer] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [score, setScore] = useState(0)
  const [correctToolUsed, setCorrectToolUsed] = useState(false)
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null)
  const scoreRef = useRef(0)

  const level = post.level
  const levelCfg = LEVEL_CONFIG[level] || LEVEL_CONFIG[7]
  const availableTools = LEVEL_TOOLS[level] || []
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
    setTooltip(null)
    const newFilters = activeFilters.includes(toolId)
      ? activeFilters.filter(id => id !== toolId)
      : [...activeFilters, toolId]
    setActiveFilters(newFilters)
    if (!activeFilters.includes(toolId) && toolId === post.neededTool) setCorrectToolUsed(true)
  }, [activeFilters, post])

  const handlePick = useCallback((idx: number) => {
    setChosenAnswer(idx)
    const correct = idx === post.correctIndex
    setFeedback(correct ? 'correct' : 'wrong')
    if (correct) {
      const n = scoreRef.current + 10
      scoreRef.current = n
      setScore(n)
    }
  }, [post])

  const handleNext = useCallback(() => onFinish(scoreRef.current), [onFinish])

  const showTooltip = useCallback((e: React.MouseEvent, text: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTooltip({ text, x: Math.max(6, Math.min(rect.left, window.innerWidth - 280)), y: Math.max(6, rect.top - 12) })
  }, [])
  const hideTooltip = useCallback(() => setTooltip(null), [])

  // ── FEEDBACK ──
  if (feedback) {
    const fbColor = feedback === 'correct' ? '#22c55e' : '#ef4444'
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="relative rounded-2xl border-2 p-8 text-center overflow-hidden"
            style={{
              borderColor: fbColor,
              background: `linear-gradient(135deg, ${fbColor}15, rgba(0,0,0,0.1))`,
              boxShadow: feedback === 'correct' ? '0 0 60px rgba(34,197,94,0.15)' : '0 0 60px rgba(239,68,68,0.15)',
            }}>
            {/* Sparkles for correct */}
            {feedback === 'correct' && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="absolute w-1 h-1 rounded-full bg-green-400"
                    style={{
                      top: `${10 + Math.random() * 80}%`,
                      left: `${10 + Math.random() * 80}%`,
                      animation: `pulse 1.5s infinite ${Math.random() * 2}s`,
                    }} />
                ))}
              </div>
            )}
            <div className="text-6xl mb-4">{feedback === 'correct' ? '🎉' : '🤔'}</div>
            <h2 className="text-xl font-bold mb-2" style={{ color: fbColor }}>
              {feedback === 'correct' ? 'Correct! 🎉' : 'Not quite'}
            </h2>
            <div className="mb-6 text-xs leading-relaxed max-w-sm mx-auto" style={{ color: feedback === 'correct' ? '#9ca3af' : '#9ca3af' }}>
              {post.explanation.split('. ').map((s, i) => (
                <p key={i} className={i > 0 ? 'mt-2' : ''}>{s}.</p>
              ))}
            </div>
            <button onClick={handleNext}
              className="w-full px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all cursor-pointer hover:translate-y-[-1px] active:scale-[0.98]"
              style={{
                background: `linear-gradient(135deg, ${fbColor}, ${fbColor}cc)`,
                color: '#fff',
                boxShadow: `0 4px 20px ${fbColor}40`,
              }}>
              {isLast ? '🏁 See Results' : 'Next Message →'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── RENDER HIGHLIGHTED TEXT ──
  const renderContent = () => {
    const words = post.content.split(/(\s+)/)
    return words.map((w, i) => {
      const clean = w.toLowerCase().replace(/[^a-z%]/g, '')
      const entries = clean ? highlights.get(clean) : undefined
      if (entries && entries.length > 0) {
        const tip = entries.map(e => e.explanation).join(' • ')
        return (
          <span key={i} className="cursor-pointer rounded-sm px-0.5 font-medium transition-all"
            onMouseEnter={(e) => showTooltip(e, tip)} onMouseLeave={hideTooltip}
            style={{ backgroundColor: entries[0].color + '30', borderBottom: `2px solid ${entries[0].color}`, color: '#e5e7eb' }}>
            {w}
          </span>
        )
      }
      return <span key={i}>{w}</span>
    })
  }

  return (
    <div className="min-h-screen pb-8 relative overflow-hidden">
      {/* Fixed tooltip */}
      {tooltip && (
        <div className="fixed z-[9999] pointer-events-none" style={{ left: tooltip.x, top: tooltip.y, transform: 'translateY(-100%)' }}>
          <div className="rounded-xl p-3 shadow-2xl max-w-[260px] text-[10px] leading-relaxed"
            style={{ background: '#13131a', border: `1px solid ${levelCfg.color}40`, color: '#ccc' }}>{tooltip.text}</div>
        </div>
      )}

      {/* Level-themed background glow */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 right-10 w-[25rem] h-[25rem] rounded-full opacity-[0.06]"
          style={{ background: `radial-gradient(circle, ${levelCfg.color} 0%, transparent 70%)`, animation: 'pulse 5s infinite' }} />
        <div className="absolute bottom-10 left-10 w-[20rem] h-[20rem] rounded-full opacity-[0.04]"
          style={{ background: `radial-gradient(circle, ${levelCfg.color} 0%, transparent 70%)`, animation: 'pulse 7s infinite 1.5s' }} />
      </div>

      <div className="max-w-2xl mx-auto p-3 sm:p-4 space-y-4 relative z-10">
        {/* PROGRESS BAR — level-themed */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="flex-1 bg-gray-800/50 rounded-full h-2.5 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${((postIndex + 1) / allPosts.length) * 100}%`,
                background: `linear-gradient(90deg, ${levelCfg.color}, ${levelCfg.color}cc, ${levelCfg.color}88)`,
                boxShadow: `0 0 8px ${levelCfg.color}40`,
              }} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Lvl {level}/7</span>
            <span className="font-bold tabular-nums" style={{ color: levelCfg.color }}>{score}</span>
          </div>
        </div>

        {/* BROWSER CARD */}
        <div className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(19,19,26,0.95), rgba(15,15,22,0.98))',
            border: `1px solid ${levelCfg.color}25`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 30px ${levelCfg.color}10`,
          }}>
          
          {/* Level accent top bar */}
          <div className="h-[3px] w-full"
            style={{ background: `linear-gradient(90deg, transparent, ${levelCfg.color}, ${levelCfg.color}cc, transparent)`, opacity: 0.7 }} />
          
          {/* URL bar */}
          <div className="px-4 py-2 flex items-center gap-2 border-b border-gray-800/50">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 rounded-full px-3 py-1.5 text-[10px] text-gray-500 font-mono truncate"
              style={{ background: 'rgba(255,255,255,0.04)' }}>
              🔒 {post.source.toLowerCase().replace(/\s+/g, '')}.com
            </div>
            <span className="text-[9px] font-mono uppercase tracking-wider" style={{ color: levelCfg.color + '99' }}>
              {levelCfg.name}
            </span>
          </div>

          {/* Content */}
          <div className="px-4 pt-3 pb-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                style={{ background: `linear-gradient(135deg, ${post.categoryColor}, ${post.categoryColor}88)` }}>
                {post.source[0]}
              </div>
              <div>
                <div className="text-xs font-bold text-white">{post.source}</div>
                <div className="text-[9px] text-gray-500">{post.friendName} shared · just now</div>
              </div>
              <span className="ml-auto text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                style={{ color: post.categoryColor, border: `1px solid ${post.categoryColor}40`, background: `${post.categoryColor}15` }}>
                {post.category}
              </span>
            </div>
            <h2 className="text-base font-bold text-white mb-2 leading-snug">{post.title}</h2>
            <div className="text-[13px] leading-relaxed" style={{ color: '#d1d5db' }}>{renderContent()}</div>
          </div>

          {/* Social bar */}
          <div className="px-4 py-2 flex items-center gap-4 text-[11px] border-b border-gray-800/30" style={{ color: '#6b7280' }}>
            <span>💬 12</span>
            <span>🔄 47</span>
            <span>❤️ 120</span>
          </div>

          {/* FILTER BUTTONS — level-themed active state */}
          <div className="px-4 py-3">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[9px] font-mono flex items-center gap-1.5" style={{ color: '#6b7280' }}>
                {!correctToolUsed ? (
                  <><span style={{ color: levelCfg.color }}>◆</span> Activate <strong style={{ color: '#e5e7eb' }}>{CORE_TOOLS.find(t => t.id === post.neededTool)?.name}</strong></>
                ) : (
                  <>🔍 <span style={{ color: '#9ca3af' }}>{highlightCount}</span> words</>
                )}
              </div>
              {correctToolUsed && (
                <button onClick={() => { setActiveFilters([]); setCorrectToolUsed(false) }}
                  className="text-[9px] font-mono transition-colors cursor-pointer" style={{ color: '#6b7280' }}>clear</button>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {availableTools.map(toolId => {
                const t = CORE_TOOLS.find(x => x.id === toolId)
                if (!t) return null
                const isOn = activeFilters.includes(toolId)
                return (
                  <button key={toolId} onClick={() => toggleFilter(toolId)}
                    onMouseEnter={(e) => showTooltip(e, t.description)} onMouseLeave={hideTooltip}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-200 cursor-pointer active:scale-95"
                    style={{
                      borderColor: isOn ? t.color : `${t.color}15`,
                      background: isOn ? `${t.color}20` : 'rgba(255,255,255,0.02)',
                      boxShadow: isOn ? `0 0 15px ${t.color}20` : 'none',
                    }}>
                    <span className="text-xl">{isOn ? TOOL_LARGE_ICONS[toolId] : t.icon}</span>
                    <span className="text-[7px] font-bold uppercase tracking-wider leading-tight" style={{ color: isOn ? t.color : '#6b7280' }}>{t.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* ANSWER CARD — radio-style multiple choice */}
        <div className="rounded-2xl p-5"
          style={{
            background: 'linear-gradient(135deg, rgba(19,19,26,0.95), rgba(26,26,36,0.9))',
            border: `1px solid ${levelCfg.color}20`,
          }}>
          
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${levelCfg.color}20` }}>
              <span className="text-sm">🎯</span>
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: levelCfg.color }}>Question</span>
            </div>
            {!correctToolUsed && (
              <span className="ml-auto text-[8px] font-mono" style={{ color: '#6b7280' }}>🔒 activate filter</span>
            )}
          </div>

          {/* Question text */}
          <p className="text-sm font-bold mb-4 leading-relaxed" style={{ color: '#e5e7eb' }}>{post.question}</p>

          {/* Choices */}
          <div className="space-y-2.5">
            {post.choices.map((choice, idx) => {
              const selected = chosenAnswer === idx
              return (
                <button key={idx} onClick={() => handlePick(idx)}
                  disabled={!correctToolUsed || chosenAnswer !== null}
                  className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-sm font-medium text-left transition-all duration-150 cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed active:scale-[0.99]"
                  style={{
                    borderColor: selected ? `${levelCfg.color}99` : 'rgba(255,255,255,0.06)',
                    background: selected ? `${levelCfg.color}20` : 'rgba(255,255,255,0.02)',
                    color: selected ? '#fff' : '#9ca3af',
                  }}>
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
                    style={{
                      background: selected ? levelCfg.color : 'rgba(255,255,255,0.06)',
                      color: selected ? '#000' : '#6b7280',
                    }}>
                    {LETTERS[idx]}
                  </span>
                  <span className="flex-1">{choice}</span>
                  {selected && <span className="text-sm">✓</span>}
                </button>
              )
            })}
          </div>

          {/* Hint */}
          {!correctToolUsed && (
            <div className="text-[10px] text-center font-mono pt-3" style={{ color: '#6b7280' }}>
              💡 Activate the <span style={{ color: levelCfg.color }}>{CORE_TOOLS.find(t => t.id === post.neededTool)?.name}</span> filter above
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
