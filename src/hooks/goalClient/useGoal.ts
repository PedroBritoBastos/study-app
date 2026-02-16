import { useState, useEffect } from "react";
import { GoalType } from "@/src/types/goal";
import { getTasks } from "@/src/services/taskService";
import { getDeadline } from "@/src/services/goalService";
import { diffInDays } from "@/src/utilities/dateUtils";

interface UseGoalProps {
  goal: GoalType;
  checkedTask: { taskId: string; isChecked: boolean };
  refresh: { taskId: string; action: string };
  updatedDeadline: { goalId: string; newDeadline: string };
}

export function useGoal({
  goal,
  checkedTask,
  refresh,
  updatedDeadline,
}: UseGoalProps) {
  const [tasks, setTasks] = useState(goal.tasks);
  const [deadline, setDeadline] = useState("");

  // fetch deadline
  useEffect(() => {
    async function fetchDeadline() {
      const response = await getDeadline(goal.id);

      const isoDate = new Date(response.deadline).toISOString().split("T")[0];

      setDeadline(isoDate);
    }

    fetchDeadline();
  }, [updatedDeadline, goal.id]);

  // fetch tasks
  useEffect(() => {
    async function fetchTasks() {
      const response = await getTasks(goal.id);
      setTasks(response);
    }

    fetchTasks();
  }, [checkedTask, refresh, goal.id]);

  // valores derivados
  const allTasks = tasks.length;
  const checkedTasks = tasks.filter((task) => task.isChecked).length;

  const visibleTasks = tasks.slice(0, 3);
  const remainingTasks = tasks.length - 3;

  const daysRemaining = diffInDays(
    new Date().toISOString().split("T")[0],
    deadline,
  );

  return {
    tasks,
    deadline,
    allTasks,
    checkedTasks,
    visibleTasks,
    remainingTasks,
    daysRemaining,
  };
}
