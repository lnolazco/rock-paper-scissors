import React from 'react';
import PropTypes from 'prop-types';

const Score = ({ userScore, cpuScore }) => (
  <div className="score">
    <div><span className="score__title">Score</span></div>
    <div className="score__content">
      <div>User: {userScore}</div>
      <div>Cpu: {cpuScore}</div>
    </div>
  </div>
);

Score.propTypes = {
  userScore: PropTypes.number.isRequired,
  cpuScore: PropTypes.number.isRequired,
};

export default Score;
