import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { ToastContainer } from "react-toastify";
import { asyncAddContact } from "../../module/asyncRedux/actionContacts";
import "react-toastify/dist/ReactToastify.css";

import classes from "./ContactForm.module.css";
import { contactsSelector } from "../../module/contactsSelectors";

const formInitial = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(formInitial);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => contactsSelector(state));

  const notifyB = () => {
    toast(`${form.name} is already in contacts`);
  };

  const contactsId = shortid.generate();

  const inputHandlerContact = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const addToContacts = (e) => {
    e.preventDefault();
    const { name } = form;
    if (
      contacts.find(
        (contact) =>
          contact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
      )
    ) {
      notifyB();
    } else {
      dispatch(asyncAddContact(form));
      setForm(formInitial);
    }
    setForm(formInitial);
  };

  return (
    <div className={classes.form}>
      <form autoComplete="off" onSubmit={addToContacts}>
        <label className={classes["label-name"]} htmlFor={contactsId}>
          Name
          <input
            name="name"
            id={contactsId}
            type="text"
            value={form.name}
            onChange={inputHandlerContact}
          />
        </label>

        <label className={classes["label-name"]}>
          Number
          <input
            name="number"
            type="text"
            value={form.number}
            onChange={inputHandlerContact}
          />
        </label>

        <div>
          <button type="submit">Add contact</button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
