/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CHARACTERS_FETCH_ALL } from './action-types';
import { Character, Result } from '../shared/types';
import { API } from '../shared/api/entity.api';

export const getCharacters = createAsyncThunk(
  CHARACTERS_FETCH_ALL,
  async (page: number) => {
    try {
      const { data } = await axios.get<Result<Character>>(
        API.CHARACTERS_ALL(page)
      );

      return data;
    } catch (error) {
      throw new Error('Server error...');
    }
  }
);
