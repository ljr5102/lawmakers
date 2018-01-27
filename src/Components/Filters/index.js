import { connect } from 'react-redux';
import { updateFilter } from '../../Actions';
import Filters from './Filters';

const mapDispatchToProps = dispatch => ({
  updateFilter: param => dispatch(updateFilter(param)),
});

export default connect(null, mapDispatchToProps)(Filters);
