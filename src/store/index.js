import { createSlice, configureStore } from "@reduxjs/toolkit";
//const redux = require("redux");

const initialCounterState = { counter: 0, isCounterInvisible: false };
const initialUserAuthState = { isUserLoggedIn: false };

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

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: initialUserAuthState,
  reducers: {
    logIn(state) {
      state.isUserLoggedIn = true;
    },
    signOut(state) {
      state.isUserLoggedIn = false;
    },
  },
});

export const CounterSliceActions = counterSlice.actions;
export const userAuthSliceActions = userAuthSlice.actions;

const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    userAuthSlice: userAuthSlice.reducer,
  },
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
