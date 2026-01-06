import { SubjectDataType } from "../types/Subject";

export async function createSubject(data: SubjectDataType) {
  const response = await fetch("/api/subjects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar conteúdo");
  }
}
