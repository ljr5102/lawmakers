import { List, Map } from 'immutable';
import { pickIdData, pickNameData, pickTermData } from '../Utils';

const initialState = List([]);
const congressmen = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONGRESSMEN_SUCCESS':
      return action.congressmen.map(cong => Map({
        id: pickIdData(cong, 'bioguide'),
        name: pickNameData(cong, 'official_full'),
        party: pickTermData(cong, 'party'),
      }));
    default:
      return state;
  }
};

export default congressmen;
