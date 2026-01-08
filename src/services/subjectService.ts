import { SubjectDataType } from "../types/Subject";

// cria uma matéria
export async function createSubject(data: SubjectDataType): Promise<void> {
  const response = await fetch("/api/subjects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar conteúdo");
  }
}

// pega a matéria pelo id
export async function getSubjectById(id: string): Promise<SubjectDataType> {
  const response = await fetch(`/api/subjects/${id}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar conteúdo");
  }

  const data: SubjectDataType = await response.json();
  return data;
}

// deleta o conteudo atual
export async function deleteSubject(id: string): Promise<void> {
  const response = await fetch(`/api/subjects/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao deletar conteúdo");
  }
}
