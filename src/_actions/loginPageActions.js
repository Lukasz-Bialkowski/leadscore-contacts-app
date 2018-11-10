export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const AUTHENTICATION_FETCHING = 'AUTHENTICATION_FETCHING';

export const makeSuccessAction = payload => ({
  type: AUTHENTICATION_SUCCESS,
  payload,
});
export const makeFailedAction = error => ({
  type: AUTHENTICATION_ERROR,
  error,
});
export const makeFetchingAction = () => ({ type: AUTHENTICATION_FETCHING });

const TEMP = { username: 'username' };

export const postLoginRequest = (params) => (dispatch) => {
  console.log('postLoginRequest(${params})', params);
  dispatch(makeFetchingAction());
  new Promise((resolve) => {
    setTimeout(() => resolve({ data: TEMP }, 4000));
  })
    .then(res => dispatch(makeSuccessAction(res.data)))
    .catch(err => dispatch(makeFailedAction(err)));
};
