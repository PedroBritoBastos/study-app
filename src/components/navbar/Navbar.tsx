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

// services
import { logout } from "@/services/authService";

// hooks
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();

  const handleClick = () => {
    logout();
    router.push("/login");
    router.refresh();
  }

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

    {/* botão de logout */}
    <Button {...styles.logoutButton} onClick={handleClick}>Logout</Button>
  </Flex>
}