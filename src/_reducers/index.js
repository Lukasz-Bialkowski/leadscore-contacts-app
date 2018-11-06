import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authReducer from './authReducer';
import contactsListReducer from './contactsListReducer';

export default combineReducers({
  authReducer,
  contactsListReducer,
  routerReducer,
});
