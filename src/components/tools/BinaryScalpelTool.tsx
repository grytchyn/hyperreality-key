// ── BINARY SCALPEL — English Only ──
import { useState } from 'react'
import type { AnalysisAnswer } from '../../types'

interface Props { articleText: string; onComplete: (answers: AnalysisAnswer[], score: number) => void }

const OPPOSITIONS = [
  { id: 'us-them', label: 'Us / Them' }, { id: 'good-evil', label: 'Good / Evil' },
  { id: 'natural-artificial', label: 'Natural / Artificial' }, { id: 'order-chaos', label: 'Order / Chaos' },
  { id: 'progress-decline', label: 'Progress / Decline' },
]

export default function BinaryScalpelTool({ articleText: _a, onComplete }: Props) {
  const [found, setFound] = useState<string[]>([])
  const toggle = (id: string) => { if (!found.includes(id)) setFound(p => [...p, id]) }
  return (
    <div className="p-4">
      <p className="text-xs text-gray-400 font-mono mb-4">Every story builds on hidden opposites. Find at least 3.</p>
      <div className="space-y-2 mb-4">
        {OPPOSITIONS.map(opp => {
          const isFound = found.includes(opp.id)
          return (
            <button key={opp.id} onClick={() => toggle(opp.id)} disabled={isFound}
              className={`w-full p-3 border text-left transition-all cursor-pointer ${isFound ? 'bg-green-900/20 border-green-500/30' : 'bg-dark-surface border-dark-border hover:border-neon-purple/40'}`}>
              <div className="flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${isFound ? 'bg-green-500' : 'bg-dark-border'}`} /><span className={`text-sm font-mono uppercase tracking-wide ${isFound ? 'text-green-400' : 'text-gray-400'}`}>{opp.label}</span></div>
            </button>
          )
        })}
      </div>
      {found.length >= 3 && (
        <button onClick={() => onComplete(found.map(id => ({ questionId: id, selected: id, correct: true })), 100)} className="pixel-btn w-full text-xs cursor-pointer">🔓 Complete Analysis</button>
      )}
    </div>
  )
}
