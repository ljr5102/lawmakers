import { fromJS } from 'immutable';

const congressAPILink = 'https://theunitedstates.io/congress-legislators/legislators-current.json';

const fetchCongressAPI = () => (
  fetch(congressAPILink, { method: 'GET', 'Content-Type': 'application/json' })
);

const fetchCongress = fetchCongressAPI().then(
  resp => resp.json(),
  err => Promise.reject(err),
).then(json => fromJS(json));

export {
  fetchCongress,
};
