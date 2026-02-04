// styles
import { styles } from "@/src/styles/calendar/calendarPage.styles"

// components
import { CalendarClient } from "@/src/components/calendar/CalendarClient";
import { Stack, Flex } from "@chakra-ui/react";
import { Navbar } from "@/src/components/navbar/Navbar";

import { isAuthenticated } from "@/src/utilities/authUtils";
import { redirect } from "next/navigation";
import { getUserFromToken } from "../api/_helpers/getUserByToken";
import { prisma } from "@/prisma/prisma";

export default async function Calendar() {
  const auth = await isAuthenticated();

  if (!auth) redirect("/login");

  const user = await getUserFromToken();

  const subjects = await prisma.subject.findMany({
    where: { userId: user.id },
    orderBy: { currentDate: "desc" },
  });

  return <Flex {...styles.container} >
    <Navbar />
    <CalendarClient subjects={subjects} />
  </Flex>
}