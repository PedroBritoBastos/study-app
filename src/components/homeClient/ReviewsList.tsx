import { Accordion, Icon, Stack } from "@chakra-ui/react";
import { Bell } from "lucide-react";

// components
import { Review } from "./Review";

// services
import { getSubjects } from "@/src/services/subjectService";

// hooks
import { JSX, useEffect, useState } from "react";
import { useCalendar } from "@/src/hooks/useCalendar";

// utils
import { daysSinceCreation } from "@/src/utilities/dateUtils";

export function ReviewsList() {
  // state de revisoes
  const [reviews, setReviews] = useState<(JSX.Element | null)[]>();

  // recuperando a funcao para retornar as revisoes
  const { isRevisionDay } = useCalendar();

  // recuperando todas as materias do banco
  useEffect(() => {
    async function fetch() {
      const subjects = await getSubjects();

      const reviews = subjects
        .map(subject => {
          const days = daysSinceCreation(
            new Date(subject.currentDate),
            new Date()
          );

          if (isRevisionDay(days)) {
            return (
              <Review key={subject.id} subjectName={subject.title} />
            );
          }

          return null;
        })
        .filter(Boolean);

      setReviews(reviews);
    }
    fetch();
  }, [])

  return (
    <Accordion.Root collapsible w={150} pos={"absolute"} top={0} right={20} zIndex={5}>
      <Accordion.Item value="1" border={"none"} px={1}>
        <Accordion.ItemTrigger position={"relative"}>
          <Icon cursor="pointer" position={"absolute"} right={0}>
            <Bell />
          </Icon>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            <Stack gap={3}>
              {reviews}
              <Review subjectName="teste" />
              <Review subjectName="teste" />
              <Review subjectName="teste" />
              <Review subjectName="teste" />
            </Stack>
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  )
}
