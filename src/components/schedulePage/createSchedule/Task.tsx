import { Flex, Text, IconButton, Icon } from "@chakra-ui/react"
import { Clock, Trash2 } from "lucide-react";

interface Props {
  name: string;
  endTime?: string;
  taskIndex: number;
  onRemoveTask: (taskIndex: number) => void;
}

const styles = {
  container: {
    bg: "white",
    borderRadius: "md",
    p: 3,
    alignItems: "center",
    justifyContent: "space-between",
    px: 6
  },
  endtime: {
    bg: "orange.400",
    py: 1,
    px: 3,
    borderRadius: "sm",
    fontSize: "sm",
    color: "white",
    width: "6rem",
    alignItems: "center",
    justifyContent: "space-evenly",
  }
}

export function Task({
  name,
  endTime,
  taskIndex,
  onRemoveTask
}: Props) {
  return (
    <Flex {...styles.container}>
      <Text>{name}</Text>

      {/* container do botao de excluir e horario */}
      <Flex gap={3}>
        <Flex {...styles.endtime}>
          <Icon size={"md"}>
            <Clock />
          </Icon>
          {endTime ? `${endTime}h` : "--:--"}</Flex>
        <IconButton size={"xs"} variant={"outline"} onClick={(e) => onRemoveTask(taskIndex)}>
          <Trash2 />
        </IconButton>
      </Flex>
    </Flex>
  )
}