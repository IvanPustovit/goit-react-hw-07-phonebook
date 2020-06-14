import { createReducer } from "@reduxjs/toolkit";
import { inputHandlerFilters } from "../filter/action";

export const filterReducer = createReducer("", {
  [inputHandlerFilters]: (state, action) => action.payload,
});
