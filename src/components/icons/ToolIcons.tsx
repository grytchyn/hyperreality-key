// ── NEON SVG ICONS v1 — matching the 7 (now 8) tool reference set ──
// Each icon is a glowing neon line-art SVG in a dark rounded square frame
// with a cosmic/starry background texture.

import type { CoreToolId } from '../../types'

interface IconProps {
  size?: number
  glowColor?: string
  active?: boolean
}

function ShieldIcon({ size = 36, glowColor = '#ef4444', active = true }: IconProps) {
  const opacity = active ? 1 : 0.35
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ opacity }}>
      <rect x="2" y="2" width="44" height="44" rx="10" fill="#0a0a0f" stroke={glowColor} strokeWidth="1.5" />
      <circle cx="18" cy="12" r="1.5" fill={glowColor} opacity="0.6" />
      <circle cx="32" cy="10" r="1" fill={glowColor} opacity="0.4" />
      <circle cx="14" cy="36" r="1" fill={glowColor} opacity="0.5" />
      <circle cx="34" cy="34" r="1.2" fill={glowColor} opacity="0.3" />
      <path d="M14 20 L24 12 L34 20 L34 30 Q24 38 24 38 Q14 30 14 20Z"
        stroke={glowColor} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
        filter={active ? `url(#glow-${glowColor.replace('#', '')})` : undefined} />
      <text x="24" y="31" textAnchor="middle" fill={glowColor} fontSize="10" fontWeight="bold" fontFamily="monospace">1</text>
    </svg>
  )
}

function MasksIcon({ size = 36, glowColor = '#f59e0b', active = true }: IconProps) {
  const opacity = active ? 1 : 0.35
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ opacity }}>
      <rect x="2" y="2" width="44" height="44" rx="10" fill="#0a0a0f" stroke={glowColor} strokeWidth="1.5" />
      <circle cx="12" cy="10" r="1.2" fill={glowColor} opacity="0.5" />
      <circle cx="36" cy="12" r="1" fill={glowColor} opacity="0.4" />
      <circle cx="16" cy="38" r="1.5" fill={glowColor} opacity="0.3" />
      <circle cx="34" cy="36" r="1" fill={glowColor} opacity="0.6" />
      <circle cx="24" cy="24" r="12" stroke={glowColor} strokeWidth="1.5" fill="none" />
      {/* Comedy mask (smiling) - left half */}
      <path d="M17 22 Q20 18 24 20" stroke={glowColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M17 26 Q20 30 24 28" stroke={glowColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Tragedy mask (frowning) - right half */}
      <path d="M24 20 Q28 18 31 22" stroke={glowColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M24 28 Q28 30 31 26" stroke={glowColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Eyes */}
      <ellipse cx="20" cy="21" rx="1.5" ry="1" fill={glowColor} />
      <ellipse cx="28" cy="21" rx="1.5" ry="1" fill={glowColor} />
    </svg>
  )
}

function BrainIcon({ size = 36, glowColor = '#22c55e', active = true }: IconProps) {
  const opacity = active ? 1 : 0.35
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ opacity }}>
      <rect x="2" y="2" width="44" height="44" rx="10" fill="#0a0a0f" stroke={glowColor} strokeWidth="1.5" />
      <circle cx="12" cy="8" r="1" fill={glowColor} opacity="0.5" />
      <circle cx="36" cy="10" r="1.2" fill={glowColor} opacity="0.4" />
      <circle cx="10" cy="38" r="1" fill={glowColor} opacity="0.3" />
      <circle cx="38" cy="36" r="1.5" fill={glowColor} opacity="0.5" />
      {/* Hexagon border */}
      <polygon points="24,10 34,16 34,30 24,36 14,30 14,16" stroke={glowColor} strokeWidth="1.5" fill="none" opacity="0.3" />
      {/* Brain */}
      <path d="M16 22 Q18 16 24 18 Q30 16 32 22 Q34 28 28 32 Q24 34 20 32 Q14 28 16 22Z"
        stroke={glowColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Brain fold detail */}
      <path d="M20 22 Q22 20 24 22 Q26 20 28 22" stroke={glowColor} strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M18 26 Q22 24 24 26 Q26 24 30 26" stroke={glowColor} strokeWidth="1" fill="none" opacity="0.6" />
      {/* Pedestal */}
      <line x1="21" y1="34" x2="27" y2="34" stroke={glowColor} strokeWidth="1.5" />
      <line x1="22" y1="36" x2="26" y2="36" stroke={glowColor} strokeWidth="1.5" />
    </svg>
  )
}

