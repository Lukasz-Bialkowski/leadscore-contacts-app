import {
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_ERROR,
  FETCH_CONTACTS_FETCHING,
} from '../_actions/contactsPageActions';

const INITIAL_STATE = { data: {}, isFetching: false, isError: false };

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_CONTACTS_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        data: {...payload},
        isFetching: false,
      };
    case FETCH_CONTACTS_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};
