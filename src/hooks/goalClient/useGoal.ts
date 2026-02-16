import { useState } from "react";

import { GoalType } from "@/src/types/goal";

export function useGoal() {
  const [selectedGoal, setSelectedGoal] = useState<GoalType>({
    id: "",
    title: "",
    userId: "",
    tasks: [],
    deadline: new Date(),
  });

  // seleciona a meta
  function selectGoal(goal: GoalType) {
    setSelectedGoal(goal);
  }

  return { selectGoal, selectedGoal };
}
