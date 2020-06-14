import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContacts, getLocalStorage } from "./action";


const initialState = [];
export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContacts]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  [getLocalStorage]: (state, action) =>
    !action.payload ? state : action.payload,
});
