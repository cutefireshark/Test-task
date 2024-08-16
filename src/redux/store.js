
import { configureStore } from '@reduxjs/toolkit';
import discountReducer from './discountSlice';

const store = configureStore({
  reducer: {
    discount: discountReducer,
  },
});

export default store;
