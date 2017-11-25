import React from 'react';
import PropTypes from 'prop-types';

const Screen = ({ counter, result, userSelection, cpuSelection }) => (
  <div className="screen">
    { cpuSelection ? <div>CPU: {cpuSelection}</div> : null }
    <div className="screen__counter">Counter: {counter}</div>
    <div className="screen__result">Winner: {result}</div>
    { userSelection ? <div>USER: {userSelection}</div> : null }
  </div>
);

Screen.propTypes = {
  counter: PropTypes.number.isRequired,
  result: PropTypes.string,
  userSelection: PropTypes.string,
  cpuSelection: PropTypes.string,
};

Screen.defaultProps = {
  result: '',
  userSelection: '',
  cpuSelection: '',
};

export default Screen;
