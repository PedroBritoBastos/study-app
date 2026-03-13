import { Text } from "@chakra-ui/react"

const taskStyles = {
  task: {
    color: "gray.600",
    fontSize: "xs",
    p: 1,
    bg: "orange.100",
    borderRadius: "5px 0 0 5px",
    display: "flex",
    alignItems: "center",
    borderLeft: "6px solid #FBD38D",
    minHeight: "2rem"
  }
}

interface Props {
  title: string;
}

export function ScheduleTask({ title }: Props) {
  return <Text {...taskStyles.task}>{title}</Text>
}