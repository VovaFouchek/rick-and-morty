/* eslint-disable import/prefer-default-export */
import { axiosConfig } from './axios';

interface IApiParams {
  page: number;
  type: string;
  parameters: string;
  query: string;
}

export const API = {
  CHARACTERS_ALL: (page: number) =>
    `${axiosConfig.baseURL}/character/?page=${page}`,

  CHARACTERS_BY_ID: (id: string) => `${axiosConfig.baseURL}/character/${id}`,

  CHARACTERS_BY_VALUE: (payload: IApiParams) =>
    `${axiosConfig.baseURL}/${payload.type}/?page=${payload.page}&${payload.parameters}=${payload.query}`,
};
