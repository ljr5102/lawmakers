import { List } from 'immutable';

const secondReducer = (state = List([1, 2, 3]), action) => {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return state.push(action.number);
    default:
      return state;
  }
};

export default secondReducer;
