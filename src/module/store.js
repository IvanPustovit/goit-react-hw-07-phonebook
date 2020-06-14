import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootModule from "./rootModule";

const middleware = [thunk];
const compose = composeWithDevTools(applyMiddleware(...middleware));

const store = configureStore({
  reducer: rootModule,
  devTools: compose,
});

export default store;
