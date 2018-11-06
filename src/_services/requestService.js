import axios from 'axios';

const CONTENT_TYPE = 'application/json';

class RequestService {
  static axiosInstance = axios.create();

  static get(url, params) {
    return RequestService.axiosInstance.get(url, { params });
  }

  static post(url, payload) {
    return RequestService.axiosInstance.post(url, payload);
  }
}

export default RequestService;
