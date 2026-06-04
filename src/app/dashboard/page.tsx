'use client';
import TimeSheetFilters from '@/components/yearly-timesheet/TimeSheetFilters';
import TimesheetPagination from '@/components/yearly-timesheet/TimesheetPagination';
import TimesheetTable from '@/components/yearly-timesheet/TimesheetTable';
import { useTimesheets } from '@/hooks/useTimesheets';

export default function DashboardPage() {
  const {
    weeks,
    totalPages,
    page,
    setPage,
    limit,
    setLimit,
    status,
    setStatus
  } = useTimesheets(2026);

  console.log('WEEE', weeks);

  return (
    <div className="w-full rotate-0 opacity-100 p-30 pt-8">
      <div className="rounded-xl bg-white p-8 shadow">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Your Timesheets
        </h1>
        <TimeSheetFilters status={status} setStatus={setStatus} />
        <TimesheetTable weeks={weeks} />
        <TimesheetPagination
          limit={limit}
          setLimit={setLimit}
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
