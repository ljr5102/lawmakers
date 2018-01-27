import { Map } from 'immutable';

const initialState = Map({ name: '' });

const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return state.merge(action.param);
    default:
      return state;
  }
};

export default filter;
