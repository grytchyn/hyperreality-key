// ── ARTICLE PANEL — English Only, Clean ──
import type { Article, CoreToolId } from '../types'
import { CORE_TOOLS } from '../data/coreTools'
import type { InfoPlateData } from '../types'
import InfoPlates from './InfoPlates'

interface ArticlePanelProps {
  article: Article
  usedTools: CoreToolId[]
  infoPlates: InfoPlateData[]
}

export default function ArticlePanel({ article, usedTools, infoPlates }: ArticlePanelProps) {
  const wordEffects = buildEffects(article.content, usedTools)

  const renderContent = () => {
    const paras = article.content.split('\n\n').filter(Boolean)
    if (usedTools.length === 0) {
      return paras.map((p, i) => <p key={i} className="leading-relaxed mb-3 text-sm md:text-base">{p}</p>)
    }
    return paras.map((p, pi) => {
      const words = p.split(/(\s+)/)
      return (
        <p key={pi} className="leading-relaxed mb-3 text-sm md:text-base">
          {words.map((w, wi) => {
            const clean = w.toLowerCase().replace(/[^a-z]/g, '')
            const effects = wordEffects[clean]
            if (effects && effects.length > 0) {
              return (
                <span key={wi} className={`relative group cursor-default rounded px-0.5 transition-all ${effects[0]}`} title={effects.join(' | ')}>
                  {w}
                  <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute z-50 bottom-full left-0 mb-2 w-52 p-2 rounded pointer-events-none text-[10px] leading-relaxed"
                    style={{ background: '#1a1a2e', border: '1px solid #8b5cf6' }}>
                    {effects.map((e, i) => <div key={i} className="text-gray-300 mt-0.5 text-[9px]">{e}</div>)}
                  </span>
                </span>
              )
            }
            return <span key={wi}>{w}</span>
          })}
        </p>
      )
    })
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-200 relative">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-3 text-xs">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center text-white text-[10px] font-bold">H</div>
        <span className="font-bold text-gray-700 uppercase tracking-wider text-[11px]">{article.source}</span>
        <span className="text-gray-400">·</span>
        <span className="text-gray-400">{article.publishedAt}</span>
      </div>
      {usedTools.length > 0 && infoPlates.length > 0 && (
        <div className="px-4 pt-2"><InfoPlates plates={infoPlates} /></div>
      )}
      <div className="px-4 py-3">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">{article.title}</h2>
        <div className="flex gap-3 text-xs text-gray-400 mb-3 pb-3 border-b border-gray-100">
          <span>📅 {article.publishedAt}</span>
          <span>📰 {article.source}</span>
        </div>
        <div className="text-gray-800 leading-relaxed">{renderContent()}</div>
      </div>
      {usedTools.length > 0 && (
        <div className="border-t border-gray-200 bg-gray-50 px-4 py-2">
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-[9px] font-mono text-gray-400 mr-1">🛠️</span>
            {usedTools.map(id => {
              const t = CORE_TOOLS.find(x => x.id === id)
              return t ? (
                <span key={id} className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full border"
                  style={{ borderColor: `${t.color}60`, color: t.color, backgroundColor: `${t.color}15` }}>
                  {t.icon}<span className="hidden sm:inline">{t.shortLabel}</span>
                </span>
              ) : null
            })}
          </div>
          <p className="text-[9px] text-gray-400 mt-1 font-mono">🖱️ Hover highlighted words for analysis</p>
        </div>
      )}
    </div>
  )
}

function buildEffects(text: string, usedTools: CoreToolId[]): Record<string, string[]> {
  const e: Record<string, string[]> = {}
  const lo = text.toLowerCase()

  if (usedTools.includes('fallacy-scanner')) {
    ;['always','never','everyone','nobody','either','totally','obviously','typical'].forEach(w => {
      if (lo.includes(w)) { if (!e[w]) e[w] = []; e[w].push('🔴 Possible bad argument') }
    })
  }
  if (usedTools.includes('rhetoric-detector')) {
    ;['expert','professor','doctor','study','research','science','authority'].forEach(w => {
      if (lo.includes(w)) { if (!e[w]) e[w] = []; e[w].push('🔵 Authority appeal (Ethos)') }
    })
    ;['fear','danger','terrible','unthinkable','crisis','urgent','scandal','outrage'].forEach(w => {
      if (lo.includes(w)) { if (!e[w]) e[w] = []; e[w].push('❤️ Emotional appeal (Pathos)') }
    })
    ;['therefore','because','study shows','proves','fact','statistics','logical'].forEach(w => {
      if (lo.includes(w)) { if (!e[w]) e[w] = []; e[w].push('🧮 Logic claim (Logos)') }
    })
  }
  if (usedTools.includes('bias-detector')) {
    ;['everyone knows','of course','obviously','undeniable','naturally'].forEach(w => {
      if (lo.includes(w)) { if (!e[w]) e[w] = []; e[w].push('🟡 Possible thinking shortcut (bias)') }
    })
  }
  if (usedTools.includes('meaning-map')) {
    ;['freedom','security','order','chaos','progress','tradition','crisis','responsibility'].forEach(w => {
      if (lo.includes(w)) { if (!e[w]) e[w] = []; e[w].push('🔵 Hidden meaning layer') }
    })
  }
  if (usedTools.includes('binary-scalpel')) {
    ;['we','us','them','they','good','bad','safe','dangerous'].forEach(w => {
      if (lo.includes(w)) { if (!e[w]) e[w] = []; e[w].push('⚔️ Us vs Them pattern') }
    })
  }
  if (usedTools.includes('moral-compass')) {
    ;['innocent','fair','loyal','respect','pure','free','duty','honor'].forEach(w => {
      if (lo.includes(w)) { if (!e[w]) e[w] = []; e[w].push('📊 Moral button pressed') }
    })
  }
  return e
}
