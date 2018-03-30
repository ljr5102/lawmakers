import { connect } from 'react-redux';
import { updateFilter, fetchAddressAndFilter, clearAddressFilter, clearFilters } from '../../Actions';
import Filters from './Filters';

const mapDispatchToProps = dispatch => ({
  clearFilters: () => dispatch(clearFilters()),
  updateFilter: param => dispatch(updateFilter(param)),
  fetchAddressInfo: place => dispatch(fetchAddressAndFilter(place)),
  clearAddressFilter: () => dispatch(clearAddressFilter()),
});

export default connect(null, mapDispatchToProps)(Filters);
