import axios from 'axios';

const RequestService = () => {
  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    config.headers.authToken = token || '';
    return config;
  });

  return axiosInstance;
};

export default RequestService();
