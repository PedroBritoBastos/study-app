import { Text } from "@chakra-ui/react"

import { styles } from "@/styles/goals/task.styles";

import { TaskType } from "@/src/types/task";

export function Task({ task, isChecked }: { task: TaskType, isChecked: boolean }) {
  return <Text {...styles.text} {...(isChecked && styles.checked)}>{task.title}</Text>
}