import { Text } from "@chakra-ui/react"

export function Header({ title }: { title: string }) {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      color="white"
      bg="purple.700"
      px={10}
      py={5}
      width="full"
      boxShadow="md"
    >
      {title}
    </Text>
  )
}