import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import CongressionalList from './CongressionalList';
import { getCongressmenSuccess, getCongressmenFailure,
  fetchingCongressmenRequest, fetchingCongressmenEnd,
} from '../../Actions';
import { fetchCongressmen } from '../../Utils';

const mapStateToProps = ({ congressmen }) => ({
  congressmen,
});

const mapDispatchToProps = dispatch => ({
  load: () => {
    dispatch(fetchingCongressmenRequest());
    fetchCongressmen().then(resp => (
      resp.json()
    )).then((json) => {
      dispatch(getCongressmenSuccess(fromJS(json)));
    }, () => {
      dispatch(getCongressmenFailure());
    }).then(() => dispatch(fetchingCongressmenEnd()));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CongressionalList);
