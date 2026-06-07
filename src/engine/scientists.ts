// 🧪 Scientist Registry — Single Source of Truth for all scientist data
// Previously duplicated in SplashScreen.tsx and ChatUi.tsx

export interface ScientistData {
  name: string;
  field: string;
  avatar: string;
  color: string;
  wiki: string;
}

export const SCIENTIST_AVATARS: Record<string, ScientistData> = {
  schopenhauer: {
    name: 'Arthur Schopenhauer',
    field: 'Philosophy',
    avatar: '/assets/scientists/webp/schopenhauer.webp',
    color: '#ef4444',
    wiki: 'https://en.wikipedia.org/wiki/Arthur_Schopenhauer',
  },
  cialdini: {
    name: 'Robert Cialdini',
    field: 'Psychology',
    avatar: '/assets/scientists/webp/cialdini.webp',
    color: '#f59e0b',
    wiki: 'https://en.wikipedia.org/wiki/Robert_Cialdini',
  },
  kahneman: {
    name: 'Daniel Kahneman',
    field: 'Behavioral Economics',
    avatar: '/assets/scientists/webp/kahneman.webp',
    color: '#22c55e',
    wiki: 'https://en.wikipedia.org/wiki/Daniel_Kahneman',
  },
  tajfel: {
    name: 'Henri Tajfel',
    field: 'Social Psychology',
    avatar: '/assets/scientists/webp/tajfel.webp',
    color: '#3b82f6',
    wiki: 'https://en.wikipedia.org/wiki/Henri_Tajfel',
  },
  haidt: {
    name: 'Jonathan Haidt',
    field: 'Moral Psychology',
    avatar: '/assets/scientists/webp/haidt.webp',
    color: '#a855f7',
    wiki: 'https://en.wikipedia.org/wiki/Jonathan_Haidt',
  },
  barthes: {
    name: 'Roland Barthes',
    field: 'Semiotics',
    avatar: '/assets/scientists/webp/barthes.webp',
    color: '#06b6d4',
    wiki: 'https://en.wikipedia.org/wiki/Roland_Barthes',
  },
  baudrillard: {
    name: 'Jean Baudrillard',
    field: 'Philosophy',
    avatar: '/assets/scientists/webp/baudrillard.webp',
    color: '#f97316',
    wiki: 'https://en.wikipedia.org/wiki/Jean_Baudrillard',
  },
  foucault: {
    name: 'Michel Foucault',
    field: 'Philosophy',
    avatar: '/assets/scientists/webp/foucault.webp',
    color: '#14b8a6',
    wiki: 'https://en.wikipedia.org/wiki/Michel_Foucault',
  },
  sunstein: {
    name: 'Cass Sunstein',
    field: 'Law & Policy',
    avatar: '/assets/scientists/webp/sunstein.webp',
    color: '#ec4899',
    wiki: 'https://en.wikipedia.org/wiki/Cass_Sunstein',
  },
  mccombs_shaw: {
    name: 'McCombs & Shaw',
    field: 'Media Studies',
    avatar: '/assets/scientists/webp/mccombs-shaw.webp',
    color: '#6366f1',
    wiki: 'https://en.wikipedia.org/wiki/Agenda-setting_theory',
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