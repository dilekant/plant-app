import { BASE_URL } from '@env';
import axios from 'axios';

export const globalAxios = axios.create({
  baseURL: BASE_URL,
});
