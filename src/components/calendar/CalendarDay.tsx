import { Card, Text } from "@chakra-ui/react";

// types
import { SubjectProps } from "@/src/types/Subject";

// utils
import { daysSinceCreation } from "@/src/utilities/dateUtils";

// hooks
import { useCalendar } from "@/src/hooks/useCalendar";
import { useState } from "react";

type Props = {
  date: Date;
  subjects: SubjectProps[];
};

export function CalendarDay({ date, subjects }: Props) {
  const calendarHook = useCalendar();

  // console.log(new Date(subjects[0].currentDate))

  const reviews = subjects.map((subject) => {
    const days = daysSinceCreation(new Date(subject.currentDate), date);

    if (calendarHook.isRevisionDay(days, date)) {
      console.log("revisao de " + subject.title + calendarHook.isRevisionDay(days, date) + "" + date)
      return (
        <p key={subject.id}>{subject.title}</p>
      )
    }

    return null;
  })



  return (
    <Card.Root bg="white">
      <Card.Header>
        <Text fontWeight="bold">
          {date.getDate()}
        </Text>
        {reviews}
      </Card.Header>
    </Card.Root>
  );
}
