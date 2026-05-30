// ── TOOL OVERLAY — English Only ──
import { getToolById } from '../data/coreTools'
import type { CoreToolId, AnalysisAnswer } from '../types'
import AristotleTool from './AristotleTool'
import MeaningMapTool from './tools/MeaningMapTool'
import BinaryScalpelTool from './tools/BinaryScalpelTool'
import MoralCompassTool from './tools/MoralCompassTool'
import SimulacrumMeterTool from './tools/SimulacrumMeterTool'

interface ToolOverlayProps {
  toolId: CoreToolId
  articleText: string
  onComplete: (answers: AnalysisAnswer[], score: number) => void
  onClose: () => void
}

export default function ToolOverlay({ toolId, articleText, onComplete, onClose }: ToolOverlayProps) {
  const config = getToolById(toolId)
  if (!config) return null

  const renderTool = () => {
    switch (toolId) {
      case 'fallacy-scanner': return <AristotleTool type="fallacies" onComplete={onComplete} />
      case 'rhetoric-detector': return <AristotleTool type="ethos-pathos-logos" onComplete={onComplete} />
      case 'bias-detector': return <AristotleTool type="cognitive-biases" onComplete={onComplete} />
      case 'meaning-map': return <MeaningMapTool articleText={articleText} onComplete={onComplete} />
      case 'binary-scalpel': return <BinaryScalpelTool articleText={articleText} onComplete={onComplete} />
      case 'moral-compass': return <MoralCompassTool articleText={articleText} onComplete={onComplete} />
      case 'simulacrum-meter': return <SimulacrumMeterTool articleText={articleText} onComplete={onComplete} />
      default: return <p className="text-gray-500 p-4">Not implemented yet</p>
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-dark-card border-2 w-full max-w-md max-h-[85vh] overflow-y-auto relative animate-fade-in-up"
        style={{ borderColor: `${config.color}40`, boxShadow: `0 0 20px ${config.color}20` }}
        onClick={(e) => e.stopPropagation()}>
        <div className="absolute inset-0 pointer-events-none scanline opacity-20" />
        <div className="relative">
          <div className="sticky top-0 bg-dark-card z-10 border-b border-dark-border px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xl shrink-0">{config.icon}</span>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-white truncate">{config.name}</div>
                  <div className="text-[10px] text-gray-500 font-mono truncate">{config.philosopher}</div>
                </div>
              </div>
              <button onClick={onClose} className="text-gray-500 hover:text-white text-lg cursor-pointer shrink-0 ml-2">✕</button>
            </div>
          </div>
          <div className="p-4">{renderTool()}</div>
          <div className="px-4 pb-4">
            <details className="group">
              <summary className="text-[10px] text-gray-600 font-mono cursor-pointer hover:text-gray-400">📖 Learn more</summary>
              <p className="text-[11px] text-gray-400 leading-relaxed mt-2 border-t border-dark-border pt-2">{config.description}</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}
