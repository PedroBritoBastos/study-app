import { Flex } from "@chakra-ui/react";
import { Subjects } from "../components/Subjects";
import { HomeClient } from "../components/HomeClient";

export default function Home() {
  return (
    <Flex
      flex="1"
      p={8}
      bg="#ecebf3ff"
      direction="column"
      position="relative"
    >
      {/* Parte interativa */}
      <HomeClient />

      {/* Dados vindos do servidor */}
      <Subjects />
    </Flex>
  );
}
