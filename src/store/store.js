import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import productReducer from "./reducers/productSlice";
import basketReducer from "./reducers/basketSlice";
import navbarReducer from "./reducers/navbarSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    showBasket: basketReducer,
    navbar: navbarReducer
  },
});
