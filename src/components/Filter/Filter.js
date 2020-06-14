import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { inputHandlerFilters } from "../../module/filter/action";

import "./Filter.css";
import { contactsSelector } from "../../module/contactsSelectors";

const Filter = () => {
  const contacts = useSelector((state) => contactsSelector(state));
  const dispatch = useDispatch();

  const inputHandlerFilter = (e) => {
    const value = e.target.value;
    dispatch(inputHandlerFilters(value));
  };

  return (
    <TransitionGroup>
      {contacts.length > 1 && (
        <CSSTransition
          timeout={250}
          classNames="filter"
          mountOnEnter
          unmountOnExit
        >
          <div className="filter">
            <p>Find contacts by name</p>
            <input name="filter" type="text" onChange={inputHandlerFilter} />
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default Filter;
