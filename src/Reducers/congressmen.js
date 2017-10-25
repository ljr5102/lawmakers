import { List, Map } from 'immutable';
import { handle } from 'redux-pack';
import { pickIdData, pickNameData, pickTermData } from '../Utils';

const initialState = Map({ isLoading: false, error: null, list: List([]) });

const APIHandling = {
  onStart: state => state.set('isLoading', true),
  onFinish: state => state.set('isLoading', false),
  onFailure: state => state.set('error', 'error!'),
  onSuccess: (state, { payload }) => (state.set('list', payload.map(cong => Map({
    id: pickIdData(cong, 'bioguide'),
    name: pickNameData(cong, 'official_full'),
    last_name: pickNameData(cong, 'last'),
    party: pickTermData(cong, 'party'),
  })).sortBy(cong => cong.get('last_name')))),
};

const congressmen = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONGRESSMEN':
      return handle(state, action, {
        start: prevState => APIHandling.onStart(prevState),
        finish: prevState => APIHandling.onFinish(prevState),
        failure: prevState => APIHandling.onFailure(prevState),
        success: prevState => APIHandling.onSuccess(prevState, action),
      });
    default:
      return state;
  }
};

export default congressmen;
