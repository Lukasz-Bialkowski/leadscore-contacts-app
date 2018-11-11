import {
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_ERROR,
  FETCH_CONTACTS_FETCHING
} from "../_actions/contactsPageActions";

const INITIAL_STATE = {
  data: [],
  metaInfo: { offset: -1 },
  isFetching: false,
  isError: false,
  hasMoreContacts: true
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_CONTACTS_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_CONTACTS_SUCCESS:
      const { data: contactList, ...rest } = payload;
      const mergedContactsList = [...state.data, ...contactList];
      const mergedMetaInfo = { ...state.metaInfo, ...rest };
      return {
        metaInfo: mergedMetaInfo,
        data: mergedContactsList,
        isFetching: false,
        isError: false,
        hasMoreContacts: mergedContactsList.length !== mergedMetaInfo.count
      };
    case FETCH_CONTACTS_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true
      };
    default:
      return state;
  }
};
