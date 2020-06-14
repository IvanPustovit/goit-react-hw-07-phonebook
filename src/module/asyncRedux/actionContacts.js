import axios from "axios";
import { addContact, deleteContacts } from "../contacts/action";
import {
  requestAddContactStart,
  requestAddContactSucsses,
  deleteContactStart,
  deleteContactSucsses,
} from "./actionLoader";
import {
  requestContactError,
  requestContactErrorReset,
  deleteContactErrorReset,
  deleteContactError,
} from "./actionErrors";

const option = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const asyncAddContact = (payload) => async (dispatch) => {
  dispatch(requestAddContactStart());
  try {
    dispatch(requestContactErrorReset());
    const result = await axios.post(
      "http://localhost:3000/contacts",
      payload,
      option,
    );
    dispatch(addContact(result.data));
  } catch (error) {
    dispatch(requestContactError());
  } finally {
    dispatch(requestAddContactSucsses());
  }
};

export const asyncDeleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactStart());
  try {
    dispatch(deleteContactErrorReset());
    await axios.delete(`http://localhost:3000/contacts/${id}`);
    dispatch(deleteContacts(id));
  } catch (error) {
    dispatch(deleteContactError());
  } finally {
    dispatch(deleteContactSucsses());
  }
};
