import React from 'react';
import { shallow } from 'enzyme';

import Game from '../../../app/components/Game';

describe('Game', () => {
  let game;

  const defaultProps = {
    on: false,
    counter: 3,
    result: '',
    userSelection: '',
    cpuSelection: '',
    userScore: 0,
    cpuScore: 0,
    startGame: jest.fn(),
    resetGame: jest.fn(),
    decreaseCount: jest.fn(),
    finishRound: jest.fn(),
    setUserSelection: jest.fn(),
  };

  beforeEach(() => {
    game = shallow(<Game.WrappedComponent {...defaultProps} />);
  });

  test('should exists', () => {
    expect(game).toBeTruthy();
  });

  test('should call start action when click on start button', () => {
    const button = game.find('.game__controls__button').at(0);

    button.simulate('click');

    expect(defaultProps.startGame).toHaveBeenCalled();
  });

  test('should call reset action when click on reset button', () => {
    const button = game.find('.game__controls__button').at(1);

    button.simulate('click');

    expect(defaultProps.resetGame).toHaveBeenCalled();
  });

  describe('getCpuSelection method', () => {
    test('should generate a random number between 1 and 3', () => {
      expect(['rock', 'paper', 'scissors']).toContain(Game.getCpuSelection());
    });
  });

  describe('getResult method', () => {
    test('should return draw if user and cpu has the same value', () => {
      expect(Game.getResult('paper', 'paper')).toBe('draw');
    });

    test('should user win if user has rock and cpu siccors', () => {
      expect(Game.getResult('rock', 'scissors')).toBe('user');
    });

    test('should user win if user has scissors and cpu paper', () => {
      expect(Game.getResult('scissors', 'paper')).toBe('user');
    });

    test('should user lose if user has scissors and cpu rock', () => {
      expect(Game.getResult('scissors', 'rock')).toBe('cpu');
    });

    test('should user lose if user has rock and cpu paper', () => {
      expect(Game.getResult('rock', 'paper')).toBe('cpu');
    });
  });
});
