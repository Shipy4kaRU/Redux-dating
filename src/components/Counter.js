import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { CounterSliceActions } from "../store/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counterSlice.counter);
  const isVisible = useSelector(
    (state) => state.counterSlice.isCounterInvisible
  );

  const dispatchFunction = useDispatch();

  const incrementHandler = (number) => {
    dispatchFunction(CounterSliceActions.increment(number));
  };

  const decrementHandler = (number) => {
    dispatchFunction(CounterSliceActions.decrement(number));
  };

  const toggleCounterHandler = () => {
    dispatchFunction(CounterSliceActions.changeVisibility());
  };

  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      {!isVisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler.bind(this, 1)}>+</button>
        <button onClick={incrementHandler.bind(this, 10)}>+10</button>
        <button onClick={decrementHandler.bind(this, 1)}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
    </main>
  );
};

export default Counter;
