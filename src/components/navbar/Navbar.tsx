'use client'

import {
  Flex,
  VStack,
} from "@chakra-ui/react";

import { NavbarOption } from "./NavbarOption";

// hooks
import { useState } from "react";

export function Navbar() {
  const [active, setActive] = useState<number>(1); // starts with content option active

  return (
    <Flex
      w="200px"
      bg="purple.800"
      color="whiteAlpha.900"
      p={6}
      flexDirection="column"
    >
      <VStack gap={4} align="stretch" mt={20}>
        <NavbarOption image="/pencil.png" text="Conteúdos" index={1} active={active} setActive={setActive} />
        <NavbarOption image="/subject-calendar-icon.png" text="Calendário" index={2} active={active} setActive={setActive} />
        <NavbarOption image="/achievements-trophy-icon.png" text="Metas" index={3} active={active} setActive={setActive} />
        <NavbarOption image="/chart.png" text="Dashboards" index={4} active={active} setActive={setActive} />
      </VStack>
    </Flex>
  );
}
