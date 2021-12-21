import { AddTaskFormContent, EditTaskFormContent } from "types/formContent";

export const addTask = (formContent: AddTaskFormContent) => ({
  type: "addTask" as "addTask",
  payload: formContent,
});
export type AddTaskAction = ReturnType<typeof addTask>;

export const editTask = (taskId: number, formContent: EditTaskFormContent) => ({
  type: "editTask" as "editTask",
  taskId,
  payload: formContent,
});
export type EditTaskAction = ReturnType<typeof editTask>;
