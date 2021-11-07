import { createSlice } from "@reduxjs/toolkit";

export const digitsSlice = createSlice({
  name: 'digits',
  initialState: {
    digits: [
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      2, 3, 4, 5, 6, 7, 8, 9, 1,
      3, 4, 5, 6, 7, 8, 9, 1, 2,
      4, 5, 6, 7, 8, 9, 1, 2, 3,
      5, 6, 7, 8, 9, 1, 2, 3, 4,
      6, 7, 8, 9, 1, 2, 3, 4, 5,
      7, 8, 9, 1, 2, 3, 4, 5, 6,
      8, 9, 1, 2, 3, 4, 5, 6, 7,
      9, 1, 2, 3, 4, 5, 6, 7, 8,
    ],
  },
  reducers: {
    setDigit: (state, action) => {
      const {index, digit} = action.payload;
      state.digits[index] = digit;
    }
  }
});

export const {setDigit} = digitsSlice.actions;

export default digitsSlice.reducer;