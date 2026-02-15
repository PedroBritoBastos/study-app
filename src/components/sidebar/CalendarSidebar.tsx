// styles
import { styles } from "@/styles/calendar/calendarSidebar.styles";

// components
import { SidebarContainer } from "@/components/sidebar/SidebarContainer";
import { Review } from "../calendar/Review";
import { Flex, Text, Grid, Stack, Box } from "@chakra-ui/react";
import { Calendar } from "lucide-react";

// types
import { DayType } from "@/src/types/calendar";

// utils
import { formatDate } from "@/src/utilities/dateUtils";

type Props = {
  closeSidebar: () => void;
  selectedDay: DayType;
  isSidebarOpen: boolean;
}

export function CalendarSidebar({ closeSidebar, selectedDay, isSidebarOpen }: Props) {

  return <SidebarContainer
    closeSidebar={closeSidebar}
    header="Revisões"
    isSidebarOpen={isSidebarOpen}
  >

    {/* data selecionada */}
    <Flex {...styles.date.container}>
      <Calendar />
      <Text {...styles.date.header}>{formatDate(selectedDay.day.toISOString())}</Text>
    </Flex>

    {/* grid com todas as revisões */}
    <Grid {...styles.reviewsGrid}>
      {selectedDay.reviews && selectedDay.reviews.map((review) => (<Review key={review.id} title={review.title} />))}
    </Grid>

    {/* stack com a descrição de todas as revisões */}
    <Stack>
      {selectedDay.reviews && selectedDay.reviews.map((review) => (
        <Box key={review.id} {...styles.reviewsDescription.container}>
          <Text {...styles.reviewsDescription.title}>{review.title}</Text>
          <Text>{review.content}</Text>
        </Box>
      ))}
    </Stack>

  </SidebarContainer>
}