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
    case "ADD":
      let arrayLen = state.todos.length + 1;
      // console.log(state.todos);
      // let array = [...state.todos];
      state.todos.push({
        id: arrayLen.toString(),
        completed: false,
        title: action.payload.value,
      });
      // console.log(array);
      // console.log(state.todos);
      return state;
    default:
      return state;
  }
}

export const selectTodos = (state) => state.todos;

export const numberOfTodos = (state) => state.todos.todos.length;
