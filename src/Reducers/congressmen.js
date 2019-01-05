import { List, Map } from 'immutable';
import { handle } from 'redux-pack';
import { pickIdData, pickNameData, pickTermData, pickBioData } from '../Utils';

const initialState = Map({ isLoading: false, error: null, list: List([]) });

const APIHandling = {
  onStart: state => state.set('isLoading', true),
  onFinish: state => state.set('isLoading', false),
  onFailure: state => state.set('error', 'error!'),
  onSuccess: (state, { payload }) => (state.set('list', payload.map(cong => Map({
    id: pickIdData(cong, 'bioguide'),
    name: pickNameData(cong, 'official_full') || pickNameData(cong, 'first') + ' ' + pickNameData(cong, 'last'),
    last_name: pickNameData(cong, 'last'),
    birthday: pickBioData(cong, 'birthday'),
    religion: pickBioData(cong, 'religion'),
    party: pickTermData(cong, 'party'),
    chamber: pickTermData(cong, 'type'),
    state: pickTermData(cong, 'state'),
    district: pickTermData(cong, 'district'),
    contactInfo: Map({
      url: pickTermData(cong, 'url'),
      address: pickTermData(cong, 'address'),
      phone: pickTermData(cong, 'phone'),
      fax: pickTermData(cong, 'fax'),
      contactForm: pickTermData(cong, 'contact_form'),
      office: pickTermData(cong, 'office'),
    }),
    terms: cong.get('terms'),
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
