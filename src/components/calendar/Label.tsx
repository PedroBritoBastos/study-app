import { Text } from "@chakra-ui/react"

export function Label({ subjectName }: { subjectName: string }) {
  return <>
    <Text fontSize="xs" bg="blue.200" p={1} fontWeight="semibold" letterSpacing={0.5}>{subjectName}</Text>
  </>
}