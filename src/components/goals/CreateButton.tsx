
import { Card, Text } from "@chakra-ui/react";

import { styles } from "@/styles/goals/createButton.styles";
import { Plus } from "lucide-react";

import { create } from "@/src/services/goalService";

export function CreateButton() {

  async function handleCreate() {
    try {
      const response = await create("goal teste");
      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  }

  return <Card.Root {...styles.cardRoot} onClick={handleCreate}>
    <Plus {...styles.icon} />
    <Text {...styles.text}>Criar nova meta</Text>
  </Card.Root>
}