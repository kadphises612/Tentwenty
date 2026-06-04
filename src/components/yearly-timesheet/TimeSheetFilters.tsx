'use client';

import DateRangeFilter from '@/components/filters/DateRangeFilter';
import StatusFilter from '@/components/filters/StatusFilter';
import { WeekStatus } from '@/types/week';

interface TimeSheetFiltersProps {
  status: WeekStatus | '';
  setStatus: (status: WeekStatus | '') => void;

  dateRange: {
    startDate: Date;
    endDate: Date;
  };

  setDateRange: (range: { startDate: Date; endDate: Date }) => void;
}

export default function TimeSheetFilters({
  status,
  setStatus,
  dateRange,
  setDateRange
}: TimeSheetFiltersProps) {
  return (
    <div className="flex gap-4 mb-3 p-3">
      <DateRangeFilter value={dateRange} onChange={setDateRange} />

      <StatusFilter value={status} onChange={setStatus} />
    </div>
  );
}
