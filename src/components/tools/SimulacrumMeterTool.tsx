// ── SIMULACRUM METER — English Only ──
import { useState } from 'react'
import type { AnalysisAnswer } from '../../types'

interface Props { articleText: string; onComplete: (answers: AnalysisAnswer[], score: number) => void }

const ORDERS = [
  { id: 1, icon: '🟢', label: 'Real Report', color: '#22c55e', desc: 'Journalistic report. Facts checked. Documented on site.' },
  { id: 2, icon: '🟡', label: 'Hidden Agenda', color: '#f59e0b', desc: 'Facts omitted. Opinion disguised as truth. Framing.' },
  { id: 3, icon: '🟠', label: 'AI Fake', color: '#f97316', desc: 'AI-generated or invented. No original exists.' },
  { id: 4, icon: '🔴', label: 'Meme World', color: '#ef4444', desc: 'The simulation IS reality. Meme > fact. The map ate the territory.' },
]

export default function SimulacrumMeterTool({ articleText: _a, onComplete }: Props) {
  const [selected, setSelected] = useState<number | null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const [dissolving, setDissolving] = useState(false)

  const handleConfirm = () => {
    if (selected === 4) {
      setDissolving(true)
      setTimeout(() => setConfirmed(true), 2500)
    } else setConfirmed(true)
  }

  return (
    <div className="p-4">
      <p className="text-xs text-gray-400 font-mono mb-4">How real is what you're reading?</p>
      <div className="space-y-2 mb-4">
        {ORDERS.map(o => {
          const isSel = selected === o.id
          return (
            <button key={o.id} onClick={() => !confirmed && setSelected(o.id)} disabled={confirmed}
              className={`w-full p-3 border text-left transition-all cursor-pointer ${isSel ? 'bg-dark-surface border-2' : 'bg-dark-card border border-dark-border hover:bg-dark-surface'} ${dissolving && 'dissolve-active'}`}
              style={{ borderColor: isSel ? o.color : undefined, boxShadow: isSel ? `0 0 12px ${o.color}40` : undefined }}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{o.icon}</span>
                <div className="flex-1">
                  <div className={`text-sm font-bold ${isSel ? 'text-white' : 'text-gray-400'}`}>Order {o.id} — {o.label}</div>
                  <div className="text-[11px] text-gray-500">{o.desc}</div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[8px] ${isSel ? 'border-white bg-white text-black' : 'border-dark-border'}`}>{isSel ? '✓' : o.id}</div>
              </div>
            </button>
          )
        })}
      </div>
      {dissolving && (
        <div className="text-center py-6 animate-pulse">
          <div className="text-5xl mb-3">🌀</div>
          <p className="text-sm text-neon-cyan font-mono glitch">THE MAP ATE THE TERRITORY...</p>
        </div>
      )}
      {selected && !confirmed && !dissolving && (
        <button onClick={handleConfirm} className="pixel-btn w-full text-xs cursor-pointer"
          style={{ background: selected === 4 ? 'linear-gradient(180deg, #ef4444, #dc2626)' : undefined }}>Confirm Order {selected}</button>
      )}
      {confirmed && (
        <button onClick={() => onComplete([{ questionId: `order-${selected}`, selected: String(selected), correct: true }], 100)}
          className="pixel-btn w-full text-xs cursor-pointer">🔓 Complete Analysis</button>
      )}
    </div>
  )
}
