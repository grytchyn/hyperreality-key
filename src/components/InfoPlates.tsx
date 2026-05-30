// ── INFO PLATES — Auto-Overlay Metrics ──
import { InfoBadge } from './PixelComponents'
import type { InfoPlateData } from '../types'

interface InfoPlatesProps {
  plates: InfoPlateData[]
  className?: string
}

export default function InfoPlates({ plates, className = '' }: InfoPlatesProps) {
  if (plates.length === 0) return null

  return (
    <div className={`flex flex-wrap gap-1.5 items-center ${className}`}>
      {plates.map((plate) => (
        <InfoBadge
          key={plate.id}
          icon={plate.icon}
          label={plate.label}
          value={plate.value}
          status={plate.status}
        />
      ))}
    </div>
  )
}
