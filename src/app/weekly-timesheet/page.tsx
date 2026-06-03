import Timesheet from '@/components/timesheet/Timesheet';
import { formatDateRange } from '@/lib/formatDate';
import { transformSummaryToDateRange } from '@/lib/formatTimesheetData';
import { getTaskSummary } from '@/services/task.service';

export default async function Page() {
  const startDate = '2026-06-01';
  const endDate = '2026-06-07';

  const summary = await getTaskSummary(startDate, endDate);
  const dateRange = transformSummaryToDateRange(summary);

  const weekTitle = formatDateRange(startDate, endDate);
  return (
    <div className="w-full gap-4 rotate-0 opacity-100 p-24">
      <Timesheet dateRange={dateRange} weekTitle={weekTitle} />
    </div>
  );
}
