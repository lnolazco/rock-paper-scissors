import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

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
        <Button.Group size="large">
          <Button
            className="user-controls__rock"
            disabled={disabled}
            onClick={this.setRock}
          >
            Rock
          </Button>
          <Button
            className="user-controls__paper"
            disabled={disabled}
            onClick={this.setPaper}
          >
            Paper
          </Button>
          <Button
            className="user-controls__scissors"
            disabled={disabled}
            onClick={this.setScissors}
          >
            Scissors
          </Button>
        </Button.Group>
      </div>
    );
  }
}

UserControls.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default UserControls;
