"use client"

import { Stack, Text, Box, Separator } from "@chakra-ui/react"
import { ScheduleTask } from "./ScheduleTask";

import { ScheduleProps } from "@/src/types/schedule";
import { ScheduleTaskProps } from "@/src/types/scheduleTask";

import { useState, useEffect } from "react";
import { getTasks } from "@/src/services/scheduleService";
import { CreateButton } from "./createSchedule/CreateButton";
import { formatDateForInput } from "@/src/utilities/dateUtils";

const styles = {
  container: {
    gap: 0,
  },
  dateContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 4
  },
  date: {
    width: "fit-content",
    position: "absolute",
    px: 2,
    zIndex: 3,
    letterSpacing: 1,
    fontWeight: "semibold",
    color: "gray.500",
    fontSize: "md",
    bg: "#ecebf3ff"
  },
  separator: {
    position: "absolute",
    width: "100%",
    height: "2px",
    bg: "gray.400",
  },
  decorativeCircle: {
    bg: "gray.400",
    width: "5px",
    height: "10px",
    position: "absolute"
  },
  decorativeCircleLeft: {
    left: 0,
    borderRadius: "0 50% 50% 0"
  },
  decorativeCircleRight: {
    right: 0,
    borderRadius: "50% 0% 0% 50%"
  },
  scheduleTasksContainer: {
    flex: 1,
    ml: 1.5,
    mr: 1.5,
    bg: "rgba(255, 255, 255, 0.7)",
    borderRadius: "md",
    p: 4
  },
  dayOfWeek: {
    textAlign: "center",
    bg: "purple.600",
    color: "white",
    py: 1,
    fontSize: "xs",
    letterSpacing: 1.5,
    fontWeight: "semibold",
    borderRadius: "md",
    ml: 1.5,
    mr: 1.5,
    mb: 3,
    mt: 3
  }
}

interface Props {
  date: string;
  dayOfWeek: string;
  schedule: ScheduleProps | undefined;
}

export function Column({
  date,
  dayOfWeek,
  schedule,
}: Props) {
  const [tasks, setTasks] = useState<ScheduleTaskProps[]>();
  const [openCreateSchedule, setOpenCreateSchedule] = useState(false);

  const handleOpenDialog = () => {
    setOpenCreateSchedule(true);
  }

  const handleCloseDialog = () => {
    setOpenCreateSchedule(false);
  }

  // faz o fetch para buscar as tarefas 
  // atualiza sempre que addedScheduleTask é atualizado
  useEffect(() => {
    if (!schedule) return;

    const fetchTasks = async () => {
      try {
        const response = await getTasks(schedule.id);
        setTasks(response);
      } catch (error) {
        console.log("Erro ao buscar tarefas." + error);
      }
    }
    fetchTasks();
  }, [schedule])

  return (
    <Stack {...styles.container} onClick={handleOpenDialog}>
      {/* date container */}
      <Box {...styles.dateContainer}>
        <Separator {...styles.separator} />
        <Text {...styles.date}>{date.slice(0, 5)}</Text>
        <Box {...styles.decorativeCircle} {...styles.decorativeCircleLeft}></Box>
        <Box {...styles.decorativeCircle} {...styles.decorativeCircleRight}></Box>
      </Box>

      <Text {...styles.dayOfWeek}>{dayOfWeek}</Text>

      {/* schedule tasks container */}
      <Stack {...styles.scheduleTasksContainer}
        cursor={schedule && "pointer"}
        _hover={schedule && { bg: "gray.100" }}
      >
        {tasks && tasks.map((task) => (
          <ScheduleTask
            key={task.id}
            title={task.title}
          />
        ))}
      </Stack>

      <CreateButton
        open={openCreateSchedule}
        handleCloseDialog={handleCloseDialog}
        columnDate={date}
      />
    </Stack>
  )
}
