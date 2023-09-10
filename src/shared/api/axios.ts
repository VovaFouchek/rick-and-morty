import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { Character, Result } from '../types';

export const axiosConfig = {
  baseURL: 'https://rickandmortyapi.com/api',
};

const instance: AxiosInstance = axios.create(axiosConfig);

// Interceptors
instance.interceptors.response.use(
  (response: AxiosResponse<Result<Character>>) => response,
  (error: AxiosError) => {
    if (error.response && error.response.status === 500) {
      throw new Error('An error occurred while making the request.');
    }
    throw error;
  }
);

export default instance;
