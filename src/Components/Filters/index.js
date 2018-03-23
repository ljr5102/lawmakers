import { connect } from 'react-redux';
import { updateFilter, fetchAddressAndFilter, clearAddressFilter } from '../../Actions';
import Filters from './Filters';

const mapDispatchToProps = dispatch => ({
  updateFilter: param => dispatch(updateFilter(param)),
  fetchAddressInfo: place => dispatch(fetchAddressAndFilter(place)),
  clearAddressFilter: () => dispatch(clearAddressFilter()),
});

export default connect(null, mapDispatchToProps)(Filters);
