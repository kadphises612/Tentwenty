import { WeeksResponse, WeekStatus } from '@/types/week';

export async function getWeeks(
  year: number,
  page: number,
  limit: number,
  status: WeekStatus | '',
  startDate: string,
  endDate: string
): Promise<WeeksResponse> {
  const response = await fetch(
    `/api/weeks?year=${year}&page=${page}&limit=${limit}&status=${status}&startDate=${startDate}&endDate=${endDate}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch weeks');
  }

  return response.json();
}
