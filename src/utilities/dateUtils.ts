/**
 * Returns an array of Date objects representing all days of a given month.
 * @returns {Date[]} Array of Date objects for each day of the given month
 */
export function getDaysOfMonth(year: number, month: number): Date[] {
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days: Date[] = [];
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(year, month, day));
  }

  return days;
}

type DaysSinceCreationProps = {
  createdAt: Date;
  currentDate: Date;
};

/**
 * Returns the number of calendar days that have passed since a given date.
 * Time information is ignored (dates are normalized to midnight).
 *
 * @param createdAt Initial date (creation date)
 * @param currentDate Current date to compare
 * @returns Number of days passed since creation
 *
 * @example
 * daysSinceCreation({
 *   createdAt: new Date(2026, 0, 25),
 *   currentDate: new Date(2026, 1, 8)
 * }) // 14
 */
export function daysSinceCreation(
  createdAt: Date | null,
  currentDate: Date,
): number {
  const start = new Date(
    createdAt.getFullYear(),
    createdAt.getMonth(),
    createdAt.getDate(),
  );

  const end = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
  );

  const msPerDay = 1000 * 60 * 60 * 24;

  return Math.floor((end.getTime() - start.getTime()) / msPerDay);
}

export function formatDate(fullDate: string): string {
  const date = new Date(fullDate);
  return date.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });
}
