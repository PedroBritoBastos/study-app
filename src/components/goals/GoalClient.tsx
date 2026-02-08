"use client"

import { Box, Heading, Grid } from "@chakra-ui/react";
import { Goal } from "./Goal";
import { CreateButton } from "./CreateButton";
import { GoalsSidebar } from "../sidebar/GoalsSidebar";

import { styles } from "@/styles/goals/goalsClient.styles";

import { GoalType } from "@/src/types/goal";

import { useSidebar } from "@/src/hooks/useSidebar";
import { useGoal } from "@/src/hooks/goalClient/useGoal";

export function GoalsClient({ goals }: { goals: GoalType[] }) {
  const sidebarHook = useSidebar();
  const goalHook = useGoal();

  return <Box  {...styles.container}>
    <Heading {...styles.heading}>Minhas metas</Heading>

    {/* grid de metas */}
    <Grid  {...styles.grid}>
      {goals.map((goal) => (<Goal key={goal.id} goal={goal} selectGoal={goalHook.selectGoal} openSidebar={sidebarHook.openSidebar} />))}
      <CreateButton />
    </Grid>

    {/* sidebar */}
    {sidebarHook.isSidebarOpen && <GoalsSidebar closeSidebar={sidebarHook.closeSidebar} goal={goalHook.selectedGoal} />}
  </Box>
}