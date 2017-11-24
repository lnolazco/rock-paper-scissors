import {
  DECREASE_COUNT,
  START_GAME,
  RESET_GAME,
  USER_SELECTION,
  FINISH_ROUND,
} from './types';

import {
  ROCK,
  PAPER,
  SCISSORS,
  gameSelection,
} from '../config/constants';

export function startGame() {
  return {
    type: START_GAME,
  };
}

export function resetGame() {
  return {
    type: RESET_GAME,
  };
}

export function decreaseCount() {
  return {
    type: DECREASE_COUNT,
  };
}

export function setUserSelection(userSelection) {
  return {
    type: USER_SELECTION,
    userSelection,
  };
}
