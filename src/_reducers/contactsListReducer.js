import {
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_ERROR,
  FETCH_CONTACTS_FETCHING,
  RESET_CONTACTS_LIST,
  ADD_FILTER,
} from '../_actions/contactsPageActions';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  isError: false,
  hasMoreContacts: true,
  value: 'PERSON',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_CONTACTS_FETCHING:
      return { ...state, isFetching: true };
    case FETCH_CONTACTS_ERROR:
      return { ...state, isFetching: false, isError: true };
    case RESET_CONTACTS_LIST:
      return { ...INITIAL_STATE, data: [], value: state.value };
    case ADD_FILTER:
      return { ...state, value: payload };
    case FETCH_CONTACTS_SUCCESS:
      const { data: contactList = [] } = payload;
      const mergedContactsList = [...state.data, ...contactList];
      return {
        ...state,
        hasMoreContacts: contactList.length !== 0,
        data: mergedContactsList,
        isFetching: false,
        isError: false,
      };
    default:
      return state;
  }
};
