import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';

const CongressionalTile = ({ person }) => {
  const klass = `ct-name ${person.get('party').toLowerCase()}`;
  return (
    <Link to={`/member/${person.get('id')}`}>
      <div className="ct-group">
        <img alt="text" src={`https://theunitedstates.io/images/congress/225x275/${person.get('id')}.jpg`} />
        <div className={klass}>{person.get('name')}</div>
      </div>
    </Link>
  );
};

CongressionalTile.propTypes = {
  person: ImmutablePropTypes.map.isRequired,
};

export default CongressionalTile;
