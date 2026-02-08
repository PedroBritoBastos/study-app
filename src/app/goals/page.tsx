import { prisma } from "@/prisma/prisma";
import { isAuthenticated } from "@/src/utilities/authUtils";
import { redirect } from "next/navigation";
import { getUserFromToken } from "../api/_helpers/getUserByToken";
import { Flex } from "@chakra-ui/react";
import { Navbar } from "@/src/components/navbar/Navbar";
import { GoalsClient } from "@/src/components/goals/GoalClient";

import { styles } from "@/styles/goals/goalsPage.styles";

import { GoalType } from "@/src/types/goal";

export default async function GoalsPage() {
  const auth = await isAuthenticated();

  if (!auth) redirect("/login");

  const user = await getUserFromToken();

  const goals: GoalType[] = await prisma.goal.findMany({
    where: { userId: user.id },
    include: {
      tasks: true
    }
  });

  return <>
    {auth && (
      <Flex {...styles.container}>
        <Navbar />
        <GoalsClient goals={goals} />
      </Flex>)
    }
  </>
}

