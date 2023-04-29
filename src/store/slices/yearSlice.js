import { createSlice } from '@reduxjs/toolkit';

const now = new Date();
const defaultYear = now.getFullYear();

const yearSlice = createSlice({
  name: 'year',
  initialState: defaultYear,
  reducers: {
    increment: (state, action) => {
      return state + action.payload
    },
    decrement: (state) => {
      return state - 1
    },
  },
});

export const {increment, decrement} = yearSlice.actions;
export default yearSlice.reducer;
