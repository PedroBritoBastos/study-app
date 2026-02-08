import { Button, Stack } from "@chakra-ui/react";
import { Plus } from "lucide-react";

import { styles } from "@/styles/button/createTaskButton.styles";

export function CreateTaskButton() {
  return <Stack>
    <Button {...styles.button}>
      <Plus />
      Nova Tarefa
    </Button>
  </Stack>
}