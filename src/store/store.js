import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import productReducer from './reducers/productSlice';
import basketReducer from './reducers/basketSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    showBasket: basketReducer
  },
});