export const CONTACTS_LIST_SUCCESS = 'CONTACTS_LIST_SUCCESS';
export const CONTACTS_LIST_ERROR = 'CONTACTS_LIST_ERROR';
export const CONTACTS_LIST_FETCHING = 'CONTACTS_LIST_FETCHING';

export const makeSuccessAction = payload => ({
  type: CONTACTS_LIST_SUCCESS,
  payload,
});
export const makeFailedAction = error => ({ type: CONTACTS_LIST_ERROR, error });
export const makeFetchingAction = () => ({ type: CONTACTS_LIST_FETCHING });

const TEMP = [
  { id: '1', username: 'username', telephone: 'telephone' },
  { id: '2', username: 'username2', telephone: 'telephone2' },
];

export const fetchContacts = (params) => (dispatch) => {
  console.log('fetchContacts', params);
  dispatch(makeFetchingAction());
  new Promise((resolve) => {
    setTimeout(() => resolve({ data: TEMP }), 4000);
  })
    .then(res => dispatch(makeSuccessAction(res.data)))
    .catch((err) => {
      console.log('Error fetching contacts', err);
      dispatch(makeFailedAction());
    });
};
