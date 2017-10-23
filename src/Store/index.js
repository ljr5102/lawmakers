import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import Reducer from '../Reducers';

/* eslint-disable no-underscore-dangle */
// allow access to file urls in the extension!
// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const application = combineReducers(Reducer);
const enhancers = composeEnhancers(applyMiddleware(reduxPackMiddleware));
const store = createStore(application, enhancers);
export default store;
