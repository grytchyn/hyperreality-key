// ── GAME SCREEN v18 — separate screens: Chat → full Game ──
// 3 pre-activated filters, +1 per level
import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import { CORE_TOOLS, getHighlightsFor } from '../data/coreTools'
import { LEVEL_TOOLS, LEVEL_CONFIG } from '../data/missions'
import type { CoreToolId } from '../types'
import type { MissionPost } from '../data/missions'
import ChatUi from './ChatUi'
import Header from './Header'
import { getToolIcon } from './icons/ToolIcons'

interface GameScreenProps {
  post: MissionPost
  onAnswer: (correct: boolean, points: number) => void
  totalScore?: number
}

const LETTERS = ['A', 'B', 'C', 'D']

// Icons per choice per level — shown in the circle instead of A/B/C/D
const CHOICE_ICONS: Record<number, string[]> = {
  1: ['🎭', '💢', '📋', '🔍'],
  2: ['😱', '🧐', '🎉', '😴'],
  3: ['⚓', '👥', '🏛️', '🧠'],
  4: ['⚖️', '⚔️', '📊', '🤝'],
  5: ['👑', '❤️', '💯', '🧼'],
  6: ['💡', '⚔️', '🛡️', '🕵️'],
  7: ['💾', '📝', '🌐', '🎭'],
  8: ['📋', '🔬', '🧪', '📄'],
  9: ['🔄', '🔁', '🔃', '♻️'],
  10: ['🐟', '🎣', '🪤', '🌀'],
  11: ['🎯', '📡', '🔍', '🎪'],
  12: ['📊', '⚖️', '🏛️', '🔨'],
}

