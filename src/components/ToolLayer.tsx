// ── TOOL LAYER v3 — a question card for one tool ──

import type { CoreToolConfig } from '../types'

interface ToolLayerProps {
  config: CoreToolConfig
  selected: string | null
  onSelect: (answer: string) => void
}

export default function ToolLayer({ config, selected, onSelect }: ToolLayerProps) {
  return (
    <div
      className="bg-dark-card border rounded-lg overflow-hidden transition-all"
      style={{ borderColor: `${config.color}30` }}
    >
      {/* Header */}
      <button
        onClick={() => {
          // If already selected, cycle through options
          if (!selected) onSelect(config.options[0])
        }}
        className="w-full flex items-center gap-2 px-3 py-2.5 hover:bg-white/5 transition-colors"
      >
        <span className="text-lg">{config.icon}</span>
        <div className="flex-1 text-left min-w-0">
          <div className="text-sm font-medium text-white truncate">{config.name}</div>
          <div className="text-[9px] text-gray-500 font-mono">{config.philosopher}</div>
        </div>
        {selected && <span className="text-green-400 text-xs">✅</span>}
      </button>

      {/* Question — expanded when selected or on first tap */}
      <div className={`px-3 pb-3 transition-all ${selected ? 'block' : 'block'}`}>
        <p className="text-xs text-gray-400 mb-2 font-mono">{config.simpleQuestion}</p>
        <div className="space-y-1">
          {config.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => onSelect(opt)}
              className={`w-full text-left text-[11px] px-2.5 py-1.5 rounded border transition-all ${
                selected === opt
                  ? 'text-white font-medium'
                  : 'text-gray-400 border-gray-700/50 hover:border-gray-600 hover:text-gray-300'
              }`}
              style={selected === opt ? { borderColor: config.color, backgroundColor: config.color + '20', color: config.color } : {}}
            >
              <span className="mr-1.5">{selected === opt ? '●' : '○'}</span>
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
