import React from 'react';
import { Link } from 'react-router-dom';

const Enter = () => (
  <div className="bottom">
    <div className="lp-enter-group">
      <div className="lp-enter-info">
        Find Your Rep answers these questions and more. Enter now!
      </div>
      <Link to="/dashboard">
        <button className="lp-enter">GO! <span>➡</span></button>
      </Link>
    </div>
  </div>
);

export default Enter;
