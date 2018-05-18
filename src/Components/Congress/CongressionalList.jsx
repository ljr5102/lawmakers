import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map } from 'immutable';
import { chunk } from '../../Utils';
import CongressionalTile from './CongressionalTile';

class CongressionalList extends React.Component {
  filteredList() {
    let filtered = this.props.congressmen.get('list');
    if (this.props.filter.get('state')) {
      filtered = filtered.filter(mbr => mbr.get('state') === this.props.filter.get('state'));
    }
    if (this.props.filter.get('district')) {
      filtered = filtered.filter(mbr => mbr.get('chamber') === 'sen' || mbr.get('district') === this.props.filter.get('district'));
    }
    return filtered.filter(member => (
      member.get('name').toLowerCase().includes(this.props.filter.get('name'))
    ));
  }

  chunkMembers() {
    const list = this.filteredList()
    return chunk(list, 4);
  }

  renderChunks() {
    return this.chunkMembers().map((grp, idx) => (
      <div key={idx} className="cl-group">
        {grp.map(tile => (
          <CongressionalTile key={tile.get('id')} person={tile} />
        ))}
      </div>
    ));
  }

  render() {
    return this.renderChunks();
  }
}

CongressionalList.propTypes = {
  congressmen: ImmutablePropTypes.map,
  filter: ImmutablePropTypes.map.isRequired,
};

CongressionalList.defaultProps = {
  congressmen: Map({}),
};

export default CongressionalList;
