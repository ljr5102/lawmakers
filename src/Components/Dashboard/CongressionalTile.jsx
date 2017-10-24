import React from 'react';

const CongressionalTile = ({ person }) => (
  <div className="ct-group" style={{ border: person.get('party') === 'Democrat' ? '4px solid blue' : '4px solid red' }}>
    <img alt="text" src={`https://theunitedstates.io/images/congress/225x275/${person.get('id')}.jpg`} style={{ margin: 'auto', width: 225, height: 275, background: 'yellow' }} />
    <div style={{ background: 'lightblue' }}>{person.get('name')}</div>
  </div>
);

export default CongressionalTile;
