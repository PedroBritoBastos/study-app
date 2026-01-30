'use client'

import {
  Flex,
  Stack,
} from "@chakra-ui/react";

import { styles } from "../../styles/navbar/navbar.styles";

// components
import { NavbarOption } from "../navbar/NavbarOption";
import { Calendar, ChartColumnDecreasing, Goal, Pencil } from "lucide-react";

export function Navbar() {
  return <Flex {...styles.container}>
    <Stack {...styles.optionsContainer}>
      <NavbarOption name="Conteúdos" url="/">
        <Pencil />
      </NavbarOption>
      <NavbarOption name="Calendário" url="/calendar">
        <Calendar />
      </NavbarOption>
      <NavbarOption name="Metas" url="/">
        <Goal />
      </NavbarOption>
      <NavbarOption name="Dashboards" url="/">
        <ChartColumnDecreasing />
      </NavbarOption>
    </Stack>
  </Flex>
}