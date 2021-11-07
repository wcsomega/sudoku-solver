import { configureStore } from "@reduxjs/toolkit";
import digitsReducer from "./digitsSlice";

export const store = configureStore({
  reducer: {
    digits: digitsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;