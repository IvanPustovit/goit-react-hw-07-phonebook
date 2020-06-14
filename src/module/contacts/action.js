import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("ADD_CONTACT");

export const deleteContacts = createAction("DELETE_CONTACT");

export const getLocalStorage = createAction("GET_LOCALSTORAGE");
