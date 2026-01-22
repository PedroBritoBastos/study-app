import { Stack, IconButton, Heading, Flex, Grid, Text, Icon } from "@chakra-ui/react";

// styles
import "./sidebar-scrollbar.css"

// components
import { ReviewDescription } from "./ReviewDescription";

// hooks
import { useDaySidebarContext } from "@/src/hooks/useDaySidebarContext";
import { useCalendar } from "@/src/hooks/useCalendar";
import { Calendar, MoveRight } from "lucide-react";

export function Sidebar() {
  const { sidebarHook } = useDaySidebarContext();
  const { setActiveDay } = useCalendar();

  if (!sidebarHook.isOpen) return null;

  // fecha a sidebar e desmarca a data ativa
  function handleClick() {
    setActiveDay(new Date());
    sidebarHook.close();
  }

  // gera um label com a data selecionada no calendario
  const day = sidebarHook.selectedDay.getDate().toString().padStart(2, "0");
  const month = (sidebarHook.selectedDay.getMonth() + 1).toString().padStart(2, "0");
  const year = sidebarHook.selectedDay.getFullYear();

  const selectedDay = `${day}/${month}/${year}`;

  return (
    <Stack
      w={{ base: "100%", md: "380px" }}
      pos="fixed"
      top={0}
      bottom={0}
      right={0}
      bg="white"
      zIndex={10}
      boxShadow="xl"
      borderLeft="1px solid"
      borderColor="gray.200"
      px={6}
      py={5}
      overflowY="auto"
    >
      {/* Stack para deixar o titulo e a data um em cima do outro fixos no topo */}
      <Stack>
        {/* Titulo e botao de fechar sidebar */}
        <Flex justify={"space-between"} align={"center"}>
          <Heading fontSize="2xl"
            fontWeight="semibold"
            color="purple.700"
          >
            Revisões do dia
          </Heading>
          <IconButton
            aria-label="Fechar"
            size="lg"
            variant="ghost"
            onClick={handleClick}
          >
            <MoveRight size={25} />
          </IconButton>
        </Flex>

        {/* Data do calendario */}
        <Flex align={"center"} gap={2} color={"purple.700"} mt={2} pb={4}>
          <Icon>
            <Calendar />
          </Icon>
          <Text letterSpacing={1} fontWeight={"semibold"}>{selectedDay}</Text>
        </Flex>
      </Stack>

      {/* Stack com as descricoes das revisoes */}
      <Stack overflowY={"scroll"} className="scrollbar">
        {/* Grid com as revisoes da data selecionada */}
        <Grid mt={5} templateColumns={"repeat(2, 1fr)"} gap={2} bg={"gray.100"} p={4} borderRadius={"md"}>
          {sidebarHook.reviews}
        </Grid>
        {sidebarHook.reviewsDescriptions.map((review, index) => (<ReviewDescription reviewName={review.reviewName} reviewDescription={review.reviewDescription} />))}
      </Stack>

    </Stack>
  );
}

