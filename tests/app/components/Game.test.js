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
    setUserSelection: jest.fn(),
  };

  beforeEach(() => {
    game = shallow(<Game.WrappedComponent {...defaultProps} />);
  });

  test('should exists', () => {
    expect(game).toBeTruthy();
  });

  test('should call start action when click on start button', () => {
    const button = game.find('button').at(0);

    button.simulate('click');

    expect(defaultProps.startGame).toHaveBeenCalled();
  });

  test('should call reset action when click on reset button', () => {
    const button = game.find('button').at(1);

    button.simulate('click');

    expect(defaultProps.resetGame).toHaveBeenCalled();
  });
});
