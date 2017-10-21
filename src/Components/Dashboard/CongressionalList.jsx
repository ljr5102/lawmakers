import React from 'react';
import PropTypes from 'prop-types';

class CongressionalList extends React.Component {
  componentWillMount() {
    this.props.load();
  }

  render() {
    return (
      <div>Hello!</div>
    );
  }
}

CongressionalList.propTypes = {
  load: PropTypes.func.isRequired,
};

export default CongressionalList;
