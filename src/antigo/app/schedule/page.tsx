import { Navbar } from "@/src/antigo/components/navbar/Navbar";
import { Schedule } from "@/src/antigo/components/schedulePage/Schedule";

import { isAuthenticated } from "@/src/utilities/authUtils";
import { redirect } from "next/navigation";
import { getUserFromToken } from "../api/_helpers/getUserByToken";
import { prisma } from "@/prisma/prisma";

import { ScheduleProps } from "@/src/antigo/types/schedule"

export default async function SchedulePage() {
  const auth = await isAuthenticated();

  if (!auth) redirect("/login");

  const user = await getUserFromToken();
  if (!user) return null;

  const schedules: ScheduleProps[] = await prisma.schedule.findMany({
    where: { userId: user.id },
  })

  return <>
    <Navbar />
    <Schedule schedules={schedules} />
  </>
}

