import { Navbar } from "@/src/components/navbar/Navbar";

import { Text, Grid, Box, Button, Icon, Separator } from "@chakra-ui/react";
import { Calendar1, ListFilter, Pencil, TextAlignJustify } from "lucide-react";

const styles = {
  container: {
    flex: 1,
    display: "grid", // garantindo grid explícito
    templateAreas: `
      "header header header"
      "sbjDash sbjDash sbjCont"
      "goalDash goalDash goalDash"
      "goalCont goalCont goalCont"
    `,
    padding: 4,
    px: "3rem",
    minH: 0,
    h: "100vh",
    overflowY: "scroll",
    gridTemplateRows: "50px 500px 400px 200px",
    gridTemplateColumns: "1fr 1fr 300px",
    gap: 6,
  },

  header: {
    gridArea: "header",
  },

  sbjDash: {
    bg: "rgba(255,255,255,0.5)",
    gridArea: "sbjDash",
    borderRadius: "lg",
    boxShadow: "md",
  },

  sbjCont: {
    gridArea: "sbjCont",
    borderRadius: "lg",
    boxShadow: "md",
    bg: "rgba(255,255,255,0.5)",
  },

  goalDash: {
    gridArea: "goalDash",
    borderRadius: "lg",
    boxShadow: "md",
    bg: "rgba(255,255,255,0.5)",
  },

  goalCont: {
    gridArea: "goalCont",
    borderRadius: "lg",
    boxShadow: "md",
    bg: "rgba(255,255,255,0.5)",
  },
};

export default function DashboardPageTest() {
  return (
    <>
      <Navbar />

      <Grid {...styles.container}>
        <Box {...styles.header}>
          <Text fontSize={"3xl"} fontWeight={"medium"} color={"purple.800"}>
            Dashboards
          </Text>
        </Box>

        <Box {...styles.sbjDash} p={6} >
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} borderBottom={"1px solid #CBD5E0"} pb={5}>
            <Text fontSize={"2xl"} fontWeight={"bold"} color={"purple.700"}>
              Matérias
            </Text>
            <Box display={"flex"} alignItems={"center"} gap={5}>
              <SubjButton name="tudo">
                <Icon>
                  <TextAlignJustify />
                </Icon>
              </SubjButton>
              <SubjButton name="data específica">
                <Icon>
                  <Calendar1 />
                </Icon>
              </SubjButton>
              <SubjButton name="matéria específica">
                <Icon>
                  <Pencil />
                </Icon>
              </SubjButton>
            </Box>

          </Box>
        </Box>

        <Box {...styles.sbjCont} p={4} display={"flex"} flexDir={"column"} gap={4} justifyContent={"stretch"}>
          <SubjCont />
          <SubjCont />
          <SubjCont />
        </Box>

        <Box {...styles.goalDash} p={6} display={"flex"} flexDirection={"column"}>
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"purple.700"} borderBottom={"1px solid #CBD5E0"} pb={3}>
            Metas
          </Text>

          {/* flex */}
          <Box
            display={"flex"}
            gap={6}
            flex={1}
            mt={6}
          >
            {/* filtros */}
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={3}
            >
              <SubjButton name="tudo">
                <Icon>
                  <TextAlignJustify />
                </Icon>
              </SubjButton>
              <SubjButton name="data específica">
                <Icon>
                  <Calendar1 />
                </Icon>
              </SubjButton>
              <SubjButton name="matéria específica">
                <Icon>
                  <Pencil />
                </Icon>
              </SubjButton>
            </Box>

            {/* dashs */}
            <Box
              bg={"rgba(255,255,255,0.9)"}
              flex={1}
              p={4}
              borderRadius={"md"}
              boxShadow={"md"}
            >
              <Text textAlign={"center"} fontSize={"lg"} color={"gray.700"} fontWeight={"semibold"}>Concluídas</Text>
            </Box>

            <Box
              bg={"rgba(255,255,255,0.9)"}
              flex={1}
              p={4}
              borderRadius={"md"}
              boxShadow={"md"}
            >
              <Text textAlign={"center"} fontSize={"lg"} color={"gray.700"} fontWeight={"semibold"}>Em andamento</Text>
            </Box>

          </Box>

        </Box>


        <Box {...styles.goalCont}
          display={"flex"}
          flexDirection={"column"}
          padding={4}
          gap={4}
        >
          <Box
            display={"flex"}
            gap={6}
            flex={1}
          >
            <GoalCont />
            <GoalCont />
            <GoalCont />
          </Box>

        </Box>
      </Grid>
    </>
  );
}

function SubjButton({ name, children }) {
  return <Button display={"flex"} maxWidth={"10rem"} justifyContent={"flex-start"} bg={"purple.700"} fontSize={"xs"} fontWeight={"medium"} boxShadow={"lg"} >
    {children}
    {name}
  </Button>;
}

function SubjCont() {
  return <>
    <Box
      bg={"rgba(255,255,255,0.9)"}
      flex={1}
      p={4}
      borderRadius={"md"}
      boxShadow={"sm"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        borderBottom={"1px solid #A0AEC0"}
        paddingBottom={1}
      >
        <Text
          color={"gray.700"}
        >Matéria</Text>
        <Text
          color={"white"}
          fontSize={"xs"}
          bg={"purple.500"}
          py={1}
          px={3}
          borderRadius={"sm"}
          border={"1px solid #6B46C1"}
        >Label</Text>
      </Box>
      <Text
        fontSize={"xs"}
        color={"gray.600"}
        mt={2}
      >
        Conteudo da materia aqui
      </Text>
    </Box>
  </>
}

function GoalCont() {
  return <Box
    bg={"rgba(255,255,255,0.9)"}
    p={4}
    borderRadius={"md"}
    boxShadow={"sm"}
    w={"300px"}
  >
    <Text
      color={"gray.700"}
    >Meta</Text>
  </Box>
}

function Filter() {
  return <Box
    bg={"purple.700"}
    display={"flex"}
    alignItems={"center"}
    gap={4}
    width={"fit-content"}
    py={2}
    px={4}
    fontSize={"xs"}
    color={"white"}
  >
    <Icon size={"sm"}>
      <ListFilter />
    </Icon>
    <Text>Filtro: todos</Text>
  </Box>
}