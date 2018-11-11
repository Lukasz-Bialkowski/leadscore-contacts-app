import RequestService from "../_services/requestService";

const APP_URL = "https://internal-api-staging-lb.interact.io/v2";
const FILTER_URL = `${APP_URL}/contacts/filter`;

export const postContactsFilter = params => {
  return RequestService.post(FILTER_URL, params);
};