function SwordsIcon({ size = 36, glowColor = '#d946ef', active = true }: IconProps) {
  const opacity = active ? 1 : 0.35
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ opacity }}>
      <rect x="2" y="2" width="44" height="44" rx="10" fill="#0a0a0f" stroke={glowColor} strokeWidth="1.5" />
      <circle cx="10" cy="10" r="1.2" fill={glowColor} opacity="0.5" />
      <circle cx="38" cy="8" r="1" fill={glowColor} opacity="0.4" />
      <circle cx="12" cy="38" r="1" fill={glowColor} opacity="0.3" />
      <circle cx="36" cy="40" r="1.5" fill={glowColor} opacity="0.5" />
      {/* Diamond outline behind swords */}
      <polygon points="24,10 34,24 24,38 14,24" stroke={glowColor} strokeWidth="1" fill="none" opacity="0.2" />
      {/* Sword 1 — top-left to bottom-right */}
      <line x1="16" y1="14" x2="32" y2="34" stroke={glowColor} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="15" y="12" width="3" height="6" rx="1" transform="rotate(35, 16, 14)" fill={glowColor} />
      <circle cx="32" cy="34" r="2" stroke={glowColor} strokeWidth="1" fill="none" />
      {/* Sword 2 — top-right to bottom-left */}
      <line x1="32" y1="14" x2="16" y2="34" stroke={glowColor} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="31" y="12" width="3" height="6" rx="1" transform="rotate(-35, 32, 14)" fill={glowColor} />
      <circle cx="16" cy="34" r="2" stroke={glowColor} strokeWidth="1" fill="none" />
    </svg>
  )
}

function NetworkIcon({ size = 36, glowColor = '#f97316', active = true }: IconProps) {
  const opacity = active ? 1 : 0.35
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ opacity }}>
      <rect x="2" y="2" width="44" height="44" rx="10" fill="#0a0a0f" stroke={glowColor} strokeWidth="1.5" />
      <circle cx="10" cy="6" r="1" fill={glowColor} opacity="0.5" />
      <circle cx="38" cy="8" r="1.2" fill={glowColor} opacity="0.4" />
      <circle cx="6" cy="38" r="1" fill={glowColor} opacity="0.3" />
      <circle cx="40" cy="40" r="1.5" fill={glowColor} opacity="0.5" />
      {/* Pentagon network */}
      <circle cx="24" cy="16" r="2" stroke={glowColor} strokeWidth="1" fill="none" />
      <circle cx="14" cy="22" r="2" stroke={glowColor} strokeWidth="1" fill="none" />
      <circle cx="18" cy="32" r="2" stroke={glowColor} strokeWidth="1" fill="none" />
      <circle cx="30" cy="32" r="2" stroke={glowColor} strokeWidth="1" fill="none" />
      <circle cx="34" cy="22" r="2" stroke={glowColor} strokeWidth="1" fill="none" />
      {/* Center */}
      <circle cx="24" cy="24" r="1.5" fill={glowColor} />
      {/* Connections */}
      <line x1="24" y1="16" x2="24" y2="24" stroke={glowColor} strokeWidth="1" opacity="0.6" />
      <line x1="14" y1="22" x2="24" y2="24" stroke={glowColor} strokeWidth="1" opacity="0.6" />
      <line x1="34" y1="22" x2="24" y2="24" stroke={glowColor} strokeWidth="1" opacity="0.6" />
      <line x1="18" y1="32" x2="24" y2="24" stroke={glowColor} strokeWidth="1" opacity="0.6" />
      <line x1="30" y1="32" x2="24" y2="24" stroke={glowColor} strokeWidth="1" opacity="0.6" />
      {/* Outer connections */}
      <line x1="14" y1="22" x2="18" y2="32" stroke={glowColor} strokeWidth="0.8" opacity="0.4" />
      <line x1="34" y1="22" x2="30" y2="32" stroke={glowColor} strokeWidth="0.8" opacity="0.4" />
      <line x1="14" y1="22" x2="34" y2="22" stroke={glowColor} strokeWidth="0.8" opacity="0.4" />
    </svg>
  )
}

function EyeIcon({ size = 36, glowColor = '#06b6d4', active = true }: IconProps) {
  const opacity = active ? 1 : 0.35
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ opacity }}>
      <rect x="2" y="2" width="44" height="44" rx="10" fill="#0a0a0f" stroke={glowColor} strokeWidth="1.5" />
      <circle cx="10" cy="8" r="1.2" fill={glowColor} opacity="0.5" />
      <circle cx="38" cy="10" r="1" fill={glowColor} opacity="0.4" />
      <circle cx="8" cy="40" r="1" fill={glowColor} opacity="0.3" />
      <circle cx="40" cy="36" r="1.5" fill={glowColor} opacity="0.5" />
      {/* Eye shape */}
      <rect x="12" y="16" width="24" height="16" rx="8" stroke={glowColor} strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="24" r="5" stroke={glowColor} strokeWidth="1.5" fill={glowColor + '15'} />
      <circle cx="24" cy="24" r="2" fill={glowColor} />
      <text x="24" y="28" textAnchor="middle" fill={glowColor} fontSize="8" fontWeight="bold" fontFamily="monospace">D</text>
    </svg>
  )
}

