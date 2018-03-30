import { connect } from 'react-redux';
import ErrorBanner from './ErrorBanner';

function mapStateToProps({ filter }) {
  return {
    state: filter.get('state') === 'NOT FOUND',
    district: filter.get('district') === 'NOT FOUND',
  };
}

export default connect(mapStateToProps)(ErrorBanner);
