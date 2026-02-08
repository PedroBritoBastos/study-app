"use client"

import { Button, Stack, Field, Input, Flex } from "@chakra-ui/react";
import { Plus } from "lucide-react";

import { styles } from "@/styles/button/createTaskButton.styles";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createTask } from "@/src/services/taskService";

export function CreateTaskButton({ goalId }: { goalId: string }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  async function handleCreateTask() {
    try {
      const response = await createTask({ title, goalId });
      console.log(response);
      router.refresh();
      setOpen(!open);
    } catch (error) {
      console.log(error.message);
    }
  }

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
            <Input {...styles.createTaskInput} value={title} onChange={(e) => setTitle(e.target.value)} />
            <Button {...styles.createTaskAddButton} onClick={handleCreateTask}>Adicionar</Button>
          </Flex>
        </Field.Root>
      </Stack>
    }
  </Stack>
}