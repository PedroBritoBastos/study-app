// useCalendar.ts
export function useCalendar() {
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

  return { isRevisionDay };
}
