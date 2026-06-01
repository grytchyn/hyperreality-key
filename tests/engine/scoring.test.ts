// 🧪 Scoring Engine Tests
import { describe, it, expect } from 'vitest';
import { calculateFinalScore, calculatePoints, getLevelStats } from '../../src/engine/scoring';

describe('calculateFinalScore', () => {
  it('returns correct stats for max score', () => {
    const result = calculateFinalScore(120);
    expect(result.score).toBe(120);
    expect(result.maxScore).toBe(120);
    expect(result.percentage).toBe(100);
    expect(result.rank).toBe('Hyperreality Master');
  });

  it('returns correct stats for zero score', () => {
    const result = calculateFinalScore(0);
    expect(result.score).toBe(0);
    expect(result.percentage).toBe(0);
    expect(result.rank).toBe('Novice');
  });

  it('calculates percentage correctly', () => {
    const result = calculateFinalScore(60);
    expect(result.percentage).toBe(50);
  });

  it('assigns correct rank for each tier', () => {
    expect(calculateFinalScore(20).rank).toBe('Novice');
    expect(calculateFinalScore(50).rank).toBe('Critical Thinker');
    expect(calculateFinalScore(90).rank).toBe('Truth Seeker');
    expect(calculateFinalScore(110).rank).toBe('Hyperreality Master');
  });
});

describe('calculatePoints', () => {
  it('gives 10 for correct', () => {
    expect(calculatePoints(true)).toBe(10);
  });

  it('gives 0 for incorrect', () => {
    expect(calculatePoints(false)).toBe(0);
  });
});

describe('getLevelStats', () => {
  it('counts correct and wrong', () => {
    const results = [
      { level: 1, correct: true },
      { level: 2, correct: false },
      { level: 3, correct: true },
    ];
    const stats = getLevelStats(results);
    expect(stats.total).toBe(3);
    expect(stats.correct).toBe(2);
    expect(stats.wrong).toBe(1);
  });

  it('calculates streak from the end', () => {
    const results = [
      { level: 1, correct: false },
      { level: 2, correct: true },
      { level: 3, correct: true },
    ];
    const stats = getLevelStats(results);
    expect(stats.streak).toBe(2);
  });

  it('streak is 0 when last answer is wrong', () => {
    const results = [
      { level: 1, correct: true },
      { level: 2, correct: false },
    ];
    const stats = getLevelStats(results);
    expect(stats.streak).toBe(0);
  });
});