// ── GAME SCREEN v17 — chat + game on same page, answer in chat ──
import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import { CORE_TOOLS, getHighlightsFor } from '../data/coreTools'
import { LEVEL_TOOLS, LEVEL_CONFIG } from '../data/missions'
import type { CoreToolId } from '../types'
import type { MissionPost } from '../data/missions'
import ChatUi from './ChatUi'
import { getToolIcon } from './icons/ToolIcons'

interface GameScreenProps {
  post: MissionPost
  onAnswer: (correct: boolean, points: number) => void
}

const LETTERS = ['A', 'B', 'C', 'D']

export default function GameScreen({ post, onAnswer }: GameScreenProps) {
  const [phase, setPhase] = useState<'chat' | 'tools'>('chat')
  const [activeFilters, setActiveFilters] = useState<CoreToolId[]>([])
  const [chosenAnswer, setChosenAnswer] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [correctToolUsed, setCorrectToolUsed] = useState(false)
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null)
  const answeredRef = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const level = post.level
  const levelCfg = LEVEL_CONFIG[level] || LEVEL_CONFIG[7]
  const availableTools = LEVEL_TOOLS[level] || []
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
    if (answeredRef.current) return
    answeredRef.current = true
    setChosenAnswer(idx)
    const correct = idx === post.correctIndex
    setFeedback(correct ? 'correct' : 'wrong')
    // Auto-advance after showing feedback
    setTimeout(() => onAnswer(correct, correct ? 10 : 0), 2200)
  }, [post, onAnswer])

  const showTooltip = useCallback((e: React.MouseEvent, text: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTooltip({
      text,
      x: Math.max(6, Math.min(rect.left, window.innerWidth - 320)),
      y: Math.max(6, rect.top - 12),
    })
  }, [])
  const hideTooltip = useCallback(() => setTooltip(null), [])

  const handleAnalyze = useCallback(() => {
    setPhase('tools')
    setTimeout(() => {
      containerRef.current?.querySelector('.tools-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 300)
  }, [])

  // Reset state when post changes
  useEffect(() => {
    setPhase('chat')
    setActiveFilters([])
    setChosenAnswer(null)
    setFeedback(null)
    setCorrectToolUsed(false)
    setTooltip(null)
    answeredRef.current = false
    window.scrollTo(0, 0)
  }, [post])

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
    <div className="relative overflow-hidden" ref={containerRef}>
      {/* Fixed tooltip — BIGGER now */}
      {tooltip && (
        <div className="fixed z-[9999] pointer-events-none" style={{ left: tooltip.x, top: tooltip.y, transform: 'translateY(-100%)' }}>
          <div className="rounded-xl p-3 shadow-2xl max-w-[320px] text-[12px] leading-relaxed"
            style={{ background: '#13131a', border: `1px solid ${levelCfg.color}50`, color: '#ccc' }}>{tooltip.text}</div>
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
        {/* CHAT UI — always visible */}
        <ChatUi
          friendName={post.friendName}
          friendColor={post.friendColor}
          friendPreview={post.friendPreview}
          articleTitle={post.title}
          articleSource={post.source}
          onAnalyze={handleAnalyze}
          showAnalyze={phase === 'chat' || (!chosenAnswer && phase === 'tools')}
          userAnswer={chosenAnswer !== null ? post.choices[chosenAnswer] : null}
          isCorrect={feedback === 'correct' ? true : feedback === 'wrong' ? false : null}
          showFeedback={chosenAnswer !== null}
        />

        {/* TOOLS + ARTICLE CARD + ANSWERS = same page, below chat */}
        {phase !== 'chat' && (
          <>
            {/* ARTICLE CARD */}
            <div className="relative rounded-2xl overflow-hidden tools-section"
              style={{
                background: 'linear-gradient(180deg, rgba(19,19,26,0.95), rgba(15,15,22,0.98))',
                border: `1px solid ${levelCfg.color}25`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 30px ${levelCfg.color}10`,
              }}>
              
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
                  🔒 {post.source.toLowerCase().replace(/[^a-z0-9]/g, '')}.com
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

              {/* FILTER TOOLS — 2×4 grid */}
              <div className="px-4 py-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] font-mono flex items-center gap-1.5" style={{ color: '#6b7280' }}>
                    {!correctToolUsed ? (
                      <><span style={{ color: levelCfg.color }}>◆</span> Activate <strong style={{ color: '#e5e7eb' }}>{CORE_TOOLS.find(t => t.id === post.neededTool)?.name}</strong></>
                    ) : (
                      <>🔍 <span style={{ color: '#9ca3af' }}>{highlightCount}</span> words</>
                    )}
                  </div>
                  {correctToolUsed && (
                    <button onClick={() => { setActiveFilters([]); setCorrectToolUsed(false) }}
                      className="text-[10px] font-mono transition-colors cursor-pointer" style={{ color: '#6b7280' }}>clear</button>
                  )}
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {availableTools.map(toolId => {
                    const t = CORE_TOOLS.find(x => x.id === toolId)
                    if (!t) return null
                    const isOn = activeFilters.includes(toolId)
                    const IconComponent = getToolIcon(toolId)
                    return (
                      <button key={toolId} onClick={() => toggleFilter(toolId)}
                        onMouseEnter={(e) => showTooltip(e, `${t.name}: ${t.description}`)} onMouseLeave={hideTooltip}
                        className="flex flex-col items-center gap-1 p-2 rounded-xl border transition-all duration-200 cursor-pointer active:scale-95"
                        style={{
                          borderColor: isOn ? t.color : `${t.color}15`,
                          background: isOn ? `${t.color}20` : 'rgba(255,255,255,0.02)',
                          boxShadow: isOn ? `0 0 15px ${t.color}20` : 'none',
                        }}>
                        <IconComponent size={32} glowColor={t.color} active={isOn} />
                        <span className="text-[8px] font-bold uppercase tracking-wider leading-tight"
                          style={{ color: isOn ? t.color : '#6b7280' }}>{t.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* ANSWER CARD — A/B/C/D buttons per reference */}
            <div className="rounded-2xl p-5"
              style={{
                background: 'linear-gradient(135deg, rgba(19,19,26,0.95), rgba(26,26,36,0.9))',
                border: `1px solid ${levelCfg.color}20`,
              }}>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${levelCfg.color}20` }}>
                  <span className="text-sm">🎯</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: levelCfg.color }}>Question</span>
                </div>
                {!correctToolUsed && !chosenAnswer && (
                  <span className="ml-auto text-[9px] font-mono" style={{ color: '#6b7280' }}>🔒 activate filter</span>
                )}
              </div>

              <p className="text-sm font-bold mb-4 leading-relaxed" style={{ color: '#e5e7eb' }}>{post.question}</p>

              {/* A/B/C/D buttons — styled per reference (glowing circles) */}
              <div className="space-y-2.5">
                {post.choices.map((choice, idx) => {
                  const selected = chosenAnswer === idx
                  const isCorrect = idx === post.correctIndex
                  const showResult = chosenAnswer !== null
                  let borderColor = 'rgba(255,255,255,0.06)'
                  if (showResult && isCorrect) borderColor = '#22c55e99'
                  else if (showResult && selected) borderColor = '#ef444499'
                  else if (selected) borderColor = `${levelCfg.color}99`

                  return (
                    <button key={idx} onClick={() => handlePick(idx)}
                      disabled={chosenAnswer !== null}
                      className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-sm font-medium text-left transition-all duration-150 cursor-pointer disabled:cursor-default active:scale-[0.99]"
                      style={{
                        borderColor,
                        background: showResult && isCorrect ? 'rgba(34,197,94,0.1)' : selected ? `${levelCfg.color}20` : 'rgba(255,255,255,0.02)',
                        color: !chosenAnswer ? '#e5e7eb' : isCorrect ? '#4ade80' : selected ? '#ef4444' : '#6b7280',
                        opacity: showResult && !isCorrect && !selected ? 0.4 : 1,
                      }}>
                      {/* Letter circle — glowing per reference design */}
                      <span className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0"
                        style={{
                          background: showResult && isCorrect ? '#22c55e' : selected && showResult ? '#ef4444' : selected ? levelCfg.color : 'rgba(255,255,255,0.06)',
                          color: showResult && isCorrect ? '#000' : selected ? '#000' : '#6b7280',
                          boxShadow: selected && !showResult ? `0 0 12px ${levelCfg.color}50` : 'none',
                        }}>
                        {showResult && isCorrect ? '✓' : showResult && selected ? '✗' : LETTERS[idx]}
                      </span>
                      <span className="flex-1">{choice}</span>
                      {showResult && isCorrect && <span className="text-xs text-green-500">✓ correct</span>}
                    </button>
                  )
                })}
              </div>

              {/* Inline explanation after answering */}
              {chosenAnswer && (
                <div className="mt-4 rounded-xl p-3.5 text-xs leading-relaxed animate-fade-in-up"
                  style={{
                    background: feedback === 'correct' ? 'rgba(34,197,94,0.06)' : 'rgba(239,68,68,0.06)',
                    border: `1px solid ${feedback === 'correct' ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'}`,
                    color: '#c0c0c0',
                  }}>
                  <span className="text-xs font-bold block mb-1" style={{ color: feedback === 'correct' ? '#4ade80' : '#ef4444' }}>
                    {feedback === 'correct' ? '✓ Correct!' : '✗ Not quite — here\'s why'}
                  </span>
                  {post.explanation}
                </div>
              )}

              {!correctToolUsed && !chosenAnswer && (
                <div className="text-[10px] text-center font-mono pt-3" style={{ color: '#6b7280' }}>
                  💡 Activate the <span style={{ color: levelCfg.color }}>{CORE_TOOLS.find(t => t.id === post.neededTool)?.name}</span> filter above
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}