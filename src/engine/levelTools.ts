// 🔧 Level Tools — Single Source of Truth for tool progression
import type { CoreToolId } from '../types';

export interface LevelConfig {
  color: string;
  scientistName: string;
  scientistKey: string;
  theme: string;
  name: string; // Display name (same as theme, used by GameScreen)
}

/**
 * Which tools are unlocked at each level.
 * Level 1: 3 tools, then +1 per level.
 */
export const LEVEL_TOOLS: Record<number, CoreToolId[]> = {
  1: ['bad-arguments', 'feelings-check', 'brain-check'],
  2: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them'],
  3: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check'],
  4: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story'],
  5: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check'],
  6: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check', 'fake-check'],
  7: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check', 'fake-check', 'echo-chamber'],
  8: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check', 'fake-check', 'echo-chamber', 'agenda-setting'],
  9: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check', 'fake-check', 'echo-chamber', 'agenda-setting', 'red-herring'],
  10: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check', 'fake-check', 'echo-chamber', 'agenda-setting', 'red-herring', 'false-appeal'],
  11: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check', 'fake-check', 'echo-chamber', 'agenda-setting', 'red-herring', 'false-appeal'],
  12: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check', 'fake-check', 'echo-chamber', 'agenda-setting', 'red-herring', 'false-appeal'],
};

/**
 * Config for each level: color, scientist, theme
 */
export const LEVEL_CONFIG: Record<number, LevelConfig> = {
  1: { color: '#ef4444', scientistName: 'Arthur Schopenhauer', scientistKey: 'schopenhauer', theme: 'Bad Arguments', name: 'Bad Arguments' },
  2: { color: '#f59e0b', scientistName: 'Robert Cialdini', scientistKey: 'cialdini', theme: 'Feelings Check', name: 'Feelings' },
  3: { color: '#22c55e', scientistName: 'Daniel Kahneman', scientistKey: 'kahneman', theme: 'Brain Check', name: 'Brain Check' },
  4: { color: '#d946ef', scientistName: 'Henri Tajfel', scientistKey: 'tajfel', theme: 'Us vs Them', name: 'Us vs Them' },
  5: { color: '#f97316', scientistName: 'Jonathan Haidt', scientistKey: 'haidt', theme: 'Moral Buttons', name: 'Moral Buttons' },
  6: { color: '#06b6d4', scientistName: 'Roland Barthes', scientistKey: 'barthes', theme: 'Hidden Myth', name: 'Hidden Myth' },
  7: { color: '#a78bfa', scientistName: 'Jean Baudrillard', scientistKey: 'baudrillard', theme: 'Fake Check', name: 'Fake Check' },
  8: { color: '#14b8a6', scientistName: 'Michel Foucault', scientistKey: 'foucault', theme: 'Source Check', name: 'Source Check' },
  9: { color: '#ec4899', scientistName: 'Cass Sunstein', scientistKey: 'sunstein', theme: 'Echo Chamber', name: 'Echo Chamber' },
  10: { color: '#8b5cf6', scientistName: 'Arthur Schopenhauer', scientistKey: 'schopenhauer', theme: 'Red Herring', name: 'Red Herring' },
  11: { color: '#0ea5e9', scientistName: 'McCombs & Shaw', scientistKey: 'mccombs_shaw', theme: 'Agenda Setting', name: 'Agenda Setting' },
  12: { color: '#e11d48', scientistName: 'Robert Cialdini', scientistKey: 'cialdini', theme: 'Value Check', name: 'Value Check' },
};

export function getToolsForLevel(level: number): CoreToolId[] {
  return LEVEL_TOOLS[level] || LEVEL_TOOLS[1];
}

export function getLevelConfig(level: number): LevelConfig {
  return LEVEL_CONFIG[level] || LEVEL_CONFIG[1];
}

export function getPrimaryToolForLevel(level: number): CoreToolId | null {
  if (level === 1) return 'bad-arguments';
  const prevTools = getToolsForLevel(level - 1);
  const currentTools = getToolsForLevel(level);
  const newTool = currentTools.find((t) => !prevTools.includes(t));
  return newTool || null;
}