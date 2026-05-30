// ── DEEP DRAWER — English Only ──
import { DEEP_DIVES } from '../data/coreTools'

interface DeepDrawerProps { isOpen: boolean; onClose: () => void }

export default function DeepDrawer({ isOpen, onClose }: DeepDrawerProps) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-dark-card border-2 border-neon-purple/40 animate-slide-up sm:rounded-lg sm:mx-4">
        <div className="absolute inset-0 pointer-events-none scanline opacity-20" />
        <div className="relative p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-bold font-mono uppercase tracking-wider"><span className="text-neon-cyan">🔬</span> <span className="text-white">Deep Analysis</span></h2>
              <p className="text-[10px] text-gray-500 font-mono mt-1">Advanced tools — use after core analysis</p>
            </div>
            <button onClick={onClose} className="pixel-btn pixel-btn-sm bg-transparent border border-dark-border text-gray-400 hover:text-white cursor-pointer">✕</button>
          </div>
          <div className="space-y-2">
            {DEEP_DIVES.map(entry => (
              <div key={entry.id} className="bg-dark-surface border border-dark-border p-3 hover:border-neon-cyan/30 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{entry.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-neon-cyan transition-colors truncate">{entry.name}</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">{entry.description}</div>
                    <div className="text-[9px] text-gray-600 font-mono mt-1">{entry.philosopher}</div>
                  </div>
                  <span className="text-gray-600 group-hover:text-neon-cyan text-xs">→</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-[9px] text-gray-600 font-mono text-center">Use the 7 core tools first</div>
        </div>
      </div>
    </div>
  )
}
