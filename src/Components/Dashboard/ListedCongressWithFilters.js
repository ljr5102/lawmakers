import { connect } from 'react-redux';
import { getCongressmen } from '../../Actions';
import CongressWithFilters from './CongressWithFilters';

const mapDispatchToProps = dispatch => ({
  load: () => (
    dispatch(getCongressmen())
  ),
});

export default connect(null, mapDispatchToProps)(CongressWithFilters);
