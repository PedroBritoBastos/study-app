import { useState } from "react";

export function useSchedule() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  return { year, month };
}
