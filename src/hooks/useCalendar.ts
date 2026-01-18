import { useState } from "react";

// utils
import { daysSinceCreation } from "../utilities/dateUtils";

export function useCalendar() {
  const [lastRevision, setLastRevision] = useState<null | Date>(null);

  // returns a boolean that indicates if there is a revision in this day
  function isRevisionDay(days: number, currentDate: Date): boolean {
    if (days === 1 || days === 3 || days === 7 || days === 14) {
      return true;
    }

    if (days === 30) {
      setLastRevision(currentDate);
      return true;
    }

    if (days > 30) {
      if (daysSinceCreation(lastRevision, currentDate) === 30) {
        return true;
      }
    }

    return false;
  }

  return { isRevisionDay };
}
