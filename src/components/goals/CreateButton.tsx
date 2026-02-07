import { Card, Text } from "@chakra-ui/react";

import { styles } from "@/styles/goals/createButton.styles";
import { Plus } from "lucide-react";

export function CreateButton() {
  return <Card.Root {...styles.cardRoot}>
    <Plus {...styles.icon} />
    <Text {...styles.text}>Criar nova meta</Text>
  </Card.Root>
}