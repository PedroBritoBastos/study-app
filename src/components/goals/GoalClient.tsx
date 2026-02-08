"use client"

import { Box, Heading, Grid } from "@chakra-ui/react";
import { Goal } from "./Goal";
import { CreateButton } from "./CreateButton";

import { styles } from "@/styles/goals/goalsClient.styles";

import { GoalType } from "@/src/types/goal";

export function GoalsClient({ goals }: { goals: GoalType[] }) {
  console.log(goals)

  return <Box  {...styles.container}>
    <Heading {...styles.heading}>Minhas metas</Heading>

    {/* grid de metas */}
    <Grid  {...styles.grid}>
      {goals.map((goal) => (<Goal key={goal.id} goal={goal} />))}
      <CreateButton />
    </Grid>
  </Box>
}