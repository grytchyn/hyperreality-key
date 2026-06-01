// 🎨 Color Bible — Single Source of Truth for ALL colors
// DO NOT hardcode hex values in components. Import from here or use CSS variables.

export const COLORS = {
  // Backgrounds
  bg: '#0a0a0f',
  card: '#13131a',
  surface: '#1a1a24',
  border: '#2a2a3a',

  // Text
  text: {
    primary: '#e5e7eb',
    secondary: '#9ca3af',
    muted: '#6b7280',
  },

  // Neon Accents
  neon: {
    purple: '#8b5cf6',
    pink: '#ec4899',
    cyan: '#06b6d4',
    green: '#10b981',
    red: '#ef4444',
    amber: '#f59e0b',
  },

  // Semantic
  success: '#22c55e',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6',

  // Tool-specific colors (12 tools → 12 colors)
  tools: {
    'bad-arguments': '#ef4444',
    'feelings-check': '#f59e0b',
    'brain-check': '#22c55e',
    'us-vs-them': '#3b82f6',
    'value-check': '#a855f7',
    'hidden-story': '#06b6d4',
    'fake-check': '#f97316',
    'source-check': '#14b8a6',
    'echo-chamber': '#ec4899',
    'red-herring': '#eab308',
    'agenda-setting': '#6366f1',
    'false-appeal': '#a855f7',
  } as const satisfies Record<string, string>,

  // Spectrum for scientist avatars
  spectrum: [
    '#ef4444', '#f59e0b', '#22c55e', '#3b82f6',
    '#a855f7', '#06b6d4', '#f97316', '#14b8a6',
    '#ec4899', '#6366f1',
  ],
} as const;

export type ColorKey = keyof typeof COLORS.tools;