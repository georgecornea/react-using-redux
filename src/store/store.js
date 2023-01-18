import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import counterSlice from './counterSlice';

// import { createStore } from 'redux';

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
  //   reducer: counterSlice.reducer, // for one slice
  reducer: {
    // for multiple slices, we pass an object
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
