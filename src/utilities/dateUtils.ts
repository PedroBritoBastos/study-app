/**
 * Returns an array of Date objects representing all days of a given month.
 */
export function getDaysOfMonth(year: number, month: number): Date[] {
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days: Date[] = [];
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(year, month, day));
  }

  return days;
}
