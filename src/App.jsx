import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './Styles/App.scss';
import { LandingPage, Dashboard } from './Components';
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
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);

export default App;
