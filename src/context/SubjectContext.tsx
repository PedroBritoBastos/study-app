import {
  createContext,
} from "react";

// types
import { SubjectContextType } from "../types/Subject";
import { SubjectContextProviderProps } from "../types/Subject";

// hook 
import { useSubjectSidebar } from "../hooks/useSubjectSidebar";
import { useConfirmModal } from "../hooks/useConfirmModal";

// context
export const SubjectContext = createContext<SubjectContextType | null>(null);

// provider
export function SubjectContextProvider({
  children,
}: SubjectContextProviderProps) {
  const { open, updateSubjectSidebarState, selectedSubject, setSelectedSubject, closeSubjectSidebar } = useSubjectSidebar();
  const { openConfirmModal, closeConfirmModal, getConfirmModalState } = useConfirmModal();

  return (
    <SubjectContext.Provider value={{ open, updateSubjectSidebarState, selectedSubject, setSelectedSubject, closeSubjectSidebar, openConfirmModal, closeConfirmModal, getConfirmModalState }}>
      {children}
    </SubjectContext.Provider>
  );
}