function CrownIcon({ size = 36, glowColor = '#a78bfa', active = true }: IconProps) {
  const opacity = active ? 1 : 0.35
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ opacity }}>
      <rect x="2" y="2" width="44" height="44" rx="10" fill="#0a0a0f" stroke={glowColor} strokeWidth="1.5" />
      <circle cx="12" cy="8" r="1" fill={glowColor} opacity="0.5" />
      <circle cx="36" cy="6" r="1.2" fill={glowColor} opacity="0.4" />
      <circle cx="8" cy="38" r="1" fill={glowColor} opacity="0.3" />
      <circle cx="40" cy="40" r="1.5" fill={glowColor} opacity="0.5" />
      {/* Crown */}
      <path d="M12 34 L12 22 L18 26 L24 18 L30 26 L36 22 L36 34Z"
        stroke={glowColor} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Crown jewels */}
      <circle cx="18" cy="26" r="1" fill={glowColor} />
      <circle cx="24" cy="20" r="1.5" fill={glowColor} />
      <circle cx="30" cy="26" r="1" fill={glowColor} />
      {/* Base line */}
      <line x1="14" y1="34" x2="34" y2="34" stroke={glowColor} strokeWidth="1.5" />
    </svg>
  )
}

function SourceIcon({ size = 36, glowColor = '#14b8a6', active = true }: IconProps) {
  const opacity = active ? 1 : 0.35
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ opacity }}>
      <rect x="2" y="2" width="44" height="44" rx="10" fill="#0a0a0f" stroke={glowColor} strokeWidth="1.5" />
      <circle cx="10" cy="8" r="1" fill={glowColor} opacity="0.5" />
      <circle cx="38" cy="10" r="1.2" fill={glowColor} opacity="0.4" />
      <circle cx="8" cy="38" r="1" fill={glowColor} opacity="0.3" />
      <circle cx="40" cy="40" r="1.5" fill={glowColor} opacity="0.5" />
      {/* Clipboard */}
      <rect x="16" y="10" width="16" height="28" rx="3" stroke={glowColor} strokeWidth="1.5" fill="none" />
      <rect x="18" y="12" width="12" height="3" rx="1" fill={glowColor} opacity="0.3" />
      {/* Checkmark */}
      <path d="M20 24 L24 28 L30 20" stroke={glowColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Lines */}
      <line x1="20" y1="32" x2="28" y2="32" stroke={glowColor} strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

// ── NEW TOOL ICONS (image-based from user's GPT generations) ──

function ImageIcon({ size = 36, glowColor, active = true, src }: IconProps & { src: string }) {
  const opacity = active ? 1 : 0.35
  return (
    <div style={{
      width: size, height: size, opacity,
      borderRadius: '10px', overflow: 'hidden',
      border: `1.5px solid ${glowColor || '#666'}`,
      background: '#0a0a0f',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  )
}

function EchoChamberIcon(props: IconProps) {
  return <ImageIcon {...props} src="/assets/echo-chamber-icon.png" />
}

function AgendaSettingIcon(props: IconProps) {
  return <ImageIcon {...props} src="/assets/agenda-setting-icon.png" />
}

function RedHerringIcon(props: IconProps) {
  return <ImageIcon {...props} src="/assets/red-herring-icon.png" />
}

function FalseAppealIcon(props: IconProps) {
  return <ImageIcon {...props} src="/assets/false-appeal-icon.png" />
}

// ── MAP ──

const ICON_MAP: Record<CoreToolId, React.FC<IconProps>> = {
  'bad-arguments': ShieldIcon,
  'feelings-check': MasksIcon,
  'brain-check': BrainIcon,
  'us-vs-them': SwordsIcon,
  'value-check': NetworkIcon,
  'hidden-story': EyeIcon,
  'fake-check': CrownIcon,
  'source-check': SourceIcon,
  'echo-chamber': EchoChamberIcon,
  'agenda-setting': AgendaSettingIcon,
  'red-herring': RedHerringIcon,
  'false-appeal': FalseAppealIcon,
}

export function getToolIcon(toolId: CoreToolId): React.FC<IconProps> {
  return ICON_MAP[toolId] || ShieldIcon
}

export default ICON_MAP
