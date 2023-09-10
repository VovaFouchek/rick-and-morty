import { axiosConfig } from './axios';

// eslint-disable-next-line import/prefer-default-export
export const API = {
  CHARACTERS_ALL: (page: number) =>
    `${axiosConfig.baseURL}/character/?page=${page}`,
  // todo: idea
  CHARACTERS_BY_ID: (id: string) => `${axiosConfig.baseURL}/character/${id}`,
  CHARACTERS_BY_VALUE: (value: string) =>
    `${axiosConfig.baseURL}/character/search/${value}`,
};
