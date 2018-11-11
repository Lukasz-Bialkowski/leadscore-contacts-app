import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { makeStoreAuthData } from './_actions/authActions';

import rootReducer from './_reducers';

export const history = createBrowserHistory();

const middlewares = [thunkMiddleware, routerMiddleware(history)];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

const authToken = localStorage.getItem('authToken');

if (authToken) {
  store.dispatch(makeStoreAuthData(authToken))
}

export default store;
