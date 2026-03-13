import { Text } from "@chakra-ui/react"

import { styles } from "@/src/antigo/styles/goals/task.styles";

import { TaskType } from "@/src/antigo/types/task";

export function Task({ task, isChecked }: { task: TaskType, isChecked: boolean }) {
  return <Text {...styles.text} {...(isChecked && styles.checked)}>{task.title}</Text>
}