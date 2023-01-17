import { useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // useSelector provides access to a piece of data from store
  // we need to pass a function which determine what piece of data we want from store
  // react executes the function and set up a subscription
  // so the state will updated automattically when data changes
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
