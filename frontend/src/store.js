import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
// import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  // enable Redux DevTools if browser extension is installed
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(...middleware)
      )
    : applyMiddleware(...middleware)
);

export default store;
