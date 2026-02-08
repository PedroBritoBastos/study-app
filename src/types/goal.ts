import { TaskType } from "./task";

export interface GoalType {
  id: string;
  title: string;
  userId: string;
  tasks: TaskType[];
}
