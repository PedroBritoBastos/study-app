"use client"

import { Box, Grid } from "@chakra-ui/react"
import { Column } from "./Column"

import { getDaysOfMonth, formatDate } from "@/src/utilities/dateUtils"

import scrollStyles from "@/styles/sidebar/scroll.module.css";

import { useSchedule } from "@/src/hooks/schedulePage/schedule/useSchedule"

const styles = {
  container: {
    flex: 1,
    gridAutoFlow: "column",      // cria colunas automaticamente
    gridAutoColumns: "250px",    // largura fixa de cada coluna
    overflowX: "auto",
    p: 4
  }
}

export function Schedule() {

  const {
    year,
    month
  } = useSchedule();

  return <Grid {...styles.container} className={scrollStyles["scrollbar"]}>
    {getDaysOfMonth(year, month).map((date, index) => (
      <Column
        key={index}
        date={formatDate(date.toISOString()).slice(0, 5)}
        dayOfWeek={date.toLocaleDateString("pt-BR", { weekday: "long" }).slice(0, 3).toUpperCase()}
      />
    ))}
  </Grid>
}