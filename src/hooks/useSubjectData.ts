import { useState } from "react";
import { useGetSubjectById } from "./useGetSubjectById";
import { getSubjectById } from "../services/subjectService";

// hook para gerenciar o state dos dados em SubjectSidebar
export function useSubjectData() {
  const [data, setData] = useState({});
}
