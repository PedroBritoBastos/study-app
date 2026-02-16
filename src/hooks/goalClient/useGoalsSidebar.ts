import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { GoalType } from "@/src/types/goal";
import { getTasks } from "@/src/services/taskService";
import { deleteGoal } from "@/src/services/goalService";

interface UseGoalsSidebarProps {
  closeSidebar: () => void;
  goal: GoalType;
  updateCheckedTask: (taskId: string, isChecked: boolean) => void;
}

export function useGoalsSidebar({
  closeSidebar,
  goal,
  updateCheckedTask,
}: UseGoalsSidebarProps) {
  const router = useRouter();

  const [goalTasks, setGoalTasks] = useState(goal.tasks);
  const [addedTask, setAddedTask] = useState({});
  const [deletedTask, setDeletedTask] = useState({});
  const [checkedTask, setCheckedTask] = useState<{
    taskId: string;
    isChecked: boolean;
  } | null>(null);

  function handleCheckedTask(taskId: string, isChecked: boolean) {
    setCheckedTask({ taskId, isChecked });
    updateCheckedTask(taskId, isChecked);
  }

  function updateDeletedTask(task) {
    setDeletedTask(task);
  }

  function handleAddTask(task) {
    setAddedTask(task);
  }

  useEffect(() => {
    setGoalTasks(goal.tasks);
  }, [goal]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await getTasks(goal.id);
      setGoalTasks(response);
    }
    fetchTasks();
  }, [addedTask]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await getTasks(goal.id);
      setGoalTasks(response);
    }
    fetchTasks();
  }, [deletedTask]);

  useEffect(() => {
    if (!checkedTask) return;

    async function fetchTasks() {
      const response = await getTasks(goal.id);
      setGoalTasks(response);
    }

    fetchTasks();
  }, [checkedTask]);

  async function handleDeleteGoal() {
    const response = await deleteGoal(goal.id);
    router.refresh();
    closeSidebar();
  }

  const allTasks = goalTasks.length;
  const checkedTasks = goalTasks.filter((task) => task.isChecked).length;

  return {
    goalTasks,
    handleCheckedTask,
    updateDeletedTask,
    handleAddTask,
    handleDeleteGoal,
    allTasks,
    checkedTasks,
  };
}
