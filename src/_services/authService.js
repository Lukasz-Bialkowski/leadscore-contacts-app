import RequestService from './requestService';

const AUTHENTICATION_PATH = '/login';

export default params => RequestService.post(AUTHENTICATION_PATH, params);
