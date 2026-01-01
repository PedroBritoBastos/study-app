'use client'

import {
  Flex,
  Text,
  Grid,
  Card,
} from "@chakra-ui/react";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex
      flex="1"

      bg="#c4bff1"
      direction="column"
    >
      <Header title={"Conteúdo estudado"} />

      <Grid
        flex={1}
        p={8}
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
  );
}
