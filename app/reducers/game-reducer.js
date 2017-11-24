import {
  DECREASE_COUNT,
  START_GAME,
  RESET_GAME,
  USER_SELECTION,
  FINISH_ROUND,
} from '../actions/types';

import initialState from './game-initial-state';

export default function app(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return { ...state, on: true };
    case RESET_GAME:
      return initialState;
    case DECREASE_COUNT:
      return { ...state, counter: state.counter - 1 };
    case USER_SELECTION:
      return { ...state, userSelection: action.userSelection };
    case FINISH_ROUND:
      return {
        ...state,
        on: false,
        counter: 3,
        cpuSelection: action.cpuSelection,
        userScore: action.result === 'user' ? state.userScore + 1 : state.userScore,
        cpuScore: action.result === 'cpu' ? state.cpuScore + 1 : state.cpuScore,
        round: state.round + 1,
        result: action.result,
      };
    default:
      return state;
  }
}
