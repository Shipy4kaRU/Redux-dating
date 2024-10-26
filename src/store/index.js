import { configureStore } from "@reduxjs/toolkit";
//const redux = require("redux");
import counterSliceReducer from "./counterSlice";
import userAuthSliceReducer from "./userAuthSlice";

const store = configureStore({
  reducer: {
    counterSlice: counterSliceReducer,
    userAuthSlice: userAuthSliceReducer,
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
