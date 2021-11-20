import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_DIGITS = [
  '...5.6.......9.8..2.6.3....56...2..7.........87.6.4....4...392.75.....649.8......',
  '.785...6.39.18...2.6....91..5.8..6.3.........6....127........37...6.7829......5..',
  '.8...97....58........7....5.64....83......4...9.25.6..........7.76...54...8..23..',
  '12..53...58.2...1.3.6..1..5..4..2..69....8...2..49...86............19..3....468..',
  '......261..9..2.....3...5....5.3.1.9..........97.68..3.52.....7..8.1..2..7.9...1.',
  '.1.3.........54....2....5.9..21.....3...85..6..6.4..9..5.....1.4.3..6.....9.....2',
  '.54......7.......9.1...4..34.8...1...6.8...9...3.4..6519..3..4.3.6.....7....95...',
  '...32.8..83.7..5.9......7.12...8.9...1..5..8....2...6...2.7......6591....8.......',
  '....64.9..5......3.4.5.7..8.61...........3...89.1..........61..6..3.8....8..79..4',
  '.......5..9...4..1.483.....9.28.3..............1..59.7.2....3.4..7.19..85.......2',
];

type SetDigitPayload = {
  index: number,
  digit: number
}

interface SudokuDigit {
  value: number, 
  isFixed: boolean,
}

function createEmptyDigitArray() {
  let arr: SudokuDigit[] = [];
  for(let i = 0; i < 81; i++) {
    arr.push({value: 0, isFixed: false});
  }
  return arr;
}

function createDigitArrayFromString(str: string): SudokuDigit[] {
  return str.split('').map(val => {
    const digit = val === '.' ? 0 : parseInt(val);
    return {
      value: digit,
      isFixed: digit !== 0,
    }
  })
}

function randomElement(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const digitsSlice = createSlice({
  name: 'digits',
  initialState: {
    value: createDigitArrayFromString(randomElement(INITIAL_DIGITS)), 
  },
  reducers: {
    setDigit: (state, action: PayloadAction<SetDigitPayload>) => {
      const {index, digit} = action.payload;
      state.value[index] = {value: digit, isFixed: true};
    },
    clearDigit: (state, action: PayloadAction<number>) => {
      state.value[action.payload] = {value: 0, isFixed: false};
    },
    clearArray: (state) => {
      state.value = createEmptyDigitArray();
    }
  }
});

export const {setDigit, clearDigit, clearArray} = digitsSlice.actions;

export default digitsSlice.reducer;