import { SubjectGrid } from "./SubjectGrid";

// types
import { SubjectResponse } from "@/src/types/Subject"

// services
import { getSubjects } from "@/src/services/subjectService";

// server component responsavel por pegar os dados da API
// vai passar os dados para a SubjectGrid
export async function SubjectSection() {
  // pegando os conteudos do banco pela api
  const subjects: SubjectResponse[] = await getSubjects();

  return (
    <>
      <SubjectGrid subjects={subjects} />
    </>
  )
}