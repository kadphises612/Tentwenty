/**
 * Returns all dates between startDate and endDate (inclusive)
 */
export function getDatesInRange(startDate: Date, endDate: Date): string[] {
  const dates: string[] = [];

  const current = new Date(startDate); // to avoid mutating original startDate

  while (current <= endDate) {
    dates.push(current.toISOString().split('T')[0]);

    current.setDate(current.getDate() + 1);
  }

  return dates;
}
