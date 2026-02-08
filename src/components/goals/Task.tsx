import { Text } from "@chakra-ui/react"

import { styles } from "@/styles/goals/task.styles";

import { TaskType } from "@/src/types/task";

export function Task({ task }: { task: TaskType }) {
  return <Text {...styles.text}>{task.title}</Text>
}