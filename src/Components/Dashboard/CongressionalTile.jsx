import React from 'react';

const CongressionalTile = ({ person }) => (
  <div className="ct-group">
    <img alt="text" src={`https://theunitedstates.io/images/congress/225x275/${person.get('id')}.jpg`} style={{ margin: 'auto', width: 225, height: 275, background: 'yellow' }} />
    <div className="ct-name" style={{ backgroundColor: person.get('party') === 'Democrat' ? '#0560d2' : '#bf0900' }}>{person.get('name')}</div>
  </div>
);

export default CongressionalTile;
