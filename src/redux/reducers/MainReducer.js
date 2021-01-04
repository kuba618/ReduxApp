import { combineReducers } from "redux";
import counterReducer from "./TodosReducer";

export default combineReducers({
  todos: counterReducer,
});
