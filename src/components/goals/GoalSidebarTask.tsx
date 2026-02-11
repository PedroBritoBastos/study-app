import { Flex, Text, IconButton } from "@chakra-ui/react";
import { X } from "lucide-react";

import { styles } from "@/styles/goals/goalsSidebarTask.styles";

import { TaskType } from "@/src/types/task";

export function GoalSidebarTask({ task }: { task: TaskType }) {
  return <Flex {...styles.container}>

    {/* nome da tarefa */}
    <Text>{task.title}</Text>

    {/* botoes */}
    <Flex>
      <IconButton size="xs" {...styles.buttons.deleteButton}>
        <X />
      </IconButton>
    </Flex>
  </Flex>
}