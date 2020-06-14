import { createAction } from "@reduxjs/toolkit";

export const requestContactError = createAction("REQUEST_CONTACT_ERROR");
export const requestContactErrorReset = createAction(
  "REQUEST_CONTACT_ERROR_RESET",
);

export const deleteContactError = createAction("DELETE_CONTACT_ERROR");
export const deleteContactErrorReset = createAction(
  "DELETE_CONTACT_ERROR_RESET",
);
