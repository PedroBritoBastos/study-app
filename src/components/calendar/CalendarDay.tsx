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

  // recuperando o hook contendo os states e recuperando a funcao para saber se existe revisoes para este dia do calendario
  const { isRevisionDay } = useCalendar();
  const { sidebarHook } = useDaySidebarContext();

  /* se o dia clicado for o mesmo dia do calendario, ele fica ativado  */
  const isActive =
    activeDay.getFullYear() === date.getFullYear() &&
    activeDay.getMonth() === date.getMonth() &&
    activeDay.getDate() === date.getDate();

  /* percorre todo o array de subjects e retorna todas as materias que devem ser revisadas neste dia */
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

  /* percorre todo o array de subjects e retorna as descricoes das materias que devem ser revisadas neste dia */
  const reviewsDescriptions = subjects.map((subject) => {
    const days = daysSinceCreation(
      new Date(subject.currentDate),
      date
    );

    if (isRevisionDay(days)) {
      return { reviewName: subject.title, reviewDescription: subject.content }
    }
  }).filter(Boolean);

  /* ativa a data pressionada no calendario e mostra as informacoes na sidebar */
  function handleClick() {
    setActiveDay(date);
    sidebarHook.setSelectedDay(date);
    sidebarHook.setReviewsDescriptions(reviewsDescriptions);
    sidebarHook.open();
    sidebarHook.setReviews(reviews);
  }

  return (
    <Card.Root
      bg={isActive ? "purple.100" : "white"}
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

