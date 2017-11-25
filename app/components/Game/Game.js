import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Score from '../Score';
import Screen from '../Screen';
import UserControls from '../UserControls';
import { startGame, resetGame, decreaseCount, setUserSelection } from '../../actions/game-actions';

class Game extends PureComponent {
  componentDidUpdate(prevProps) {
    if (prevProps.on && !this.props.on) {
      clearInterval(this.interval);
    }
  }

  interval = null;

  startGame = () => {
    this.props.startGame();
    this.interval = setInterval(() => {
      const { counter, userSelection } = this.props;
      this.props.decreaseCount(counter, userSelection);
    }, 1000);
  };

  resetGame = () => {
    this.props.resetGame();
  }

  render() {
    const {
      on,
      counter,
      result,
      userSelection,
      cpuSelection,
      userScore,
      cpuScore,
      setUserSelection: onSelect,
    } = this.props;

    return (
      <div className="game">
        <div>
          <button onClick={this.startGame}>Start</button>
          <button onClick={this.resetGame}>Reset</button>
        </div>
        <Screen
          counter={counter}
          result={result}
          cpuSelection={cpuSelection}
          userSelection={userSelection}
        />
        <UserControls
          disabled={!on}
          optionSelected={userSelection}
          onSelect={onSelect}
        />
        <Score userScore={userScore} cpuScore={cpuScore} />
      </div>
    );
  }
}

Game.propTypes = {
  counter: PropTypes.number.isRequired,
  on: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
  setUserSelection: PropTypes.func.isRequired,
  userSelection: PropTypes.string,
  cpuSelection: PropTypes.string,
  userScore: PropTypes.number.isRequired,
  cpuScore: PropTypes.number.isRequired,
  result: PropTypes.string,
};

Game.defaultProps = {
  result: '',
  userSelection: '',
  cpuSelection: '',
};

function mapStateToProperties({ game }) {
  return {
    on: game.on,
    counter: game.counter,
    result: game.result,
    userSelection: game.userSelection,
    cpuSelection: game.cpuSelection,
    userScore: game.userScore,
    cpuScore: game.cpuScore,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startGame: () => dispatch(startGame()),
    resetGame: () => dispatch(resetGame()),
    decreaseCount: (counter, userSelection) => dispatch(decreaseCount(counter, userSelection)),
    setUserSelection: selection => dispatch(setUserSelection(selection)),
  };
}

export default connect(mapStateToProperties, mapDispatchToProps)(Game);
