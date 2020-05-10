import { Map } from 'immutable';
import { handle } from 'redux-pack';

const initialState = Map({ name: '' });

const APIHandling = {
  onSuccess: (prevState, { payload }) => {
    let state;
    let district;
    if (payload.get('error')) {
      state = 'NOT FOUND';
      district = 'NOT FOUND';
    } else {
      const senate = payload.get('offices').find(ofc => ofc.get('name') === 'U.S. Senator');
      const house = payload.get('offices').find(ofc => ofc.get('name').includes('U.S. Representative'));
      if (senate) {
        state = senate.get('divisionId').match(/\/state:\S+/)[0].replace(/\/state:/, '').toUpperCase();
      } else {
        state = 'NOT FOUND';
      }

      if (house) {
        const districtNum = house.get('divisionId').match(/\/cd:\S+/);
        if (districtNum) {
          district = parseInt(districtNum[0].replace(/\/cd:/, ''), 10);
        } else {
          district = 0; // at large district
        }
      } else {
        district = 'NOT FOUND';
      }
    }
    const newState = prevState.merge(Map({ state, district }));
    return newState;
  },
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return state.merge(action.param);
    case 'FETCH_STATE_DISTRICT_DATA':
      return handle(state, action, {
        start: prevState => prevState.set('isLoading', true),
        finish: prevState => prevState.set('isLoading', false),
        success: APIHandling.onSuccess,
        failure: prevState => prevState.set('error', 'error!'),
      });
    case 'CLEAR_ADDRESS_FILTER':
      return state.delete('state').delete('district');
    case 'CLEAR_FILTERS':
      return initialState;
    default:
      return state;
  }
};

export default filter;
