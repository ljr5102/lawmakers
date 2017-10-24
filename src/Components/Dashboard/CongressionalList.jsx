import React from 'react';
import PropTypes from 'prop-types';
import CongressionalTile from './CongressionalTile';

class CongressionalList extends React.Component {
  componentWillMount() {
    this.props.load();
  }

  render() {
    return this.props.congressmen.get('list').size > 0 ? (
      <div style={{ width: '95%', margin: 'auto' }}>
        <CongressionalTile person={this.props.congressmen.get('list').get(0)} />
        <CongressionalTile person={this.props.congressmen.get('list').get(1)} />
        <CongressionalTile person={this.props.congressmen.get('list').get(2)} />
        <CongressionalTile person={this.props.congressmen.get('list').get(3)} />
      </div>
    ) : null;
  }
}

CongressionalList.propTypes = {
  load: PropTypes.func.isRequired,
};

export default CongressionalList;
