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

// deleta o conteudo atual
export async function deleteSubject(id: string): Promise<void> {
  const response = await fetch(`/api/subjects/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao deletar conteúdo");
  }
}
