import { postLogin, postLogout } from '../_handlers/authHandler';

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_FETCHING = "LOGIN_FETCHING";

export const STORE_AUTH_DATA = "STORE_AUTH_DATA";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FETCHING = "LOGOUT_FETCHING";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const makeStoreAuthData = authenticatedUser => ({
  type: STORE_AUTH_DATA,
  payload: authenticatedUser
});

const makeLogoutSuccessAction = () => ({
  type: LOGOUT_SUCCESS
});

const makeLogoutFetchingAction = () => ({
  type: LOGOUT_FETCHING
});

const makeLogoutErrorAction = () => ({
  type: LOGOUT_ERROR
});

const makeLoginSuccessAction = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

const makeLoginErrorAction = () => ({
  type: LOGIN_ERROR,
});

const makeLoginFetchingAction = () => ({ type: LOGIN_FETCHING });

export const login = params => dispatch => {
  dispatch(makeLoginFetchingAction());
  postLogin(params)
    .then(({ data: authenticatedUser }) => {
      localStorage.setItem("authToken", authenticatedUser.token.authToken);
      dispatch(makeLoginSuccessAction(authenticatedUser));
    })
    .catch(err => {
      dispatch(makeLoginErrorAction());
      console.log("Error while logging in", err);
    });
};

export const logout = params => dispatch => {
  dispatch(makeLogoutFetchingAction());
  postLogout(params)
    .then(() => {
      localStorage.removeItem("authToken");
      dispatch(makeLogoutSuccessAction());
    })
    .catch(err => {
      dispatch(makeLogoutErrorAction());
      console.log("Error while logout", err);
    });
};
