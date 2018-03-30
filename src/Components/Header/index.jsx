import React from 'react';
import ActionableTab from './ActionableTab';
import '../../Styles/Header.scss';

const Header = () => (
  <div className="h-group">
    <div className="h-left">
      <ActionableTab label="Dashboard" />
    </div>
    <div className="h-right" />
  </div>
);

export default Header;
