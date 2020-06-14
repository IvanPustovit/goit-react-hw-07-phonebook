import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import Contact from "../Contact/Contact";

import "./ContactList.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  contactsSelector,
  filterSelector,
  loaderSelector,
  errorSelector,
} from "../../module/contactsSelectors";
const ContactList = () => {
  const contacts = useSelector((state) => contactsSelector(state));
  const filter = useSelector((state) => filterSelector(state));
  const loader = useSelector((state) => loaderSelector(state));
  const errorAxios = useSelector((state) => errorSelector(state));

  const getFilterContacts = (filter, contacts) =>
    contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  const filteredContacts = getFilterContacts(filter, contacts);

  return (
    <div>
      {loader ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      ) : (
        <TransitionGroup component="ul">
          {filteredContacts.length
            ? filteredContacts.map((contact) => (
                <CSSTransition
                  key={contact.id}
                  classNames="list-item"
                  timeout={250}
                  mountOnEnter
                  unmountOnExit
                >
                  <li className="list-item">
                    <Contact {...contact} />
                  </li>
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact.name}
                  classNames="list-item"
                  timeout={250}
                  mountOnEnter
                  unmountOnExit
                >
                  <li className="list-item">
                    <Loader
                      type="Puff"
                      color="#00BFFF"
                      height={100}
                      width={100}
                      timeout={3000} //3 secs
                    />
                    <Contact {...contact} />
                  </li>
                </CSSTransition>
              ))}
        </TransitionGroup>
      )}
      {errorAxios && <p>...UPS, Plisse refresh</p>}
    </div>
  );
};

export default ContactList;
