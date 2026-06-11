// 🎮 Game Configuration — Single Source of Truth for game constants

export const GAME_CONFIG = {
  /** Total number of levels */
  MAX_LEVEL: 15,

  /** Points awarded for a correct answer */
  SCORE_PER_CORRECT: 10,

  /** Maximum achievable score */
  MAX_SCORE: 15 * 10,

  /** Number of tools unlocked at level 1 */
  INITIAL_TOOLS: 3,

  /** Tools unlocked per level after level 1 */
  TOOLS_PER_LEVEL: 1,

  /** How long (ms) between clicking an answer and seeing feedback */
  FEEDBACK_DELAY_MS: 300,

  /** How long (ms) before transitioning to next level after clicking "Next Level" */
  NEXT_LEVEL_DELAY_MS: 0,

  /** Rank thresholds — continuous coverage */
  RANKS: [
    { min: 0, max: 40, title: 'Novice', label: 'Information Apprentice' },
    { min: 41, max: 60, title: 'Truth Apprentice', label: 'Pattern Spotter' },
    { min: 61, max: 89, title: 'Critical Thinker', label: 'Truth Seeker' },
    { min: 90, max: 119, title: 'Truth Seeker', label: 'Reality Navigator' },
    { min: 120, max: 150, title: 'Hyperreality Master', label: 'Key Holder' },
  ] as const,

  /** Available languages */
  LANGUAGES: ['en', 'de', 'ua'] as const,
} as const;

export type Language = (typeof GAME_CONFIG.LANGUAGES)[number];