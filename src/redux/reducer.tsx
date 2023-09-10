import { createSlice } from '@reduxjs/toolkit';
import { ICharactersReducer } from './interfaces';
import { getCharacters } from './actions';

const initialValue: ICharactersReducer = {
  characters: [],
  infoResults: null,
  loading: false,
  error: null,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.infoResults = action.payload.info;
      state.characters = action.payload.results;
    });
  },
});

export default charactersSlice.reducer;
