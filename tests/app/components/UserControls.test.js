import React from 'react';
import { shallow } from 'enzyme';

import UserControls from '../../../app/components/UserControls';

describe('UserControls', () => {
  let controls;

  const defaultProps = {
    disabled: false,
    optionSelected: 'paper',
    onSelect: jest.fn(),
  };

  beforeAll(() => {
    controls = shallow(<UserControls {...defaultProps} />);
  });

  test('should exists', () => {
    expect(controls).toBeTruthy();
  });

  test('should call prop onSelect with rock argument when rock button has been clicked', () => {
    const button = controls.find('.user-controls__rock');
    button.simulate('click');
    expect(defaultProps.onSelect).toHaveBeenCalled();
    expect(defaultProps.onSelect).toHaveBeenCalledWith('rock');
  });

  test('should call prop onSelect with paper argument when paper button has been clicked', () => {
    const button = controls.find('.user-controls__paper');
    button.simulate('click');
    expect(defaultProps.onSelect).toHaveBeenLastCalledWith('paper');
  });

  test('should call prop onSelect with scissors argument when scissors button has been clicked', () => {
    const button = controls.find('.user-controls__scissors');
    button.simulate('click');
    expect(defaultProps.onSelect).toHaveBeenLastCalledWith('scissors');
  });
});
