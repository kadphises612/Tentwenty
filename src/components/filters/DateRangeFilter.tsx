'use client';

import { useRef, useState } from 'react';
import { Calendar } from 'lucide-react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useClickOutside } from '@/hooks/useClickOutside';

interface DateRangeFilterProps {
  value: {
    startDate: Date;
    endDate: Date;
  };
  onChange: (range: { startDate: Date; endDate: Date }) => void;
}

export default function DateRangeFilter({
  value,
  onChange
}: DateRangeFilterProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => {
    setOpen(false);
  });

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-12 min-w-[220px] items-center justify-between rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-700">
        <span>
          {format(value.startDate, 'dd MMM yyyy')} -{' '}
          {format(value.endDate, 'dd MMM yyyy')}
        </span>

        <Calendar size={18} />
      </button>

      {open && (
        <div className="absolute left-0 top-14 z-50 rounded-xl  bg-white shadow-lg">
          <DateRange
            ranges={[
              {
                startDate: value.startDate,
                endDate: value.endDate,
                key: 'selection'
              }
            ]}
            onChange={(ranges) => {
              const selection = ranges.selection;

              onChange({
                startDate: selection.startDate!,
                endDate: selection.endDate!
              });
            }}
            moveRangeOnFirstSelection={false}
          />
        </div>
      )}
    </div>
  );
}
