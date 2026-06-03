import { TaskDocument } from '@/models/Tasks';

interface Task extends TaskDocument {
  _id: string;
}
export function transformSummaryToDateRange(summary: {
  days: Record<
    string,
    {
      totalHours: number;
      tasks: Task[];
    }
  >;
}) {
  return Object.entries(summary.days).map(([date, day]) => ({
    date,
    totalHours: day.totalHours,
    tasks: day.tasks.map((task) => ({
      ...task,
      id: String(task._id),
      name: task.name,
      project: task.project,
      hours: task.durationHours
    }))
  }));
}
