// ── GAME SCREEN v3 — Layer Edition ──
import { useState, useEffect, useCallback, useMemo } from 'react'
import { fetchArticles } from '../services/newsService'
import type { GameSession, Article, CoreToolId, ArticleRound } from '../types'
import { CORE_TOOLS } from '../data/coreTools'
// import { pickToolsForArticle } from '../data/articleAssigner'
import { assignToolsToRound, updateRound, nextRound, addScore } from '../game/GameEngine'
import ArticlePanel from './ArticlePanel'
import ToolLayer from './ToolLayer'
import CategoryBadge from './CategoryBadge'

interface GameScreenProps {
  session: GameSession
  onSessionUpdate: (session: GameSession) => void
  onRestart: () => void
}

export default function GameScreen({ session, onSessionUpdate }: GameScreenProps) {
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [answerSheet, setAnswerSheet] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [roundScore, setRoundScore] = useState(0)

  // Tools for this round
  const roundTools: CoreToolId[] = useMemo(
    () => assignToolsToRound(session.currentRound),
    [session.currentRound]
  )

  // Fetch article
  useEffect(() => {
    setLoading(true)
    setSubmitted(false)
    setAnswerSheet({})
    setRoundScore(0)
    fetchArticles().then(articles => {
      if (articles.length > 0) {
        // Pick a fresh article
        const idx = session.currentRound % articles.length
        setArticle(articles[idx])
      }
      setLoading(false)
    })
  }, [session.currentRound])

  // Categories for this round
  const categories = useMemo(() => {
    const cats = new Set(roundTools.map(id => CORE_TOOLS.find(t => t.id === id)?.category).filter(Boolean))
    return [...cats] as string[]
  }, [roundTools])

  const handleAnswer = useCallback((toolId: string, answer: string) => {
    setAnswerSheet(prev => ({ ...prev, [toolId]: answer }))
  }, [])

  const handleSubmit = useCallback(() => {
    // Calculate score
    let score = 0
    for (const toolId of roundTools) {
      const config = CORE_TOOLS.find(t => t.id === toolId)
      if (config && answerSheet[toolId]) {
        // Correct answer = 10 pts, any answer = 3 pts participation
        if (answerSheet[toolId] === config.correctAnswer && config.correctAnswer) {
          score += 10
        } else if (answerSheet[toolId]) {
          score += 3
        }
      }
    }

    // Mark round
    const round: ArticleRound = {
      article: article!,
      toolIds: roundTools,
      questionAnswers: answerSheet,
      completed: true,
    }

    let updated = updateRound(session, round)
    updated = addScore(updated, score)
    setRoundScore(score)
    setSubmitted(true)
    onSessionUpdate(updated)
  }, [article, roundTools, answerSheet, session, onSessionUpdate])

  const handleNext = useCallback(() => {
    const updated = nextRound(session)
    onSessionUpdate(updated)
  }, [session, onSessionUpdate])

  // ── LOADING ──
  if (loading || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-neon-purple border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-neon-cyan font-mono text-xs">Loading post...</p>
        </div>
      </div>
    )
  }

  // ── SUBMITTED ──
  if (submitted) {
    const totalQ = roundTools.length
    const answered = Object.keys(answerSheet).length
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="bg-dark-card border border-dark-border p-6 text-center">
            <div className="text-4xl mb-3">{
              roundScore >= roundTools.length * 7 ? '🎉' : roundScore > 0 ? '👍' : '🤔'
            }</div>
            <h2 className="text-lg font-bold text-white mb-1">Round Complete!</h2>
            <div className="text-neon-cyan font-mono text-2xl font-bold mb-2">+{roundScore}</div>
            <div className="text-xs text-gray-500 font-mono mb-6">{answered}/{totalQ} questions answered</div>
            {session.currentRound >= 3 ? (
              <button
                onClick={() => { const u = { ...session, completed: true }; onSessionUpdate(u) }}
                className="pixel-btn w-full justify-center"
                style={{ borderColor: '#8b5cf6', color: '#8b5cf6' }}
              >
                🔑 Complete Journey
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="pixel-btn w-full justify-center"
                style={{ borderColor: '#06b6d4', color: '#06b6d4' }}
              >
                Next Post →
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ── PLAYING ──
  return (
    <div className="max-w-3xl mx-auto p-3 sm:p-4 space-y-3">
      {/* Round info */}
      <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
        <span>Round {session.currentRound + 1}/4</span>
        <span className="text-gray-600">·</span>
        {categories.map(cat => (
          <CategoryBadge key={cat} category={cat} />
        ))}
      </div>

      {/* Article with layers */}
      <ArticlePanel article={article} activeTools={roundTools} />

      {/* Tool questions */}
      <div className="space-y-2">
        {roundTools.map(toolId => {
          const config = CORE_TOOLS.find(t => t.id === toolId)
          if (!config) return null
          return (
            <ToolLayer
              key={toolId}
              config={config}
              selected={answerSheet[toolId] || null}
              onSelect={(answer) => handleAnswer(toolId, answer)}
            />
          )
        })}
      </div>

      {/* Submit */}
      <div className="sticky bottom-0 pb-3">
        <button
          onClick={handleSubmit}
          disabled={Object.keys(answerSheet).length === 0}
          className="pixel-btn w-full justify-center disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ 
            borderColor: Object.keys(answerSheet).length > 0 ? '#22c55e' : '#444',
            color: Object.keys(answerSheet).length > 0 ? '#22c55e' : '#666'
          }}
        >
          {Object.keys(answerSheet).length === 0
            ? 'Tap a tool above to answer'
            : `✅ Submit (${Object.keys(answerSheet).length}/${roundTools.length})`
          }
        </button>
      </div>
    </div>
  )
}
