"use client"

import { Box, Heading, Grid } from "@chakra-ui/react";
import { Goal } from "./Goal";
import { CreateButton } from "./CreateButton";
import { GoalsSidebar } from "../sidebar/GoalsSidebar";

import { styles } from "@/styles/goals/goalsClient.styles";

import { GoalType } from "@/src/types/goal";

import { useSidebar } from "@/src/hooks/useSidebar";
import { useGoal } from "@/src/hooks/goalClient/useGoal";
import { useState } from "react";

export function GoalsClient({ goals }: { goals: GoalType[] }) {
  const sidebarHook = useSidebar();
  const goalHook = useGoal();

  // state que monitora quando uma task é checada
  const [checkedTask, setCheckedTask] = useState({});

  // state que monitora quando uma task é deletada ou criada
  const [refresh, setRefresh] = useState({ taskId: "", action: "" });

  // função que atualiza a Goal
  function refreshGoal(taskId: string, action: string): void {
    setRefresh({ taskId, action });
  }

  // função que atualiza checkedTask
  function updateCheckedTask(taskId: string, isChecked: boolean): void {
    setCheckedTask({ taskId, isChecked });
  }

  return <Box  {...styles.container}>
    <Heading {...styles.heading}>Minhas metas</Heading>

    {/* grid de metas */}
    <Grid  {...styles.grid}>
      {goals.map(
        (goal) => (
          <Goal
            key={goal.id}
            goal={goal}
            selectGoal={goalHook.selectGoal}
            openSidebar={sidebarHook.openSidebar}
            checkedTask={checkedTask}
            updateCheckedTask={updateCheckedTask}
            refresh={refresh}
          />
        )
      )}
      <CreateButton />
    </Grid>

    {/* sidebar */}
    {sidebarHook.isSidebarOpen &&
      <GoalsSidebar
        closeSidebar={sidebarHook.closeSidebar}
        goal={goalHook.selectedGoal}
        updateCheckedTask={updateCheckedTask}
        refreshGoal={refreshGoal}
      />}
  </Box>
}