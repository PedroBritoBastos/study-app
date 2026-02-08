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
