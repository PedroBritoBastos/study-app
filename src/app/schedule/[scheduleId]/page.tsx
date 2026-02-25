"use server"

import { isAuthenticated } from "@/src/utilities/authUtils";
import { redirect } from "next/navigation";
import { getUserFromToken } from "../../api/_helpers/getUserByToken";
import { prisma } from "@/prisma/prisma";
import { Navbar } from "@/src/components/navbar/Navbar";

import { BackButton } from "@/src/components/schedulePage/scheduleIdPage/BackButton";

interface Props {
  params: {
    scheduleId: string;
  };
}

export default async function ScheduleIdPage({ params }: Props) {
  const auth = await isAuthenticated();
  if (!auth) redirect("/login");

  const user = await getUserFromToken();

  const { scheduleId } = await params;

  const schedule = await prisma.schedule.findFirst({
    where: {
      id: scheduleId,
      userId: user.id,
    },
  });

  const scheduleTasks = await prisma.scheduleTask.findMany({
    where: {
      scheduleId: scheduleId
    }
  })

  return <>
    <Navbar />

    <div>
      <BackButton />
      <ul>
        {scheduleTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>


  </>
}