import React from 'react';
import PropTypes from 'prop-types';

const Score = ({ userScore, cpuScore }) => (
  <div className="score">
    <div>Score</div>
    <div>User: {userScore}</div>
    <div>Cpu: {cpuScore}</div>
  </div>
);

Score.propTypes = {
  userScore: PropTypes.number.isRequired,
  cpuScore: PropTypes.number.isRequired,
};

export default Score;
