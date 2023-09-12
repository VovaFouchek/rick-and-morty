import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharactersReducer } from './interfaces';
import { getCharacterById, getCharacters } from './actions';

const initialValue: ICharactersReducer = {
  character: {
    id: 0,
    name: '',
    status: 'unknown',
    species: '',
    type: '',
    gender: 'unknown',
    origin: { name: '', url: '' },
    location: { name: '', url: '' },
    image: '',
    episode: [],
    url: '',
    created: '',
  },
  characters: [],
  infoResults: {
    count: 0,
    pages: 0,
    next: '',
    prev: '',
  },
  currentPage: 1,
  isLoading: false,
  error: null,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialValue,
  reducers: {
    setPagesAmount(state, action: PayloadAction<number>) {
      state.infoResults.pages = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.infoResults = action.payload.info;
        state.characters = action.payload.results;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getCharacterById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCharacterById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.character = action.payload;
      })
      .addCase(getCharacterById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    // .addCase(getCharactersByValue.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.characters = action.payload.results;
    // });
  },
});

export const { setPagesAmount, setCurrentPage } = charactersSlice.actions;
export default charactersSlice.reducer;
