import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './Styles/App.scss';
import { Dashboard, Member } from './Components';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/member/:id" component={Member} />
        <Redirect to="/dashboard" />
      </Switch>
    </div>
  </Router>
);

export default App;
