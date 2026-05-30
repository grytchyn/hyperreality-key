// ── BRIEFING — Short Lore, English ──
import { PixelButton, ChapterTitle, Scanlines } from './PixelComponents'
import { WORLD_LORE, CHAPTERS } from '../data/lore'

interface BriefingPanelProps {
  chapterIndex: number
  onStart: () => void
}

export default function BriefingPanel({ chapterIndex, onStart }: BriefingPanelProps) {
  const chapter = CHAPTERS[Math.min(chapterIndex, CHAPTERS.length - 1)]

  return (
    <Scanlines className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in-up">
        <div className="bg-dark-card border-2 border-neon-cyan/30 p-6 relative"
          style={{ boxShadow: '0 0 30px rgba(6,182,212,0.1)' }}
        >
          <div className="relative">
            <ChapterTitle
              number={chapter?.title || 'MISSION'}
              title=""
              subtitle=""
              visual=""
            />

            <p className="text-xs text-gray-300 leading-relaxed font-mono mb-4">
              {chapterIndex === 0 ? WORLD_LORE : chapter?.body}
            </p>

            <div className="bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 border border-neon-purple/30 p-3 mb-4">
              <p className="text-xs text-gray-200 leading-relaxed">
                {chapterIndex === 0
                  ? 'Analyze this message with your tools. Find the hidden agenda.'
                  : 'Apply your new tools. Each layer reveals a deeper truth.'}
              </p>
            </div>

            <PixelButton onClick={onStart} className="w-full justify-center">
              {chapterIndex === 0 ? '🔍 RECEIVE MESSAGE' : '🔍 CONTINUE ANALYSIS'}
            </PixelButton>

            <div className="mt-4 text-center text-[9px] text-gray-600 font-mono">
              7 tools · 1 agenda · Truth awaits
            </div>
          </div>
        </div>
      </div>
    </Scanlines>
  )
}
