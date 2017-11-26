import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'antd';

import Score from '../Score';
import Screen from '../Screen';
import UserControls from '../UserControls';
import { startGame, resetGame, decreaseCount, setUserSelection, finishRound } from '../../actions/game-actions';
import {
  ROCK,
  PAPER,
  SCISSORS,
} from '../../config/constants';

class Game extends PureComponent {
  static getCpuSelection() {
    const value = Math.ceil(Math.random() * 3);
    switch (value) {
      case 1: return ROCK;
      case 2: return PAPER;
      case 3: return SCISSORS;
      default: return '';
    }
  }

  static getResult(userSelection, cpuSelection) {
    let result = 'draw';

    if (userSelection !== cpuSelection) {
      if (userSelection === PAPER) {
        if (cpuSelection === ROCK) {
          result = 'user';
        } else {
          result = 'cpu';
        }
      }
      if (userSelection === ROCK) {
        if (cpuSelection === SCISSORS) {
          result = 'user';
        } else {
          result = 'cpu';
        }
      }
      if (userSelection === SCISSORS) {
        if (cpuSelection === PAPER) {
          result = 'user';
        } else {
          result = 'cpu';
        }
      }
    }
    return result;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.on && !this.props.on) {
      clearInterval(this.interval);
    }
  }

  startGame = () => {
    this.props.startGame();
    this.interval = setInterval(() => {
      const { counter, userSelection } = this.props;
      if (counter) {
        this.props.decreaseCount();
      } else {
        const cpuSelection = Game.getCpuSelection();
        const result = Game.getResult(userSelection, cpuSelection);

        this.props.finishRound(cpuSelection, result);
      }
    }, 1000);
  };

  resetGame = () => {
    this.props.resetGame();
  }

  interval = null;

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
        <img
          src="https://media1.s-nbcnews.com/j/newscms/2016_11/1016196/rock-paper-scissors-today-tease-160317_de7dcaf2904059d3334a924d83d3d836.today-inline-large.jpg"
          alt=""
          className="game__hero"
        />
        <Card
          title="Rock Paper Scissors game!"
          style={{ width: 310, margin: 'auto' }}
        >
          <Score userScore={userScore} cpuScore={cpuScore} />
          <Screen
            on={on}
            counter={counter}
            result={result}
            cpuSelection={cpuSelection}
            userSelection={userSelection}
          />
          <UserControls
            disabled={!on}
            onSelect={onSelect}
          />
        </Card>
        <div className="game__controls">
          <Button type="danger" className="game__controls__button" onClick={this.startGame}>
            <Icon type="play-circle" />Start
          </Button>
          <Button className="game__controls__button" onClick={this.resetGame}>
            Reset<Icon type="sync" />
          </Button>
        </div>
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
  finishRound: PropTypes.func.isRequired,
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
    decreaseCount: () => dispatch(decreaseCount()),
    finishRound: (cpuSelection, result) => dispatch(finishRound(cpuSelection, result)),
    setUserSelection: selection => dispatch(setUserSelection(selection)),
  };
}

export default connect(mapStateToProperties, mapDispatchToProps)(Game);
