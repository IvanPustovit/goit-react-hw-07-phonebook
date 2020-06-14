import { createAction } from "@reduxjs/toolkit";

export const requestAddContactStart = createAction("REQUEST_ADD_CONTACT_START");
export const requestAddContactSucsses = createAction(
  "REQUEST_ADD_CONTACT_SUCSSES",
);

export const deleteContactStart = createAction("DELETE_CONTACT_START");
export const deleteContactSucsses = createAction("DELETE_CONTACT_SUCSSES");
