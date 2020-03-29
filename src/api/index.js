import axios from 'axios';
import {getMockError, isMockError, getMockResponse} from './apiMock';

const baseURL = process.env.HOST || '10.0.2.2';
const mockingEnabled = true;
const apiClient = axios.create({baseURL, timeout: 3000});

// Add a request interceptor to check if the api mock is enable
apiClient.interceptors.request.use(
  config => {
    if (mockingEnabled) {
      return getMockError(config);
    }
    return config;
  },
  error => Promise.reject(error),
);

// Add a response interceptor to check if the response is mocked
apiClient.interceptors.response.use(
  response => response,
  error => {
    if (isMockError(error)) {
      return getMockResponse(error);
    }
    return Promise.reject(error);
  },
);

export default apiClient;
