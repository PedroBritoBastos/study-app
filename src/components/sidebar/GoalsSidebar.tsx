"use client"

import { SidebarContainer } from "./SidebarContainer";
import { CreateTaskButton } from "../button/CreateTaskButton";
import { GoalSidebarTask } from "../goals/GoalSidebarTask";

import { GoalType } from "@/src/types/goal";
import { Text, Stack } from "@chakra-ui/react";

import { styles } from "@/styles/sidebar/goalsSidebar.styles";

import { useGoalsSidebar } from "@/src/hooks/goalClient/useGoalsSidebar";
import { useState, useEffect } from "react";

import { getTasks } from "@/src/services/taskService";

interface Props {
  closeSidebar: () => void;
  goal: GoalType;
}

export function GoalsSidebar({ closeSidebar, goal }: Props) {

  // estado para guardar as tasks do goal atual
  const [goalTasks, setGoalTasks] = useState(goal.tasks);

  // estado para monitorar quando uma nova tarefa é adicionada
  const [addedTask, setAddedTask] = useState({});

  // estado para monitorar quando uma tarefa é excluída
  const [deletedTask, setDeletedTask] = useState({});

  function updateDeletedTask(task) {
    setDeletedTask(task);
  }

  function handleAddTask(task) {
    setAddedTask(task);
  }

  // toda vez que goal mudar, ou uma nova tarefa é adicionada, o componente deve re-renderizar
  useEffect(() => {
    setGoalTasks(goal.tasks);
  }, [goal])

  // quando addedTask mudar, o componente deve fazer um fetch para pegar as tarefas
  useEffect(() => {
    async function fetchTasks() {
      const response = await getTasks(goal.id);
      setGoalTasks(response);
    }
    fetchTasks();
  }, [addedTask]);

  // quando uma tarefa for deletada, o componente deve fazer um fetch para atualizar as tarefas 
  useEffect(() => {
    async function fetchTasks() {
      const response = await getTasks(goal.id);
      setGoalTasks(response);
    }
    fetchTasks();
  }, [deletedTask]);

  return <SidebarContainer header={goal.title} closeSidebar={closeSidebar}>
    {/* tasks em andamento */}
    <Text {...styles.statusText}>Em andamento</Text>
    <Stack {...styles.tasksStack}>
      {goalTasks.map((task) => (<GoalSidebarTask key={task.id} task={task} updateDeletedTask={updateDeletedTask} />))}
      <CreateTaskButton goalId={goal.id} updateAddedTask={handleAddTask} />
    </Stack>
  </SidebarContainer>
}