import React from 'react';
import PropTypes from 'prop-types';

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

  render() {
    return (
      <div className="filter-group">
        <input
          onChange={this.updateFilter}
          type="text"
          name="name"
          className="filter-search"
          placeholder="Search By Name"
        />
      </div>
    );
  }
}

Filters.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};

export default Filters;
