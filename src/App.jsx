import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './Styles/App.scss';

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

const LandingPage = () => (
  <div>
    <div className="app-page">
      <div className="app-rows">
        <div className="top"></div>
        <div className="middle">
          <button className="app-enter">Enter Site Here!</button>
          </div>
        <div className="bottom"></div>
      </div>
    </div>
  </div>
);

const App = () => (
  <Router>
    <div>
      <LandingPage />
    </div>
  </Router>
);
// <Link to="/dashboard">Dashboard</Link>
// <Route exact path="/dashboard" component={Dashboard} />

export default App;
