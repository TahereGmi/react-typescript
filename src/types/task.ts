export enum TaskStatus {
    ToDo = "To Do",
    InProgress = "In Progress",
    Blocked = "Blocked",
    InQA = "In QA",
    Done = "Done",
    Deployed = "Deployed",
  }
  
  export interface TaskChangeStatusHistoryRecord {
    from: TaskStatus;
    to: TaskStatus;
  }
  
  export interface TaskRecord {
    id: number | undefined;
    title: string;
    description: string;
    status: TaskStatus;
    changeStatusHistory: TaskChangeStatusHistoryRecord[];
  }
  