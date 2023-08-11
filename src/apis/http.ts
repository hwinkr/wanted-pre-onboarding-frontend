import axios, { AxiosInstance } from 'axios';
import { getTokenFromLocalStorage } from './token';
import SERVER_BASE_URL from '../constants/base-url';

const http: AxiosInstance = axios.create({
  baseURL: SERVER_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

http.interceptors.request.use((config) => {
  const accessToken = getTokenFromLocalStorage();
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

export default http;
