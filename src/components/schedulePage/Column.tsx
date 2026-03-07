"use client"

import { Stack, Text, Box, Separator, Center, Flex } from "@chakra-ui/react"
import { ScheduleTask } from "./ScheduleTask";
import { DeleteScheduleButton } from "./deleteSchedule/DeleteScheduleButton";

import { ScheduleProps } from "@/src/types/schedule";
import { ScheduleTaskProps } from "@/src/types/scheduleTask";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { getTasks } from "@/src/services/scheduleService";
import { CreateButton } from "./createSchedule/CreateButton";

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
    p: 4,
    position: "relative",
    overflowY: "auto",
    minH: 0
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
  },
  numberOfTasksIndicator: {
    bg: "white",
    width: "fit-content",
    px: 4,
    py: 2,
    rounded: "full",
    color: "purple.800",
    boxShadow: "md",
    fontWeight: "semibold"
  },
  numberOfTasksIndicatorContainer: {
    position: "absolute",
    bottom: 4,
    right: 4,
    left: 4,
    justifyContent: "space-between",
    zIndex: 20
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
  const router = useRouter();

  const [tasks, setTasks] = useState<ScheduleTaskProps[]>([]);
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

    const fetchTasks = async () => {
      if (!schedule) {
        setTasks([]);
        return;
      }

      try {
        const response = await getTasks(schedule.id);
        setTasks(response);
      } catch (error) {
        console.log("Erro ao buscar tarefas." + error);
      }
    }
    fetchTasks();
  }, [schedule])

  /* abre a caixa para criar um cronograma quando não há um cronograma na coluna clicada 
     redireciona para a página com as informações do cronograma quando há cronograma
  */
  const handleColumnClick = () => {
    if (schedule) {
      router.push(`/schedule/${schedule.id}`);
      return;
    }
    handleOpenDialog();
  }

  return (
    <Stack {...styles.container} onClick={handleColumnClick}>
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
        cursor={"pointer"}
        _hover={{ bg: "gray.100" }}
      >
        {tasks && tasks.map((task) => (
          <ScheduleTask
            key={task.id}
            title={task.title}
          />
        ))}

        {/* indicador de quantidade de tasks */}
        {
          schedule && (
            <Flex {...styles.numberOfTasksIndicatorContainer}>
              <DeleteScheduleButton
                scheduleDate={date}
                quantityOfTasks={tasks.length}
              />
              <Center {...styles.numberOfTasksIndicator}>
                {tasks.length}
              </Center>
            </Flex>

          )
        }

      </Stack>

      <CreateButton
        open={openCreateSchedule}
        handleCloseDialog={handleCloseDialog}
        columnDate={date}
      />

    </Stack>
  )
}
