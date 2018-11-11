import { postContactsFilter } from '../_handlers/contactsHandler';

export const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";
export const FETCH_CONTACTS_ERROR = "FETCH_CONTACTS_ERROR";
export const FETCH_CONTACTS_FETCHING = "FETCH_CONTACTS_FETCHING";

const makeContactsSuccessAction = payload => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload
});

const makeContactsErrorAction = () => ({ type: FETCH_CONTACTS_ERROR });

const makeContactsFetchingAction = () => ({ type: FETCH_CONTACTS_FETCHING });

export const fetchContacts = params => dispatch => {
  dispatch(makeContactsFetchingAction());
  postContactsFilter(params)
    .then(({ data }) => dispatch(makeContactsSuccessAction(data)))
    .catch(err => {
      dispatch(makeContactsErrorAction());
      console.log("Error fetching contacts", err);
    });
};
