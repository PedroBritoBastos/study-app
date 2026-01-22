import { Box, Text } from "@chakra-ui/react";

export function ReviewDescription({ reviewName, reviewDescription }: { reviewName: string, reviewDescription: string }) {
  return <Box my={3} bg={"gray.100"} p={4} borderRadius={"md"}>
    <Text bg={"purple.500"} color={"white"} w={"fit-content"} py={1} px={2} borderRadius={"md"} mb={5}>{reviewName}</Text>
    <Text>{reviewDescription}</Text>
  </Box>
}