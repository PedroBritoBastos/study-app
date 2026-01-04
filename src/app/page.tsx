import {
  Flex,
  Grid,
} from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Subject } from "../components/Subject";

export default function Home() {
  return (
    <Flex
      flex="1"

      bg="#c4bff1"
      direction="column"
    >
      <Header title={"Conteúdos"} />

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
        <Subject subjectName="Portugues" subjectContent="Colocação pronominal" createdAt="22/11/2025" />
        <Subject subjectName="Matematica" subjectContent="Álgebra básica" createdAt="23/11/2025" />
        <Subject subjectName="Historia" subjectContent="Revolução Francesa" createdAt="24/11/2025" />
        <Subject subjectName="Geografia" subjectContent="Climas do Brasil" createdAt="25/11/2025" />
      </Grid>
    </Flex>
  );
}
