"use client"

// components
import { SubjectList } from "./SubjectList"

// types
import { SubjectGridProps } from "@/src/types/Subject"

// context
import { SubjectContextProvider } from "@/src/context/SubjectContext"

// client component responsavel por prover o contexto 
export function SubjectGrid({ subjects }: SubjectGridProps) {
  return <>
    <SubjectContextProvider>
      <SubjectList subjects={subjects} />
    </SubjectContextProvider>
  </>
}