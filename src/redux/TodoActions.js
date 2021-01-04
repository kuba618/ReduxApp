export const markCompleted = (id, value) => ({
  type: "MARK_COMPLETED",
  payload: { id, value },
});
