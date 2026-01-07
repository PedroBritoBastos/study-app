"use client"

import { Grid } from "@chakra-ui/react"
import { Subject } from "./Subject"

// types
import { SubjectGridProps } from "@/src/types/Subject"

// grid para armazenar os conteudos
// recebe a lista de conteudos
export function SubjectList({ subjects }: SubjectGridProps) {
  return (
    <Grid
      flex={1}
      templateRows="repeat(3, 1fr)"
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={6}
    >
      {subjects.map((subject) => (
        <Subject
          key={subject.id}
          subjectName={subject.title}
          subjectContent={subject.content}
          createdAt={new Date(subject.currentDate).toLocaleDateString("pt-BR")}
        />
      ))}
    </Grid>
  )
}