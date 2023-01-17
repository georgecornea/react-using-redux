import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // useDispach will provide us the dispatch function
  const dispatch = useDispatch();

  // useSelector provides access to a piece of data from store
  // we need to pass a function which determine what piece of data we want from store
  // react executes the function and set up a subscription
  // so the state will updated automattically when data changes
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'INCREASE', amount: 5 });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
