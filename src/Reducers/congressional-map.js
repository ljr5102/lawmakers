import { handle } from 'redux-pack';
import { Map } from 'immutable';

const initialState = Map({
  shouldShowMap: false,
  isLoading: false,
  error: null,
  lat: 0,
  lng: 0,
  zoom: 0,
  code: null,
  state: null,
  geoJson: null,
});

const APIHandling = {
  onStart: state => state.set('isLoading', true),
  onFinish: state => state.set('isLoading', false),
  onFailure: state => state.set('error', 'error!'),
  onSuccess: (state, { payload }) => {
    let geometry;
    if (payload.get('geometry')) {
      if (payload.get('geometry').get('type') === 'Polygon') {
        // unsure if this is the correct check
        geometry = payload.get('geometry').get('coordinates').get(0);
      } else if (payload.get('geometry').get('type') === 'MultiPolygon') {
        geometry = payload.get('geometry').get('coordinates').flatten(2);
      }
    } else if (payload.get('geometries')) {
      geometry = payload.get('geometries').flatMap(el => el.get('coordinates')).flatten(1);
    } else {
      geometry = payload.get('coordinates').flatten(2);
    }
    const maxLng = geometry.maxBy(el => el.get(0)).get(0);
    const minLng = geometry.minBy(el => el.get(0)).get(0);
    const maxLat = geometry.maxBy(el => el.get(1)).get(1);
    const minLat = geometry.minBy(el => el.get(1)).get(1);
    const lngDiff = maxLng - minLng;
    const latDiff = maxLat - minLat;
    const cntrLng = minLng + (lngDiff / 2);
    const cntrLat = minLat + (latDiff / 2);
    const maxDiff = lngDiff > latDiff ? lngDiff : latDiff;
    const zoom = (-1.2663 * Math.log(maxDiff)) + 8.2982;
    const update = Map({ lat: cntrLat, lng: cntrLng, zoom: Math.round(zoom), code: payload.get('code'), state: payload.get('state'), shouldShowMap: true, geoJson: payload.toJSON() });
    return state.merge(update);
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
    case 'GET_SENATE_MAP':
      return handle(state, action, {
        start: prevState => APIHandling.onStart(prevState),
        finish: prevState => APIHandling.onFinish(prevState),
        failure: prevState => APIHandling.onFailure(prevState),
        success: prevState => APIHandling.onSuccess(prevState, action),
      });
    case 'CLEAR_MAP_DATA':
      return initialState;
    case 'HIDE_MAP':
      return state.merge(Map({ shouldShowMap: false, isLoading: false, code: null }));
    default:
      return state;
  }
};

export default congressionalMap;
