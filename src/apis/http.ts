import axios, { AxiosInstance } from 'axios';
import env from '../config';

const http: AxiosInstance = axios.create({
  baseURL: env.SERVER_URL,
});

export default http;
