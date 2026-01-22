import { Box } from "@chakra-ui/react"

export function Review({ subjectName }: { subjectName: string }) {
  return (
    <Box flex={1} bg={"white"} p={5} borderRadius="xl"
      border="1px solid"
      borderColor="gray.200"
    >
      {subjectName}
    </Box>
  )
}
