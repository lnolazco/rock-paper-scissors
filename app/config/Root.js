import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Game from '../components/Game';

const Root = () => {
  return (
    <Router>
      <Route path="/" component={Game} />
    </Router>
  );
};

export default Root;
