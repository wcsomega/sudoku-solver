import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SetDigitPayload = {
  index: number,
  digit: number
}

interface SudokuDigit {
  value: number, 
  isFixed: boolean,
}

function createInitialDigitArray() {
  let arr: SudokuDigit[] = [];
  for(let i = 0; i < 81; i++) {
    arr.push({value: 0, isFixed: false});
  }
  return arr;
}

export const digitsSlice = createSlice({
  name: 'digits',
  initialState: {
    value: createInitialDigitArray(),
  },
  reducers: {
    setDigit: (state, action: PayloadAction<SetDigitPayload>) => {
      const {index, digit} = action.payload;
      state.value[index] = {value: digit, isFixed: true};
    },
    clearDigit: (state, action: PayloadAction<number>) => {
      state.value[action.payload] = {value: 0, isFixed: false};
    }
  }
});

export const {setDigit, clearDigit} = digitsSlice.actions;

export default digitsSlice.reducer;