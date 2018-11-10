import {
  CONTACTS_LIST_SUCCESS,
  CONTACTS_LIST_FETCHING,
  CONTACTS_LIST_ERROR,
} from '../_actions/contactsPageActions';

const INITIAL_STATE = { data: [], isFetching: false, isError: false };

export default (state = INITIAL_STATE, { type, payload }) => {
  console.log('Inside contactsListReducer', state);
  switch (type) {
    case CONTACTS_LIST_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case CONTACTS_LIST_SUCCESS:
      return {
        ...state,
        data: [...payload],
        isFetching: false,
      };
    case CONTACTS_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};
