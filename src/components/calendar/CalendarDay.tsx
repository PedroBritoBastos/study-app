import { Card, Text } from "@chakra-ui/react";
import { SubjectProps } from "@/src/types/Subject";
import { daysSinceCreation } from "@/src/utilities/dateUtils";
import { useCalendar } from "@/src/hooks/useCalendar";

type Props = {
  date: Date;
  subjects: SubjectProps[];
};

export function CalendarDay({ date, subjects }: Props) {
  const { isRevisionDay } = useCalendar();

  const reviews = subjects.map(subject => {
    const days = daysSinceCreation(
      new Date(subject.currentDate),
      date
    );

    if (isRevisionDay(days)) {
      return (
        <Text key={subject.id} fontSize="sm">
          {subject.title}
        </Text>
      );
    }
  });

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
