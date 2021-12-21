import { TaskRecord } from "./task";

export type AddTaskFormContent = Pick<TaskRecord, "title" | "description">;

export type EditTaskFormContent = Pick<
  TaskRecord,
  "title" | "description" | "status"
>;