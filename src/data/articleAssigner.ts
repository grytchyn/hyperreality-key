// ── ARTICLE ASSIGNER — picks 2-3 tools per article ──

import type { CoreToolId, Article } from '../types'
import { CORE_TOOLS } from './coreTools'
import { ALL_CORE_TOOLS as ALL_TOOLS } from '../types'

function scoreToolForArticle(toolId: CoreToolId, text: string): number {
  const low = text.toLowerCase()
  
  switch (toolId) {
    case 'fallacy-scanner':
      return (low.match(/\b(always|never|everyone|nobody|obviously|typical)\b/g) || []).length * 2
    
    case 'rhetoric-detector':
      return (low.match(/\b(expert|fear|crisis|study|proves|danger|urgent|scandal)\b/g) || []).length * 2
    
    case 'bias-detector':
      return (low.match(/\b(obviously|common sense|everyone knows|majority|first|only|record)\b/g) || []).length * 2
    
    case 'meaning-map':
      return (low.match(/\b(freedom|security|order|chaos|progress|tradition|crisis|protect)\b/g) || []).length * 2
    
    case 'binary-scalpel':
      return (low.match(/\b(we|us|they|them|good|bad|right|wrong)\b/g) || []).length
    
    case 'moral-compass':
      return (low.match(/\b(innocent|fair|unfair|loyal|betray|authority|respect|duty|protect)\b/g) || []).length * 2
    
    case 'simulacrum-meter':
      return (low.match(/\b(viral|meme|trending|fake|apparently|rumor|anonymous|surreal)\b/g) || []).length * 3
    
    default: return 0
  }
}

export function pickToolsForArticle(article: Article): CoreToolId[] {
  const text = article.content + ' ' + article.title
  
  const scored = ALL_TOOLS.map(id => ({
    id,
    score: scoreToolForArticle(id, text),
    config: CORE_TOOLS.find(c => c.id === id)!,
  })).sort((a, b) => b.score - a.score)

  const picked: CoreToolId[] = []
  const categoriesUsed = new Set<string>()

  for (const s of scored) {
    if (picked.length >= 2) break
    if (!categoriesUsed.has(s.config.category)) {
      picked.push(s.id)
      categoriesUsed.add(s.config.category)
    }
  }

  return picked
}

export function getToolCategoryMix(roundIndex: number): CoreToolId[] {
  const mixes: CoreToolId[][] = [
    ['fallacy-scanner', 'meaning-map'],
    ['rhetoric-detector', 'bias-detector'],
    ['binary-scalpel', 'moral-compass'],
    ['simulacrum-meter', 'fallacy-scanner'],
  ]
  return mixes[roundIndex % mixes.length]
}
