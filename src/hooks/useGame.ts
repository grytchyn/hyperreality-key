// 🎮 Game State Machine — EN-only
import { useReducer, useCallback } from 'react';
import { GAME_CONFIG } from '../config/game';
import { getMissionConfig } from '../data/missions';
import { calculatePoints } from '../engine/scoring';

export interface LevelResult {
  level: number;
  correct: boolean;
  points: number;
}

export interface GameState {
  phase: 'splash' | 'playing' | 'victory';
  currentLevel: number;
  totalScore: number;
  levelResults: LevelResult[];
  lastAnswer: { correct: boolean; points: number } | null;
}

type GameAction =
  | { type: 'START_GAME' }
  | { type: 'ANSWER_QUESTION'; correct: boolean }
  | { type: 'NEXT_LEVEL' }
  | { type: 'RESTART' };

const initialState: GameState = {
  phase: 'splash',
  currentLevel: 1,
  totalScore: 0,
  levelResults: [],
  lastAnswer: null,
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME':
      return { ...initialState, phase: 'playing' };
    case 'ANSWER_QUESTION': {
      const points = calculatePoints(action.correct);
      return {
        ...state,
        totalScore: state.totalScore + points,
        levelResults: [...state.levelResults, { level: state.currentLevel, correct: action.correct, points }],
        lastAnswer: { correct: action.correct, points },
      };
    }
    case 'NEXT_LEVEL': {
      if (state.currentLevel >= GAME_CONFIG.MAX_LEVEL) return { ...state, phase: 'victory' };
      return { ...state, currentLevel: state.currentLevel + 1, lastAnswer: null };
    }
    case 'RESTART':
      return { ...initialState };
    default:
      return state;
  }
}

export function useGame() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const currentPost = getMissionConfig(state.currentLevel);

  const handleStart = useCallback(() => dispatch({ type: 'START_GAME' }), []);
  const handleAnswer = useCallback((correct: boolean) => dispatch({ type: 'ANSWER_QUESTION', correct }), []);
  const handleNextLevel = useCallback(() => dispatch({ type: 'NEXT_LEVEL' }), []);
  const handleRestart = useCallback(() => dispatch({ type: 'RESTART' }), []);

  return { state, currentPost, handleStart, handleAnswer, handleNextLevel, handleRestart };
}
