import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const Dashboard = () => (
  <div>Dashboard!!</div>
);

const App = () => (
  <Router>
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);

export default App;
