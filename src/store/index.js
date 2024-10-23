import { legacy_createStore } from "redux";
const redux = require("redux");

const counterReducer = (prevState = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: prevState.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return { counter: prevState.counter - 1 };
  }
  return prevState;
};

const store = legacy_createStore(counterReducer);

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
