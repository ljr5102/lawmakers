import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import CongressionalTile from './CongressionalTile';

class CongressionalList extends React.Component {
  componentWillMount() {
    this.props.load();
  }

  chunkMembers() {
    const list = this.props.congressmen.get('list');
    return list.reduce((x, y) => {
      if (x.get(-1).size === 4) {
        return x.push(List([y]));
      }
      const thing = x.get(-1).push(y);
      return x.set(-1, thing);
    }, List([List([])]));
  }

  renderChunks() {
    return this.chunkMembers().map(grp => (
      <div className="cl-group">
        {grp.map(tile => (
          <CongressionalTile person={tile} />
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
};

export default CongressionalList;
