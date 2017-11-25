import React from 'react';
import { shallow } from 'enzyme';

import Screen from '../../../app/components/Screen';

describe('Screen', () => {
  let screen;

  const defaultProps = {
    counter: 3,
    result: 'test',
    userSelection: 'papel',
    cpuSelection: 'tijera',
  };

  beforeAll(() => {
    screen = shallow(<Screen {...defaultProps} />);
  });

  test('should exists', () => {
    expect(screen).toBeTruthy();
  });

  test('should add screen counter and result sections', () => {
    expect(screen.find('.screen__counter').length);
    expect(screen.find('.screen__result').length);
  });

  test('should add cpu selection if a value has been informed', () => {
    expect(screen.find('.screen__cpu').length);
  });

  test('should add user selection if a value has been informed', () => {
    expect(screen.find('.screen__user').length);
  });

  describe('when cpu and user selections has not been informed', () => {
    beforeAll(() => {
      screen = shallow(<Screen {...defaultProps} cpuSelection="" userSelection="" />);
    });

    test('should not add user selection', () => {
      expect(screen.find('.screen__user').length).toBe(0);
    });

    test('should not add user selection', () => {
      expect(screen.find('.screen__user').length).toBe(0);
    });
  })
});
