const congressAPILink = 'https://theunitedstates.io/congress-legislators/legislators-current.json';

const fetchCongressmen = () => (
  fetch(congressAPILink, { method: 'GET', 'Content-Type': 'application/json' })
);

export {
  fetchCongressmen,
};
