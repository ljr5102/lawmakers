import React from 'react';
import Header from '../Header/index';
import ListedCongress from './ListedCongress';
import '../../Styles/Dashboard.scss';

const Dashboard = () => (
  <div className="db">
    <div className="db-group">
      <Header />
      <ListedCongress />
    </div>
  </div>
);

export default Dashboard;
