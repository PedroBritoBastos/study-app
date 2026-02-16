import { useState } from "react";
import { useRouter } from "next/navigation";

import { create } from "@/src/services/goalService";

export function useCreateButton() {
  const [createMode, setCreateMode] = useState(false);
  const [goalTitle, setGoalTitle] = useState("");
  const [deadline, setDeadline] = useState(new Date());

  const router = useRouter();

  async function handleCreate() {
    try {
      const response = await create(goalTitle, deadline);
      setGoalTitle("");
      router.refresh();
      setCreateMode(false);
      setDeadline(new Date());
    } catch (error: any) {
      console.log(error.message);
    }
  }

  function handleCancel(e) {
    e.stopPropagation();
    setCreateMode(false);
    setDeadline(new Date());
  }

  return {
    createMode,
    setCreateMode,
    goalTitle,
    setGoalTitle,
    deadline,
    setDeadline,
    handleCreate,
    handleCancel,
  };
}
