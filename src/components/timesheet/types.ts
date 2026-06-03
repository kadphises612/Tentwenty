export interface Task {
  id: string;
  name: string;
  project: string;
  hours: number;
}

export interface DayData {
  date: string;
  tasks: Task[];
}

export interface TimesheetProps {
  dateRange: DayData[];
}
