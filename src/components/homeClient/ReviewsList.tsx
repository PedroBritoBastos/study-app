import { Accordion, Icon, Stack, Text } from "@chakra-ui/react";
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
  // state de ativacao do botao
  const [active, setActive] = useState<boolean>(true);

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
    <Accordion.Root collapsible w={150} pos={"absolute"} top={0} right={20} zIndex={5} defaultValue={["1"]}>
      <Accordion.Item value="1" border={"none"} px={1}>
        <Accordion.ItemTrigger position={"relative"} onClick={() => setActive(!active)}>
          <Icon cursor="pointer" position={"absolute"} right={0} color={active ? "white" : "purple.800"} w={10} h={10} p={2} rounded={"full"} _hover={{ bg: "purple.600", color: "white" }} bg={active ? "purple.600" : "white"}>
            <Bell />
          </Icon>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            <Stack gap={3} mt={3}>
              <Text textAlign={"center"} bg={"white"} color={"purple.700"} p={2} borderRadius="xl"
                border="1px solid"
                borderColor="gray.200">Revisões hoje</Text>
              {!reviews ? (<Text textAlign={"center"} bg={"white"} p={2} borderRadius="xl"
                border="1px solid"
                borderColor="gray.200">Não há revisões</Text>) : reviews}
            </Stack>
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root >
  )
}
