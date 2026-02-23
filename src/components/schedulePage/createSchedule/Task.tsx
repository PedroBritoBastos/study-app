import { Flex, Text, Span } from "@chakra-ui/react"

interface Props {
  name: string;
  endTime?: string;
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
    width: "4.5rem",
    alignItems: "center",
    justifyContent: "center"
  }
}

export function Task({ name, endTime }: Props) {
  return (
    <Flex {...styles.container}>
      <Text>{name}</Text>
      <Flex {...styles.endtime}>{endTime ? `${endTime}h` : "--:--"}</Flex>
    </Flex>
  )
}