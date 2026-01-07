import { Dispatch, ReactNode, SetStateAction } from "react";

export type SubjectProps = {
  subjectName: string;
  subjectContent?: string;
  createdAt?: string;
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
};

export type SubjectContextProviderProps = {
  children: ReactNode;
};
