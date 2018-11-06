import RequestService from './requestService';

const CONTACT_LIST_PATH = '/lists';

export default params => RequestService.get(CONTACT_LIST_PATH, params);
