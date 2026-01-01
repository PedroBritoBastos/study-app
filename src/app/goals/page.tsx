import { Flex, Text } from "@chakra-ui/react"

export default function GoalsPage() {
  return (
    <Flex flex="1"
      p={8}
      bg="#c4bff1"
      direction="column">
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="gray.800"
        mb={6}
      >
        Minhas Metas
      </Text>
    </Flex>
  )
}