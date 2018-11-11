import RequestService from '../_services/requestService';

const APP_URL = 'https://internal-api-staging-lb.interact.io/v2';
const LOGIN_URL = `${APP_URL}/login`;
const LOGOUT_URL = `${APP_URL}/logout`;

export const postLogin = ({ login, password }) => RequestService.post(LOGIN_URL, {
  username: login,
  password,
});

export const postLogout = params => RequestService.post(LOGOUT_URL, params);
