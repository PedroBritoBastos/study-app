"use client"

import { SidebarContainer } from "./SidebarContainer";
import { CreateTaskButton } from "../button/CreateTaskButton";

import { GoalType } from "@/src/types/goal";
import { Text, Stack } from "@chakra-ui/react";

import { styles } from "@/styles/sidebar/goalsSidebar.styles";

import { useGoalsSidebar } from "@/src/hooks/goalClient/useGoalsSidebar";


interface Props {
  closeSidebar: () => void;
  goal: GoalType;
}

export function GoalsSidebar({ closeSidebar, goal }: Props) {
  const goalsSidebarHook = useGoalsSidebar(goal);

  return <SidebarContainer header={goal.title} closeSidebar={closeSidebar}>
    {/* tasks em andamento */}
    <Text {...styles.statusText}>Em andamento</Text>
    <Stack {...styles.tasksStack}>
      {goalsSidebarHook.tasks.map((task) => (<Text {...styles.task} key={task.id}>{task.title}</Text>))}
      <CreateTaskButton goalId={goal.id} updateAddedTask={goalsSidebarHook.updateAddedTask} />
    </Stack>
  </SidebarContainer>
}