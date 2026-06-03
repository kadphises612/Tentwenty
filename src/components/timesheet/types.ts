import { TaskDocument } from '@/models/Tasks';

interface Task extends TaskDocument {
  _id: string;
}
export interface DayData {
  date: string;
  tasks: Task[];
}

export interface TimesheetProps {
  dateRange: DayData[];
  weekTitle: string;
}
