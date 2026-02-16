import { useState, useEffect } from "react";

export function useGoalClient() {
  // state que monitora quando uma task é checada
  const [checkedTask, setCheckedTask] = useState({});

  // state que monitora quando uma task é deletada ou criada
  const [refresh, setRefresh] = useState({ taskId: "", action: "" });

  // state que monitora quando uma deadline é atualizada
  const [updatedDeadline, setUpdatedDeadline] = useState({
    goalId: "",
    newDeadline: "",
  });

  // função que atualiza a Goal
  function refreshGoal(taskId: string, action: string): void {
    setRefresh({ taskId, action });
  }

  // função que atualiza checkedTask
  function updateCheckedTask(taskId: string, isChecked: boolean): void {
    setCheckedTask({ taskId, isChecked });
  }

  // função que atualiza updatedDeadline
  function updateDeadlineState(goalId: string, newDeadline: string): void {
    setUpdatedDeadline({ goalId, newDeadline });
  }

  return {
    refreshGoal,
    updateCheckedTask,
    updateDeadlineState,
    checkedTask,
    refresh,
    updatedDeadline,
  };
}
