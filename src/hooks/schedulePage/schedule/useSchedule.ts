import { useState } from "react";
import { useRouter } from "next/navigation";

export function useSchedule() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const router = useRouter();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(currentDate);

  function handleNextMonth() {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
    router.refresh();
  }

  function handlePreviousMonth() {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
    router.refresh();
  }

  return { year, month, monthName, handleNextMonth, handlePreviousMonth };
}
