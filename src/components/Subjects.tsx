import { Grid } from "@chakra-ui/react";
import { Subject } from "./Subject";

import { SubjectResponse } from "../types/Response";

export async function Subjects() {
  const response = await fetch("http://localhost:3000/api/subjects", {
    cache: "no-store",
  });

  const subjects: SubjectResponse[] = await response.json();

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
  );
}
