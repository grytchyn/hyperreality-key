// 🏆 Scoring Engine

import { GAME_CONFIG } from '../config/game';

export interface ScoreResult {
  score: number;
  maxScore: number;
  percentage: number;
  rank: string;
  rankLabel: string;
}

/**
 * Calculate the final score and rank
 */
export function calculateFinalScore(score: number, maxScore?: number): ScoreResult {
  const actualMaxScore = maxScore || GAME_CONFIG.MAX_SCORE;
  const percentage = Math.round((score / actualMaxScore) * 100);
  const rank = GAME_CONFIG.RANKS.find((r) => score >= r.min && score <= r.max) || GAME_CONFIG.RANKS[0];

  return {
    score,
    maxScore: actualMaxScore,
    percentage,
    rank: rank.title,
    rankLabel: rank.label,
  };
}

/**
 * Calculate points for an answer
 */
export function calculatePoints(correct: boolean): number {
  return correct ? GAME_CONFIG.SCORE_PER_CORRECT : 0;
}

/**
 * Get level-based stats
 */
export function getLevelStats(
  levelResults: Array<{ level: number; correct: boolean }>
) {
  return {
    total: levelResults.length,
    correct: levelResults.filter((r) => r.correct).length,
    wrong: levelResults.filter((r) => !r.correct).length,
    streak: calculateStreak(levelResults),
  };
}

function calculateStreak(results: Array<{ correct: boolean }>): number {
  let streak = 0;
  // Count from the end (most recent levels)
  for (let i = results.length - 1; i >= 0; i--) {
    if (results[i].correct) streak++;
    else break;
  }
  return streak;
}