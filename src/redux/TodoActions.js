export const markCompleted = (id, value) => ({
  type: "MARK_COMPLETED",
  payload: { id, value },
});

export const addTodo = (todo) => ({
  type: "ADD",
  payload: todo,
});
