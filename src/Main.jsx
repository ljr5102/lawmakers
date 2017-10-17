import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/index';
import App from './App';

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Main;
