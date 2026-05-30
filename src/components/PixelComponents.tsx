// ── SHARED PIXEL COMPONENTS ──
import type { ReactNode, ButtonHTMLAttributes } from 'react'

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'cyan' | 'red' | 'green' | 'amber'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  children: ReactNode
}

export function PixelButton({
  variant = 'default',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}: PixelButtonProps) {
  const variantClass = {
    default: 'pixel-btn',
    cyan: 'pixel-btn pixel-btn-cyan',
    red: 'pixel-btn pixel-btn-red',
    green: 'pixel-btn pixel-btn-green',
    amber: 'pixel-btn pixel-btn-amber',
  }[variant]

  const sizeClass = size === 'sm' ? 'pixel-btn-sm' : size === 'lg' ? 'px-8 py-4 text-base' : ''

  return (
    <button
      className={`${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {icon && <span className="text-base">{icon}</span>}
      {children}
    </button>
  )
}

interface PixelCardProps {
  children: ReactNode
  className?: string
  highlight?: boolean
  accent?: string
}

export function PixelCard({ children, className = '', highlight, accent }: PixelCardProps) {
  return (
    <div
      className={`pixel-card rounded-none ${highlight ? 'pixel-card-highlight' : ''} ${className}`}
      style={accent ? {
        borderColor: accent,
        boxShadow: `0 0 10px ${accent}40`,
      } : undefined}
    >
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}

interface InfoBadgeProps {
  icon: string
  label: string
  value: string | number
  status?: 'good' | 'warn' | 'danger'
}

export function InfoBadge({ icon, label, value, status = 'good' }: InfoBadgeProps) {
  const statusClass = {
    good: 'info-plate-good',
    warn: 'info-plate-warn',
    danger: 'info-plate-danger',
  }[status]

  return (
    <span className={`info-plate ${statusClass}`}>
      <span>{icon}</span>
      <span className="text-gray-500">{label}:</span>
      <span className="font-bold">{value}</span>
    </span>
  )
}

interface ProgressBarProps {
  current: number
  max: number
  color?: string
  size?: 'sm' | 'md'
}

export function ProgressBar({ current, max, color = '#8b5cf6', size = 'sm' }: ProgressBarProps) {
  const pct = max > 0 ? Math.min(100, Math.round((current / max) * 100)) : 0
  const height = size === 'sm' ? 'h-1.5' : 'h-2.5'

  return (
    <div className={`w-full bg-dark-border rounded-full overflow-hidden ${height}`}>
      <div
        className={`${height} rounded-full transition-all duration-500`}
        style={{ width: `${pct}%`, backgroundColor: color }}
      />
    </div>
  )
}

interface ScanlinesProps {
  children: ReactNode
  className?: string
}

export function Scanlines({ children, className = '' }: ScanlinesProps) {
  return (
    <div className={`scanline ${className}`}>
      {children}
    </div>
  )
}

interface ChapterTitleProps {
  number: string
  title: string
  subtitle: string
  visual: string
}

export function ChapterTitle({ number, title, subtitle, visual }: ChapterTitleProps) {
  return (
    <div className="text-center mb-6">
      <div className="text-neon-cyan font-mono text-[10px] uppercase tracking-[3px] mb-2">
        {number}
      </div>
      <h2 className="text-xl font-bold glitch" style={{ fontFamily: "'Courier New', monospace" }}>
        {title}
      </h2>
      <p className="text-xs text-gray-500 mt-1 font-mono">{subtitle}</p>
      <div className="text-[10px] text-gray-600 mt-3 font-mono tracking-wider opacity-60">
        {visual}
      </div>
    </div>
  )
}
