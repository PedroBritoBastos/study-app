"use client"

import { Box } from "@chakra-ui/react";

// componente cliente responsável por abrir e fechar a sidebar
export function SubjectSidebarContent() {
  return (
    <Box w={300} bg="red.200" h="100vh" pos="absolute" right={0} top={0} zIndex={2}>
      Sidebar
    </Box>
  )
}