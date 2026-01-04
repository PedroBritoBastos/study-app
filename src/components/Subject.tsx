import { Card, Text, Flex, Image, Box } from "@chakra-ui/react";
import { SubjectType } from "../types/Subject";

export function Subject({
  subjectName,
  subjectContent,
  createdAt,
}: SubjectType) {
  return (
    <Card.Root
      bg="white"
      borderRadius="xl"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
    >
      <Card.Body p={5}>
        {/* Header / Título */}
        <Box
          pb={3}
          mb={3}
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="gray.800"
          >
            {subjectName}
          </Text>
        </Box>

        {/* Data */}
        <Flex align="center" gap={2} mb={3}>
          <Image
            src="/subject-calendar-icon.png"
            boxSize="16px"
            opacity={0.7}
          />
          <Text fontSize="sm" color="gray.500">
            {createdAt}
          </Text>
        </Flex>

        {/* Conteúdo */}
        <Text
          fontSize="sm"
          color="gray.600"
          lineHeight="tall"
        >
          {subjectContent}
        </Text>
      </Card.Body>
    </Card.Root>
  );
}
