"use client"

import { Button, Stack, Field, Input, Flex } from "@chakra-ui/react";
import { Plus } from "lucide-react";

import { styles } from "@/styles/button/createTaskButton.styles";

import { useState } from "react";

export function CreateTaskButton() {
  const [open, setOpen] = useState(false);

  return <Stack {...(open && styles.open)}>
    <Button {...styles.button} onClick={() => setOpen(!open)}>
      <Plus />
      Nova Tarefa
    </Button>

    {open &&
      <Stack {...styles.createTaskContainer}>
        <Field.Root>
          <Field.Label {...styles.createTaskLabel}>Título</Field.Label>
          <Flex {...styles.createTaskInputContainer}>
            <Input {...styles.createTaskInput} />
            <Button {...styles.createTaskAddButton} onClick={() => setOpen(!open)}>Adicionar</Button>
          </Flex>
        </Field.Root>
      </Stack>
    }
  </Stack>
}