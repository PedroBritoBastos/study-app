"use client"

import { Flex, Text, IconButton } from "@chakra-ui/react";
import { Check, X } from "lucide-react";

import { styles } from "@/styles/goals/goalsSidebarTask.styles";

import { TaskType } from "@/src/types/task";

import { deleteTask, checkTask, getTaskStatus } from "@/src/services/taskService";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface Props {
  task: TaskType;
  updateDeletedTask: (task: TaskType) => void;
}

export function GoalSidebarTask({ task, updateDeletedTask }: Props) {
  // state para gerenciar estado do status da task
  const [checked, setChecked] = useState(false);
  const [checkedTask, setCheckedTask] = useState(false);

  const router = useRouter();

  // envia a requisição para a api e atualiza o estado de deletedTask
  async function handleDeleteTask() {
    const response = await deleteTask(task.id);
    updateDeletedTask(response);
    router.refresh();
  }

  async function handleCheckTask() {
    const response = await checkTask(task.id, checked);
    console.log(response)
    setCheckedTask(!checkedTask);
  }

  // sempre que a task for checada, deve fazer fetch novamente
  useEffect(() => {
    async function fetchTaskStatus() {
      const status = await getTaskStatus(task.id);
      setChecked(status);
    }
    fetchTaskStatus();
  }, [checkedTask])

  return <Flex {...styles.container}>

    {/* nome da tarefa */}
    <Text>{task.title}</Text>

    {/* botoes */}
    <Flex {...styles.buttons.container}>
      <IconButton size="xs" {...styles.buttons.deleteButton} onClick={handleDeleteTask}>
        <X />
      </IconButton>
      <IconButton size="xs" {...styles.buttons.checkButton} {...(checked && styles.buttons.checkedButton)} onClick={handleCheckTask}>
        {checked && <Check />}
      </IconButton>
    </Flex>
  </Flex>
}