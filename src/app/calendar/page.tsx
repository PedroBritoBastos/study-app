// styles
import { styles } from "@/src/styles/calendar/calendarPage.styles"

// components
import { CalendarClient } from "@/src/components/calendar/CalendarClient";
import { Stack } from "@chakra-ui/react";

// services
import { getSubjects } from "@/src/services/subjectService"

export default async function Calendar() {
  const subjects = await getSubjects();

  return <Stack {...styles.container} >
    <CalendarClient subjects={subjects} />
  </Stack>
}