import { useState } from "react";

// hook para gerenciar o state de SubjectSidebar
export function useSubjectSidebar() {
  const [open, setOpen] = useState<boolean>(false);
  return { open, setOpen };
}
