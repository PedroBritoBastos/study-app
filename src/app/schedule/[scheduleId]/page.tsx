"use server"

import { isAuthenticated } from "@/src/utilities/authUtils";
import { redirect } from "next/navigation";
import { getUserFromToken } from "../../api/_helpers/getUserByToken";
import { prisma } from "@/prisma/prisma";
import { Navbar } from "@/src/components/navbar/Navbar";
import { Text, Box, Flex, Stack } from "@chakra-ui/react";

import { BackButton } from "@/src/components/schedulePage/scheduleIdPage/BackButton";
import { CreateScheduleTaskButton } from "@/src/components/schedulePage/scheduleIdPage/CreateScheduleTaskButton";
import { Task } from "@/src/components/schedulePage/scheduleIdPage/Task";

import { formatDate } from "@/src/utilities/dateUtils";

import ScrollStyles from "@/styles/sidebar/scroll.module.css";

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
    <Box
      py={6}
      px={12}
      flex={1}
      display={"flex"}
      flexDirection={"column"}
    >
      <Flex
        alignItems={"center"}
        gap={5}
        mb={12}
      >
        <BackButton />
        <Text
          letterSpacing={2}
          fontSize={"2xl"}
          fontWeight={"bold"}
          color={"gray.700"}
        >
          {formatDate(schedule ? schedule?.scheduleDay.toLocaleString() : "")}
        </Text>
        <Text
          mt={2}
          letterSpacing={1}
          fontSize={"md"}
          fontWeight={"semibold"}
          color={"gray.600"}
        >
          {
            schedule && (schedule?.scheduleDay.toLocaleDateString("pt-BR", { weekday: "long" }))?.charAt(0).toUpperCase() + (schedule?.scheduleDay.toLocaleDateString("pt-BR", { weekday: "long" }))?.slice(1)
          }
        </Text>
        <CreateScheduleTaskButton scheduleId={scheduleId} />
      </Flex>

      {/* tarefas */}
      <Text
        fontSize={"md"}
        color={"purple.800"}
        mb={6}
        ml={5}
      >
        Tarefas
      </Text>
      {/* em andamento */}
      <Stack
        flex={1}
        gap={4}
        px={6}
        minH={0}
        overflowY={"auto"}
        className={ScrollStyles["scrollbar"]}
      >
        {
          scheduleTasks.map((task) => (
            <Task
              key={task.id}
              name={task.title}
              isChecked={task.isChecked}
            />
          ))
        }
      </Stack>
    </Box>
  </>
}




