// cria um goal
export async function create(title: string) {
  // envia para a api
  const response = await fetch("/api/goals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar meta");
  }

  return response.json();
}

// deleta um goal
export async function deleteGoal(id: string) {
  // envia para a api
  const response = await fetch(`/api/goals/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao deletar meta");
  }

  return response.json();
}
