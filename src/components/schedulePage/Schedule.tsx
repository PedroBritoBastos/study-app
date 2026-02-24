"use client"

import { Stack, Grid, Flex, Button } from "@chakra-ui/react"
import { Column } from "./Column"
import { CreateButton } from "./createSchedule/CreateButton"
import { Plus } from "lucide-react"

import { getDaysOfMonth, formatDate } from "@/src/utilities/dateUtils"

import scrollStyles from "@/styles/sidebar/scroll.module.css";

import { useSchedule } from "@/src/hooks/schedulePage/schedule/useSchedule"

import { ScheduleProps } from "@/src/types/schedule"

const styles = {
  container: {
    gap: 0,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    p: 4,
  },
  grid: {
    gridAutoFlow: "column",
    gridAutoColumns: "250px",
    gridTemplateRows: "1fr",
    flex: 1,
    overflowX: "auto",
    pt: 4,
    pb: 4
  }
}

import { useState } from "react"

interface Props {
  schedules: ScheduleProps[];
}

export function Schedule({ schedules }: Props) {

  const {
    year,
    month
  } = useSchedule();

  const [openCreateSchedule, setOpenCreateSchedule] = useState(false);

  const handleOpenDialog = () => {
    setOpenCreateSchedule(true);
  }

  const handleCloseDialog = () => {
    setOpenCreateSchedule(false);
  }

  return (
    <Stack {...styles.container}>
      {/* Criar Schedule */}
      <Flex>
        <Button
          bg={"purple.600"}
          _hover={{ bg: "purple.500" }}
          mb={5}
          onClick={handleOpenDialog}
        >
          <Plus />
          Criar cronograma
        </Button>

        <CreateButton
          open={openCreateSchedule}
          handleCloseDialog={handleCloseDialog}
        />
      </Flex>

      <Grid {...styles.grid} className={scrollStyles["scrollbar"]}>
        {getDaysOfMonth(year, month).map((date, index) => {
          const formattedDate = formatDate(date.toISOString()).slice(0, 5)

          const scheduleForDay: ScheduleProps | undefined = schedules.find(schedule =>
            formatDate(schedule.scheduleDay.toISOString()).slice(0, 5) === formattedDate
          )

          return (<Column
            key={index}
            date={formatDate(date.toISOString())}
            dayOfWeek={date.toLocaleDateString("pt-BR", { weekday: "long" }).slice(0, 3).toUpperCase()}
            schedule={scheduleForDay}
          />
          )
        })}
      </Grid>
    </Stack>
  )
}
