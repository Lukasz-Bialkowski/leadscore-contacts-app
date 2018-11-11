import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_FETCHING,
  STORE_AUTH_DATA,
  LOGOUT_SUCCESS,
} from '../_actions/authActions';

const INITIAL_STATE = {
  data: null, isFetching: false, isError: false, isAuthenticated: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOGIN_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: { ...payload },
        authToken: payload.token.authToken,
        isFetching: false,
        isAuthenticated: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    case STORE_AUTH_DATA:
      return {
        ...state,
        authToken: payload,
        isAuthenticated: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        data: null,
      };
    default:
      return state;
  }
};
