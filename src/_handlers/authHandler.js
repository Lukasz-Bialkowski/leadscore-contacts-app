import RequestService from "../_services/requestService";

const APP_URL = "https://internal-api-staging-lb.interact.io/v2";
const LOGIN_URL = `${APP_URL}/login`;
const LOGOUT_URL = `${APP_URL}/logout`;

export const postLogin = params => {
  return RequestService.post(LOGIN_URL, {
    username: "lukasz.adrian.bialkowski@gmail.com",
    password: "DEVpassword1!"
  });
};

export const postLogout = params => {
  return RequestService.post(LOGOUT_URL, params);
};

