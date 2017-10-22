import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Middleware are functions that depending on the function's type or payload
// it lets the action pass, manipulate it, log it, or stop it.
// we want to install redux-promise to handle AJAX requests in Redux
import ReduxPromise from 'redux-promise'

import App from './components/app';
import reducers from './reducers';

// apply middleware here (think of middleware as a gatekeeper)
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
