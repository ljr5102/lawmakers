import React from 'react';
import '../../Styles/Header.scss';

const Header = () => (
  <div className="h-group">
    <div className="h-left">
      <div className="h-title">Dashboard</div>
    </div>
    <div className="h-right">
      <div>States</div>
      <div>Party</div>
      <div>Committees</div>
    </div>
  </div>
);

export default Header;
