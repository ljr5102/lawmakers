import { connect } from 'react-redux';
import CongressionalList from './CongressionalList';
import { getCongressmen } from '../../Actions';

const mapStateToProps = ({ congressmen }) => ({
  congressmen,
});

const mapDispatchToProps = dispatch => ({
  load: () => {
    dispatch(getCongressmen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CongressionalList);
