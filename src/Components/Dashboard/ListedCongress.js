import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import CongressionalList from './CongressionalList';
import { getCongressmenSuccess } from '../../Actions';

const mapDispatchToProps = dispatch => ({
  load: () => {
    fetch('https://theunitedstates.io/congress-legislators/legislators-current.json', { method: 'GET', 'Content-Type': 'application/json' }).then(resp => (
      resp.json()
    )).then((json) => {
      dispatch(getCongressmenSuccess(fromJS(json)));
    });
  },
});

export default connect(null, mapDispatchToProps)(CongressionalList);
