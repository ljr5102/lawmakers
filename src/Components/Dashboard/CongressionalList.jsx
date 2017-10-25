import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map } from 'immutable';
import { chunk } from '../../Utils';
import CongressionalTile from './CongressionalTile';

class CongressionalList extends React.Component {
  componentWillMount() {
    this.props.load();
  }

  chunkMembers() {
    const list = this.props.congressmen.get('list');
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
    return this.props.congressmen.get('list').size > 0 ? (
      this.renderChunks()
    ) : null;
  }
}

CongressionalList.propTypes = {
  load: PropTypes.func.isRequired,
  congressmen: ImmutablePropTypes.map,
};

CongressionalList.defaultProps = {
  congressmen: Map({}),
};

export default CongressionalList;
