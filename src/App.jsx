import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const Dashboard = () => (
  <div>Dashboard!!</div>
);
//
// window.makeCall = () => {
//   fetch("https://theunitedstates.io/congress-legislators/legislators-current.json", { method: 'GET', 'Content-Type': 'application/json' }).then(resp => {
//     return resp.json()
//   }).then(json => {
//     debugger
//   });
// };

const App = () => (
  <Router>
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);

export default App;
