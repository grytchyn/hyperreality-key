// ── ARTICLE PANEL v3 — Layer Edition ──
// Shows a short social-media-style post with tool highlights

import type { Article, CoreToolId } from '../types'
import { useMemo, useState } from 'react'
import { getHighlightForAll, CORE_TOOLS } from '../data/coreTools'

interface ArticlePanelProps {
  article: Article
  activeTools: CoreToolId[]
}

export default function ArticlePanel({ article, activeTools }: ArticlePanelProps) {
  const [showHighlight, setShowHighlight] = useState<CoreToolId | 'all' | null>(null)

  const highlights = useMemo(
    () => getHighlightForAll(activeTools, article.content + ' ' + article.title),
    [activeTools, article]
  )

  const activeLayer = showHighlight === 'all' ? activeTools : showHighlight ? [showHighlight] : []

  const renderContent = () => {
    const paras = article.content.split('\n\n').filter(Boolean)
    
    return paras.map((p, pi) => {
      // Split by word boundaries, keeping whitespace
      const tokens = p.split(/(\s+)/)
      return (
        <p key={pi} className="leading-relaxed text-sm md:text-base">
          {tokens.map((token, ti) => {
            const clean = token.toLowerCase().replace(/[^a-z]/g, '')
            const entries = highlights.get(clean)
            if (!entries || activeLayer.length === 0) return <span key={ti}>{token}</span>

            // Show highlights matching active tools
            const matching = entries.filter(e => {
              if (showHighlight === 'all') return true
              const foundId = activeTools.find(id => {
                const cfg = CORE_TOOLS.find(t => t.id === id)
                return cfg && e.color === cfg.color
              })
              return foundId !== undefined && activeLayer.includes(foundId)
            })
            if (matching.length === 0) return <span key={ti}>{token}</span>

            return (
              <span
                key={ti}
                className="relative group cursor-pointer rounded px-0.5 transition-all text-white font-medium"
                style={{
                  backgroundColor: matching[0].color + '30',
                  borderBottom: `2px solid ${matching[0].color}`,
                }}
                title={matching[0].explanation}
              >
                {token}
                {/* Tooltip */}
                <span
                  className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2 rounded text-[10px] leading-relaxed pointer-events-none shadow-lg"
                  style={{ background: '#1a1a2e', border: `1px solid ${matching[0].color}` }}
                >
                  {matching.map((m, i) => (
                    <div key={i} className="text-gray-300 text-[9px] mt-0.5">{m.explanation}</div>
                  ))}
                </span>
              </span>
            )
          })}
        </p>
      )
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-xl border border-gray-200">
      {/* Source header */}
      <div className="bg-gray-50 border-b border-gray-200 px-3 py-2 flex items-center gap-2 text-[11px]">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center text-white text-[8px] font-bold">H</div>
        <span className="font-bold text-gray-700 uppercase tracking-wider">{article.source}</span>
        <span className="text-gray-400">·</span>
        <span className="text-gray-400">{article.publishedAt}</span>
        {article.category && (
          <>
            <span className="text-gray-400">·</span>
            <span className="text-gray-500">{article.category}</span>
          </>
        )}
      </div>

      {/* Content */}
      <div className="px-3 py-3">
        <h2 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{article.title}</h2>
        <div className="text-gray-800 leading-relaxed">{renderContent()}</div>
      </div>

      {/* Layer toggle bar */}
      <div className="border-t border-gray-200 bg-gray-50 px-3 py-2">
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-[9px] font-mono text-gray-400 mr-1">🔍 Filters:</span>
          <button
            onClick={() => setShowHighlight(showHighlight === 'all' ? null : 'all')}
            className={`text-[9px] px-2 py-0.5 rounded-full font-mono border transition-all ${
              showHighlight === 'all'
                ? 'bg-gray-800 text-white border-gray-600'
                : 'text-gray-500 border-gray-300 hover:border-gray-400'
            }`}
          >
            All
          </button>
          {activeTools.map(id => {
            const t = CORE_TOOLS.find(x => x.id === id)
            if (!t) return null
            const isActive = showHighlight === id
            return (
              <button
                key={id}
                onClick={() => setShowHighlight(isActive ? null : id)}
                className="text-[9px] px-2 py-0.5 rounded-full font-mono border transition-all flex items-center gap-1"
                style={{
                  borderColor: isActive ? t.color : `${t.color}40`,
                  color: isActive ? '#fff' : t.color,
                  backgroundColor: isActive ? t.color + '40' : 'transparent',
                }}
              >
                {t.icon}{t.shortLabel}
              </button>
            )
          })}
        </div>
        <p className="text-[8px] text-gray-400 mt-1 font-mono">
          Tap a filter to reveal hidden patterns. Hover highlighted words for explanations.
        </p>
      </div>
    </div>
  )
}
