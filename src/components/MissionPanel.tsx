// ── MISSION PANEL — English Only ──
import { ProgressBar } from './PixelComponents'

interface MissionPanelProps {
  missionId: string
  cluesFound: number
  totalClues: number
}

export default function MissionPanel({ missionId: _missionId, cluesFound, totalClues }: MissionPanelProps) {
  return (
    <div className="bg-dark-card border border-dark-border p-3">
      <div className="text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-2">🎯 Mission</div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-gray-400 font-mono">Analyses</span>
        <span className="text-[10px] text-neon-cyan font-mono">{cluesFound}/{totalClues}</span>
      </div>
      <ProgressBar current={cluesFound} max={totalClues} color="#8b5cf6" size="sm" />
      {cluesFound === 0 && <p className="text-[9px] text-gray-600 mt-2 font-mono">Select a tool from the toolbar</p>}
    </div>
  )
}
