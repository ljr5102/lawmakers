import { createStore, combineReducers } from 'redux';
import Reducer from '../Reducers';

/* eslint-disable no-underscore-dangle */
// allow access to file urls in the extension!
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */
const application = combineReducers(Reducer);
const store = createStore(application, devTools);
export default store;
