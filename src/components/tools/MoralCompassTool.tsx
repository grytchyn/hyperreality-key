// ── MORAL COMPASS — English Only ──
import { useState } from 'react'
import type { AnalysisAnswer } from '../../types'

interface Props { articleText: string; onComplete: (answers: AnalysisAnswer[], score: number) => void }

const F = [
  { id: 'care', icon: '❤️', label: 'Care', color: '#f472b6' }, { id: 'fairness', icon: '⚖️', label: 'Fairness', color: '#14b8a6' },
  { id: 'loyalty', icon: '🛡️', label: 'Loyalty', color: '#8b5cf6' }, { id: 'authority', icon: '🏛️', label: 'Authority', color: '#1e40af' },
  { id: 'sanctity', icon: '🌿', label: 'Purity', color: '#22c55e' }, { id: 'liberty', icon: '🔆', label: 'Liberty', color: '#fbbf24' },
]

export default function MoralCompassTool({ articleText: _a, onComplete }: Props) {
  const [detected, setDetected] = useState<string[]>([])
  const toggle = (id: string) => setDetected(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id])
  return (
    <div className="p-4">
      <p className="text-xs text-gray-400 font-mono mb-4">Which moral buttons does this article press? Pick at least 2.</p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {F.map(f => {
          const active = detected.includes(f.id)
          return (
            <button key={f.id} onClick={() => toggle(f.id)}
              className={`p-3 border transition-all text-left cursor-pointer ${active ? 'bg-dark-surface border-2' : 'bg-dark-card border border-dark-border hover:bg-dark-surface'}`}
              style={{ borderColor: active ? f.color : undefined, boxShadow: active ? `0 0 8px ${f.color}40` : undefined }}>
              <div className="flex items-center gap-2">
                <span className="text-lg">{f.icon}</span>
                <div className={`text-sm font-bold ${active ? 'text-white' : 'text-gray-400'}`}>{f.label}</div>
                <div className={`ml-auto w-4 h-4 rounded border flex items-center justify-center text-[8px] ${active ? 'bg-white' : 'border-dark-border'}`}>{active ? '✓' : ''}</div>
              </div>
            </button>
          )
        })}
      </div>
      {detected.length >= 2 && (
        <button onClick={() => onComplete(detected.map(id => ({ questionId: id, selected: id, correct: true })), Math.round((detected.length / 6) * 100))}
          className="pixel-btn w-full text-xs cursor-pointer">🔓 Complete Analysis</button>
      )}
    </div>
  )
}
