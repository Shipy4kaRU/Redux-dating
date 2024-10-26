import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isCounterInvisible: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    changeVisibility(state) {
      state.isCounterInvisible = !state.isCounterInvisible;
    },
  },
});

export default counterSlice.reducer;
export const CounterSliceActions = counterSlice.actions;
