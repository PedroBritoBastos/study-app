"use client"
import { Box, Presence } from "@chakra-ui/react";

// hook
import { useSubjectContext } from "@/src/hooks/useSubjectContext";

// client component responsavel por exibir os dados do componente Subject
export function SubjectSidebar() {
  const { open, selectedSubject } = useSubjectContext(); // desestruturando o contexto
  return (
    <Presence present={open}>
      <Box w={300} bg={"red.200"} h={"100vh"} pos={"absolute"} top={0} right={0}>
        <h1>{selectedSubject.title}</h1>
      </Box>
    </Presence>
  )
}