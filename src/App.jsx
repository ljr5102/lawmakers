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
        <div className="top">
          <div className="welcome-text">Welcome to Find Your Rep!</div>
        </div>
        <div className="middle">
          <div className="app-capitol"></div>
        </div>
        <div className="bottom">
          <div style={{ width: '75%', margin: 'auto', display: 'block', minWidth: 930, textAlign: 'center' }}>
            <div className="app-enter-info">Find Your Rep answers these questions and more. Enter now!</div>
            <button className="app-enter">GO! <span>➡</span></button>
          </div>
        </div>
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
