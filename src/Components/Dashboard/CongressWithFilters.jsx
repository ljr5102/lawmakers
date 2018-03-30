import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import ListedCongress from '../Congress/ListedCongress';
import Spinner from '../Utility/Spinner';
import Errors from '../Errors';

class CongressWithFilters extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  componentWillMount() {
    this.props.load().then(() => this.setState({ loading: false }));
  }

  render() {
    return this.state.loading ? (
      <Spinner />
    ) : (
      <div className="congress-with-filter-group">
        <Filters />
        <Errors />
        <ListedCongress />
      </div>
    );
  }
}

CongressWithFilters.propTypes = {
  load: PropTypes.func.isRequired,
};

export default CongressWithFilters;
