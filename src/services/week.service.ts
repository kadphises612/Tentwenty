import { WeeksResponse } from '@/types/week';

export async function getWeeks(
  year: number,
  page: number,
  limit: number
): Promise<WeeksResponse> {
  const response = await fetch(
    `/api/weeks?year=${year}&page=${page}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch weeks');
  }

  return response.json();
}
