import { configureStore } from '@reduxjs/toolkit';
import yearReducer from './slices/yearSlice';
import monthReducer from './slices/monthSlice';

const store = configureStore({
  reducer: {
    year: yearReducer,
    month: monthReducer,
  },
});

export default store;
