import axios from 'axios';

const RequestService = () => {
  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('authToken');
    config.headers['authToken'] = token ? token : '';
    return config;
  });

  return axiosInstance;
}

export default RequestService();
