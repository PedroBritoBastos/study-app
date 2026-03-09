import { useState } from "react";
import { useRouter } from "next/navigation";

import { create } from "@/src/services/goalService";

export function useCreateButton() {
  const [createMode, setCreateMode] = useState(false);
  const [goalTitle, setGoalTitle] = useState("");
  const [deadline, setDeadline] = useState(""); // string

  const router = useRouter();

  async function handleCreate() {
    try {
      const response = await create(goalTitle, new Date(deadline));
      setGoalTitle("");
      router.refresh();
      setCreateMode(false);
      setDeadline("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  function handleCancel(e: React.MouseEvent) {
    e.stopPropagation();
    setCreateMode(false);
    setDeadline("");
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
