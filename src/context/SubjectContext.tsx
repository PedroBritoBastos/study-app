import {
  createContext,
} from "react";

// types
import { SubjectContextType } from "../types/Subject";
import { SubjectContextProviderProps } from "../types/Subject";

// hook 
import { useSubjectSidebar } from "../hooks/useSubjectSidebar";

// context
export const SubjectContext = createContext<SubjectContextType | null>(null);

// provider
export function SubjectContextProvider({
  children,
}: SubjectContextProviderProps) {
  const { open, setOpen } = useSubjectSidebar();

  return (
    <SubjectContext.Provider value={{ open, setOpen }}>
      {children}
    </SubjectContext.Provider>
  );
}
