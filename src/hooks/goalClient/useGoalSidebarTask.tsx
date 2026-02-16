import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { TaskType } from "@/src/types/task";
import {
  deleteTask,
  checkTask,
  getTaskStatus,
} from "@/src/services/taskService";

interface UseGoalSidebarTaskProps {
  task: TaskType;
  updateDeletedTask: (task: TaskType) => void;
  updateCheckedTask: (taskId: string, isChecked: boolean) => void;
  refreshGoal: (taskId: string, action: string) => void;
}

export function useGoalSidebarTask({
  task,
  updateDeletedTask,
  updateCheckedTask,
  refreshGoal,
}: UseGoalSidebarTaskProps) {

  const [checked, setChecked] = useState(false);
  const [checkedTask, setCheckedTask] = useState(false);

  const router = useRouter();

  async function handleDeleteTask() {
    const response = await deleteTask(task.id);
    updateDeletedTask(response);
    refreshGoal(response.id, "delete");
    router.refresh();
  }

  async function handleCheckTask() {
    const response = await checkTask(task.id, checked);

    const newValue = !checked;
    setCheckedTask(!checkedTask);

    updateCheckedTask(task.id, newValue);
  }

  useEffect(() => {
    async function fetchTaskStatus() {
      const status = await getTaskStatus(task.id);
      setChecked(status);
    }

    fetchTaskStatus();
  }, [checkedTask]);

  return {
    checked,
    handleDeleteTask,
    handleCheckTask,
  };
}
