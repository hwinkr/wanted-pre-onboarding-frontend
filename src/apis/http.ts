import axios, { AxiosInstance } from 'axios';
import env from '../config';
import { getTokenFromLocalStorage } from './token';

const http: AxiosInstance = axios.create({
  baseURL: env.SERVER_URL,
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
