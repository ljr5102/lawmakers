import { createStore, combineReducers } from 'redux';
import Reducer from '../Reducers';

const coolApp = combineReducers(Reducer);
/* eslint-disable no-underscore-dangle */
// allow access to file urls in the extension!
const store = createStore(coolApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */
export default store;
