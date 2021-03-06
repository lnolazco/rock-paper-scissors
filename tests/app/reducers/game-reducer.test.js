import gameReducer from '../../../app/reducers/game-reducer';
import initialState from '../../../app/reducers/game-initial-state';
import {
  DECREASE_COUNT,
  START_GAME,
  RESET_GAME,
  USER_SELECTION,
  FINISH_ROUND,
} from '../../../app/actions/types';

describe('Game reducer', () => {
  test('should return the initial state', () => {
    expect(gameReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle START GAME', () => {
    const state = gameReducer(undefined, { type: START_GAME });
    expect(state.on).toBe(true);
    expect(state.userSelection).toBe('');
    expect(state.cpuSelection).toBe('');
    expect(state.result).toBe('');
  });

  test('should handle RESET GAME', () => {
    expect(gameReducer(undefined, { type: RESET_GAME })).toEqual(initialState);
  });

  test('should handle DECREASE COUNT', () => {
    const state = gameReducer(undefined, { type: DECREASE_COUNT });
    expect(state.counter).toBe(initialState.counter - 1);
  });

  test('should handle FINISH ROUND', () => {
    const action = {
      type: FINISH_ROUND,
      cpuSelection: 'test',
      result: 'user',
    };

    const state = gameReducer(undefined, action);

    expect(state.on).toBe(false);
    expect(state.counter).toBe(3);
    expect(state.cpuSelection).toBe(action.cpuSelection);
    expect(state.userScore).toBe(initialState.userScore + 1);
    expect(state.cpuScore).toBe(initialState.cpuScore);
    expect(state.round).toBe(initialState.round + 1);
    expect(state.result).toBe(action.result);
  });

  test('should handle USER SELECTION', () => {
    const userSelection = 'test';
    const state = gameReducer(undefined, { type: USER_SELECTION, userSelection });
    expect(state.userSelection).toEqual(userSelection);
  });
});
