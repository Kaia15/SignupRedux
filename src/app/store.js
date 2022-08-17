import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import reducer from '../features/register/regcomponents/slice';

export const store = configureStore({
  reducer: {
    user: reducer
  },
});
