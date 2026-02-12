"use client"

import { Flex, Text, IconButton } from "@chakra-ui/react";
import { X } from "lucide-react";

import { styles } from "@/styles/goals/goalsSidebarTask.styles";

import { TaskType } from "@/src/types/task";

import { deleteTask } from "@/src/services/taskService";

import { useRouter } from "next/navigation";

interface Props {
  task: TaskType;
  updateDeletedTask: (task: TaskType) => void;
}

export function GoalSidebarTask({ task, updateDeletedTask }: Props) {
  const router = useRouter();

  // envia a requisição para a api e atualiza o estado de deletedTask
  async function handleDeleteTask() {
    const response = await deleteTask(task.id);
    updateDeletedTask(response);
    router.refresh();
  }

  return <Flex {...styles.container}>

    {/* nome da tarefa */}
    <Text>{task.title}</Text>

    {/* botoes */}
    <Flex>
      <IconButton size="xs" {...styles.buttons.deleteButton} onClick={handleDeleteTask}>
        <X />
      </IconButton>
    </Flex>
  </Flex>
}