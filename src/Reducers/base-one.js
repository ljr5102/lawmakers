import { Map } from 'immutable';

const initialState = Map({ name: 'Application', purpose: 'Do stuff' });
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return state.set('name', action.newName);
    default:
      return state;
  }
};

export default myReducer;
