import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';
import CongressionalImage from './CongressionalImage';

const CongressionalTile = ({ person }) => {
  const klass = `ct-name ${person.get('party').toLowerCase()}`;
  return (
    <Link to={`/member/${person.get('id')}`}>
      <div className="ct-group">
        <CongressionalImage memberId={person.get('id')} chamber={person.get('chamber')} size="225x275" />
        <div className={klass}>{person.get('name')}</div>
      </div>
    </Link>
  );
};

CongressionalTile.propTypes = {
  person: ImmutablePropTypes.map.isRequired,
};

export default CongressionalTile;
