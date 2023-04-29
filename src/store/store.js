import { configureStore } from '@reduxjs/toolkit';
import yearReducer from './slices/yearSlice';

const store = configureStore({
  reducer: {
    year: yearReducer,
  },
});

export default store;
