"use client"

// styles
import { styles } from "@/src/styles/calendar/calendarClient.styles"

// types
import { SubjectType } from "@/src/types/subject"

// components
import { Flex, Text, Grid, Stack } from "@chakra-ui/react"
import { MonthControlButton } from "./MonthControlButton"
import { Day } from "./Day"
import { CalendarSidebar } from "../sidebar/CalendarSidebar"
import { ChevronsLeft, ChevronsRight } from "lucide-react";

// hooks
import { useCalendar } from "@/src/hooks/calendar/useCalendar"
import { useSidebar } from "@/src/hooks/useSidebar"

// utils
import { getDaysOfMonth } from "@/src/utilities/dateUtils"

export function CalendarClient({ subjects }: { subjects: SubjectType[] }) {
  // hooks
  const calendarHook = useCalendar();
  const sidebarHook = useSidebar();

  return <Stack flex={1}>
    {/* container do mes e botoes para manipular o mes */}
    <Flex {...styles.monthControlContainer} >
      <MonthControlButton handleClick={calendarHook.handlePrevMonth}>
        <ChevronsLeft />
      </MonthControlButton>
      <Text {...styles.monthTitle}>{`${calendarHook.monthString}, ${calendarHook.year}`}</Text>
      <MonthControlButton handleClick={calendarHook.handleNextMonth}>
        <ChevronsRight />
      </MonthControlButton>
    </Flex>


    {/* grid de dias */}
    <Grid {...styles.grid}>
      {getDaysOfMonth(calendarHook.year, calendarHook.month).map((day) => (<Day key={day.getDate()} subjects={subjects} currentDate={day} openSidebar={sidebarHook.openSidebar} selectDay={calendarHook.selectDay} selectedDay={calendarHook.getSelectedDay()} />))}
    </Grid>

    {/* sidebar */}
    {sidebarHook.isSidebarOpen && <CalendarSidebar closeSidebar={sidebarHook.closeSidebar} selectedDay={calendarHook.getSelectedDay()} />}

  </Stack>
}