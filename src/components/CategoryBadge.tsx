// ── CATEGORY BADGE ──

interface CategoryBadgeProps {
  category: string
}

function getLabel(cat: string): { label: string; icon: string; color: string } {
  switch (cat) {
    case 'philosophy': return { label: 'Philosophy', icon: '📖', color: '#a78bfa' }
    case 'cognitive-psychology': return { label: 'Cognitive Psych', icon: '🧠', color: '#22c55e' }
    case 'media-sociology': return { label: 'Media Sociology', icon: '📺', color: '#f59e0b' }
    default: return { label: cat, icon: '🔍', color: '#888' }
  }
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const { label, icon, color } = getLabel(category)
  return (
    <span
      className="inline-flex items-center gap-1 text-[9px] font-mono px-1.5 py-0.5 rounded-full"
      style={{ color, backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
    >
      {icon}{label}
    </span>
  )
}
