import {
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FETCHING,
  AUTHENTICATION_ERROR,
} from '../_actions/loginPageActions';

const INITIAL_STATE = { data: {}, isFetching: false, isError: false };

export default (state = INITIAL_STATE, { type, payload }) => {
  console.log('Inside authReducer', state);
  switch (type) {
    case AUTHENTICATION_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        data: { ...payload },
        isFetching: false,
      };
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};
