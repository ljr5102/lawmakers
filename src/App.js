import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Route exact={true} path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

const Dashboard = () => (
  <div>Dashboard!!</div>
)

export default App;
