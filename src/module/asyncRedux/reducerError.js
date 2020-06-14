import { createReducer } from "@reduxjs/toolkit";
import {
  requestContactError,
  requestContactErrorReset,
  deleteContactError,
  deleteContactErrorReset,
} from "./actionErrors";

const initialError = false;
export const ErrorReducer = createReducer(initialError, {
  [requestContactError]: (state) => (state = true),
  [requestContactErrorReset]: (state) => (state = false),
  [deleteContactError]: (state) => (state = true),
  [deleteContactErrorReset]: (state) => (state = false),
});
