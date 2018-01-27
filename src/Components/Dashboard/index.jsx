import React from 'react';
import Header from '../Header/index';
import ListedCongressWithFilters from './ListedCongressWithFilters.js';
import '../../Styles/Dashboard.scss';

const Dashboard = () => (
  <div className="db">
    <div className="db-group">
      <Header />
      <ListedCongressWithFilters />
    </div>
  </div>
);

export default Dashboard;
