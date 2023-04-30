import { createSlice } from '@reduxjs/toolkit';

const now = new Date();
const defaultMonth = now.getMonth();

const monthSlice = createSlice({
  name: 'month',
  initialState: defaultMonth,
  reducers: {
    setMonth: (action) => {
      return action.payload
    },
  },
});

export const { setMonth } = monthSlice.actions;
export default monthSlice.reducer;
