import { configureStore } from '@reduxjs/toolkit';

import charactersSlice from './reducer';

const store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
});

// Global store type
export type RootState = ReturnType<typeof store.getState>;

// Dispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
