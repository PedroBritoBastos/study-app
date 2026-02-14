'use client'

import {
  Flex,
  Stack,
  Button
} from "@chakra-ui/react";

import { styles } from "../../styles/navbar/navbar.styles";

// components
import { NavbarOption } from "../navbar/NavbarOption";
import { Calendar, ChartColumnDecreasing, Goal, Pencil } from "lucide-react";

// hooks
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/hooks/useAuth";

export function Navbar() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleClick = async () => {
    await logout();
  }

  return <Flex {...styles.container}>
    <Stack {...styles.optionsContainer}>
      <NavbarOption name="Conteúdos" url="/">
        <Pencil />
      </NavbarOption>
      <NavbarOption name="Calendário" url="/calendar">
        <Calendar />
      </NavbarOption>
      <NavbarOption name="Metas" url="/goals">
        <Goal />
      </NavbarOption>
      <NavbarOption name="Dashboards" url="/dashboards">
        <ChartColumnDecreasing />
      </NavbarOption>
    </Stack>

    {/* botão de logout */}
    <Button {...styles.logoutButton} onClick={handleClick}>Logout</Button>
  </Flex>
}