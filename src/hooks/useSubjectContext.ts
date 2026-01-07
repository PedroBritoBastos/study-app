import { useContext } from "react";
import { SubjectContext } from "../context/SubjectContext";

// hook para usar o SubjectContext
export function useSubjectContext() {
  const context = useContext(SubjectContext);
  return context;
}
