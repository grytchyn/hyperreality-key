// ── TOOLBAR — English Only ──
import { CORE_TOOLS } from '../data/coreTools'
import type { CoreToolId } from '../types'

interface Props { unlockedTools: CoreToolId[]; usedTools: CoreToolId[]; activeTool: CoreToolId | null; onSelect: (id: CoreToolId) => void }

export default function PixelToolbar({ unlockedTools, usedTools, activeTool, onSelect }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-dark-card/95 backdrop-blur-md border-t-2 border-dark-border">
      <div className="absolute inset-0 pointer-events-none scanline opacity-30" />
      <div className="flex items-stretch gap-0.5 px-1 py-1.5 max-w-lg mx-auto">
        {CORE_TOOLS.map(tool => {
          const unlocked = unlockedTools.includes(tool.id)
          const used = usedTools.includes(tool.id)
          const active = activeTool === tool.id
          return (
            <button key={tool.id}
              onClick={() => unlocked && !used && onSelect(tool.id)}
              disabled={!unlocked || used}
              className={`tool-btn relative ${unlocked && !used ? 'hover:bg-dark-surface cursor-pointer' : ''} ${active ? 'active' : ''} ${!unlocked ? 'locked' : ''} ${used ? 'used' : ''}`}
              style={{ borderColor: active ? tool.color : undefined, boxShadow: active ? `0 0 8px ${tool.color}40` : undefined }}>
              {!unlocked && <span className="absolute inset-0 flex items-center justify-center bg-dark-bg/60 z-10"><span className="text-xs">🔒</span></span>}
              {used && <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-[8px] text-white z-10">✓</span>}
              <span className="tool-btn-icon" style={{ opacity: used ? 0.6 : 1 }}>{tool.icon}</span>
              <span className="tool-btn-label">{tool.shortLabel}</span>
              {unlocked && !used && <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full" style={{ backgroundColor: tool.color }} />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
