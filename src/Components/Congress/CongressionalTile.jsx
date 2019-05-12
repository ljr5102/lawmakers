import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';
import CongressionalImage from './CongressionalImage';

const CongressionalTile = ({ person }) => {
  const klass = `ct-name ${person.get('party').toLowerCase()}`;
  // Fallback photo source? Does not include all members and some photos are not right aspect ratio.
  // <img alt="text" src={`http://bioguide.congress.gov/bioguide/photo/A/${person.get('id')}.jpg`} />
  return (
    <Link to={`/member/${person.get('id')}`}>
      <div className="ct-group">
        <CongressionalImage memberId={person.get('id')} />
        <div className={klass}>{person.get('name')}</div>
      </div>
    </Link>
  );
};

CongressionalTile.propTypes = {
  person: ImmutablePropTypes.map.isRequired,
};

export default CongressionalTile;
