'use client';
import DaySection from './DaySection';
import TimesheetHeader from './TimesheetHeader';
import { TimesheetProps } from './types';

export default function Timesheet({ dateRange }: TimesheetProps) {
  const totalHours = dateRange.reduce(
    (sum, day) =>
      sum + day.tasks.reduce((taskSum, task) => taskSum + task.hours, 0),
    0
  );

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <TimesheetHeader
        title="This week's timesheet"
        range="21 - 26 January, 2024"
        totalHours={totalHours}
        targetHours={40}
      />

      <div className="mt-10 space-y-8">
        {dateRange.map((day) => (
          <DaySection key={day.date} day={day} />
        ))}
      </div>
    </div>
  );
}
