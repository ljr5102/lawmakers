import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLinks = ({ previousId, nextId }) => (
  <div className="header-links">
    <Link to="/dashboard">Go Back To Dashboard</Link>
    <div>
      <div>Toggle Congressmen</div>
      <Link to={`/member/${previousId}`}><span>⇦</span></Link>
      <Link to={`/member/${nextId}`}><span>⇨</span></Link>
    </div>
  </div>
);

export default HeaderLinks;
