'use client';

import { useState } from 'react';
import DateRangeFilter from '@/components/filters/DateRangeFilter';
import StatusFilter from '@/components/filters/StatusFilter';
import { WeekStatus } from '@/types/week';

interface StatusFilterProps {
  status: WeekStatus | '';
  setStatus: (status: WeekStatus | '') => void;
}

export default function TimeSheetFilters({
  status,
  setStatus
}: StatusFilterProps) {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date()
  });

  return (
    <div className="flex gap-4 mb-3 p-3">
      <DateRangeFilter value={dateRange} onChange={setDateRange} />

      <StatusFilter value={status} onChange={setStatus} />
    </div>
  );
}
