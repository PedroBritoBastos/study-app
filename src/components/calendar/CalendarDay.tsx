import { Card, Text, Flex } from "@chakra-ui/react";
import { SubjectProps } from "@/src/types/Subject";
import { daysSinceCreation } from "@/src/utilities/dateUtils";
import { useCalendar } from "@/src/hooks/useCalendar";

// components
import { Label } from "./Label";

// hooks
import { useDaySidebarContext } from "@/src/hooks/useDaySidebarContext";

type Props = {
  date: Date;
  subjects: SubjectProps[];
};

export function CalendarDay({ date, subjects }: Props) {
  const { isRevisionDay } = useCalendar();

  // recuperando o valor do context da sidebar
  const { sidebarHook } = useDaySidebarContext();

  // vai abrir a sidebar quando o componente for pressionado
  function handleClick() {
    sidebarHook.open();
    sidebarHook.setReviews(reviews);
  }

  const reviews = subjects
    .map(subject => {
      const days = daysSinceCreation(
        new Date(subject.currentDate),
        date
      );

      if (isRevisionDay(days)) {
        return (
          <Label key={subject.id} subjectName={subject.title} />
        );
      }

      return null;
    })
    .filter(Boolean);

  return (
    <Card.Root
      bg="white"
      h="100%"
      overflow="hidden"
      cursor="pointer"
      _hover={{ outline: "2px solid purple" }}
      onClick={handleClick}
    >
      <Card.Header
        as={Flex}
        direction="column"
        h="100%"
        p={3}
      >
        <Text fontWeight="bold" mb={2}>
          {date.getDate()}
        </Text>

        <Flex flex={1} overflow="hidden">
          <ul className="overflow-hidden w-full">
            {reviews}
          </ul>
        </Flex>
      </Card.Header>
    </Card.Root>
  );
}
