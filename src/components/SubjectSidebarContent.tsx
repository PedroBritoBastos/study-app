"use client"

import { SubjectContent } from "./SubjectContent";

//context
import { SubjectContextProvider } from "../context/SubjectContext";

// componente cliente responsável por abrir e fechar a sidebar
export function SubjectSidebarContent() {
  return (
    <SubjectContextProvider>
      <SubjectContent />
    </SubjectContextProvider>
  )
}