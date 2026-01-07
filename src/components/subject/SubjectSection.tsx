import { SubjectGrid } from "./SubjectGrid";

// types
import { SubjectResponse } from "@/src/types/Subject"

// server component responsavel por pegar os dados da API
// vai passar os dados para a SubjectGrid
export async function SubjectSection() {
  // pegando os conteudos do banco pela api
  const res = await fetch("http://localhost:3000/api/subjects", {
    cache: "no-store",
  });
  // armazenando os dados do banco
  const subjects: SubjectResponse[] = await res.json();
  return (
    <>
      <SubjectGrid subjects={subjects} />
    </>
  )
}