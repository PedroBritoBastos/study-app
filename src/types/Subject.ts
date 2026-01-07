import { Dispatch, ReactNode, SetStateAction } from "react";

export type SubjectProps = {
  subjectName: string;
  subjectContent?: string;
  createdAt?: string;
  id?: string;
};

export type SubjectGridProps = {
  subjects: SubjectResponse[];
};

export type SubjectDataType = {
  title: string;
  content: string;
};

export type SubjectResponse = {
  id: string;
  title: string;
  content: string;
  currentDate: string;
};

export type SubjectContextType = {
  open: boolean;
  updateSubjectSidebarState: Dispatch<SetStateAction<boolean>>;
  selectedSubject: SubjectResponse | null;
  setSelectedSubject: Dispatch<SetStateAction<SubjectResponse | null>>;
};

export type SubjectContextProviderProps = {
  children: ReactNode;
};
