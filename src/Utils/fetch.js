import { fromJS } from 'immutable';

const congressAPILink = 'https://theunitedstates.io/congress-legislators/legislators-current.json';
const fusionAPILink = 'https://www.googleapis.com/fusiontables/v2/';

const fetchCongressAPI = () => (
  fetch(congressAPILink, { method: 'GET', 'Content-Type': 'application/json' })
);

const fetchMapDataAPI = (code) => {
  const rowFetchSql = `SELECT ROWID, geometry from 1lnXJhKK1dX3dbzyq6S0gok4F44QpImPrqP4cd-Lk where Code = '${code}';`;
  const param = `query?sql=${rowFetchSql}`;
  const googApiKey = '&key=AIzaSyD8SMlcDgmqT3zUusiEpCZFKB4E0N9SiOk';
  return fetch(fusionAPILink + param + googApiKey, { method: 'GET', 'Content-Type': 'application/json' })
};

const fetchCongress = () => fetchCongressAPI().then(
  resp => resp.json(),
  err => Promise.reject(err),
).then(json => fromJS(json));

const fetchMapData = code => fetchMapDataAPI(code).then(
  resp => resp.json(),
  err => Promise.reject(err),
).then(json => fromJS(json));
// window.getData = () => {
//
//
//   .then(resp => resp.json()).then((json) => {
//     const x = fromJS(json);
//     const geoObj = x.get('rows').get(0).get(1);
//     let geometry;
//     if (geoObj.get('geometry')) {
//       geometry = geoObj.get('geometry').get('coordinates').get(0);
//     } else {
//       geometry = geoObj.get('geometries').flatMap(el => el.get('coordinates')).flatten(1);
//     }
//     const maxLng = geometry.maxBy(el => el.get(0)).get(0);
//     const minLng = geometry.minBy(el => el.get(0)).get(0);
//     const maxLat = geometry.maxBy(el => el.get(1)).get(1);
//     const minLat = geometry.minBy(el => el.get(1)).get(1);
//     const lngDiff = maxLng - minLng;
//     const latDiff = maxLat - minLat;
//     console.log('longDiff: ', lngDiff)
//     console.log('latDiff: ', latDiff)
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
//   });
// };

export {
  fetchCongress,
  fetchMapData,
};
