'use client'

import {
  Box,
  VStack,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";

export function Navbar() {
  return (
    <Box
      w="250px"
      bg="purple.900"
      color="whiteAlpha.900"
      p={6}
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        mb={8}
        letterSpacing="wide"
      >
        Menu
      </Text>

      <VStack gap={4} align="stretch">
        <Button
          bg="purple.600"
          _hover={{ bg: "purple.500" }}
          display="flex"
          justifyContent="flex-start"
          gap={3}
        >
          <Image src="/pencil.png" boxSize="20px" />
          Matérias
        </Button>

        <Button
          bg="purple.600"
          _hover={{ bg: "purple.500" }}
          display="flex"
          justifyContent="flex-start"
          gap={3}
        >
          <Image src="/subject-calendar-icon.png" boxSize="20px" />
          Calendário
        </Button>

        <Button
          bg="purple.600"
          _hover={{ bg: "purple.500" }}
          display="flex"
          justifyContent="flex-start"
          gap={3}
        >
          <Image src="/achievements-trophy-icon.png" boxSize="20px" />
          Metas
        </Button>

        <Button
          bg="purple.600"
          _hover={{ bg: "purple.500" }}
          display="flex"
          justifyContent="flex-start"
          gap={3}
        >
          <Image src="/chart.png" boxSize="20px" />
          Dashboards
        </Button>
      </VStack>
    </Box>
  );
}
