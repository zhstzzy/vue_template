import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:9000',
  timeout: 6000,
  withCredentials: true
});

// Request interceptors
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

// Response interceptors
request.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
  },
  (error: any) => {
    // do something
    return Promise.reject(error);
  }
);

export default request;

