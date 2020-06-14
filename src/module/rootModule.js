import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/reducer";
import { filterReducer } from "./filter/reducer";
import { loaderReducer } from "./asyncRedux/reducerLoader";
import { ErrorReducer } from "./asyncRedux/reducerError";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loader: loaderReducer,
  error: ErrorReducer,
});

export default rootReducer;
