import { axiosConfig } from './axios';

// eslint-disable-next-line import/prefer-default-export
export const API = {
  CHARACTERS_ALL: (page: number) =>
    `${axiosConfig.baseURL}/character/?page=${page}`,
  CHARACTERS_BY_ID: (id: string) => `${axiosConfig.baseURL}/character/${id}`,
  CHARACTERS_BY_VALUE: (payload: {
    page: number;
    type: string;
    parameters: string;
    query: string;
  }) =>
    `${axiosConfig.baseURL}/${payload.type}/?${payload.parameters}=${payload.query}&page=${payload.page}`,
};
