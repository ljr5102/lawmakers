import { connect } from 'react-redux';
import { getCongressmen } from '../../Actions';
import MemberDisplay from './MemberDisplay';

const mapStateToProps = ({ congressmen }, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  load: () => {
    dispatch(getCongressmen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberDisplay);
