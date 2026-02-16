"use client"

import { Box, Heading, Grid } from "@chakra-ui/react";
import { Goal } from "./Goal";
import { CreateButton } from "./CreateButton";
import { GoalsSidebar } from "../sidebar/GoalsSidebar";

import { styles } from "@/styles/goals/goalsClient.styles";
import scrollStyles from "../../styles/sidebar/scroll.module.css";

import { GoalType } from "@/src/types/goal";

import { useSidebar } from "@/src/hooks/useSidebar";
import { useGoal } from "@/src/hooks/goalClient/useGoal";
import { useGoalClient } from "@/src/hooks/goalClient/useGoalClient";

import { Backdrop } from "../backdrop/Backdrop";

export function GoalsClient({ goals }: { goals: GoalType[] }) {
  const sidebarHook = useSidebar();
  const goalHook = useGoal();

  const {
    refreshGoal,
    updateCheckedTask,
    updateDeadlineState,
    checkedTask,
    refresh,
    updatedDeadline,
  } = useGoalClient();

  return <Box  {...styles.container}>
    <Heading {...styles.heading}>Minhas metas</Heading>

    {/* grid de metas */}
    <Grid  {...styles.grid} className={scrollStyles["scrollbar"]}>
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
            updatedDeadline={updatedDeadline}
          />
        )
      )}
      <CreateButton />
    </Grid>

    {/* backdrop */}
    <Backdrop
      isOpen={sidebarHook.isSidebarOpen}
      onClick={sidebarHook.closeSidebar}
    />

    {/* sidebar */}
    <GoalsSidebar
      closeSidebar={sidebarHook.closeSidebar}
      goal={goalHook.selectedGoal}
      updateCheckedTask={updateCheckedTask}
      refreshGoal={refreshGoal}
      updateDeadlineState={updateDeadlineState}
      isSidebarOpen={sidebarHook.isSidebarOpen}
    />
  </Box>
}