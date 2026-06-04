export type WeekStatus = 'completed' | 'incomplete' | 'missing';

export interface WeekSummary {
  weekNumber: number;
  startDate: string;
  endDate: string;
  totalHours: number;
  status: WeekStatus;
}

export interface WeeksResponse {
  weeks: WeekSummary[];
  totalPages: number;
  totalWeeks: number;
  page: number;
  limit: number;
}
