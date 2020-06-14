import { createReducer } from "@reduxjs/toolkit";
import {
  requestAddContactStart,
  requestAddContactSucsses,
  deleteContactStart,
  deleteContactSucsses,
} from "./actionLoader";

const initialLoader = false;
export const loaderReducer = createReducer(initialLoader, {
  [requestAddContactStart]: (state) => (state = true),
  [requestAddContactSucsses]: (state) => (state = false),
  [deleteContactStart]: (state) => (state = true),
  [deleteContactSucsses]: (state) => (state = false),
});
