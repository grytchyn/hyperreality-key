// 🎮 Game State Machine — useReducer-based game logic

import { useReducer, useCallback } from 'react';
import type { Language } from '../config/game';
import { GAME_CONFIG } from '../config/game';
import { getMissionPosts } from '../data/missions';
import { getMissionPostsDE } from '../data/missions-de';
import { getMissionPostsUA } from '../data/missions-ua';
import { calculatePoints, getLevelStats } from '../engine/scoring';
import type { MissionPost } from '../data/missions';

export interface LevelResult {
  level: number;
  correct: boolean;
  points: number;
}

export interface GameState {
  phase: 'splash' | 'playing' | 'victory';
  currentLevel: number;
  totalScore: number;
  language: Language;
  levelResults: LevelResult[];
  lastAnswer: { correct: boolean; points: number } | null;
}

type GameAction =
  | { type: 'START_GAME' }
  | { type: 'ANSWER_QUESTION'; correct: boolean }
  | { type: 'NEXT_LEVEL' }
  | { type: 'RESTART' }
  | { type: 'JUMP_TO_LEVEL'; level: number }
  | { type: 'SET_LANGUAGE'; language: Language };

const initialState: GameState = {
  phase: 'splash',
  currentLevel: 1,
  totalScore: 0,
  language: 'en',
  levelResults: [],
  lastAnswer: null,
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...initialState,
        phase: 'playing',
        language: state.language,
      };

    case 'ANSWER_QUESTION': {
      const points = calculatePoints(action.correct);
      return {
        ...state,
        totalScore: state.totalScore + points,
        levelResults: [
          ...state.levelResults,
          {
            level: state.currentLevel,
            correct: action.correct,
            points,
          },
        ],
        lastAnswer: { correct: action.correct, points },
      };
    }

    case 'NEXT_LEVEL': {
      if (state.currentLevel >= GAME_CONFIG.MAX_LEVEL) {
        return { ...state, phase: 'victory' };
      }
      return {
        ...state,
        currentLevel: state.currentLevel + 1,
        lastAnswer: null,
      };
    }

    case 'RESTART':
      return { ...initialState, language: state.language };

    case 'JUMP_TO_LEVEL':
      return {
        ...state,
        currentLevel: Math.min(action.level, GAME_CONFIG.MAX_LEVEL),
        lastAnswer: null,
      };

    case 'SET_LANGUAGE':
      return { ...state, language: action.language };

    default:
      return state;
  }
}

function getMissionsForLanguage(language: Language): MissionPost[] {
  switch (language) {
    case 'de':
      return getMissionPostsDE();
    case 'ua':
      return getMissionPostsUA();
    default:
      return getMissionPosts();
  }
}

export function useGame() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const missions = getMissionsForLanguage(state.language);

  const currentPost = missions.find(
    (p: MissionPost) => p.level === state.currentLevel
  );

  const handleStart = useCallback(() => {
    dispatch({ type: 'START_GAME' });
  }, []);

  const handleAnswer = useCallback(
    (correct: boolean) => {
      dispatch({ type: 'ANSWER_QUESTION', correct });
    },
    []
  );

  const handleNextLevel = useCallback(() => {
    dispatch({ type: 'NEXT_LEVEL' });
  }, []);

  const handleRestart = useCallback(() => {
    dispatch({ type: 'RESTART' });
  }, []);

  const handleSetLanguage = useCallback(
    (language: Language) => {
      dispatch({ type: 'SET_LANGUAGE', language });
    },
    []
  );

  return {
    state,
    currentPost,
    handleStart,
    handleAnswer,
    handleNextLevel,
    handleRestart,
    handleSetLanguage,
    getLevelStats: () => getLevelStats(state.levelResults),
  };
}