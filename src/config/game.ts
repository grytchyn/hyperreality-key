// 🎮 Game Configuration — Single Source of Truth for game constants

export const GAME_CONFIG = {
  /** Total number of levels */
  MAX_LEVEL: 12,

  /** Points awarded for a correct answer */
  SCORE_PER_CORRECT: 10,

  /** Maximum achievable score */
  MAX_SCORE: 12 * 10,

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
    { min: 0, max: 30, title: 'Novice', label: 'Information Apprentice' },
    { min: 31, max: 50, title: 'Truth Apprentice', label: 'Pattern Spotter' },
    { min: 51, max: 79, title: 'Critical Thinker', label: 'Truth Seeker' },
    { min: 80, max: 109, title: 'Truth Seeker', label: 'Reality Navigator' },
    { min: 110, max: 120, title: 'Hyperreality Master', label: 'Key Holder' },
  ] as const,

  /** Available languages */
  LANGUAGES: ['en', 'de', 'ua'] as const,
} as const;

export type Language = (typeof GAME_CONFIG.LANGUAGES)[number];