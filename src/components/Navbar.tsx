'use client'

import {
  Flex,
  VStack,
} from "@chakra-ui/react";

import { NavbarOption } from "./NavbarOption";

export function Navbar() {
  return (
    <Flex
      w="250px"
      bg="purple.800"
      color="whiteAlpha.900"
      p={6}
      flexDirection="column"
    >
      <VStack gap={4} align="stretch" mt={20}>
        <NavbarOption image="/pencil.png" text="Conteúdos" />
        <NavbarOption image="/subject-calendar-icon.png" text="Calendário" />
        <NavbarOption image="/achievements-trophy-icon.png" text="Metas" />
        <NavbarOption image="/chart.png" text="Dashboards" />
      </VStack>
    </Flex>
  );
}
