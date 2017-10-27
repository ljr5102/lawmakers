import { connect } from 'react-redux';
import { getCongressmen } from '../../Actions';
import MemberDisplay from './MemberDisplay';

const mapStateToProps = ({ congressmen }, { id }) => ({
  member: congressmen.get('list').find(cong => cong.get('id') === id),
});

const mapDispatchToProps = dispatch => ({
  load: () => {
    dispatch(getCongressmen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberDisplay);
