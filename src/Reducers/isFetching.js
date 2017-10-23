import { Map } from 'immutable';

const initialState = Map({
  congressmen: false,
});

const isFetching = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONGRESSMEN_REQUEST':
      return state.set('congressmen', true);
    case 'GET_CONGRESSMEN_END':
      return state.set('congressmen', false);
    default:
      return state;
  }
};

export default isFetching;
