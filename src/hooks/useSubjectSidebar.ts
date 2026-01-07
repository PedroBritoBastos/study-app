import { useState } from "react";

// types
import { SubjectResponse } from "../types/Subject";

// hook para gerenciar o state de SubjectSidebar
export function useSubjectSidebar() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] =
    useState<SubjectResponse | null>(null);

  // funcao que abre e fecha a sidebar
  function updateSubjectSidebarState() {
    if (!open) setOpen(true);
  }

  return {
    open,
    updateSubjectSidebarState,
    selectedSubject,
    setSelectedSubject,
  };
}
