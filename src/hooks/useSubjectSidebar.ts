import { useState } from "react";

// hook para gerenciar o state de SubjectSidebar
export function useSubjectSidebar() {
  const [open, setOpen] = useState<boolean>(false);

  // funcao que abre e fecha a sidebar
  function updateSubjectSidebarState() {
    setOpen(!open);
  }

  return { open, updateSubjectSidebarState };
}
