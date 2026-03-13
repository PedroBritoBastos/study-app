import { Text } from "@chakra-ui/react";

// styles
import { styles } from "@/src/antigo/styles/calendar/review.styles";

export function Review({ title }: { title: string }) {
  return <Text {...styles.title}>{title}</Text>
}