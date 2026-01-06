import { SubjectDataType } from "../types/Subject";

export function useCreateSubject() {
  async function createSubject(data: SubjectDataType) {
    const response = await fetch("/api/subjects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar conteúdo");
    }
  }

  return { createSubject };
}
