// ── MEANING MAP — English Only ──
import { useState } from 'react'
import type { AnalysisAnswer } from '../../types'

interface MeaningMapProps { articleText: string; onComplete: (answers: AnalysisAnswer[], score: number) => void }

type Layer = 'denotation' | 'connotation' | 'myth'

export default function MeaningMapTool({ articleText, onComplete }: MeaningMapProps) {
  const [activeLayer, setLayer] = useState<Layer>('denotation')
  const [progress, setProgress] = useState<Record<Layer, boolean>>({ denotation: false, connotation: false, myth: false })
  const keyTerms = extractTerms(articleText)

  const handleLayer = (l: Layer) => {
    setProgress(p => ({ ...p, [l]: true }))
    const layers: Layer[] = ['denotation', 'connotation', 'myth']
    const next = layers.indexOf(l) + 1
    if (next < layers.length) setLayer(layers[next])
  }

  const allDone = Object.values(progress).every(Boolean)

  const texts = {
    denotation: { title: '⚪ Layer 1: What does it literally say?', body: 'No interpretation. Just the facts stated. Quotes, data, events.' },
    connotation: { title: '🔵 Layer 2: What does it imply?', body: 'Cultural baggage. This word carries extra meaning beyond the dictionary.' },
    myth: { title: '🟡 Layer 3: What myth is being sold?', body: 'An entire society believes this story without questioning it. "Progress is always good." Which myth is here?' },
  }

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        {(['denotation', 'connotation', 'myth'] as Layer[]).map(l => (
          <button key={l} onClick={() => setLayer(l)} disabled={progress[l]}
            className={`flex-1 text-center py-2 px-2 text-[10px] font-mono uppercase tracking-wider border transition-all cursor-pointer ${activeLayer === l ? 'bg-neon-cyan/10 border-neon-cyan text-white' : progress[l] ? 'bg-green-900/20 border-green-700/30 text-green-400' : 'bg-dark-surface border-dark-border text-gray-500 hover:border-gray-600'}`}>
            {l}
          </button>
        ))}
      </div>
      {!progress[activeLayer] ? (
        <div className="space-y-3">
          <p className="text-xs text-gray-400 font-mono">{texts[activeLayer].title}</p>
          <div className="bg-dark-surface border border-neon-cyan/20 p-3"><p className="text-sm text-gray-300">{texts[activeLayer].body}</p></div>
          {activeLayer === 'connotation' && (
            <div className="space-y-2">
              {keyTerms.slice(0, 4).map((t, i) => <div key={i} className="bg-dark-surface border border-neon-cyan/20 p-2"><div className="text-sm font-bold text-neon-cyan">"{t}"</div></div>)}
            </div>
          )}
          {activeLayer === 'myth' && (
            <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 p-3"><p className="text-sm text-amber-300">This article is selling a story that society accepts as natural truth. What is it?</p></div>
          )}
          <button onClick={() => handleLayer(activeLayer)} className="pixel-btn pixel-btn-cyan w-full text-xs cursor-pointer">✅ Got it</button>
        </div>
      ) : null}
      {allDone && (
        <div className="mt-4">
          <div className="bg-green-900/20 border border-green-500/30 p-3 mb-3"><p className="text-sm text-green-400 font-bold">🎉 All 3 layers seen!</p><p className="text-xs text-gray-400 mt-1">Every word carries an invisible story.</p></div>
          <button onClick={() => onComplete([{ questionId: 'meaning-map', selected: 'done', correct: true }], 100)} className="pixel-btn w-full cursor-pointer">🔓 Complete Analysis</button>
        </div>
      )}
    </div>
  )
}

function extractTerms(text: string): string[] {
  const words = text.toLowerCase().replace(/[^a-z\s-]/g, '').split(/\s+/)
  const stop = new Set(['the','a','an','of','in','to','and','or','is','was','for','on','as','at','by','with','from'])
  const freq: Record<string, number> = {}
  words.forEach(w => { if (w.length > 3 && !stop.has(w)) freq[w] = (freq[w] || 0) + 1 })
  return Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([w]) => w.charAt(0).toUpperCase() + w.slice(1))
}
