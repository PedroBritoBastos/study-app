import { Text } from "@chakra-ui/react"

export function Label({ subjectName }: { subjectName: string }) {
  return <>
    <Text textAlign={"center"} fontSize="xs" bg="purple.500" color={"white"} p={1} fontWeight="semibold" letterSpacing={0.5} borderRadius={"sm"}>{subjectName}</Text>
  </>
}