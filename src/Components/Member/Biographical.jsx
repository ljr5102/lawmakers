import React from 'react';
import { Map } from 'immutable';

const chamber = Map({
  rep: 'House of Representatives',
  sen: 'Senate',
});

const Biographical = ({ member }) => (
  <div className="mem-mid">
    <div className="mem-mid-left">
      <div className="california blue">
      </div>
    </div>
    <div className="mem-mid-right">
      <img alt="text" src={`https://theunitedstates.io/images/congress/450x550/${member.get('id')}.jpg`} />
    </div>
  </div>
);

export default Biographical;
