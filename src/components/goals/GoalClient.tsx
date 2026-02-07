import { Box, Heading, Grid } from "@chakra-ui/react";
import { Goal } from "./Goal";
import { CreateButton } from "./CreateButton";

import { styles } from "@/styles/goals/goalsClient.styles";

export function GoalsClient() {
  return <Box  {...styles.container}>
    <Heading {...styles.heading}>Minhas metas</Heading>

    {/* grid de metas */}
    <Grid  {...styles.grid}>
      <Goal />
      <Goal />
      <Goal />
      <Goal />
      <Goal />
      <Goal />
      <Goal />
      <CreateButton />
    </Grid>
  </Box>
}