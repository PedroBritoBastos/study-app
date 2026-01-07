"use client"

import { SubjectCard } from "./SubjectCard";

// types
import { SubjectProps } from "../types/Subject";

// context
import { SubjectContextProvider } from "../context/SubjectContext";

export function Subject({
  subjectName,
  subjectContent,
  createdAt,
}: SubjectProps) {
  return (
    <SubjectContextProvider>
      <SubjectCard subjectName={subjectName} subjectContent={subjectContent} createdAt={createdAt} />
    </SubjectContextProvider>
  );
}
