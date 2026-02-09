"use client"

import { Button, Stack, Field, Input, Flex } from "@chakra-ui/react";
import { Plus } from "lucide-react";

import { styles } from "@/styles/button/createTaskButton.styles";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createTask } from "@/src/services/taskService";
import { TaskType } from "@/src/types/task";

interface Props {
  goalId: string;
  updateAddedTask: (task: TaskType) => void;
}

export function CreateTaskButton({ goalId, updateAddedTask }: Props) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  async function handleCreateTask() {
    try {
      const response = await createTask({ title, goalId });
      router.refresh();
      updateAddedTask(response);
      setTitle(""); 1
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