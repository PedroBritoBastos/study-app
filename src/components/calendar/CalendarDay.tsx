import { Card, Text, Flex, Stack } from "@chakra-ui/react";
import { SubjectProps } from "@/src/types/Subject";
import { daysSinceCreation } from "@/src/utilities/dateUtils";
import { useCalendar } from "@/src/hooks/useCalendar";

// components
import { Label } from "./Label";

// hooks
import { useDaySidebarContext } from "@/src/hooks/useDaySidebarContext";
import { Dispatch, SetStateAction } from "react";

type Props = {
  date: Date;
  subjects: SubjectProps[];
  activeDay: Date;
  setActiveDay: Dispatch<SetStateAction<Date>>;
};

export function CalendarDay({
  date,
  subjects,
  activeDay,
  setActiveDay,
}: Props) {
  const { isRevisionDay } = useCalendar();
  const { sidebarHook } = useDaySidebarContext();

  const isActive =
    activeDay.getFullYear() === date.getFullYear() &&
    activeDay.getMonth() === date.getMonth() &&
    activeDay.getDate() === date.getDate();

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

  function handleClick() {
    setActiveDay(date);
    sidebarHook.open();
    sidebarHook.setReviews(reviews);
  }

  return (
    <Card.Root
      bg="white"
      h="100%"
      overflow="hidden"
      cursor="pointer"
      onClick={handleClick}
      outline={isActive ? "2px solid purple" : "none"}
      _hover={{ outline: "2px solid purple" }}
    >
      <Card.Header
        as={Flex}
        direction="column"
        h="100%"
        p={3}
      >
        <Text fontWeight="bold" fontSize="md" mb={2} color="purple.700">
          {date.getDate()}
        </Text>

        <Flex flex={1} overflow="hidden">
          <Stack gap={2} w="full">
            {reviews}
          </Stack>
        </Flex>
      </Card.Header>
    </Card.Root>
  );
}

