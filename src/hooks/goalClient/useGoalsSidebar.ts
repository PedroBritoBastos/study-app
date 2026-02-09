import { getTasks } from "@/src/services/taskService";
import { GoalType } from "@/src/types/goal";
import { TaskType } from "@/src/types/task";
import { useEffect, useState } from "react";

export function useGoalsSidebar(goal: GoalType) {
  const [tasks, setTasks] = useState(goal.tasks);
  const [addedTask, setAddedTask] = useState({});

  // pega todas as tarefas toda vez que uma nova tarefa é adicionada
  useEffect(() => {
    async function fetchTasks() {
      const data = await getTasks(goal.id);
      setTasks(data);
    }
    fetchTasks();
  }, [addedTask]);

  // atualiza o estado de tarefa adicionada
  function updateAddedTask(task: TaskType): void {
    setAddedTask(task);
  }

  return { updateAddedTask, tasks };
}
