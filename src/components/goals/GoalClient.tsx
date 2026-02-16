"use client"

import { Box, Heading, Grid } from "@chakra-ui/react";
import { Goal } from "./Goal";
import { CreateButton } from "./CreateButton";
import { GoalsSidebar } from "../sidebar/GoalsSidebar";
import { Backdrop } from "../backdrop/Backdrop";

import { styles } from "@/styles/goals/goalsClient.styles";
import scrollStyles from "../../styles/sidebar/scroll.module.css";

import { GoalType } from "@/src/types/goal";

import { useSidebar } from "@/src/hooks/useSidebar";
import { useGoalClient } from "@/src/hooks/goalClient/useGoalClient";

export function GoalsClient({ goals }: { goals: GoalType[] }) {
  const { openSidebar, closeSidebar, isSidebarOpen } = useSidebar();

  const {
    selectedGoal,
    selectGoal,
    refreshGoal,
    updateCheckedTask,
    updateDeadlineState,
    checkedTask,
    refresh,
    updatedDeadline,
  } = useGoalClient();

  return (
    <Box {...styles.container}>
      <Heading {...styles.heading}>Minhas metas</Heading>

      <Grid {...styles.grid} className={scrollStyles["scrollbar"]}>
        {goals.map((goal) => (
          <Goal
            key={goal.id}
            goal={goal}
            selectGoal={selectGoal}
            openSidebar={openSidebar}
            checkedTask={checkedTask}
            refresh={refresh}
            updatedDeadline={updatedDeadline}
          />
        ))}

        <CreateButton />
      </Grid>

      <Backdrop
        isOpen={isSidebarOpen}
        onClick={closeSidebar}
      />

      <GoalsSidebar
        closeSidebar={closeSidebar}
        goal={selectedGoal}
        updateCheckedTask={updateCheckedTask}
        refreshGoal={refreshGoal}
        updateDeadlineState={updateDeadlineState}
        isSidebarOpen={isSidebarOpen}
      />
    </Box>
  );
}
