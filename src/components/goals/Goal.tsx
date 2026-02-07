import { Card, Stack, Progress, Text, Span, Flex } from "@chakra-ui/react"
import { Task } from "./Task";

import { styles } from "@/styles/goals/goal.styles";
import { Footprints } from "lucide-react";

export function Goal() {
  return <Card.Root {...styles.cardRoot}>
    <Card.Header {...styles.cardHeader}>
      Meta
      <Footprints />
    </Card.Header>

    {/* stack de tasks */}
    <Stack my={"auto"}>
      <Task />
      <Task />
      <Task />
    </Stack>

    {/* Barra de progresso e indicação das tarefas feitas */}
    <Flex {...styles.progressContainer} >
      <Progress.Root  {...styles.progressBar.progressRoot} striped value={50} size={"lg"}>
        <Progress.Track {...styles.progressBar.progressTrack}>
          <Progress.Range  {...styles.progressBar.range} >
            50%
          </Progress.Range>
        </Progress.Track>
      </Progress.Root>

      <Text {...styles.completedTasks}><Span {...styles.completedTasksSpan}>5</Span> / 10</Text>
    </Flex>

  </Card.Root>
}