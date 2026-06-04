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
    setStatus
  } = useTimesheets(2026);

  console.log('WEEE', weeks);

  return (
    <div>
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
  );
}
