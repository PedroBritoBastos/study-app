'use client'

import {
  Box,
  Flex,
  VStack,
  Button,
  Text,
  Image,
  Grid,
  Card,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex minH="100vh">
      {/* Sidebar */}
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

      {/* Conteúdo principal */}
      <Flex
        flex="1"
        p={8}
        bg="#c4bff1"
        direction="column"
      >
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="gray.800"
          mb={6}
        >
          Home
        </Text>

        {/* Grid */}
        <Grid
          flex={1}
          templateRows="repeat(2, 1fr)"
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          <Card.Root>
            <Card.Body>
              <Text fontSize="lg" fontWeight="semibold">
                Título do Card
              </Text>
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Body>
              <Text fontSize="lg" fontWeight="semibold">
                Título do Card
              </Text>
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Body>
              <Text fontSize="lg" fontWeight="semibold">
                Título do Card
              </Text>
            </Card.Body>
          </Card.Root>
        </Grid>
      </Flex>
    </Flex>
  );
}
