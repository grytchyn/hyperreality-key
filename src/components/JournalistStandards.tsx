// ── JOURNALIST STANDARDS CHECK ──
// Shows real violations from MissionPost.standardViolations after answering

interface JournalistStandardsProps {
  violations: { rule: string; text: string }[]
}

const RULE_LABELS: Record<string, string> = {
  SOURCE_CHECK: '⛓️ Source Not Verified',
  FAIRNESS: '⚖️ Missing Fairness',
  BALANCED_REPORTING: '📊 Unbalanced Reporting',
  POLLING_TRANSPARENCY: '📉 Poll Opaque',
  CONTEXT: '🌐 Missing Context',
  SPECIFICITY: '🎯 Vague Claims',
  EMOTIONAL_LANGUAGE: '🎭 Loaded Language',
}

const RULE_TIPS: Record<string, string> = {
  SOURCE_CHECK: 'Real journalists verify sources before publishing',
  FAIRNESS: 'Fair reporting includes perspectives from both sides',
  BALANCED_REPORTING: 'Stories should represent all relevant viewpoints',
  POLLING_TRANSPARENCY: 'Polls should disclose methodology, sample size, and margin of error',
  CONTEXT: 'Facts without context can be misleading',
  SPECIFICITY: 'Specific claims are easier to verify than vague ones',
  EMOTIONAL_LANGUAGE: 'Neutral language helps readers form their own opinions',
}

export default function JournalistStandards({ violations }: JournalistStandardsProps) {
  if (!violations || violations.length === 0) return null

  return (
    <div className="mt-4 rounded-xl overflow-hidden animate-fade-in-up"
      style={{
        background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-dark-card) 95%, transparent), color-mix(in srgb, var(--color-dark-surface) 90%, transparent))',
        border: '1px solid color-mix(in srgb, var(--color-pixel-yellow) 20%, transparent)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      }}>
      
      {/* Header */}
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-gray-800/40"
        style={{ background: 'color-mix(in srgb, var(--color-pixel-yellow) 8%, transparent)' }}>
        <span className="text-sm">⚖️</span>
        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--color-pixel-yellow)' }}>
          Journalist Standards — {violations.length} violation{violations.length > 1 ? 's' : ''} found
        </span>
      </div>

      {/* Violation list */}
      <div className="px-3.5 py-2.5 space-y-2.5">
        {violations.map((v, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: 'color-mix(in srgb, var(--color-pixel-yellow) 15%, transparent)' }}>
              <span className="text-[9px]" style={{ color: 'var(--color-pixel-yellow)' }}>!</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] font-bold font-mono uppercase tracking-wider mb-0.5"
                style={{ color: 'var(--color-pixel-yellow)' }}>
                {RULE_LABELS[v.rule] || v.rule}
              </div>
              <div className="text-[11px] leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {v.text}
              </div>
              <div className="text-[8px] mt-0.5 italic" style={{ color: 'var(--color-text-muted)' }}>
                💡 {RULE_TIPS[v.rule] || 'Journalistic best practice'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer tip */}
      <div className="px-3.5 py-2 border-t border-gray-800/30 text-[8px] text-center"
        style={{ color: 'var(--color-text-muted)' }}>
        Real journalists check: source verification · balance · context · evidence · specificity
      </div>
    </div>
  )
}