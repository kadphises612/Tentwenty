/**
 * Converts a Date (or date string) into a YYYY-MM-DD string.
 */
export function formatDate(date: Date | string): string {
  const d = new Date(date);

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

/**
 * Formats a date range into a human-readable string.
 *
 * Examples:
 * - 2024-01-21 → 2024-01-26 => "21 - 26 January, 2024"
 */
export function formatDateRange(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startDay = start.getDate();
  const endDay = end.getDate();

  const month = end.toLocaleString('en-US', {
    month: 'long'
  });

  const year = end.getFullYear();

  return `${startDay} - ${endDay} ${month}, ${year}`;
}
