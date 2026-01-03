import { Card, Text } from "@chakra-ui/react";

import { SubjectType } from "../types/Subject";

export function Subject({ subjectName }: SubjectType) {
  return (
    <Card.Root>
      <Card.Body>
        <Text fontSize="lg" fontWeight="semibold">
          {subjectName}
        </Text>
      </Card.Body>
    </Card.Root>)
}