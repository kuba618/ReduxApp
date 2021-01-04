const INITIAL_STATE = {
  todos: [
    {
      id: "1",
      title: "Tralala",
      completed: false,
    },
    {
      id: "2",
      title: "Czikitita",
      completed: false,
    },
    {
      id: "3",
      title: "Gimme",
      completed: false,
    },
  ],
};

export default function todosReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "MARK_COMPLETED":
      const newState = state.todos.map((entry) => {
        let temp = Object.assign({}, entry);
        if (temp.id === action.payload.id) {
          temp.completed = action.payload.value;
        }
        return temp;
      });
      return { todos: newState };
    default:
      return state;
  }
}

export const selectTodos = (state) => state.todos;
