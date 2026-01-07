import { Flex } from "@chakra-ui/react";
import { HomeClient } from "../components/homeClient/HomeClient";
import { SubjectSection } from "../components/subject/SubjectSection";

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
      <SubjectSection />
    </Flex>
  );
}
