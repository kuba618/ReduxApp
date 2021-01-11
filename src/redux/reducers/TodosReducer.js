import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  todos: [
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6c",
      title: "Tralala",
      completed: false,
    },
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b",
      title: "Czikitita",
      completed: false,
    },
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a",
      title: "abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz",
      completed: false,
    },
  ],
};

export default function todosReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "MARK_COMPLETED":
      let newState = state.todos.map((entry) => {
        let temp = Object.assign({}, entry);
        if (temp.id === action.payload.id) {
          temp.completed = action.payload.value;
        }
        return temp;
      });
      return { todos: newState };
    case "ADD":
      state.todos.push({
        id: uuidv4(),
        completed: false,
        title: action.payload.value,
      });
      return state;
    case "REMOVE":
      state.todos.splice(state.todos.indexOf(action.payload.item), 1);
      return state;
    default:
      return state;
  }
}

export const selectTodos = (state) => state.todos;

export const numberOfTodos = (state) =>
  state.todos.todos.filter((el) => el.completed === false).length;
