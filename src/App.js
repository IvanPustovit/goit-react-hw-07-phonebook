import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import Axios from "axios";
import { addContact } from "./module/contacts/action";
import {
  contactsSelector,
  errorSelector,
  loaderSelector,
} from "./module/contactsSelectors";
import { requestContactError } from "./module/asyncRedux/actionErrors";
import {
  requestAddContactStart,
  requestAddContactSucsses,
} from "./module/asyncRedux/actionLoader";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.loaderStart();
    Axios.get("http://localhost:3000/contacts")
      .then((resp) =>
        resp.data.map((contact) => this.props.addContact(contact)),
      )
      .then(() => this.props.loaderSucsses())
      .catch((error) => this.props.error());
  }

  render() {
    return (
      <div>
        <CSSTransition
          in={true}
          classNames="phonebook"
          timeout={500}
          mountOnEnter
          unmountOnExit
        >
          <div className="phonebook">
            <h1>Phonebook</h1>
          </div>
        </CSSTransition>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

const mapState = (state) => ({
  contacts: contactsSelector(state),
  error: errorSelector(state),
  loader: loaderSelector(state),
});
const mapDispatch = (dispatch) => ({
  addContact: (value) => dispatch(addContact(value)),
  error: () => dispatch(requestContactError()),
  loaderStart: () => dispatch(requestAddContactStart()),
  loaderSucsses: () => dispatch(requestAddContactSucsses()),
});

export default connect(mapState, mapDispatch)(App);
