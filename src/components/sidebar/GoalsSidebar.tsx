"use client"

import { SidebarContainer } from "./SidebarContainer";
import { CreateTaskButton } from "../button/CreateTaskButton";

import { GoalType } from "@/src/types/goal";
import { Text, Stack } from "@chakra-ui/react";

import { styles } from "@/styles/sidebar/goalsSidebar.styles";

import { useState, useEffect } from "react";

import { TaskType } from "@/src/types/task";

interface Props {
  closeSidebar: () => void;
  goal: GoalType;
}

export function GoalsSidebar({ closeSidebar, goal }: Props) {
  const [tasks, setTasks] = useState<TaskType[]>(goal.tasks);

  function updateTasks(task: TaskType) {
    setTasks(prev => [...prev, task]);
  }

  return <SidebarContainer header={goal.title} closeSidebar={closeSidebar}>
    {/* tasks em andamento */}
    <Text {...styles.statusText}>Em andamento</Text>
    <Stack {...styles.tasksStack}>
      {tasks.map((task) => (<Text {...styles.task} key={task.id}>{task.title}</Text>))}
      <CreateTaskButton goalId={goal.id} updateTasks={updateTasks} />
    </Stack>
  </SidebarContainer>
}