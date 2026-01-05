'use client'

import {
  Flex,
  Grid,
  Text,
  Image,
  Presence
} from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Subject } from "../components/Subject";
import { Modal } from "../components/Modal";
import { Button as CreateButton } from "../components/Button";

import { useModal } from "../hooks/useModal";

export default function Home() {
  // recuperando a funcao para atualizar a visibilidade do modal
  const { open, updateModalState } = useModal();

  return (
    <Flex
      flex="1"
      p={8}
      bg="#ecebf3ff"
      direction="column"
      position="relative"
    >
      <Flex align="center" mb={8} gap={6}>
        <Text fontSize="3xl" fontWeight="medium" color="purple.800">Conteúdos</Text>
        <CreateButton handleClick={updateModalState} />
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

      {/* modal só aparece quando o botão de criar for pressionado */}
      <Presence present={open}>
        <Modal />
      </Presence>
    </Flex>
  );
}
