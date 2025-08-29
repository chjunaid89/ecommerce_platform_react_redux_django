import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  // enable Redux DevTools if browser extension is installed
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(...middleware)
      )
    : applyMiddleware(...middleware)
);

export default store;
