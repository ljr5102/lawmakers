import React from 'react';
import Title from './Title';
import Capitol from './Capitol';
import Enter from './Enter';
import '../../Styles/LandingPage.scss';

const LandingPage = () => (
  <div>
    <div className="lp-page">
      <div className="lp-rows">
        <Title />
        <Capitol />
        <Enter />
      </div>
    </div>
  </div>
);

export default LandingPage;
