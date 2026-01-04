import {
  Flex,
  Grid,
  Text,
  Button,
  Image
} from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Subject } from "../components/Subject";

export default function Home() {
  return (
    <Flex
      flex="1"
      p={8}
      bg="#ecebf3ff"
      direction="column"
    >
      <Flex align="center" mb={8} gap={6}>
        <Text fontSize="3xl" fontWeight="medium" color="purple.800">Conteúdos</Text>
        <Button bgColor="purple.400" px={8} py={4} d="flex" alignItems="center">
          <Image src="/add-icon.png" alt="Adicionar" />
          Adicionar
        </Button>
      </Flex>

      <Grid
        flex={1}
        templateRows="repeat(3, 1fr)"
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        <Subject subjectName="Portugues" subjectContent="Colocação pronominal" createdAt="22/11/2025" />
        <Subject subjectName="Matematica" subjectContent="Álgebra básica" createdAt="23/11/2025" />
        <Subject subjectName="Historia" subjectContent="Revolução Francesa" createdAt="24/11/2025" />
        <Subject subjectName="Geografia" subjectContent="Climas do Brasil" createdAt="25/11/2025" />
      </Grid>
    </Flex>
  );
}
