import React from "react";
import { useDispatch } from "react-redux";
import { asyncDeleteContact } from "../../module/asyncRedux/actionContacts";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deleteContact = () => dispatch(asyncDeleteContact(id));

  return (
    <>
      <p>{name}</p>
      <p>{number}</p>

      <button type="button" id={id} className="delete" onClick={deleteContact}>
        X
      </button>
    </>
  );
};

export default Contact;
