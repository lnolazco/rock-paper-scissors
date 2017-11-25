import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ROCK, PAPER, SCISSORS } from '../../config/constants';

class UserControls extends PureComponent {
  setRock = () => {
    this.props.onSelect(ROCK);
  };

  setPaper = () => {
    this.props.onSelect(PAPER);
  };

  setScissors = () => {
    this.props.onSelect(SCISSORS);
  };

  render() {
    const { disabled } = this.props;

    return (
      <div className="user-controls">
        <button disabled={disabled} onClick={this.setRock}>Rock</button>
        <button disabled={disabled} onClick={this.setPaper}>Paper</button>
        <button disabled={disabled} onClick={this.setScissors}>Scissors</button>
      </div>
    );
  }
}

UserControls.propTypes = {
  disabled: PropTypes.bool.isRequired,
  optionSelected: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

UserControls.defaultProps = {
  optionSelected: '',
};

export default UserControls;
