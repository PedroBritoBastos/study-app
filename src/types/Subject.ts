import { Dispatch, ReactNode, SetStateAction } from "react";

export type SubjectType = {
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
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export type SubjectContextProviderProps = {
  children: ReactNode;
};
