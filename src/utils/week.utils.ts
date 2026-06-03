import { formatDate } from '@/lib/formatDate';

type WeekRange = {
  weekNumber: number;
  startDate: string;
  endDate: string;
};

export function getWeekRange(
  year: number,
  week: number
): { startDate: Date; endDate: Date } {
  const jan1 = new Date(year, 0, 1);

  if (week === 1) {
    const endDate = new Date(jan1);

    const dayOfWeek = jan1.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
    const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;

    endDate.setDate(jan1.getDate() + daysUntilSunday);

    return {
      startDate: jan1,
      endDate
    };
  }

  const week1 = getWeekRange(year, 1);

  const startDate = new Date(week1.endDate);
  startDate.setDate(startDate.getDate() + (week - 2) * 7 + 1);

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);

  return {
    startDate,
    endDate
  };
}

/**
 *
 * Gives all the weeks of the partcular year
 */
export function getWeeksForYear(year: number): WeekRange[] {
  const weeks: WeekRange[] = [];

  let weekNumber = 1;

  while (true) {
    const week = getWeekRange(year, weekNumber);

    if (week.startDate.getFullYear() > year) {
      break;
    }

    const endDate =
      week.endDate.getFullYear() > year ? new Date(year, 11, 31) : week.endDate;

    weeks.push({
      weekNumber,
      startDate: formatDate(week.startDate),
      endDate: formatDate(endDate)
    });

    weekNumber++;
  }

  return weeks;
}
