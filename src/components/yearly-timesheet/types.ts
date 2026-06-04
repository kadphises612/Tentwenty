export type TimesheetStatus = 'completed' | 'incomplete' | 'missing';

export interface WeekSummary {
  weekNumber: number;
  startDate: string;
  endDate: string;
  totalHours: number;
  status: TimesheetStatus;
}
