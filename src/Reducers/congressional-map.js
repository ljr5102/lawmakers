import { handle } from 'redux-pack';
import { Map } from 'immutable';

const initialState = Map({ isLoading: false, error: null, lat: 0, lng: 0, zoom: 6 });

const APIHandling = {
  onStart: state => state.set('isLoading', true),
  onFinish: state => state.set('isLoading', false),
  onFailure: state => state.set('error', 'error!'),
  onSuccess: (state, { payload }) => {
    const geoObj = payload.get('rows').get(0).get(1);
    let geometry;
    if (geoObj.get('geometry')) {
      geometry = geoObj.get('geometry').get('coordinates').get(0);
    } else {
      geometry = geoObj.get('geometries').flatMap(el => el.get('coordinates')).flatten(1);
    }
    const maxLng = geometry.maxBy(el => el.get(0)).get(0);
    const minLng = geometry.minBy(el => el.get(0)).get(0);
    const maxLat = geometry.maxBy(el => el.get(1)).get(1);
    const minLat = geometry.minBy(el => el.get(1)).get(1);
    const lngDiff = maxLng - minLng;
    const latDiff = maxLat - minLat;
    const cntrLng = minLng + (lngDiff / 2);
    const cntrLat = minLat + (latDiff / 2);
    console.log('longDiff: ', lngDiff)
    console.log('latDiff: ', latDiff)
    const update = Map({ lat: cntrLat, lng: cntrLng });
    return state.merge(update);
    // max diff of 12 still about 6
    // maxx diff of 8 -> 6
    // max diff of 6 roughly zoom of 6
    // max diff of 2 -> 7, maybe 8
    // max diff of 1.05 -> 8
    // max diff of 0.8 about 9
    // max diff of 0.37 -> 10
    // max diff of 0.34 -> 10
    // max diff of 0.2 10, closer to 11?
    // max diff of 0.17 -> 11
    // max diff of 0.09, 12
  },
};

const congressionalMap = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONGRESSIONAL_MAP':
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

export default congressionalMap;