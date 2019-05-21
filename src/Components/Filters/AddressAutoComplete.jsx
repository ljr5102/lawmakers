import React from 'react';
import PropTypes from 'prop-types';

class AddressAutoComplete extends React.Component {
  constructor() {
    super();
    this.state = { addressEntered: false, address: '' };

    this.clearAddressFilter = this.clearAddressFilter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.autoComplete = new google.maps.places.Autocomplete(document.getElementById("address-search"), { componentRestrictions: { country: 'us' } });
    this.autoComplete.addListener('place_changed', () => {
      const address = this.autoComplete.getPlace();
      this.setState({ addressEntered: true, address: address.formatted_address });
      this.props.fetchAddressInfo(address);
    });
  }

  clearAddressFilter() {
    this.props.clearAddressFilter();
    this.setState({ addressEntered: false, address: '' });
  }

  handleChange(e) {
    this.setState({ address: e.target.value });
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          name="address"
          id="address-search"
          placeholder="Search By Address"
          className={`filter-search ${this.state.addressEntered ? 'disabled' : ''}`}
          disabled={this.state.addressEntered}
          value={this.state.address}
          onChange={this.handleChange}
        />
        {this.state.addressEntered ? (
          <div className="cancel-filter" onClick={this.clearAddressFilter}>
            <span>X</span>
          </div>
        ) : null}
      </div>
    );
  }
}

AddressAutoComplete.propTypes = {
  fetchAddressInfo: PropTypes.func.isRequired,
  clearAddressFilter: PropTypes.func.isRequired,
};

export default AddressAutoComplete;
