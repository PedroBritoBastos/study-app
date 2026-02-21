"use client"

import { Stack, Grid } from "@chakra-ui/react"
import { Column } from "./Column"

import { getDaysOfMonth, formatDate } from "@/src/utilities/dateUtils"

import scrollStyles from "@/styles/sidebar/scroll.module.css";

import { useSchedule } from "@/src/hooks/schedulePage/schedule/useSchedule"

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

export function Schedule() {

  const {
    year,
    month
  } = useSchedule();

  return (
    <Stack {...styles.container}>
      <Grid {...styles.grid} className={scrollStyles["scrollbar"]}>
        {getDaysOfMonth(year, month).map((date, index) => (
          <Column
            key={index}
            date={formatDate(date.toISOString()).slice(0, 5)}
            dayOfWeek={date.toLocaleDateString("pt-BR", { weekday: "long" }).slice(0, 3).toUpperCase()}
          />
        ))}
      </Grid>
    </Stack>
  )
}
