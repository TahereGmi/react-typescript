import { AddTaskFormContent, EditTaskFormContent } from "./formContent";
import { OrderedMap } from "immutable";
import { TaskRecord } from "./task";

export type AppState = OrderedMap<TaskRecord["id"], TaskRecord>;

export interface AppActions {
  addTask: (formContent: AddTaskFormContent) => void;
  updateTask: (taskId: number, formContent: EditTaskFormContent) => void;
}
