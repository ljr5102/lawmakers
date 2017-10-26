import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './Styles/App.scss';
import { LandingPage, Dashboard, Member } from './Components';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/member/:id" component={Member} />
    </div>
  </Router>
);

export default App;
