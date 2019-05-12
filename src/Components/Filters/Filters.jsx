import React from 'react';
import PropTypes from 'prop-types';
import AddressAutoComplete from './AddressAutoComplete';

class Filters extends React.Component {
  constructor() {
    super();

    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(e) {
    this.props.updateFilter({
      [e.target.name]: e.target.value,
    });
  }

  componentWillUnmount() {
    this.props.clearFilters()
  }

  render() {
    return (
      <div className="filter-group">
        <input
          onChange={this.updateFilter}
          type="text"
          name="name"
          id="name-search"
          className="filter-search"
          placeholder="Search By Name"
        />
        <AddressAutoComplete fetchAddressInfo={this.props.fetchAddressInfo} clearAddressFilter={this.props.clearAddressFilter} />
      </div>
    );
  }
}

Filters.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};

export default Filters;
