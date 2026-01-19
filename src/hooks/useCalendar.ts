import { useState } from "react";

export function useCalendar() {
  // state para indicar qual data foi pressionada no calendario
  const [activeDay, setActiveDay] = useState<Date>(new Date());

  // retorna um booleano indicando se deve ter revisao nesta data
  function isRevisionDay(days: number): boolean {
    const fixedRevisions = [1, 4, 11, 25, 55];

    if (fixedRevisions.includes(days)) {
      return true;
    }

    if (days > 55 && (days - 55) % 30 === 0) {
      return true;
    }

    return false;
  }

  return { isRevisionDay, activeDay, setActiveDay };
}
