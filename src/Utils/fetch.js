import { fromJS } from 'immutable';

const congressAPILink = 'https://theunitedstates.io/congress-legislators/legislators-current.json';
const civicAPILink = 'https://www.googleapis.com/civicinfo/v2/representatives/';
const congressAPIDistrictLink = code => `https://theunitedstates.io/districts/cds/${code.includes('PA') ? 2018 : 2016}/${code}/shape.geojson`;
const senateAPILink = state => `https://theunitedstates.io/districts/states/${state}/shape.geojson`;

const fetchCongressAPI = () => (
  fetch(congressAPILink, { method: 'GET', 'Content-Type': 'application/json' })
);

const fetchCongressionalMapDataAPI = code => (
  fetch(congressAPIDistrictLink(code), { method: 'GET', 'Content-Type': 'application/json' })
);

const fetchSenateMapDataAPI = state => (
  fetch(senateAPILink(state), { method: 'GET', 'Content-Type': 'application/json' })
);

const fetchAddressDataAPI = (place) => {
  const { formatted_address } = place;
  const address = `?address=${formatted_address}`;
  const googApiKey = '&key=AIzaSyD8SMlcDgmqT3zUusiEpCZFKB4E0N9SiOk';
  return fetch(civicAPILink + address + googApiKey, { method: 'GET', 'Content-Type': 'application/json' });
};

const fetchCongress = () => fetchCongressAPI().then(
  resp => resp.json(),
  err => Promise.reject(err),
).then(json => fromJS(json));

const fetchCongressionalMapData = code => fetchCongressionalMapDataAPI(code).then(
  resp => resp.json(),
  err => Promise.reject(err),
).then(json => fromJS({ ...json, code }));

const fetchSenateMapData = state => fetchSenateMapDataAPI(state).then(
  resp => resp.json(),
  err => Promise.reject(err),
).then(json => fromJS({ ...json, state }));

const fetchStateDistrictData = place => fetchAddressDataAPI(place).then(
  resp => resp.json(),
  err => Promise.reject(err),
).then(json => fromJS(json));

export {
  fetchCongress,
  fetchCongressionalMapData,
  fetchSenateMapData,
  fetchStateDistrictData,
};
