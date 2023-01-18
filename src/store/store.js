import { createSlice, configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

// createSlice provide us a slice from our global state
// we need to provide an object as argument
// all methods from reducers are automatically updated by React with the actual state
// also, all the methods accepts state and action(if needed) params
// we can manipulate the existing state; however, React will clone the existing state // in a immutable code
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// never mutate the existing state
// always return a new state object
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     case 'DECREMENT':
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     case 'INCREASE':
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };
//     case 'TOGGLE':
//       return {
//         counter: state.counter,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// configure store  expects a an objects with an expected property reducer
// if we have only a slice, we can pass it to our reducer key
// if we have multiple slices, we need to pass an object to the reducer key
// each key in the new object will be a slice
const store = configureStore({
  reducer: counterSlice.reducer, // for one slice
  //   reducer: { // for multiple slices, we pass an object
  //     counter: counterSlice.reducer,
  //   },
});

// redux will create for us the actions
export const counterActions = counterSlice.actions;

export default store;
