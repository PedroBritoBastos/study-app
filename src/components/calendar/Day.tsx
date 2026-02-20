"use client"

// styles
import { styles } from "@/src/styles/calendar/day.styles"

// components
import { Card, Stack } from "@chakra-ui/react"
import { Review } from "./Review"

// hooks
import { useDay } from "@/src/hooks/day/useDay"
import { useReviews } from "@/src/hooks/useReviews"

// types
import { SubjectType } from "@/src/types/subject"
import { DayType } from "@/src/types/calendar"

type Props = {
  subjects: SubjectType[];
  currentDate: Date;
  openSidebar: () => void;
  selectDay: (day: DayType) => void;
  selectedDay: DayType;
}

export function Day({
  subjects,
  currentDate,
  openSidebar,
  selectDay,
  selectedDay
}: Props) {
  // hooks
  const dayHook = useDay();
  const reviewsHook = useReviews();

  // revisoes do dia
  const reviews = reviewsHook.getReviewsInTheCurrentDate(subjects, currentDate);

  // variaveis para comparar se o dia selecionado é o dia do componente para ativar
  const selected = selectedDay.day ? new Date(selectedDay.day).getDate() : 0;
  const current = currentDate.getDate();

  return (
    <Card.Root {...styles.cardRoot} {...(selected === current ? styles.active : {})} onClick={() => dayHook.handleSelectDay(openSidebar, selectDay, { day: currentDate, reviews })}>
      <Card.Header {...styles.cardHeader}>
        {currentDate.getDate()}
      </Card.Header>

      <Card.Body {...styles.cardBody}>
        <Stack {...styles.reviewsStack}>
          {reviews.map((review) => (
            <Review key={review.id} title={review.title} />
          ))
          }
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}