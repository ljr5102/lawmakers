import React from 'react';
import { Map } from 'immutable';

const chamber = Map({
  rep: 'House of Representatives',
  sen: 'Senate',
});

const Biographical = ({ member }) => (
  <div className="mem-mid">
    <div className="mem-mid-left">
      <div>
        <div className="header">
          Biographical Data:
        </div>
        <div className="data">
          <div>
            DOB: {new Date(member.get('birthday')).toLocaleDateString()}
          </div>
          <div>
            Religion: {member.get('religion') || 'N/A'}
          </div>
        </div>
      </div>
      <div>
        <div className="header">
          Congressional Data:
        </div>
        <div className="data">
          <div>
            Chamber: {chamber.get(member.get('chamber'))}
          </div>
          <div>
            State: {member.get('state')}
          </div>
          <div>
            District: {member.get('district')}
          </div>
          <div>
            Party: {member.get('party')}
          </div>
        </div>
      </div>
    </div>
    <div className="mem-mid-right">
      <img alt="text" src={`https://theunitedstates.io/images/congress/450x550/${member.get('id')}.jpg`} />
    </div>
  </div>
);

export default Biographical;
