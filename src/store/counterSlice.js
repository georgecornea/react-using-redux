import { createSlice } from '@reduxjs/toolkit';

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
      // redux/toolkit accept payload as the object/value passed by reducers
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// redux will create for us the actions
export const counterActions = counterSlice.actions;

export default counterSlice;
