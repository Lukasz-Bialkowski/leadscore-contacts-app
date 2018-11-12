import RequestService from "../_services/requestService";

const APP_URL = "https://internal-api-staging-lb.interact.io/v2";
const FILTER_URL = `${APP_URL}/contacts/filter`;

const buildRequestBody = ({ value }) => ({
  defaultOperator: "AND",
  filters: [{ field: "contactType", op: "eq", value }]
});

const buildUrlParams = ({ offset, limit }) => ({
  limit,
  offset,
  sort: "lastName",
  direction: "ASC"
});

export const postContactsFilter = params => {
  return RequestService.post(FILTER_URL, buildRequestBody(params), {
    params: buildUrlParams(params)
  });
};
