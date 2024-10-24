import { createSlice, configureStore } from "@reduxjs/toolkit";
//const redux = require("redux");

const initialState = { counter: 0, isCounterInvisible: false };

const counterSlice = createSlice({
  name: "counter",
  initialState,
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

export const CounterSliceActions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;

// const counterSubscribe = () => {
//   const newState = store.getState();
//   console.log(newState);
// };

// store.subscribe(counterSubscribe);

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
