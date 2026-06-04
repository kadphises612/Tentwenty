'use client';

import TimeSheetFilters from './TimeSheetFilters';
import TimesheetTable from './TimesheetTable';
import TimesheetPagination from './TimesheetPagination';
import { useTimesheets } from '@/hooks/useTimesheets';

export default function Dashboard() {
  const {
    weeks,
    totalPages,
    page,
    setPage,
    limit,
    setLimit,
    status,
    setStatus,
    dateRange,
    setDateRange,
    isLoading
  } = useTimesheets(2026);

  console.log('WEEE', weeks);

  return (
    <div>
      <TimeSheetFilters
        status={status}
        setStatus={setStatus}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />

      <TimesheetTable weeks={weeks} isLoading={isLoading} />

      <TimesheetPagination
        limit={limit}
        setLimit={setLimit}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}
