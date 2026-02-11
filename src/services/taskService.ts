import { TaskType } from "../types/task";

type TaskData = {
  title: string;
  goalId: string;
};

// cria uma task no Goal do User
export async function createTask(data: TaskData) {
  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar tarefa");
  }

  return response.json();
}

// busca todas as tasks do Goal
export async function getTasks(goalId: string): Promise<TaskType[]> {
  const response = await fetch(`/api/tasks?goalId=${goalId}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar tarefas");
  }

  return response.json();
}

// deleta uma task pelo ID
export async function deleteTask(id: string) {
  const response = await fetch(`/api/tasks/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao deletar tarefa");
  }

  return response.json();
}
