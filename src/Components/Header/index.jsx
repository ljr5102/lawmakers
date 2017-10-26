import React from 'react';
import ActionableTab from './ActionableTab';
import '../../Styles/Header.scss';

const Header = () => (
  <div className="h-group">
    <div className="h-left">
      <ActionableTab label="Dashboard" />
    </div>
    <div className="h-right">
      <ActionableTab label="States" />
      <ActionableTab label="Party" />
      <ActionableTab label="Committees" />
    </div>
  </div>
);

export default Header;