export default function GameScreen({ post, onAnswer, totalScore }: GameScreenProps) {
  const [phase, setPhase] = useState<'chat' | 'game'>('game')
  const [activeFilters, setActiveFilters] = useState<CoreToolId[]>(() => {
    // Pre-activate only tools that actually have highlights in this post
    const level = post.level
    const tools = LEVEL_TOOLS[level] || []
    const text = post.content + ' ' + post.title
    return tools.filter(toolId => getHighlightsFor([toolId], text).size > 0)
  })
  const [chosenAnswer, setChosenAnswer] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null)
  const [transitioning, setTransitioning] = useState(false)
  const answeredRef = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const gameRef = useRef<HTMLDivElement>(null)

  const level = post.level
  const levelCfg = LEVEL_CONFIG[level] || LEVEL_CONFIG[7]
  const availableTools = LEVEL_TOOLS[level] || []
  // Nur Tools mit Treffern im Text anzeigen
  const toolsWithHighlights = availableTools.filter(toolId => {
    const testText = post.content + ' ' + post.title
    return getHighlightsFor([toolId], testText).size > 0
  })
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
  }, [activeFilters])

  const handlePick = useCallback((idx: number) => {
    if (answeredRef.current) return
    answeredRef.current = true
    setChosenAnswer(idx)
    const correct = idx === post.correctIndex
    setFeedback(correct ? 'correct' : 'wrong')
  }, [post])

  const handleNext = useCallback(() => {
    if (chosenAnswer === null) return
    const correct = chosenAnswer === post.correctIndex
    onAnswer(correct, correct ? 10 : 0)
  }, [chosenAnswer, post, onAnswer])

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
    // Pre-activate ALL available filters for instant highlights
    setActiveFilters(availableTools)
    // Transition: brief animation then show game
    setTransitioning(true)
    setTimeout(() => {
      setPhase('game')
      setTransitioning(false)
      // Scroll to top for clean game view
      window.scrollTo(0, 0)
    }, 400)
  }, [availableTools])

  // Reset state when post changes
  useEffect(() => {
    setPhase('game')
    // Pre-activate only relevant tools
    const tools = LEVEL_TOOLS[post.level] || []
    const text = post.content + ' ' + post.title
    const relevantTools = tools.filter(toolId => getHighlightsFor([toolId], text).size > 0)
    setActiveFilters(relevantTools)
    setChosenAnswer(null)
    setFeedback(null)
    setTooltip(null)
    answeredRef.current = false
    setTransitioning(false)
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

  if (phase === 'chat') {
    return (
      <div className="min-h-[100dvh] bg-dark-bg flex flex-col items-center justify-center p-4 relative overflow-hidden"
        style={{
          minHeight: '100dvh',
          background: `#0a0a0f url('/assets/bg/level${level}-bg.png') center center / cover no-repeat`,
        }}>
        {/* Dark overlay */}
        <div className="fixed inset-0 pointer-events-none z-0"
          style={{ background: 'linear-gradient(180deg, rgba(10,10,15,0.6) 0%, rgba(10,10,15,0.8) 100%)' }} />
        
        {/* HEADER */}
        <Header
          level={post.level}
          levelName={levelCfg.name}
          levelColor={levelCfg.color}
          showLevel={true}
          totalScore={totalScore}
        />
        {transitioning ? (
          <div className="animate-fade-in-up text-center">
            <div className="text-4xl mb-4 animate-pulse" style={{ color: levelCfg.color }}>🔍</div>
            <div className="text-sm font-mono" style={{ color: levelCfg.color }}>Analyzing...</div>
          </div>
        ) : (
          <div className="w-full max-w-md animate-fade-in-up relative z-10">
            <ChatUi
              friendName={post.friendName}
              friendColor={post.friendColor}
              friendPreview={post.friendPreview}
              articleTitle={post.title}
              articleSource={post.source}
              onAnalyze={handleAnalyze}
              showAnalyze={true}
              userAnswer={null}
              isCorrect={null}
              showFeedback={false}
            />
          </div>
        )}
      </div>
    )
  }

  // ── GAME MODE: Full analysis screen ──
  const bgUrl = `/assets/bg/level${level}-bg.png`

  return (
    <div className="relative overflow-hidden min-h-[100dvh]" ref={containerRef}
      style={{
        background: `#0a0a0f url('${bgUrl}') center center / cover no-repeat`,
      }}>
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,10,15,0.7) 0%, rgba(10,10,15,0.85) 50%, rgba(10,10,15,0.95) 100%)' }} />
      {/* Fixed tooltip */}
      {tooltip && (
        <div className="fixed z-[9999] pointer-events-none" style={{ left: tooltip.x, top: tooltip.y, transform: 'translateY(-100%)' }}>
          <div className="rounded-xl p-3 shadow-2xl max-w-[320px] text-[12px] leading-relaxed"
            style={{ background: '#13131a', border: `1px solid ${levelCfg.color}50`, color: '#ccc' }}>{tooltip.text}</div>
        </div>
      )}

      {/* Level-themed background with image */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            background: `url('/assets/bg/level${level}-bg.png') center center / cover no-repeat`,
          }} />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(10,10,15,0.7) 0%, rgba(10,10,15,0.85) 100%)' }} />
        <div className="absolute top-10 right-10 w-[25rem] h-[25rem] rounded-full opacity-[0.08]"
          style={{ background: `radial-gradient(circle, ${levelCfg.color} 0%, transparent 70%)`, animation: 'pulse 5s infinite' }} />
        <div className="absolute bottom-10 left-10 w-[20rem] h-[20rem] rounded-full opacity-[0.04]"
          style={{ background: `radial-gradient(circle, ${levelCfg.color} 0%, transparent 70%)`, animation: 'pulse 7s infinite 1.5s' }} />
      </div>

      {/* HEADER with big logo */}
      <Header
        level={post.level}
        levelName={levelCfg.name}
        levelColor={levelCfg.color}
        showLevel={true}
        totalScore={totalScore}
      />

      <div className="max-w-2xl mx-auto p-3 sm:p-4 space-y-4 relative z-10 animate-fade-in-up" ref={gameRef}>
        
        {/* ARTICLE CARD */}
        <div className="relative rounded-2xl overflow-hidden"
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

          {/* Content with highlights */}
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

          {/* FILTER TOOLS — 2×4 grid, all pre-active */}
          <div className="px-4 py-3">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[10px] font-mono flex items-center gap-1.5" style={{ color: '#6b7280' }}>
                🔍 <span style={{ color: '#9ca3af' }}>{highlightCount}</span> words highlighted
              </div>
              <button onClick={() => { setActiveFilters([]) }}
                className="text-[10px] font-mono transition-colors cursor-pointer" style={{ color: '#6b7280' }}>clear</button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {toolsWithHighlights.map(toolId => {
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

        {/* ANSWER CARD — A/B/C/D */}
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
          </div>

          <p className="text-sm font-bold mb-4 leading-relaxed" style={{ color: '#e5e7eb' }}>{post.question}</p>

          {/* A/B/C/D buttons */}
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
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0"
                    style={{
                      background: showResult && isCorrect ? '#22c55e' : selected && showResult ? '#ef4444' : selected ? levelCfg.color : 'rgba(255,255,255,0.06)',
                      color: showResult && isCorrect ? '#000' : selected ? '#000' : '#6b7280',
                      boxShadow: selected && !showResult ? `0 0 12px ${levelCfg.color}50` : 'none',
                    }}>
                    {showResult && isCorrect ? '✓' : showResult && selected ? '✗' : CHOICE_ICONS[level]?.[idx] || LETTERS[idx]}
                  </span>
                  <span className="flex-1">{choice}</span>
                  {showResult && isCorrect && <span className="text-xs text-green-500">✓ correct</span>}
                </button>
              )
            })}
          </div>

          {/* Inline explanation + NEXT BUTTON */}
          {chosenAnswer && (
            <div className="mt-4 rounded-xl p-3.5 text-xs leading-relaxed animate-fade-in-up"
              style={{
                background: feedback === 'correct' ? 'rgba(34,197,94,0.06)' : 'rgba(239,68,68,0.06)',
                border: `1px solid ${feedback === 'correct' ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'}`,
                color: '#c0c0c0',
              }}>
              <span className="text-xs font-bold block mb-1" style={{ color: feedback === 'correct' ? '#4ade80' : '#ef4444' }}>
                {feedback === 'correct' ? '✓ Correct!' : '✗ Not quite'}
              </span>
              {post.explanation}
            </div>
          )}

          {/* Avatar + Key Logo — centered between explanation and next button */}
          {chosenAnswer !== null && (
            <div className="mt-6 flex flex-col items-center gap-2 animate-fade-in-up">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-offset-2 ring-offset-[#13131a]"
                style={{ boxShadow: `0 0 20px ${post.categoryColor}40`, borderColor: post.categoryColor }}>
                <img
                  src={`/assets/avatars/${post.friendName.toLowerCase().replace(/\s+/g, '-')}.png`}
                  alt={post.friendName}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
              <div className="flex items-center gap-1.5">
                <img src="/assets/key-icon.png" alt="HK" className="w-6 h-6 object-contain opacity-60"
                  style={{ filter: 'drop-shadow(0 0 6px rgba(139,92,246,0.3))' }} />
                <span className="text-[10px] font-mono font-bold tracking-wider" style={{ color: '#6b7280' }}>
                  {post.friendName} · Level {level}/12
                </span>
              </div>
            </div>
          )}

          {/* Next button — always visible after picking an answer, outside explanation */}
          {chosenAnswer !== null && (
            <button onClick={handleNext}
              className="w-full mt-4 px-6 py-4 rounded-xl font-bold text-base uppercase tracking-wider transition-all cursor-pointer hover:translate-y-[-1px] active:scale-[0.98] flex items-center justify-center gap-2"
              style={{
                background: feedback === 'correct'
                  ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                  : 'linear-gradient(135deg, #6b7280, #4b5563)',
                color: '#fff',
                boxShadow: feedback === 'correct'
                  ? '0 4px 20px rgba(34,197,94,0.4)'
                  : '0 4px 20px rgba(107,114,128,0.3)',
              }}>
              Next Level →
              <span className="text-[11px] opacity-70">{level + 1 > 12 ? '🏁 Results' : `Level ${level + 1}`}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}