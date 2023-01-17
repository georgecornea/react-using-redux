import { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Counter.module.css';

// const Counter = () => {
//   // useDispach will provide us the dispatch function
//   const dispatch = useDispatch();

//   // useSelector provides access to a piece of data from store
//   // we need to pass a function which determine what piece of data we want from store
//   // react executes the function and set up a subscription
//   // so the state will updated automattically when data changes
//   const counter = useSelector((state) => state.counter);

//   const incrementHandler = () => {
//     dispatch({ type: 'INCREMENT' });
//   };

//   const decrementHandler = () => {
//     dispatch({ type: 'DECREMENT' });
//   };

//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

// get redux state and return an object where the keys are props in the reciving component
// in our case => receiving component is CounterAsClassComponent
// the value of keys are the state value
// similar with useSelector()
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

// store dispach functions to props
// echivalent with useDispach()
// when execute will dispach an action to the redux store
// return an object where the keys can be used as functions
const mapDispachToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Counter);
