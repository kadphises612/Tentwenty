import { formatDateRange } from '@/lib/formatDate';
import TimesheetStatusBadge from './TimesheetStatusBadge';
import { WeekSummary } from './types';
import { useRouter } from 'next/navigation';

interface Props {
  week: WeekSummary;
}

export default function TimesheetTableRow({ week }: Props) {
  const router = useRouter();
  const action =
    week.status === 'missing'
      ? 'Create'
      : week.status === 'incomplete'
        ? 'Update'
        : 'View';

  return (
    <tr className="border-b border-gray-200">
      <td className="px-6 py-5 bg-gray-50 w-[120px]">{week.weekNumber}</td>

      <td className="px-6 py-5 text-gray-500 text-[14px]">
        {formatDateRange(week.startDate, week.endDate)}
      </td>

      <td className="px-6 py-5 text-center">
        <TimesheetStatusBadge status={week.status} />
      </td>

      <td
        className="px-6 py-5 text-blue-600 text-end cursor-pointer"
        onClick={() => {
          router.push(
            `/weekly-timesheet/?startDate=${week.startDate}&endDate=${week.endDate}`
          );
        }}>
        {action}
      </td>
    </tr>
  );
}
