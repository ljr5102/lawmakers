import { Map } from 'immutable';

const initialState = Map({ active: 'Dashboard' });
const tab = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return state.set('active', action.tab);
    default:
      return state;
  }
};

export default tab;
