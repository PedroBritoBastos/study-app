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
  try {
    const response = await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });
    return response.json();
  } catch (error) {
    return error;
  }
}

// marca uma task como concluída (isChecked = true)
export async function checkTask(id: string, checked: boolean) {
  const response = await fetch(`/api/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isChecked: !checked }),
  });

  if (!response.ok) {
    throw new Error("Erro ao marcar tarefa como concluída");
  }

  return response.json();
}

// busca o status isChecked de uma task pelo ID
export async function getTaskStatus(id: string): Promise<boolean> {
  const response = await fetch(`/api/tasks/status/${id}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar status da tarefa");
  }

  const data = await response.json();
  return data.isChecked;
}
