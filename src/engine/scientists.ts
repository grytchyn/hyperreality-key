// 🧪 Scientist Registry — Single Source of Truth for all scientist data
// Previously duplicated in SplashScreen.tsx and ChatUi.tsx

export interface ScientistData {
  name: string;
  field: string;
  avatar: string;
  color: string;
}

export const SCIENTIST_AVATARS: Record<string, ScientistData> = {
  schopenhauer: {
    name: 'Arthur Schopenhauer',
    field: 'Philosophy',
    avatar: '/assets/scientists/schopenhauer.png',
    color: '#ef4444',
  },
  cialdini: {
    name: 'Robert Cialdini',
    field: 'Psychology',
    avatar: '/assets/scientists/cialdini.png',
    color: '#f59e0b',
  },
  kahneman: {
    name: 'Daniel Kahneman',
    field: 'Behavioral Economics',
    avatar: '/assets/scientists/kahneman.png',
    color: '#22c55e',
  },
  tajfel: {
    name: 'Henri Tajfel',
    field: 'Social Psychology',
    avatar: '/assets/scientists/tajfel.png',
    color: '#3b82f6',
  },
  haidt: {
    name: 'Jonathan Haidt',
    field: 'Moral Psychology',
    avatar: '/assets/scientists/haidt.png',
    color: '#a855f7',
  },
  barthes: {
    name: 'Roland Barthes',
    field: 'Semiotics',
    avatar: '/assets/scientists/barthes.png',
    color: '#06b6d4',
  },
  baudrillard: {
    name: 'Jean Baudrillard',
    field: 'Philosophy',
    avatar: '/assets/scientists/baudrillard.png',
    color: '#f97316',
  },
  foucault: {
    name: 'Michel Foucault',
    field: 'Philosophy',
    avatar: '/assets/scientists/foucault.png',
    color: '#14b8a6',
  },
  sunstein: {
    name: 'Cass Sunstein',
    field: 'Law & Policy',
    avatar: '/assets/scientists/sunstein.png',
    color: '#ec4899',
  },
  mccombs_shaw: {
    name: 'McCombs & Shaw',
    field: 'Media Studies',
    avatar: '/assets/scientists/mccombs-shaw.png',
    color: '#6366f1',
  },
};

export function getScientistAvatar(key: string): ScientistData {
  return SCIENTIST_AVATARS[key] || SCIENTIST_AVATARS.schopenhauer;
}

export function getScientistField(key: string): string {
  const scientist = SCIENTIST_AVATARS[key];
  return scientist ? scientist.field : 'Critical Thinking';
}

export const SPECTRUM_COLORS = [
  '#ef4444', '#f59e0b', '#22c55e', '#3b82f6',
  '#a855f7', '#06b6d4', '#f97316', '#14b8a6',
  '#ec4899', '#6366f1',
];