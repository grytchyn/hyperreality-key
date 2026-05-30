// ── GAME SCREEN — English Only, Simplified ──
import { useState, useCallback, useEffect } from 'react'
import { fetchArticles } from '../services/newsService'
import type { GameSession, AnalysisAnswer, Analysis, Badge, Article, CoreToolId } from '../types'
import { ALL_CORE_TOOLS } from '../types'
import { recordAnalysis } from '../game/GameEngine'
import { CORE_TOOLS, calcInfoPlates, getToolUnlockOrder } from '../data/coreTools'
import { CHAPTERS } from '../data/lore'
import BriefingPanel from './BriefingPanel'
import ArticlePanel from './ArticlePanel'
import PixelToolbar from './PixelToolbar'
import ToolOverlay from './ToolOverlay'
import DeepDrawer from './DeepDrawer'
import { PixelCard, PixelButton, ProgressBar } from './PixelComponents'

interface GameScreenProps {
  session: GameSession
  onSessionUpdate: (session: GameSession) => void
  onRestart: () => void
}

type Phase = 'briefing' | 'playing' | 'result' | 'victory'

interface ToolResultData {
  toolId: string
  toolName: string
  answers: AnalysisAnswer[]
  score: number
}

export default function GameScreen({ session, onSessionUpdate, onRestart }: GameScreenProps) {
  const [phase, setPhase] = useState<Phase>('briefing')
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTool, setActiveTool] = useState<CoreToolId | null>(null)
  const [toolResults, setToolResults] = useState<ToolResultData[]>([])
  const [earnedBadges, setEarnedBadges] = useState<Badge[]>(session.earnedBadges)
  const [showDeep, setShowDeep] = useState(false)

  useEffect(() => {
    fetchArticles().then(articles => {
      if (articles.length > 0) setArticle(articles[0])
      setLoading(false)
    })
  }, [])

  const usedIds = toolResults.map(r => r.toolId) as CoreToolId[]
  const completed = usedIds.length

  const unlockedIds: CoreToolId[] = ALL_CORE_TOOLS.filter(
    id => getToolUnlockOrder(id) <= completed + 1
  )

  const chapterIndex = Math.min(completed, CHAPTERS.length - 1)
  const infoPlates = calcInfoPlates(usedIds, article?.content.length || 500)

  const handleStart = useCallback(() => setPhase('playing'), [])
  const handleSelect = useCallback((id: CoreToolId) => setActiveTool(id), [])
  const handleClose = useCallback(() => setActiveTool(null), [])

  const handleComplete = useCallback((answers: AnalysisAnswer[], score: number) => {
    if (!activeTool) return
    const analysis: Analysis = {
      toolId: activeTool,
      articleTitle: article?.title || 'Analysis',
      answers, score,
      timestamp: Date.now(),
    }
    const updated = recordAnalysis(session, analysis)
    onSessionUpdate(updated)

    const config = CORE_TOOLS.find(t => t.id === activeTool)
    const result: ToolResultData = { toolId: activeTool, toolName: config?.name || activeTool, answers, score }
    const newResults = [...toolResults, result]
    setToolResults(newResults)
    setEarnedBadges(updated.earnedBadges)
    setActiveTool(null)
    setPhase('result')
  }, [activeTool, article, session, toolResults, onSessionUpdate])

  const handleNext = useCallback(() => setPhase('playing'), [])
  const remainingCount = unlockedIds.filter(id => !usedIds.includes(id)).length
  const isLastTool = remainingCount === 0 && completed > 0

  // ── BRIEFING ──
  if (phase === 'briefing') {
    return <BriefingPanel chapterIndex={chapterIndex} onStart={handleStart} />
  }

  // ── PLAYING ──
  if (phase === 'playing') {
    if (loading || !article) {
      return (
        <div className="min-h-screen bg-dark-bg flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-neon-purple border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-neon-cyan font-mono text-sm">Loading article...</p>
          </div>
        </div>
      )
    }
    return (
      <>
        <div className="min-h-screen bg-dark-bg pb-24">
          <div className="max-w-4xl mx-auto p-3 sm:p-4 space-y-3">
            <div className="flex items-center gap-3">
              <ProgressBar current={completed} max={7} color="#8b5cf6" size="sm" />
              <span className="text-[10px] text-gray-500 font-mono">★ {session.score}</span>
              {earnedBadges.length > 0 && <span className="text-[10px] text-amber-400">🏅{earnedBadges.length}</span>}
            </div>
            <ArticlePanel article={article} usedTools={usedIds} infoPlates={infoPlates} />
            {completed >= 3 && (
              <div className="text-right">
                <button onClick={() => setShowDeep(true)} className="text-[10px] text-neon-cyan font-mono hover:text-white cursor-pointer">
                  🔬 Deep Analysis →
                </button>
              </div>
            )}
          </div>
        </div>
        <PixelToolbar unlockedTools={unlockedIds} usedTools={usedIds} activeTool={activeTool} onSelect={handleSelect} />
        {activeTool && (
          <ToolOverlay toolId={activeTool} articleText={article.content} onComplete={handleComplete} onClose={handleClose} />
        )}
        <DeepDrawer isOpen={showDeep} onClose={() => setShowDeep(false)} />
      </>
    )
  }

  // ── RESULT ──
  if (phase === 'result') {
    const last = toolResults[toolResults.length - 1]
    const correct = last?.answers.filter(a => a.correct).length || 0
    const total = last?.answers.length || 0
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0
    const newBadges = earnedBadges.filter(b => !session.earnedBadges.find(sb => sb.id === b.id))
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in-up">
          <PixelCard highlight accent="#8b5cf6">
            <div className="flex justify-center mb-6">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold font-mono border-4 ${
                pct >= 80 ? 'border-green-500 text-green-400 bg-green-500/10'
                  : pct >= 50 ? 'border-amber-500 text-amber-400 bg-amber-500/10'
                  : 'border-red-500 text-red-400 bg-red-500/10'
              }`}>{pct}%</div>
            </div>
            <div className="text-center mb-4">
              <div className="text-sm text-gray-500 font-mono">Score</div>
              <div className="text-white font-bold text-lg">{last?.toolName}</div>
              <div className="text-neon-cyan font-mono text-sm mt-1">+{last?.score || 0} pts</div>
              <div className="text-xs text-gray-600 mt-1">{correct}/{total} correct</div>
            </div>
            {newBadges.length > 0 && (
              <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 p-3 mb-4 text-center">
                <div className="text-2xl mb-1">🏅</div>
                <div className="text-xs text-amber-400 font-bold">New Badge!</div>
                {newBadges.map(b => <div key={b.id} className="text-[10px] text-amber-300 mt-1">{b.name}</div>)}
              </div>
            )}
            {isLastTool ? (
              <PixelButton variant="green" onClick={() => setPhase('victory')} className="w-full justify-center">🎉 Complete</PixelButton>
            ) : (
              <PixelButton onClick={handleNext} className="w-full justify-center">Next Tool →</PixelButton>
            )}
          </PixelCard>
        </div>
      </div>
    )
  }

  // ── VICTORY ──
  const totalCorrect = toolResults.reduce((s, r) => s + r.answers.filter(a => a.correct).length, 0)
  const totalQ = toolResults.reduce((s, r) => s + r.answers.length, 0)
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
      <div className="w-full max-w-lg animate-fade-in-up">
        <PixelCard highlight accent="#06b6d4">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-pulse">🔑</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 glitch" style={{ fontFamily: "'Courier New', monospace" }}>
              <span className="text-neon-purple">HYPER</span><span className="text-neon-cyan">REALITY</span><span className="text-neon-pink">KEY</span>
            </h1>
            <p className="text-xs text-gray-400 leading-relaxed font-mono mb-4">{CHAPTERS[CHAPTERS.length - 1]?.body}</p>
            <div className="bg-dark-surface border border-dark-border p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-400 font-mono">Score</span>
                <span className="text-neon-cyan font-bold font-mono text-lg">★ {session.score}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-400 font-mono">Correct</span>
                <span className="text-green-400 font-mono text-sm">{totalCorrect}/{totalQ}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-400 font-mono">Tools used</span>
                <span className="text-gray-300 font-mono text-sm">{toolResults.length}/7</span>
              </div>
            </div>
            <div className="flex justify-center gap-3 mb-4">
              {ALL_CORE_TOOLS.map(id => {
                const used = usedIds.includes(id)
                const t = CORE_TOOLS.find(x => x.id === id)
                return t ? <div key={id} className={`text-center ${used ? 'opacity-100' : 'opacity-30'}`}>
                  <div className="text-xl">{t.icon}</div>
                  <div className="text-[7px] font-mono text-gray-500 mt-0.5">{t.shortLabel}</div>
                </div> : null
              })}
            </div>
            <PixelButton variant="cyan" onClick={onRestart} className="w-full justify-center">🔄 Play Again</PixelButton>
          </div>
        </PixelCard>
      </div>
    </div>
  )
}
