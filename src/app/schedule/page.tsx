import { Navbar } from "@/src/components/navbar/Navbar"
import { Schedule } from "@/src/components/schedulePage/Schedule";
import { Stack } from "@chakra-ui/react";

import { isAuthenticated } from "@/src/utilities/authUtils";
import { redirect } from "next/navigation";
import { getUserFromToken } from "../api/_helpers/getUserByToken";
import { prisma } from "@/prisma/prisma";

export default async function SchedulePage() {
  const auth = await isAuthenticated();

  if (!auth) redirect("/login");

  const user = await getUserFromToken();

  const schedules = await prisma.schedule.findMany({
    where: { userId: user.id },
  })

  return <>
    <Navbar />
    <Schedule />
  </>
}

