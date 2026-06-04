'use client';

import { WeekStatus } from '@/types/week';

interface StatusFilterProps {
  value: WeekStatus | '';
  onChange: (status: WeekStatus | '') => void;
}

export default function StatusFilter({ value, onChange }: StatusFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as WeekStatus | '')}
      className="h-12 min-w-[190px] rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-700 outline-none">
      <option value="">Status</option>
      <option value="missing">Missing</option>
      <option value="incomplete">Incomplete</option>
      <option value="completed">Completed</option>
    </select>
  );
}
