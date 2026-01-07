"use client"
import { Box, Presence } from "@chakra-ui/react"

// hook
import { useSubjectContext } from "../hooks/useSubjectContext"

export function SubjectContent() {
  const { open } = useSubjectContext();

  return (
    <Presence present={open}>
      <Box w={300} bg="red.200" pos="absolute" top={0} right={0} h="100vh">
        sidebar
      </Box>
    </Presence>
  )
}