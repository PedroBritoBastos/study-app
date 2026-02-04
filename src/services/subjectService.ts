import { SubjectType } from "@/types/subject";

type SubjectData = {
  title: string;
  content: string;
};

// cria uma matéria
export async function createSubject(data: SubjectData): Promise<void> {
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
export async function getSubjectById(id: string): Promise<SubjectType> {
  const response = await fetch(`/api/subjects/${id}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar conteúdo");
  }

  const data: SubjectType = await response.json();
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

// retorna todas as materias
export async function getSubjects() {
  const res = await fetch("/api/subjects", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar subjects");
  }

  const subjects: SubjectType[] = await res.json();
  return subjects;
}
