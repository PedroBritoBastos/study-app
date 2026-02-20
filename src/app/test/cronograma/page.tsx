"use client"

import { Navbar } from "@/src/components/navbar/Navbar"

import { Box, Grid, Text } from "@chakra-ui/react"

import { redirect } from "next/navigation"

export default function CronogramaPage() {
  return <>
    <Navbar />
    <Grid
      flex={1}
      gridTemplateColumns={"repeat(7, 1fr)"}
      padding={8}
      gap={2}
      alignContent={"start"}
      bg={"gray.300"}
      minH={0}
      overflowY={"scroll"}
    >
      <DayOfWeek name={"DOM"} />
      <DayOfWeek name={"SEG"} />
      <DayOfWeek name={"TER"} />
      <DayOfWeek name={"QUA"} />
      <DayOfWeek name={"QUI"} />
      <DayOfWeek name={"SEX"} />
      <DayOfWeek name={"SAB"} />

      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
      <DaySchedule />
    </Grid>
  </>
}

const dayScheduleStyles = {
  container: {
    cursor: "pointer",
    p: 5,
    h: "200px",
    bg: "white"
  },
  headerContainer: {
    pb: 1,
    borderBottom: "1px solid #A0AEC0",
  },
  header: {
    color: "purple.800",
    fontSize: "sm",
    textAlign: "end",
    w: "100%"
  },
  dayOfWeek: {
    color: "gray.500",
    fontSize: "md"
  },
  tasksContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    mt: 5
  },
  more: {
    color: "gray.400",
    fontSize: "xs",
  }
}

function DaySchedule() {
  function handleClick() {
    redirect("/cronograma/:id");
  }

  return <Box {...dayScheduleStyles.container} onClick={handleClick}>
    <Box {...dayScheduleStyles.headerContainer}>
      <Text {...dayScheduleStyles.header}>12 fev</Text>
    </Box>
    <Box {...dayScheduleStyles.tasksContainer}>
      <Task />
      <Task />
      <Text {...dayScheduleStyles.more}>Mais 5</Text>
    </Box>
  </Box>
}

const taskStyles = {
  task: {
    color: "gray.600",
    fontSize: "xs",
    p: 1,
    bg: "orange.100",
    borderRadius: "5px 0 0 5px",
    display: "flex",
    alignItems: "center",
    borderLeft: "6px solid #FBD38D"
  }
}

function Task() {
  return <Text {...taskStyles.task}>Task</Text>
}

function DayOfWeek({ name }) {
  return <Text width={"100%"} h={"fit-content"} py={1} textAlign={"center"} bg={"purple.700"} color={"white"} fontSize={"sm"} letterSpacing={2} borderRadius={"5px 5px 0 0"}> {name}</Text>
}

