import { createStore } from 'redux';
/* eslint-disable no-underscore-dangle */
// allow access to file urls in the extension!
const store = createStore(() => ({ initial: 'here' }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */
export default store;
