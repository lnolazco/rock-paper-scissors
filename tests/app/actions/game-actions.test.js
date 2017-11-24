import { startGame, resetGame, setUserSelection } from '../../../app/actions/game-actions';
import {
  DECREASE_COUNT,
  START_GAME,
  RESET_GAME,
  USER_SELECTION,
  CPU_SELECTION,
  FINISH_ROUND,
} from '../../../app/actions/types';

describe('Game actions', () => {
  test('should create an action to start the game', () => {
    const expectedAction = {
      type: START_GAME,
    };
    expect(startGame()).toEqual(expectedAction);
  });

  test('should create an action to reset the game', () => {
    const expectedAction = {
      type: RESET_GAME,
    };
    expect(resetGame()).toEqual(expectedAction);
  });

  test('should create an action to set user selection', () => {
    const userSelection = 'test';
    const expectedAction = {
      type: USER_SELECTION,
      userSelection,
    };
    expect(setUserSelection(userSelection)).toEqual(expectedAction);
  });
});
